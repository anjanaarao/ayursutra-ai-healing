import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, Calendar, BarChart3, Clock, MapPin, Brain, Users, Shield, MessageSquare } from "lucide-react";

const MultiRoleDashboard = () => {
  const [selectedRole, setSelectedRole] = useState<'patient' | 'practitioner'>('patient');

  const patientFeatures = [
    {
      icon: Calendar,
      title: "Book Therapy Sessions",
      description: "Explore available centres, therapy packages, and book sessions with AI-optimized time suggestions.",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Visual graphs showing your healing journey with therapy milestones and health improvements.",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Smart Reminders",
      description: "Automated alerts for fasting, oil intake, diet notes, and pre-session preparations.",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Multilingual Support",
      description: "Access care in your preferred language across Tier-2 AYUSH centres nationwide.",
      color: "text-primary"
    }
  ];

  const practitionerFeatures = [
    {
      icon: Users,
      title: "Smart Calendar Management",
      description: "Drag-and-drop scheduling with color-coded indicators for completed, pending, and canceled sessions.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI Patient Insights",
      description: "Access patient history, precautions, and feedback with real-time treatment adjustment suggestions.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Conflict Resolution",
      description: "AI-powered scheduling that prevents conflicts and optimizes therapist availability and room usage.",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "Treatment Modifications",
      description: "Modify therapy intensity, duration, and follow-up sessions directly from the patient dashboard.",
      color: "text-primary"
    }
  ];

  const currentFeatures = selectedRole === 'patient' ? patientFeatures : practitionerFeatures;

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-4xl">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Multi-Role
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {" "}Dashboard Access
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your user type to explore tailored features designed for your Panchakarma journey
            </p>
          </div>

          {/* Main Dashboard Card */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-2xl">
            <CardHeader className="text-center space-y-6 pb-8">
              <div>
                <CardTitle className="text-2xl font-bold mb-2">Access Portal</CardTitle>
                <p className="text-muted-foreground">Choose your user type to continue</p>
              </div>
              
              {/* Role Toggle Buttons */}
              <div className="flex justify-center">
                <div className="flex bg-muted/50 rounded-lg p-1 border border-border/30">
                  <Button
                    variant={selectedRole === 'patient' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedRole('patient')}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      selectedRole === 'patient' 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-muted/80'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    Patient
                  </Button>
                  <Button
                    variant={selectedRole === 'practitioner' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedRole('practitioner')}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      selectedRole === 'practitioner' 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-muted/80'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4" />
                    Practitioner
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Role-Specific Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2 capitalize">
                  {selectedRole} Portal
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  {selectedRole === 'patient' 
                    ? 'Access your personalized therapy dashboard with booking and progress tracking'
                    : 'Access the administrative dashboard with patient management and scheduling tools'
                  }
                </p>
              </div>

              {/* Features Grid */}
              <div 
                key={selectedRole} 
                className="grid md:grid-cols-2 gap-6 animate-fade-in"
              >
                {currentFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={`${selectedRole}-${index}`}
                      className="group flex gap-4 p-4 rounded-lg bg-muted/30 border border-border/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className={`mt-1 flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-muted to-muted/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="text-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 capitalize"
                >
                  Sign in to {selectedRole} Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MultiRoleDashboard;