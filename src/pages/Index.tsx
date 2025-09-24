import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PatientDashboard from "@/components/PatientDashboard";
import PractitionerDashboard from "@/components/PractitionerDashboard";
import BookingFlow from "@/components/BookingFlow";
import EnhancedPractitionerCalendar from "@/components/EnhancedPractitionerCalendar";
import NotificationCenter from "@/components/NotificationCenter";
import VoiceAssistant from "@/components/VoiceAssistant";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Overview */}
      <Features />
      
      {/* Patient Booking Flow */}
      <BookingFlow />
      
      {/* Patient Dashboard Preview */}
      <PatientDashboard />
      
      {/* Practitioner Dashboard Preview */}
      <PractitionerDashboard />
      
      {/* Enhanced Practitioner Calendar */}
      <EnhancedPractitionerCalendar />
      
      {/* Notification Center */}
      <NotificationCenter />
      
      {/* Footer */}
      <footer className="py-12 bg-gradient-to-t from-muted/50 to-background border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              AyurSutra
            </h3>
            <p className="text-muted-foreground mt-2">
              Where 5,000 years of wisdom meets modern precision
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
            <div className="flex space-x-6">
              <button className="text-muted-foreground hover:text-primary transition-colors">About Us</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">🌐 English</button>
            </div>
            
            <div className="flex space-x-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Twitter</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Instagram</button>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border/50">
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>© 2024 AyurSutra</span>
              <span>•</span>
              <span>Transforming Panchakarma</span>
              <span>•</span>
              <span>Built with ❤️ for healing</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Voice Assistant */}
      <VoiceAssistant />
    </main>
  );
};

export default Index;