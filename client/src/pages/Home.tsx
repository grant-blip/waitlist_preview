import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Calendar, Users, Video } from "lucide-react";

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

  const scrollToWaitlist = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-foreground">The Longevity Reset</h1>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
            onClick={scrollToWaitlist}
          >
            Join the Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Attention Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4" />
                Virtual Event: May 17 & 18th, 2025 @ 10am - 5pm (+ Q&A)
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Attention All Perimenopausal and Menopausal Women
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                You Were Never Meant to Feel This Tired, This Stuck, or This Out of Sync.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Discover the proven strategies to reclaim your energy, balance your hormones, and feel like yourself again.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToWaitlist}
            >
              Join the Waitlist Now
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What brings you to The Longevity Reset?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get ready to transform your health with expert guidance on the topics that matter most to you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { title: "Hormone Balance", icon: "🌸" },
              { title: "Energy & Vitality", icon: "⚡" },
              { title: "Metabolic Health", icon: "🔥" },
              { title: "Gut Health", icon: "🌿" },
              { title: "Sleep Quality", icon: "😴" },
              { title: "Brain Health", icon: "🧠" },
              { title: "Stress Management", icon: "🧘‍♀️" },
              { title: "Nutrition", icon: "🥗" },
            ].map((topic, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-3xl">{topic.icon}</div>
                  <p className="font-semibold text-sm">{topic.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How The Longevity Reset Works
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive 2-day virtual experience designed to transform your health from the inside out.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Join the Waitlist",
                description: "Secure your spot by joining our exclusive waitlist. Be the first to know when registration opens.",
                icon: <Users className="w-8 h-8" />,
              },
              {
                step: "2",
                title: "Attend Live Sessions",
                description: "Participate in 2 days of expert-led sessions covering hormone balance, nutrition, and lifestyle strategies.",
                icon: <Video className="w-8 h-8" />,
              },
              {
                step: "3",
                title: "Get Your Action Plan",
                description: "Receive a personalized roadmap with actionable steps tailored to your unique health journey.",
                icon: <CheckCircle2 className="w-8 h-8" />,
              },
              {
                step: "4",
                title: "Transform Your Health",
                description: "Implement proven strategies and track your progress as you reclaim your energy and vitality.",
                icon: <CheckCircle2 className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">Step {item.step}</div>
                <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-form" className="py-20 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join the Waitlist
            </h3>
            <p className="text-lg text-muted-foreground">
              Be the first to know when registration opens for The Longevity Reset. Limited spots available.
            </p>
          </div>
          
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join the Waitlist Now"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By joining the waitlist, you'll receive priority access when registration opens.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Common Questions
          </h3>
          
          <div className="space-y-6">
            {[
              { 
                q: "Will this actually work for me?", 
                a: "Yes! The Longevity Reset is designed specifically for perimenopausal and menopausal women who are experiencing fatigue, feeling stuck, or out of sync. Our evidence-based approach has helped thousands of women reclaim their health and vitality." 
              },
              { 
                q: "Will I be able to stick to it?", 
                a: "Absolutely. The program is designed to fit into your busy life with practical, sustainable strategies that you can implement immediately. We focus on small, manageable changes that create lasting results." 
              },
              { 
                q: "I'm too busy. How will I find the time?", 
                a: "The event is structured to maximize your time with focused sessions and actionable takeaways. Plus, you'll receive recordings to review at your own pace, so you never miss important content." 
              },
              { 
                q: "Can't I just figure this out on my own?", 
                a: "While you could piece together information from various sources, The Longevity Reset provides a comprehensive, evidence-based approach tailored specifically to your needs, saving you time and eliminating confusion." 
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <h4 className="font-bold text-lg mb-3 text-foreground">{item.q}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToWaitlist}
            >
              Secure Your Spot on the Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white border-t">
        <div className="container max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Transform Your Health?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the waitlist today and be the first to secure your spot when registration opens for The Longevity Reset.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={scrollToWaitlist}
          >
            Join the Waitlist Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-white">
        <div className="container text-center text-sm text-muted-foreground space-x-4">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
          <span>·</span>
          <span>© 2025 The Longevity Reset. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
