import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, MapPin, AlertTriangle, CheckCircle, Zap, Filter } from "lucide-react";

const EnhancedPractitionerCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [viewMode, setViewMode] = useState("day");

  const sessions = [
    {
      id: 1,
      time: "9:00 AM",
      duration: "90 min",
      patient: "Priya Sharma",
      therapy: "Abhyanga",
      room: "Lotus Room",
      status: "confirmed",
      priority: "normal",
      notes: "First session - assess oil sensitivity",
      sequence: 1,
      restAfter: 30
    },
    {
      id: 2,
      time: "10:45 AM",
      duration: "60 min",
      patient: "Rajesh Kumar",
      therapy: "Shirodhara",
      room: "Serenity Room",
      status: "in-progress",
      priority: "attention",
      notes: "Reduce oil temperature - patient feedback",
      sequence: 2,
      restAfter: 45
    },
    {
      id: 3,
      time: "12:15 PM",
      duration: "75 min",
      patient: "Maya Patel",
      therapy: "Swedana",
      room: "Steam Room",
      status: "upcoming",
      priority: "normal",
      notes: "Monitor blood pressure during treatment",
      sequence: 3,
      restAfter: 30
    },
    {
      id: 4,
      time: "2:30 PM",
      duration: "90 min",
      patient: "Arjun Singh",
      therapy: "Abhyanga",
      room: "Lotus Room",
      status: "upcoming",
      priority: "normal",
      notes: "Follow-up session - increase pressure",
      sequence: 1,
      restAfter: 30
    },
    {
      id: 5,
      time: "4:15 PM",
      duration: "45 min",
      patient: "Kavya Reddy",
      therapy: "Nasya",
      room: "Healing Room",
      status: "upcoming",
      priority: "high",
      notes: "AI suggests morning slot for better tolerance",
      sequence: 4,
      restAfter: 60
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-secondary text-secondary-foreground";
      case "in-progress": return "bg-primary text-primary-foreground";
      case "upcoming": return "bg-accent text-accent-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityIndicator = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-4 border-l-destructive bg-destructive/5";
      case "attention": return "border-l-4 border-l-accent bg-accent/5";
      default: return "border-l-4 border-l-muted";
    }
  };

  const aiSuggestions = [
    {
      type: "scheduling",
      message: "Consider 15-min break after Shirodhara for Rajesh K.",
      action: "Auto-adjust",
      priority: "medium"
    },
    {
      type: "therapy",
      message: "Kavya R. shows better Nasya tolerance in morning slots",
      action: "Reschedule",
      priority: "high"
    },
    {
      type: "room",
      message: "Lotus Room has optimal temperature for Abhyanga today",
      action: "Optimize",
      priority: "low"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Smart Practitioner Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered scheduling with drag-and-drop flexibility and intelligent therapy sequencing
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Controls & AI Insights */}
          <div className="lg:col-span-1 space-y-6">
            {/* View Controls */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Calendar View</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant={viewMode === "day" ? "default" : "outline"}
                    onClick={() => setViewMode("day")}
                    className="flex-1"
                  >
                    Day
                  </Button>
                  <Button 
                    size="sm" 
                    variant={viewMode === "week" ? "default" : "outline"}
                    onClick={() => setViewMode("week")}
                    className="flex-1"
                  >
                    Week
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>Today - March 15</option>
                    <option>Tomorrow - March 16</option>
                    <option>March 17</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    suggestion.priority === 'high' ? 'bg-destructive/10 border-destructive/20' :
                    suggestion.priority === 'medium' ? 'bg-accent/10 border-accent/20' :
                    'bg-muted/50 border-border'
                  }`}>
                    <div className="text-sm font-medium mb-1">{suggestion.message}</div>
                    <Button size="sm" variant="outline" className="text-xs h-6">
                      {suggestion.action}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Today's Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Sessions</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Room Utilization</span>
                  <span className="font-semibold text-secondary">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Session</span>
                  <span className="font-semibold">72 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Break Time</span>
                  <span className="font-semibold text-accent">38 min</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Calendar View */}
          <div className="lg:col-span-3">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Smart Schedule - Today
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Filter className="w-4 h-4 mr-1" />
                      Filter
                    </Button>
                    <Badge variant="outline" className="border-primary/30">
                      Drag & Drop Enabled
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Time Grid */}
                <div className="space-y-3">
                  {sessions.map((session, index) => (
                    <div 
                      key={session.id}
                      className={`p-4 rounded-lg cursor-move transition-all duration-300 hover:shadow-md ${getPriorityIndicator(session.priority)}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-sm font-medium">{session.time}</span>
                          <Badge className={getStatusColor(session.status)}>
                            {session.status.replace('-', ' ')}
                          </Badge>
                            {session.priority === "high" && (
                              <AlertTriangle className="w-4 h-4 text-destructive" />
                            )}
                          </div>
                          <div className="font-semibold text-lg">{session.patient}</div>
                          <div className="text-primary font-medium">{session.therapy}</div>
                        </div>
                        
                        <div className="text-right space-y-1 text-sm text-muted-foreground">
                          <div>{session.duration}</div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {session.room}
                          </div>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground mb-3 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {session.notes}
                      </div>

                      {/* Therapy Sequence Indicator */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                            Sequence {session.sequence}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            +{session.restAfter}min rest
                          </span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="text-xs h-7">
                            View History
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs h-7">
                            Modify
                          </Button>
                          {session.status === "upcoming" && (
                            <Button size="sm" className="text-xs h-7 bg-secondary hover:bg-secondary/90">
                              Start
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Session Button */}
                <Button className="w-full mt-6 bg-gradient-to-r from-secondary to-secondary/80" size="lg">
                  + Add New Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPractitionerCalendar;