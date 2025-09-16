import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PatientDashboard from "@/components/PatientDashboard";
import PractitionerDashboard from "@/components/PractitionerDashboard";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Overview */}
      <Features />
      
      {/* Patient Dashboard Preview */}
      <PatientDashboard />
      
      {/* Practitioner Dashboard Preview */}
      <PractitionerDashboard />
      
      {/* Footer */}
      <footer className="py-12 bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              AyurSutra
            </h3>
            <p className="text-muted-foreground mt-2">
              Where 5,000 years of wisdom meets modern precision
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>© 2024 AyurSutra</span>
            <span>•</span>
            <span>Transforming Panchakarma</span>
            <span>•</span>
            <span>Built with ❤️ for healing</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;