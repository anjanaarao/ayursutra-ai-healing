import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, MapPin, User, Star, ChevronRight, Check } from "lucide-react";

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const therapyPackages = [
    {
      id: "7-day-panchakarma",
      name: "7-Day Complete Panchakarma",
      duration: "7 days",
      price: "₹45,000",
      description: "Full detoxification with Abhyanga, Shirodhara, Virechana, and Basti",
      therapies: ["Abhyanga", "Shirodhara", "Swedana", "Virechana", "Basti", "Nasya"],
      rating: 4.9,
      popular: true
    },
    {
      id: "detox-plan",
      name: "5-Day Detox Plan",
      duration: "5 days",
      price: "₹28,000",
      description: "Gentle cleansing with massage therapies and herbal treatments",
      therapies: ["Abhyanga", "Swedana", "Herbal Steam", "Dietary Guidance"],
      rating: 4.7,
      popular: false
    },
    {
      id: "stress-relief",
      name: "Stress Relief Program",
      duration: "3 days",
      price: "₹18,000",
      description: "Focused on mental wellness with Shirodhara and relaxation therapies",
      therapies: ["Shirodhara", "Abhyanga", "Meditation", "Pranayama"],
      rating: 4.8,
      popular: false
    }
  ];

  const availableSlots = [
    { id: "morning-1", time: "9:00 AM", therapist: "Dr. Priya Sharma", room: "Lotus Room", recommended: true },
    { id: "morning-2", time: "10:30 AM", therapist: "Dr. Rajesh Kumar", room: "Sage Room", recommended: false },
    { id: "afternoon-1", time: "2:00 PM", therapist: "Dr. Maya Patel", room: "Lotus Room", recommended: true },
    { id: "afternoon-2", time: "3:30 PM", therapist: "Dr. Arjun Singh", room: "Healing Room", recommended: false },
  ];

  const steps = ["Select Package", "Choose Time", "Confirm Booking"];

  const renderPackageSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Choose Your Healing Journey</h3>
        <p className="text-muted-foreground">Select a therapy package that suits your wellness needs</p>
      </div>
      
      <div className="grid gap-6">
        {therapyPackages.map((pkg) => (
          <Card 
            key={pkg.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedPackage === pkg.id 
                ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20' 
                : 'hover:border-primary/30'
            }`}
            onClick={() => setSelectedPackage(pkg.id)}
          >
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  {pkg.popular && (
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-accent" />
                    {pkg.rating}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                <div className="text-sm text-muted-foreground">Total cost</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{pkg.description}</p>
              <div className="flex flex-wrap gap-2">
                {pkg.therapies.map((therapy, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {therapy}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTimeSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Select Your Preferred Time</h3>
        <p className="text-muted-foreground">AI-optimized scheduling based on therapy sequence</p>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-primary">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Smart Scheduling Active</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            We've optimized your session sequence for maximum therapeutic benefit
          </p>
        </CardContent>
      </Card>
      
      <div className="grid gap-4">
        {availableSlots.map((slot) => (
          <Card 
            key={slot.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              selectedSlot === slot.id 
                ? 'border-primary bg-primary/5 shadow-md shadow-primary/20' 
                : 'hover:border-primary/30'
            }`}
            onClick={() => setSelectedSlot(slot.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-semibold">{slot.time}</div>
                    {slot.recommended && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        AI Recommended
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {slot.therapist}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {slot.room}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderConfirmation = () => {
    const selectedPkg = therapyPackages.find(p => p.id === selectedPackage);
    const selectedSlotData = availableSlots.find(s => s.id === selectedSlot);
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Confirm Your Booking</h3>
          <p className="text-muted-foreground">Review your selection and confirm your healing journey</p>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Booking Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Package</div>
                <div className="font-semibold">{selectedPkg?.name}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="font-semibold text-primary">{selectedPkg?.price}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Start Time</div>
                <div className="font-semibold">{selectedSlotData?.time}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Therapist</div>
                <div className="font-semibold">{selectedSlotData?.therapist}</div>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="text-sm text-muted-foreground mb-2">Included Therapies</div>
              <div className="flex flex-wrap gap-2">
                {selectedPkg?.therapies.map((therapy, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {therapy}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-4">
            <h4 className="font-semibold text-accent mb-2">Pre-Treatment Preparation</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Light breakfast 2 hours before session</li>
              <li>• Avoid heavy meals and alcohol 24 hours prior</li>
              <li>• Wear comfortable, loose clothing</li>
              <li>• Arrive 15 minutes early for consultation</li>
            </ul>
          </CardContent>
        </Card>

        <Button 
          className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25"
          size="lg"
        >
          Confirm Booking & Pay {selectedPkg?.price}
        </Button>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderPackageSelection();
      case 1: return renderTimeSelection();
      case 2: return renderConfirmation();
      default: return renderPackageSelection();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-20 h-0.5 mx-4 ${
                    index < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={(currentStep + 1) / steps.length * 100} className="h-2" />
        </div>

        {/* Step Content */}
        {renderStepContent()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < steps.length - 1 && (
            <Button 
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={
                (currentStep === 0 && !selectedPackage) || 
                (currentStep === 1 && !selectedSlot)
              }
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              Next Step
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingFlow;