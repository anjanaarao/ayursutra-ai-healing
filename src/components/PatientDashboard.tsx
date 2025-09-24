import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, MapPin, TrendingUp, Heart, Activity, MessageCircle } from "lucide-react";

const PatientDashboard = () => {
  const upcomingSessions = [
    { therapy: "Abhyanga", date: "Today, 10:00 AM", center: "Ayur Center Mumbai" },
    { therapy: "Shirodhara", date: "Tomorrow, 2:00 PM", center: "Ayur Center Mumbai" },
    { therapy: "Swedana", date: "Wed, 11:00 AM", center: "Ayur Center Mumbai" },
  ];

  const therapyProgress = [
    { name: "Abhyanga", sessions: 8, total: 14, progress: 57 },
    { name: "Shirodhara", sessions: 3, total: 7, progress: 43 },
    { name: "Swedana", sessions: 5, total: 10, progress: 50 },
  ];

  return (
    <section id="patient-dashboard" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Healing Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your progress, manage appointments, and stay connected with your practitioners
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Left Column - Upcoming Sessions */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-2">
                    <div className="font-semibold text-primary">{session.therapy}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {session.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {session.center}
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                  Book New Session
                </Button>
              </CardContent>
            </Card>

            {/* Health Metrics */}
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary" />
                  Today's Wellness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Energy Level</span>
                  <span className="text-lg font-semibold text-secondary">85%</span>
                </div>
                <Progress value={85} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sleep Quality</span>
                  <span className="text-lg font-semibold text-accent">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Stress Level</span>
                  <span className="text-lg font-semibold text-primary">28%</span>
                </div>
                <Progress value={28} className="h-2" />
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Progress Tracking */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Therapy Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {therapyProgress.map((therapy, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{therapy.name}</h4>
                        <span className="text-sm text-muted-foreground">
                          {therapy.sessions}/{therapy.total} sessions
                        </span>
                      </div>
                      <Progress value={therapy.progress} className="h-3" />
                      <div className="text-right text-sm font-medium text-accent">
                        {therapy.progress}% Complete
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Feedback Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
                    onClick={() => {
                      // Handle feedback functionality here
                      console.log('Opening feedback form...');
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Share Your Experience
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Wellness Graph Placeholder */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Wellness Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      ↗ 23% Improvement
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Overall wellness score over the past 30 days
                    </div>
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

export default PatientDashboard;