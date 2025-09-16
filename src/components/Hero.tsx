import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-ayurveda.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">5,000 Years of Wisdom</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                AyurSutra
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
              Where ancient Ayurvedic wisdom meets the precision of modern digital healthcare
            </p>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              Transform your Panchakarma journey with AI-driven personalization, seamless scheduling, 
              and progress tracking that adapts to your healing path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
              For Practitioners
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="text-2xl font-bold text-primary">AI-Driven</div>
              <div className="text-sm text-muted-foreground">Personalized therapy</div>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-secondary/10">
              <div className="text-2xl font-bold text-secondary">Multilingual</div>
              <div className="text-sm text-muted-foreground">Care in your language</div>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-accent/10">
              <div className="text-2xl font-bold text-accent">Progress</div>
              <div className="text-sm text-muted-foreground">Visual tracking</div>
            </Card>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Ayurvedic healing and modern healthcare technology"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;