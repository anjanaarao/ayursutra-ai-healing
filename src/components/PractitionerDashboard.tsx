import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

const PractitionerDashboard = () => {
  const todaySchedule = [
    { time: "9:00 AM", patient: "Priya Sharma", therapy: "Abhyanga", status: "confirmed", notes: "First session" },
    { time: "10:30 AM", patient: "Rajesh Kumar", therapy: "Shirodhara", status: "in-progress", notes: "Sensitive to oils" },
    { time: "12:00 PM", patient: "Maya Patel", therapy: "Swedana", status: "upcoming", notes: "Blood pressure monitoring" },
    { time: "2:00 PM", patient: "Arjun Singh", therapy: "Abhyanga", status: "upcoming", notes: "Follow-up session" },
  ];

  const patientInsights = [
    { name: "Priya Sharma", progress: 78, nextSession: "Tomorrow", priority: "normal" },
    { name: "Rajesh Kumar", progress: 45, nextSession: "Today", priority: "attention" },
    { name: "Maya Patel", progress: 92, nextSession: "Friday", priority: "excellent" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-secondary text-secondary-foreground";
      case "in-progress": return "bg-primary text-primary-foreground";
      case "upcoming": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "attention": return "bg-destructive text-destructive-foreground";
      case "excellent": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="practitioner-dashboard" className="py-16 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Practitioner Command Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart scheduling, patient insights, and real-time treatment adjustments
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Left Column - Today's Schedule */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Today's Schedule
                  </div>
                  <Badge variant="outline" className="border-secondary/30">
                    4 Appointments
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((appointment, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border/50">
                      <div className="flex justify-between items-start mb-3">
                        <div className="space-y-1">
                          <div className="font-semibold text-lg">{appointment.patient}</div>
                          <div className="text-primary font-medium">{appointment.therapy}</div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="font-mono text-sm text-muted-foreground">{appointment.time}</div>
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status.replace('-', ' ')}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <AlertCircle className="w-4 h-4" />
                        {appointment.notes}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          View History
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Quick Notes
                        </Button>
                        {appointment.status === "upcoming" && (
                          <Button size="sm" className="text-xs bg-secondary hover:bg-secondary/90">
                            Start Session
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-secondary to-secondary/80">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Patient Insights & Stats */}
          <div className="space-y-6">
            {/* Daily Stats */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Today's Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/10">
                    <div className="text-2xl font-bold text-secondary">8</div>
                    <div className="text-xs text-muted-foreground">Patients</div>
                  </div>
                </div>
                
                <div className="text-center p-3 rounded-lg bg-accent/10">
                  <div className="text-2xl font-bold text-accent">96%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                </div>
              </CardContent>
            </Card>

            {/* Patient Insights */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Patient Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {patientInsights.map((patient, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/20 space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{patient.name}</div>
                      <Badge className={getPriorityColor(patient.priority)}>
                        {patient.priority}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progress: {patient.progress}%</span>
                      <span>Next: {patient.nextSession}</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${patient.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  View All Patients
                </Button>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="font-medium text-primary mb-1">Scheduling Optimization</div>
                    <div className="text-muted-foreground">Consider 15-min break after Shirodhara sessions</div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="font-medium text-secondary mb-1">Patient Care Alert</div>
                    <div className="text-muted-foreground">Rajesh K. may benefit from gentler oil pressure</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PractitionerDashboard;