import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Globe, BarChart3, Shield, Calendar, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Personalization",
      description: "Your therapy adapts to you. Based on your feedback, AyurSutra fine-tunes schedules, therapy intensity and creates smarter group sessions.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Globe,
      title: "Scalable & Multilingual",
      description: "Care in your language, wherever you are. Designed to serve Tier-2 AYUSH centres in your own language.",
      gradient: "from-secondary to-secondary"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "See your healing journey unfold. Visual graphs, progress bars, and milestones help track improvements step by step.",
      gradient: "from-accent to-accent"
    },
    {
      icon: Shield,
      title: "Streamlined Care",
      description: "Get trusted care at one touch. Digitized protocols ensure consistent and reliable Panchakarma experience across all centres.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI/ML engine ensures conflict-free planning, manages rest periods, and adapts schedules based on patient feedback.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Users,
      title: "Practitioner Tools",
      description: "Smart calendar with color-coded scheduling. Direct links to patient history, precautions, and real-time treatment adjustments.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transforming Panchakarma with
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {" "}Modern Precision
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No more inconsistent care, manual logs, or missed follow-ups. From booking to feedback, 
            AyurSutra keeps it simple for patients and stress-free for practitioners.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium">
              Ready to revolutionize your Ayurvedic practice?
            </span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Experience the Future of Panchakarma
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join leading practitioners and thousands of patients who trust AyurSutra 
              for their holistic healing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;