import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { CheckCircle2, Calendar, Users, Video, Star, Clock, Gift, BookOpen, Flame, Award, Check, Coffee, ChevronDown } from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    // Set event date: May 17, 2025 at 10:00 AM
    const eventDate = new Date('2025-05-17T10:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

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
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-6">
            <h1 className="text-base md:text-xl font-bold text-foreground">The Longevity Reset</h1>
            
            {/* Countdown Timer */}
            <div className="hidden sm:flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <div className="flex items-center gap-1 md:gap-2">
                <div className="text-center">
                  <div className="font-bold text-foreground">{timeLeft.days}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Days</div>
                </div>
                <span className="text-muted-foreground">:</span>
                <div className="text-center">
                  <div className="font-bold text-foreground">{timeLeft.hours}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Hrs</div>
                </div>
                <span className="text-muted-foreground">:</span>
                <div className="text-center">
                  <div className="font-bold text-foreground">{timeLeft.minutes}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Min</div>
                </div>
                <span className="text-muted-foreground hidden md:inline">:</span>
                <div className="text-center hidden md:block">
                  <div className="font-bold text-foreground">{timeLeft.seconds}</div>
                  <div className="text-xs text-muted-foreground">Sec</div>
                </div>
              </div>
            </div>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-4 md:px-6 text-sm md:text-base"
            onClick={scrollToWaitlist}
          >
            Join the Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[560px] flex items-center overflow-hidden">
        {/* Background Image - Desktop */}
        <div 
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/victoria-hero-new.png)',
            backgroundSize: 'contain',
            backgroundPosition: '82.5% center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Background Image - Mobile */}
        <div 
          className="md:hidden absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/victoria-hero-new.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-white/75" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Left Side - Content Overlay (60%) */}
            <div className="md:col-span-3 space-y-4 md:space-y-6 py-8 md:py-12 px-4 md:px-8">
              {/* Attention Badge */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-full text-sm font-medium shadow-sm">
                  <Calendar className="w-4 h-4" />
                  Virtual Event: May 17 & 18th, 2025 @ 10am - 5pm (+ Q&A) • Limited to 100 Attendees
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3 md:space-y-4">
                <p className="text-xs md:text-sm uppercase tracking-wider text-gray-700 font-semibold">
                  Attention All Perimenopausal and Menopausal Women
                </p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  You Were Never Meant to Feel This Tired, This Stuck, or This Out of Sync.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700">
                  <strong>Imagine waking up energized, fitting into your favorite jeans, and feeling confident and sexy again.</strong> Join 17,000+ women who've transformed their health with Victoria's proven hormone-balancing strategies.
                </p>
                
                {/* Pricing Badge */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full">
                    <span className="text-sm md:text-base font-bold">General Admission: $97</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-5 py-3 bg-primary border-2 border-primary/30 rounded-full shadow-lg ml-0 md:ml-3">
                    <Gift className="w-5 h-5 text-white" />
                    <span className="text-sm md:text-base font-bold text-white">VIP: $197 + Get $361 in Exclusive Bonuses</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="space-y-3">
                <Button 
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all"
                  onClick={scrollToWaitlist}
                >
                  Join the Waitlist Now
                </Button>
                
                {/* Social Proof + Scarcity */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">Join <span className="text-primary font-bold">247+</span> women already on the waitlist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{width: '67%'}}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">67 of 100 spots claimed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Empty space for Victoria in background (40%) */}
            <div className="hidden md:block md:col-span-2" />
          </div>
        </div>
      </section>

      {/* Say No To / Hello Again To Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Say No To */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Say no to:</h3>
              <div className="space-y-4">
                {[
                  { emoji: "🚫", text: "Sleepless nights (goodbye 2-4am wakings)" },
                  { emoji: "🚫", text: "3pm crashes, exhaustion so chronic you can't get through the day" },
                  { emoji: "🚫", text: "Weight gain, despite doing EVERYTHING right" },
                  { emoji: "🚫", text: "Brain fog so severe you wonder if you are actually going crazy" },
                  { emoji: "🚫", text: "Medical tests that just keep telling you \"everything is normal\"" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* And Hello Again To */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">And hello again to:</h3>
              <div className="space-y-4">
                {[
                  { emoji: "🛌", text: "Restful, deep and regenerative sleep (like you had in your 20s)" },
                  { emoji: "⚡️", text: "Energy and focus to do the things you ENJOY, so you can be yourself again" },
                  { emoji: "🍎", text: "A metabolism that WORKS and rewards you for your effort" },
                  { emoji: "🌀", text: "A life that feels under control and full of possibility again" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In - Media Logos */}
      <section className="py-12 bg-primary/10 border-y border-primary/20">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Trusted By Leading Media</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">As Featured In</h3>
          </div>
        </div>
        <div className="w-full">
          <img 
            src="/media-logos.jpg" 
            alt="As featured in major media outlets"
            className="w-full h-auto object-contain max-h-24 md:max-h-32"
          />
        </div>
      </section>

      {/* Meet Your Host Section */}
      <section className="relative min-h-[400px] md:min-h-[560px] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 border-y border-primary/20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        {/* Background Image - Desktop */}
        <div 
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/victoria-host.png)',
            backgroundSize: 'contain',
            backgroundPosition: '17.5% center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Background Image - Mobile */}
        <div 
          className="md:hidden absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/victoria-host.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/85 to-white/90" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Left Side - Empty space for Victoria in background (40%) */}
            <div className="hidden md:block md:col-span-2" />
            
            {/* Right Side - Content (60%) */}
            <div className="md:col-span-3 space-y-4 md:space-y-6 py-8 md:py-12 px-4 md:px-8">
              <div>
                <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
                  Meet Your Host
                </span>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  Victoria O'Sullivan
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-primary font-semibold">
                  Functional Medicine Practitioner & Women's Health Specialist
                </p>
              </div>
              
              <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p className="font-medium">
                  With over <strong className="text-primary">15 years of experience</strong> in functional medicine, Victoria O'Sullivan has dedicated her career to helping women navigate the complexities of perimenopause and menopause with grace and vitality.
                </p>
                <p>
                  Her evidence-based approach combines cutting-edge research with practical, sustainable strategies that have transformed the lives of <strong className="text-primary">thousands of women worldwide</strong>.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-primary/10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-primary/10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">17K+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Women Helped</div>
                </div>
                <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-primary/10 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Media Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Women, Real Transformations
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet Sarah, who went from exhausted and frustrated to energized and thriving in just 90 days.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Before/After Story */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-2xl">😔</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">Before</h4>
                      <p className="text-sm text-muted-foreground">January 2024</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Waking up exhausted after 8 hours of sleep</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Gained 15kg despite eating "healthy"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Brain fog making work impossible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Hot flashes 10+ times per day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Reaching for wine every night to cope</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">After 90 Days</h4>
                      <p className="text-sm text-muted-foreground">April 2024</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Waking up naturally at 6am</strong> with energy to spare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Lost 12kg</strong> and fitting into her favorite jeans again</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Mental clarity restored</strong> - crushing it at work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Hot flashes completely gone</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Feels confident and sexy</strong> with her partner again</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary/20">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    "I honestly thought this was just how midlife was supposed to feel. I'd tried everything - different diets, supplements, even hormone therapy - but nothing worked. Victoria's approach was different. She helped me understand what was actually happening in my body and gave me a clear, step-by-step plan. Within weeks, I had more energy than I'd had in years. Within 3 months, I got my life back. I feel like ME again."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                      S
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Age 48, Melbourne</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/20">
                  <h4 className="font-bold text-xl text-foreground mb-3">Imagine Your Life in 90 Days:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Waking up refreshed and energized every morning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Slipping into clothes that haven't fit in years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Having the mental clarity to excel at work and life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Feeling confident, sexy, and like yourself again</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Experience
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Both tiers give you access to the complete 2-day transformation event. VIP members receive exclusive bonuses worth $361.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* General Admission */}
              <Card className="border-2 border-gray-200 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-foreground mb-2">General Admission</h4>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-foreground">$97</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Perfect for getting started</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Full access to both days (10am-5pm)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">All live training sessions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Live Q&A with Victoria</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lifetime access to recordings</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Private community access</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-6 rounded-full"
                    onClick={scrollToWaitlist}
                  >
                    Join Waitlist - General
                  </Button>
                </CardContent>
              </Card>

              {/* VIP Tier */}
              <Card className="border-4 border-primary shadow-2xl hover:shadow-3xl transition-all relative">
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-foreground mb-2">VIP Experience</h4>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">$197</span>
                    </div>
                    <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
                      <span className="text-sm font-bold text-primary">Save $164 in bonuses!</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Everything in General + $361 in exclusive bonuses</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Everything in General Admission</strong></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Complete Hormone Balancing Guide</strong> ($97 value)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>14-Day Meal Plan & Recipes</strong> ($67 value)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Personalized Protocol Template</strong> ($147 value)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Downloadable Workbooks & Trackers</strong> ($50 value)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Priority Q&A access</strong> (your questions answered first)</span>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-primary/10 rounded-xl border-2 border-primary/30 text-center">
                    <p className="text-sm font-bold text-foreground">Total Value: $558</p>
                    <p className="text-xs text-muted-foreground">You Pay Just $197</p>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-full shadow-lg"
                    onClick={scrollToWaitlist}
                  >
                    Join Waitlist - VIP ⭐
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                🔒 <strong>Secure your spot now.</strong> Limited to 100 attendees total. Payment will be collected after waitlist closes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Transform Your Health in Just 2 Days
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop feeling exhausted, stuck, and frustrated. Get the exact strategies to reclaim your energy, lose stubborn weight, and feel like yourself again—starting this weekend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Decode Your Hormones & Metabolism",
                description: "Understand how your hormones control fat loss, energy, mood, and weight—and learn exactly how to optimize them for effortless results.",
                image: "/topic-thyroid.webp"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "The Midlife Eating Blueprint",
                description: "Discover the exact eating strategy that turns your body into a fat-burning machine while boosting energy and mental clarity.",
                image: "/topic-weight-loss.webp"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Gut Health & Hormone Balance",
                description: "Learn why gut health is the foundation for weight loss, clear skin, balanced hormones, and overall vitality in midlife.",
                image: "/topic-gut-issues.webp"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "The Female Brain in Midlife",
                description: "Understand how hormonal changes affect your memory, mood, focus, and decision-making—and what you can do to protect your brain.",
                image: "/topic-anxiety.webp"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Break Free from Cravings",
                description: "Discover the science behind why you reach for chocolate, wine, and snacks under stress—and the proven strategies to break free.",
                image: "/topic-fatigue.webp"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Stress-Metabolism Connection",
                description: "Learn how to transform stress from a fat-storing enemy into a fat-burning ally with simple, science-backed techniques.",
                image: "/topic-insomnia.webp"
              },
            ].map((module, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                      {module.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{module.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 space-y-8">
            <div className="text-center">
              <div className="inline-block px-8 py-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/30 shadow-lg">
                <p className="text-lg md:text-xl font-bold text-foreground mb-3">
                  ✨ Get Access to Functional Testing
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-2">
                  DUTCH Panel • Microbiome Mapping • DNA Testing
                </p>
                <p className="text-sm text-muted-foreground">
                  Finally stop guessing and get personalized insights based on YOUR unique biology
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-block px-8 py-4 bg-primary/10 rounded-2xl border-2 border-primary/20">
                <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
                  Plus: Bioidentical Hormones, Metabolism Training & The Secret to Thriving in Midlife
                </p>
                <p className="text-muted-foreground">
                  Everything you need to transform your health and reclaim your vitality—all in one comprehensive event.
                </p>
              </div>
            </div>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 */}
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Day 1: Reboot & Reset</h4>
                    <p className="text-muted-foreground">May 17th, 2025 | 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="space-y-4 ml-20">
                  {[
                    { time: "10:00 AM", title: "How to decode your hormones & metabolism", desc: "for effortless fat loss" },
                    { time: "11:30 AM", title: "The sneaky mistakes", desc: "sabotaging your energy, mood, and weight." },
                    { time: "1:00 PM", title: "Lunch Break & Q&A", desc: "Network with other participants and get your questions answered" },
                    { time: "2:00 PM", title: "Why gut health is the key to weight loss", desc: "clear skin & balanced hormones" },
                    { time: "3:00 PM", title: "The Female Brain in Midlife", desc: "How hormones affect memory, mood, and focus." },
                    { time: "4:00 PM", title: "The Craving Brain", desc: "Understanding why you reach for chocolate, wine, and snacks under stress—and how to break free." },
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
                    <h4 className="text-2xl font-bold text-foreground mb-2">Day 2: Build & Sustain Your Transformation</h4>
                    <p className="text-muted-foreground">May 18th, 2025 | 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="space-y-4 ml-20">
                  {[
                    { time: "10:00 AM", title: "The Midlife Eating Blueprint", desc: "How to eat for fat-burning & energy." },
                    { time: "11:30 AM", title: "Understanding Bioidentical Hormones & Natural Approaches", desc: "and which is right for you." },
                    { time: "1:00 PM", title: "Lunch Break & Q&A", desc: "Continue networking and get personalized guidance" },
                    { time: "2:00 PM", title: "The Hormones of Metabolism", desc: "Train smarter, not harder, for strength, fat-burning and longevity." },
                    { time: "3:00 PM", title: "The Stress-Metabolism Connection", desc: "Turn stress from a fat-storing enemy into a fat-burning ally." },
                    { time: "4:00 PM", title: "The Secret to Thriving in Midlife", desc: "A powerful, eye-opening revelation that will shift the way you think about your health forever." },
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

      {/* What You'll Walk Away With Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What You'll Walk Away With
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                This isn't just information—you'll leave with actionable tools, personalized protocols, and ongoing support to ensure lasting transformation.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                  <span className="font-semibold">Included in General ($97)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="font-semibold">VIP Exclusive ($197)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Your Personalized Hormone-Balancing Protocol <span className="text-primary text-sm">VIP</span></h4>
                      <p className="text-muted-foreground">A customized action plan based on your specific symptoms, goals, and lifestyle—not a one-size-fits-all approach.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Complete 14-Day Meal Plan & Recipes <span className="text-primary text-sm">VIP</span></h4>
                      <p className="text-muted-foreground">Delicious, hormone-balancing meals with shopping lists and meal prep instructions—start implementing immediately.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Lifetime Access to All Recordings <span className="text-gray-600 text-sm">All Tiers</span></h4>
                      <p className="text-muted-foreground">Can't attend live? No problem. Watch and rewatch all sessions at your own pace, forever.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Access to Private Support Community <span className="text-gray-600 text-sm">All Tiers</span></h4>
                      <p className="text-muted-foreground">Join 17,000+ women in our private Facebook group for ongoing support, accountability, and encouragement.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Live Q&A Sessions with Victoria <span className="text-gray-600 text-sm">All Tiers</span></h4>
                      <p className="text-muted-foreground">Get YOUR specific questions answered during dedicated Q&A sessions—personalized guidance for your unique situation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Gift className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground mb-2">Downloadable Workbooks & Trackers <span className="text-primary text-sm">VIP</span></h4>
                      <p className="text-muted-foreground">Track your progress, symptoms, and wins with our proven tracking tools—see your transformation unfold in real-time.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="px-6 py-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <p className="text-lg font-bold text-foreground mb-1">
                    General Admission
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">$97</p>
                  <p className="text-sm text-muted-foreground">Core event access + recordings</p>
                </div>
                <div className="px-6 py-4 bg-primary/10 rounded-xl border-2 border-primary/30">
                  <p className="text-lg font-bold text-foreground mb-1">
                    VIP Experience
                  </p>
                  <p className="text-3xl font-bold text-primary mb-2">$197</p>
                  <p className="text-sm text-muted-foreground">Everything + $361 in bonuses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">⭐ VIP Exclusive</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              VIP Bonuses Worth $361
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upgrade to VIP for just $100 more and receive these exclusive bonuses to accelerate your transformation.
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
            <div className="inline-block px-8 py-6 bg-primary/10 rounded-2xl border-2 border-primary/30">
              <p className="text-2xl font-bold text-foreground mb-2">Total VIP Bonus Value: <span className="text-primary">$361</span></p>
              <p className="text-muted-foreground mb-4">Included FREE with VIP tier ($197)</p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-full"
                onClick={scrollToWaitlist}
              >
                Upgrade to VIP ⭐
              </Button>
            </div>
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

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white border-t">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Real Transformations
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch women share their personal journeys and the life-changing results they've achieved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video Testimonial 1 */}
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Video testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Video className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">"I Got My Life Back"</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Watch how Lisa transformed her energy levels and lost 20 pounds in just 12 weeks.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">Lisa T., Age 49</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonial 2 */}
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80"
                    alt="Video testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Video className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">"No More Hot Flashes!"</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Discover how Maria eliminated her symptoms and regained her confidence naturally.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">Maria S., Age 53</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about The Longevity Reset
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  question: "What if I can't attend the live sessions?",
                  answer: "No problem at all! You'll get <strong>lifetime access to all recordings</strong>, so you can watch at your own pace, rewatch any session, and never miss a thing. Many of our most successful participants watch the recordings on their own schedule."
                },
                {
                  question: "Is this right for me if I'm already on HRT or bioidentical hormones?",
                  answer: "Absolutely! We cover <strong>both natural and bioidentical hormone approaches</strong>, and you'll learn how to optimize whatever protocol you're currently on. Many women on HRT still struggle with weight, energy, and symptoms because they're missing the other critical pieces—which we'll address in depth."
                },
                {
                  question: "I've tried everything—diets, supplements, exercise. Why will this work when nothing else has?",
                  answer: "Because this isn't another generic diet or supplement protocol. Victoria's approach is <strong>evidence-based and personalized</strong> to how YOUR body works in perimenopause and menopause. You'll learn exactly why previous approaches failed and get a customized strategy based on your hormones, metabolism, and lifestyle—not a one-size-fits-all plan."
                },
                {
                  question: "What's the time commitment? I have a busy schedule.",
                  answer: "The live event runs <strong>10am-5pm on May 17-18</strong> (with lunch breaks and Q&A). But remember, you get lifetime access to recordings, so you can watch on your schedule. Plus, the strategies you'll learn are designed to fit into a busy life—not add more stress."
                },
                {
                  question: "Will I get personalized guidance, or is this just general information?",
                  answer: "You'll get <strong>both</strong>! The curriculum covers comprehensive strategies that work for all women in midlife, PLUS you'll have dedicated Q&A sessions with Victoria to ask YOUR specific questions. You'll also receive personalized protocols based on your symptoms and goals."
                },
                {
                  question: "What's the difference between General Admission and VIP?",
                  answer: "<strong>General Admission ($97)</strong> includes full access to both days, all training sessions, live Q&A, lifetime recordings, and community access. <strong>VIP ($197)</strong> includes everything in General PLUS $361 worth of exclusive bonuses: Complete Hormone Balancing Guide, 14-Day Meal Plan, Personalized Protocol Template, Workbooks & Trackers, and priority Q&A access. VIP members get their questions answered first and receive actionable tools to implement immediately."
                },
                {
                  question: "Is VIP worth the extra $100?",
                  answer: "Absolutely! You're getting <strong>$361 in bonuses for just $100 more</strong>—that's $261 in extra value. The VIP bonuses include the exact tools you need to implement what you learn: personalized protocols, meal plans, tracking workbooks, and priority access to Victoria. Most successful participants choose VIP because they want the complete transformation toolkit, not just information."
                },
                {
                  question: "When do I need to pay?",
                  answer: "You're joining the <strong>waitlist now for free</strong>—no payment required yet. Once the waitlist closes, we'll send you a payment link to secure your spot. You'll choose your tier (General $97 or VIP $197) at that time. This gives you priority access and ensures you don't miss out when spots fill up."
                },
                {
                  question: "What if I'm in a different time zone?",
                  answer: "The event is scheduled for <strong>Australian Eastern Time (AEST)</strong>, but with lifetime recording access, you can participate from anywhere in the world on your own schedule. Many international participants watch the recordings and submit questions via our private community."
                },
                {
                  question: "How is this different from other hormone or menopause programs?",
                  answer: "Victoria's approach combines <strong>over 25 years of clinical experience with cutting-edge research</strong> and has helped thousands of women transform their health. Unlike generic programs, you'll get evidence-based strategies tailored to midlife metabolism, ongoing support in our thriving community, and practical tools you can implement immediately—not just theory."
                },
                {
                  question: "What's included in the VIP bonuses?",
                  answer: "VIP members receive <strong>$361 in exclusive bonuses</strong>: Complete Hormone Balancing Guide ($97 value), 14-Day Meal Plan with Recipes ($67 value), Personalized Protocol Template ($147 value), Downloadable Workbooks & Trackers ($50 value), plus priority Q&A access. These bonuses are designed to help you implement everything you learn immediately and get faster results."
                },
                {
                  question: "Can I upgrade from General to VIP later?",
                  answer: "Yes! You can upgrade to VIP anytime before the event starts by paying the $100 difference. However, we recommend choosing VIP when you register to ensure you receive all bonuses and materials in advance, giving you time to prepare and get the most out of the event."
                }
              ].map((faq, index) => (
                <Card 
                  key={index} 
                  className="border-2 border-primary/10 hover:border-primary/30 transition-all cursor-pointer"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-bold text-base md:text-lg text-foreground">
                        {faq.question}
                      </h4>
                      <ChevronDown 
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {openFaqIndex === index && (
                      <p 
                        className="text-muted-foreground mt-4 pt-4 border-t border-gray-200"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    )}
                  </CardContent>
                </Card>
              ))}


            </div>

            <div className="mt-12 text-center">
              <div className="inline-block px-8 py-6 bg-primary/10 rounded-2xl border-2 border-primary/30">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Still have questions?
                </p>
                <p className="text-muted-foreground">
                  Join the waitlist and we'll answer any questions you have before the event.
                </p>
              </div>
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
