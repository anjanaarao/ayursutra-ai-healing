import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, MessageCircle, Calendar, AlertCircle, CheckCircle, Globe } from "lucide-react";

const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      type: "appointment",
      title: "Upcoming Session Reminder",
      message: "Abhyanga massage with Dr. Priya Sharma tomorrow at 10:00 AM",
      time: "2 hours ago",
      status: "unread",
      priority: "high",
      actions: ["Reschedule", "Confirm"]
    },
    {
      id: 2,
      type: "preparation",
      title: "Pre-Treatment Guidelines",
      message: "Please fast for 2 hours before your Virechana session",
      time: "1 day ago",
      status: "read",
      priority: "medium",
      actions: ["View Guidelines"]
    },
    {
      id: 3,
      type: "feedback",
      title: "Session Feedback Request",
      message: "How was your Shirodhara experience? Your feedback helps us improve",
      time: "2 days ago",
      status: "unread",
      priority: "low",
      actions: ["Give Feedback"]
    },
    {
      id: 4,
      type: "schedule",
      title: "Schedule Updated",
      message: "Your therapy sequence has been optimized based on AI recommendations",
      time: "3 days ago",
      status: "read",
      priority: "medium",
      actions: ["View Schedule"]
    }
  ];

  const reminderSettings = [
    { type: "24h", label: "24 Hours Before", channels: ["App", "SMS", "Email"], enabled: true },
    { type: "2h", label: "2 Hours Before", channels: ["App", "WhatsApp"], enabled: true },
    { type: "30m", label: "30 Minutes Before", channels: ["App"], enabled: false },
    { type: "feedback", label: "Post-Treatment Feedback", channels: ["App", "Email"], enabled: true }
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
    { code: "mr", name: "मराठी", flag: "🇮🇳" },
    { code: "bn", name: "বাংলা", flag: "🇮🇳" }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "appointment": return <Calendar className="w-5 h-5 text-primary" />;
      case "preparation": return <AlertCircle className="w-5 h-5 text-accent" />;
      case "feedback": return <MessageCircle className="w-5 h-5 text-secondary" />;
      case "schedule": return <Clock className="w-5 h-5 text-primary" />;
      default: return <Bell className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-destructive bg-destructive/5";
      case "medium": return "border-l-accent bg-accent/5";
      case "low": return "border-l-secondary bg-secondary/5";
      default: return "border-l-muted";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Notification Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with personalized reminders and multilingual support
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Recent Notifications */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Recent Notifications
                  </div>
                  <Badge variant="outline" className="border-primary/30">
                    3 Unread
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md ${getPriorityColor(notification.priority)} ${
                      notification.status === 'unread' ? 'bg-opacity-100 shadow-sm' : 'bg-opacity-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        {getNotificationIcon(notification.type)}
                        <div>
                          <h4 className="font-semibold">{notification.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {notification.status === 'unread' && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {notification.actions.map((action, index) => (
                        <Button key={index} size="sm" variant="outline" className="text-xs h-7">
                          {action}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            {/* Reminder Settings */}
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  Reminder Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reminderSettings.map((setting, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{setting.label}</span>
                      <div className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                        setting.enabled ? 'bg-primary' : 'bg-muted'
                      }`}>
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          setting.enabled ? 'translate-x-4' : 'translate-x-0'
                        }`}></div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {setting.channels.map((channel, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Language Settings */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  Language Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/20 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    {lang.code === 'en' && (
                      <CheckCircle className="w-4 h-4 text-primary" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Notification Channels */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">Notification Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {["App", "SMS", "Email", "WhatsApp"].map((channel, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
                
                <Button size="sm" variant="outline" className="w-full">
                  Customize Channels
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationCenter;