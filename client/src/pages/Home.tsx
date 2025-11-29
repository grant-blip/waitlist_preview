import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Calendar, Users, Video, Star, Clock, Gift, BookOpen } from "lucide-react";

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
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Victoria Image */}
            <div className="relative h-[600px] md:h-[700px] order-2 md:order-1">
              <img 
                src="/victoria-hero.jpg" 
                alt="Victoria O'Sullivan"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 order-1 md:order-2 py-12">
              {/* Attention Badge */}
              <div>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  You Were Never Meant to Feel This Tired, This Stuck, or This Out of Sync.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
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
        </div>
      </section>

      {/* Meet Your Host Section */}
      <section className="py-20 bg-white border-t">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80" 
                    alt="Victoria O'Sullivan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-2">Meet Your Host</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Victoria O'Sullivan</h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    Functional Medicine Practitioner & Women's Health Specialist
                  </p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 15 years of experience in functional medicine, Victoria O'Sullivan has dedicated her career to helping women navigate the complexities of perimenopause and menopause with grace and vitality.
                  </p>
                  <p>
                    Her evidence-based approach combines cutting-edge research with practical, sustainable strategies that have transformed the lives of thousands of women worldwide.
                  </p>
                  <p>
                    Victoria is a certified functional medicine practitioner, published researcher, and sought-after speaker on women's hormonal health and longevity.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    15+ Years Experience
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    5,000+ Women Helped
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Published Researcher
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-gray-50">
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

      {/* Event Agenda Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your 2-Day Transformation Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A carefully designed curriculum that takes you from exhausted to energized in just 2 days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Day 1 */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Day 1: Understanding Your Body</h4>
                    <p className="text-muted-foreground">May 17th, 2025 | 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="space-y-4 ml-20">
                  {[
                    { time: "10:00 AM", title: "The Hormone Connection", desc: "Understanding what's really happening in your body during perimenopause and menopause" },
                    { time: "11:30 AM", title: "Metabolic Reset Fundamentals", desc: "How to optimize your metabolism for sustained energy and healthy weight" },
                    { time: "1:00 PM", title: "Lunch Break & Q&A", desc: "Network with other participants and get your questions answered" },
                    { time: "2:00 PM", title: "Nutrition for Hormonal Balance", desc: "The exact foods that support hormone production and balance" },
                    { time: "3:30 PM", title: "Lab Testing Decoded", desc: "Understanding which tests you need and how to read your results" },
                  ].map((session, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">{session.time}</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-foreground mb-1">{session.title}</h5>
                        <p className="text-sm text-muted-foreground">{session.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Day 2: Your Action Plan</h4>
                    <p className="text-muted-foreground">May 18th, 2025 | 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="space-y-4 ml-20">
                  {[
                    { time: "10:00 AM", title: "Supplement Strategy", desc: "The essential supplements for hormonal balance and which ones to avoid" },
                    { time: "11:30 AM", title: "Movement & Exercise", desc: "The right type and amount of exercise for your hormonal phase" },
                    { time: "1:00 PM", title: "Lunch Break & Q&A", desc: "Continue networking and get personalized guidance" },
                    { time: "2:00 PM", title: "Sleep & Stress Mastery", desc: "Proven techniques to improve sleep quality and manage stress effectively" },
                    { time: "3:30 PM", title: "Your 90-Day Action Plan", desc: "Creating your personalized roadmap for sustainable transformation" },
                  ].map((session, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">{session.time}</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-foreground mb-1">{session.title}</h5>
                        <p className="text-sm text-muted-foreground">{session.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exclusive Bonuses When You Join
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get instant access to these valuable resources when you secure your spot on the waitlist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Complete Hormone Balance Guide",
                value: "$97 Value",
                description: "A comprehensive 50-page guide covering everything you need to know about balancing your hormones naturally.",
              },
              {
                icon: <Gift className="w-10 h-10" />,
                title: "14-Day Meal Plan & Recipes",
                value: "$67 Value",
                description: "Delicious, hormone-balancing recipes with shopping lists and meal prep instructions.",
              },
              {
                icon: <Video className="w-10 h-10" />,
                title: "Lifetime Access to Recordings",
                value: "$197 Value",
                description: "Watch and rewatch all sessions at your own pace, plus access to future updates.",
              },
            ].map((bonus, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
                    {bonus.icon}
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">
                      {bonus.value}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{bonus.title}</h4>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-foreground mb-2">Total Bonus Value: <span className="text-primary">$361</span></p>
            <p className="text-muted-foreground">Yours FREE when you join the waitlist today</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Women Are Saying
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from women who've transformed their health with Victoria's guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah M.",
                age: "52",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
                quote: "After just 90 days, my energy levels are through the roof. I feel like I'm in my 30s again! The strategies Victoria shared were life-changing.",
                result: "Lost 15 lbs, Energy Restored",
              },
              {
                name: "Jennifer K.",
                age: "48",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
                quote: "I finally understand what my body needs. My hot flashes are gone, I'm sleeping through the night, and I feel amazing. Thank you, Victoria!",
                result: "Better Sleep, No Hot Flashes",
              },
              {
                name: "Michelle R.",
                age: "55",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
                quote: "This program gave me the tools and confidence to take control of my health. I wish I had found this years ago. It's truly transformative.",
                result: "Balanced Hormones, Clarity Restored",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                      <p className="text-sm font-semibold text-primary mt-1">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Program Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why The Longevity Reset is Different
              </h3>
              <p className="text-lg text-muted-foreground">
                This isn't just another health program. It's a scientifically-backed, holistic approach to reclaiming your vitality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Evidence-Based Approach",
                  description: "Every strategy is backed by the latest research in functional medicine and women's health.",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Personalized Guidance",
                  description: "No one-size-fits-all solutions. Learn to customize strategies for your unique body and lifestyle.",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Sustainable Results",
                  description: "Focus on long-term lifestyle changes, not quick fixes that don't last.",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Community Support",
                  description: "Connect with like-minded women on the same journey and build lasting relationships.",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Expert-Led Sessions",
                  description: "Learn directly from Victoria O'Sullivan, a leader in functional medicine and women's health.",
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Actionable Strategies",
                  description: "Walk away with a clear action plan you can start implementing immediately.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-form" className="py-20 bg-gray-50">
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
                  By joining the waitlist, you'll receive priority access when registration opens plus all bonus materials instantly.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
              { 
                q: "What if I can't attend live?", 
                a: "No problem! All sessions are recorded and you'll have lifetime access to watch at your convenience. However, we highly recommend attending live for the interactive Q&A sessions." 
              },
              { 
                q: "Is this suitable for women who haven't started menopause yet?", 
                a: "Yes! The strategies taught in The Longevity Reset are beneficial for women in perimenopause, menopause, and post-menopause. The earlier you start, the better prepared you'll be." 
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
      <section className="py-20 bg-gray-50 border-t">
        <div className="container max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Transform Your Health?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the waitlist today and be the first to secure your spot when registration opens for The Longevity Reset. Plus, get instant access to $361 worth of bonus materials.
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
