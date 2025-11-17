import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("You've been added to the waitlist!");
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">VIRTUAL EVENT</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">THE 2 DAY LONGEVITY RESET: MAY 17 & 18TH, 2025 @ 10AM - 5PM (+ Q&A TIME)</span>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            JOIN THE WAITLIST
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                  The Longevity<br />RESET
                </h1>
              </div>
            </div>

            {/* Attention Line */}
            <div className="bg-white px-6 py-3 rounded-lg inline-block">
              <p className="text-sm md:text-base font-medium text-foreground italic">
                Attention All Perimenopausal and Menopausal women:
              </p>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              You Were Never Meant to Feel This<br />
              Tired, This Stuck, or This Out of Sync.
            </h2>

            {/* Video Placeholder */}
            <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-white/60 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white/40 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm">Video Introduction</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              YES — I'M READY TO JOIN THE WAITLIST
            </Button>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-form" className="py-20 bg-accent">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">
              Join the Waitlist
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Be the first to know when registration opens for The Longevity Reset.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-card-foreground">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14"
                disabled={isSubmitting}
              >
                {isSubmitting ? "JOINING..." : "JOIN THE WAITLIST NOW"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Common Questions
          </h3>
          
          <div className="space-y-6">
            {[
              { q: "WILL THIS ACTUALLY WORK FOR ME?", a: "Yes! The Longevity Reset is designed specifically for perimenopausal and menopausal women who are experiencing fatigue, feeling stuck, or out of sync." },
              { q: "WILL I BE ABLE TO STICK TO IT?", a: "Absolutely. The program is designed to fit into your busy life with practical, sustainable strategies that you can implement immediately." },
              { q: "I'M TOO BUSY. HOW WILL I FIND THE TIME?", a: "The event is structured to maximize your time with focused sessions and actionable takeaways. Plus, you'll receive recordings to review at your own pace." },
              { q: "CAN'T I JUST FIGURE THIS OUT ON MY OWN?", a: "While you could piece together information from various sources, The Longevity Reset provides a comprehensive, evidence-based approach tailored specifically to your needs." },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
                <h4 className="font-bold text-lg mb-3 text-card-foreground">{item.q}</h4>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              SECURE YOUR SPOT ON THE WAITLIST
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Out on The Longevity Reset
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Join the waitlist today and be the first to secure your spot when registration opens.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="font-bold text-lg px-8 py-6 h-auto"
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            JOIN THE WAITLIST NOW
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="container text-center text-sm text-muted-foreground space-x-4">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
        </div>
      </footer>
    </div>
  );
}
