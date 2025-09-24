import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { useConversation } from '@11labs/react';

const VoiceAssistant = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [agentId, setAgentId] = useState('');
  const [showSetup, setShowSetup] = useState(true);

  const conversation = useConversation({
    onConnect: () => console.log('Voice assistant connected'),
    onDisconnect: () => console.log('Voice assistant disconnected'),
    onMessage: (message) => console.log('Message:', message),
    onError: (error) => console.error('Voice assistant error:', error),
  });

  const handleStartConversation = async () => {
    if (!apiKey || !agentId) {
      alert('Please provide both API Key and Agent ID');
      return;
    }

    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start conversation with agent
      await conversation.startSession({ 
        agentId: agentId 
      });
    } catch (error) {
      console.error('Failed to start conversation:', error);
      alert('Failed to start voice conversation. Please check your settings.');
    }
  };

  const handleEndConversation = async () => {
    await conversation.endSession();
  };

  if (!isExpanded) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 shadow-xl"
        >
          <div className="flex flex-col items-center">
            <Mic className="w-6 h-6" />
            <span className="text-xs mt-1">AI</span>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 bg-card/95 backdrop-blur-sm border-primary/20 shadow-2xl">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AyurSutra AI Assistant</h3>
                <p className="text-xs text-muted-foreground">
                  Status: {conversation.status === 'connected' ? 'Connected' : 'Disconnected'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              ×
            </Button>
          </div>

          {showSetup && (
            <div className="space-y-3 mb-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">ElevenLabs API Key</label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your API key"
                  className="w-full mt-1 px-3 py-2 text-xs border border-border rounded-md bg-background"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Agent ID</label>
                <input
                  type="text"
                  value={agentId}
                  onChange={(e) => setAgentId(e.target.value)}
                  placeholder="Enter your agent ID"
                  className="w-full mt-1 px-3 py-2 text-xs border border-border rounded-md bg-background"
                />
              </div>
              <Button
                onClick={() => setShowSetup(false)}
                size="sm"
                className="w-full text-xs"
              >
                Save Settings
              </Button>
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
                <div className="text-center">
                  <div className="text-2xl mb-1">🧘‍♀️</div>
                  <div className="text-xs text-muted-foreground">Namaste</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">
                I'm your Ayurvedic wellness guide. Ask me about treatments, schedules, or wellness tips!
              </p>
              {conversation.isSpeaking && (
                <div className="text-xs text-primary font-medium animate-pulse">
                  🎙️ Assistant is speaking...
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {conversation.status === 'disconnected' ? (
                <Button
                  onClick={handleStartConversation}
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-xs"
                  disabled={!apiKey || !agentId}
                >
                  <Mic className="w-3 h-3 mr-1" />
                  Start Chat
                </Button>
              ) : (
                <Button
                  onClick={handleEndConversation}
                  size="sm"
                  variant="destructive"
                  className="flex-1 text-xs"
                >
                  <MicOff className="w-3 h-3 mr-1" />
                  End Chat
                </Button>
              )}
              
              <Button
                onClick={() => setShowSetup(!showSetup)}
                size="sm"
                variant="outline"
                className="text-xs"
              >
                ⚙️
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowSetup(true)}
                className="text-xs text-primary hover:underline"
              >
                Need setup help? Click here for instructions
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VoiceAssistant;