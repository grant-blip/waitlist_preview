import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  CheckCircle2,
  Calendar,
  Users,
  Video,
  Star,
  Clock,
  Gift,
  BookOpen,
  Flame,
  Award,
  Check,
  Coffee,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set event date: February 7, 2026 at 10:00 AM
    const eventDate = new Date("2026-02-07T10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
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
      toast.success("Registration successful! Check your email for details.");
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToWaitlist = () => {
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // SamCart checkout URLs
  const generalCheckoutUrl = 'https://victoriaosulliv.mysamcart.com/checkout/2-day-longevity-reset#samcart-slide-open-right';
  const vipCheckoutUrl = 'https://victoriaosulliv.mysamcart.com/checkout/2-day-longevity-reset-vip#samcart-slide-open-right';

  // SamCart slide checkout trigger functions
  const openGeneralCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    // Create a temporary link and click it to trigger SamCart's slide checkout
    const link = document.createElement('a');
    link.href = generalCheckoutUrl;
    link.click();
  };

  const openVIPCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    // Create a temporary link and click it to trigger SamCart's slide checkout
    const link = document.createElement('a');
    link.href = vipCheckoutUrl;
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Professional Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              The Longevity Reset
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="https://victoriaosullivan.com.au/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="https://victoriaosullivan.com.au/meet-the-team/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About Victoria
            </a>
            <a href="https://victoriaosullivan.com.au/blog/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="https://victoriaosullivan.com.au/contact/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
            <a
              href={vipCheckoutUrl}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 h-10 transition-colors"
            >
              Claim My Spot Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="container py-4 flex flex-col space-y-4">
              <a
                href="https://victoriaosullivan.com.au/"
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="https://victoriaosullivan.com.au/meet-the-team/"
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Victoria
              </a>
              <a
                href="https://victoriaosullivan.com.au/blog/"
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="https://victoriaosullivan.com.au/contact/"
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href={vipCheckoutUrl}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 py-3 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Claim My Spot Now
              </a>
            </nav>
          </div>
        )}

        {/* Event Date Badge - Below Header */}
        <div className="border-t bg-gradient-to-r from-[#F5F1E8] to-[#FFFDF7]">
          <div className="container py-2">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium">February 7-8, 2026</span>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <span className="hidden sm:inline text-muted-foreground">Limited to 100 attendees</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url(/hero-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Split overlay - Dark left for text, light right for Victoria */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-0" />

        {/* Victoria's Image - Desktop Only */}
        <div
          className="hidden md:block absolute right-0 bottom-0 z-5 h-full w-2/5"
          style={{
            backgroundImage: "url(/victoria-hero-new.png)",
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 md:space-y-8 py-12 md:py-16">
            {/* Main Headline */}
            <div className="space-y-4 md:space-y-5">
              <p className="text-xs md:text-sm uppercase tracking-wider text-white/90 font-semibold">
                Attention All Perimenopausal and Menopausal Women
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-luxury-serif font-bold text-white leading-tight">
                You Were Never Meant to Feel This Tired, This Stuck, or This
                Out of Sync.
              </h2>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                Reset your hormones, your metabolism, and your future in just
                2 days.
              </p>
            </div>

            {/* Event Details + Pricing */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full text-base md:text-lg font-medium">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  February 7-8, 2026
                </span>
                <a
                  href={generalCheckoutUrl}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/90 hover:bg-white text-gray-800 rounded-full text-base md:text-lg font-semibold transition-all"
                >
                  From $97
                </a>
                <a
                  href={vipCheckoutUrl}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#B4A57A] hover:bg-[#A89568] text-white rounded-full text-base md:text-lg font-semibold transition-all"
                >
                  <Gift className="w-5 h-5" />
                  VIP $197
                </a>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 max-w-md">
              <p className="text-xs font-medium text-gray-600 uppercase tracking-wider text-center mb-2">
                Event Starts In:
              </p>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="bg-gray-100 text-gray-900 rounded-xl py-1.5 px-2">
                      <div className="text-base md:text-lg font-bold">{timeLeft.days}</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-medium">Days</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 text-gray-900 rounded-xl py-1.5 px-2">
                      <div className="text-base md:text-lg font-bold">{timeLeft.hours}</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-medium">Hours</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 text-gray-900 rounded-xl py-1.5 px-2">
                      <div className="text-base md:text-lg font-bold">{timeLeft.minutes}</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-medium">Mins</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-100 text-gray-900 rounded-xl py-1.5 px-2">
                      <div className="text-base md:text-lg font-bold">{timeLeft.seconds}</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-medium">Secs</p>
                  </div>
                </div>
              </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <a
                href={vipCheckoutUrl}
                className="inline-block w-full md:w-auto bg-[#B4A57A] hover:bg-[#A89568] text-white font-semibold text-lg px-12 py-4 rounded-full transition-all text-center"
              >
                Claim My Spot Now
              </a>

              {/* Simplified Social Proof */}
              <p className="text-base md:text-lg text-white/95">
                <span className="font-bold text-white">68 spots taken</span>{" "}
                •{" "}
                <span className="font-bold text-white">
                  32 spots left
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Video Section */}
      <section
        className="py-16 md:py-24 bg-[#FDF4EB]"
      >
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            {/* Gold pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#B4A57A]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#B4A57A] rounded-full"></div>
              <span className="text-sm font-medium text-[#B4A57A] uppercase tracking-wider">Featured Video</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why The Longevity Reset Is Different
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the science-backed approach that's helping thousands of
              women reclaim their energy, metabolism, and confidence in midlife.
            </p>
          </div>

          <div
            className="relative aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-sm"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://player.vimeo.com/video/1080000343?badge=0&autopause=0&player_id=0&app_id=58479"
              title="The Longevity Reset Sales Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>

      {/* Featured In - Full Width Green Bar with Logo Grid */}
      <section className="w-full overflow-hidden">
        <img src="/media-logos-green-bar.jpg" alt="As Featured In - Media Logos" className="w-full h-auto object-cover" />
      </section>

      {/* Meet Your Host Section */}
      <section
        className="relative min-h-[400px] md:min-h-[560px] flex items-center overflow-hidden border-y"
        style={{
          background:
            "linear-gradient(135deg, #FFFDF7 0%, #F5F1E8 50%, #E8F2E6 100%)",
          borderColor: "#D4AF37",
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Background Image - Desktop */}
        <div
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/victoria-host.png)",
            backgroundSize: "contain",
            backgroundPosition: "17.5% center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Background Image - Mobile */}
        <div
          className="md:hidden absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/victoria-host.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
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
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-gray-900 mb-3 leading-tight">
                  Victoria O'Sullivan
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-primary font-semibold">
                  Functional Medicine Practitioner & Women's Health Specialist
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p className="font-medium italic text-gray-800 border-l-4 border-primary pl-4 py-2 bg-primary/5">
                  "I've been exactly where you are. At 42, I was exhausted,
                  gaining weight despite doing everything 'right,' and feeling
                  like a stranger in my own body. My doctor dismissed my
                  concerns as 'just stress.' That's when I knew something had to
                  change."
                </p>
                <p className="font-medium">
                  With over{" "}
                  <strong className="text-primary">
                    25 years of experience
                  </strong>{" "}
                  in functional medicine, Victoria O'Sullivan has dedicated her
                  career to helping women navigate the complexities of
                  perimenopause and menopause with grace and vitality—because
                  she's lived it herself.
                </p>
                <p>
                  Her evidence-based approach combines cutting-edge research
                  with practical, sustainable strategies that have transformed
                  the lives of{" "}
                  <strong className="text-primary">
                    17,000+ women worldwide
                  </strong>
                  . Victoria doesn't just teach hormone balance—she embodies it.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2 md:pt-4">
                <div
                  className="bg-white rounded-xl p-3 md:p-4 shadow-luxury border text-center"
                  style={{ borderColor: "var(--rose-gold)" }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: "var(--rose-gold)" }}
                  >
                    25+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
                <div
                  className="bg-white rounded-xl p-3 md:p-4 shadow-luxury border text-center"
                  style={{ borderColor: "var(--rose-gold)" }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: "var(--rose-gold)" }}
                  >
                    17K+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Women Helped
                  </div>
                </div>
                <div
                  className="bg-white rounded-xl p-3 md:p-4 shadow-luxury border text-center"
                  style={{ borderColor: "var(--rose-gold)" }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: "var(--rose-gold)" }}
                  >
                    50+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Media Features
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Is For You If Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Video Background with Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-luxury-serif font-bold text-foreground mb-6">
                  This Is For You If...
                </h2>
                <div
                  className="w-24 h-1 mx-auto"
                  style={{ backgroundColor: "var(--champagne-gold)" }}
                ></div>
              </div>

              <div
                className="bg-[#FBF9F7]/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-luxury border-2"
                style={{
                  borderColor: "var(--champagne-gold)",
                  borderWidth: "1px",
                }}
              >
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Checklist Item 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You wake up exhausted, even after 8 hours of sleep. Your
                      body feels heavy, your mind foggy, and you're dragging
                      yourself through the day on sheer willpower and coffee.{" "}
                      <span className="font-bold text-foreground">
                        You're tired of being tired.
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You've tried everything—cutting calories, exercising more,
                      eating "clean"—but the weight keeps creeping on, settling
                      stubbornly around your middle. You feel like your body has
                      turned against you.{" "}
                      <span className="font-bold text-foreground">
                        You're desperate to feel comfortable in your own skin
                        again.
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You're lying awake at 3am, drenched in sweat, throwing off
                      the covers only to pull them back on minutes later. Hot
                      flashes ambush you in meetings, at dinner, in the middle
                      of conversations.{" "}
                      <span className="font-bold text-foreground">
                        You're exhausted by your own body's unpredictability.
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 4 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You walk into a room and forget why. You lose your train
                      of thought mid-sentence. You wonder if this is just
                      "getting older" or if something is seriously wrong.{" "}
                      <span className="font-bold text-foreground">
                        You're scared you're losing yourself.
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 5 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You snap at your partner over nothing. You cry at
                      commercials. You feel rage bubbling under the surface for
                      no reason at all. Your emotions feel like a rollercoaster
                      you can't get off.{" "}
                      <span className="font-bold text-foreground">
                        You're desperate to feel like YOU again.
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 6 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Your doctor says "your labs are normal" and suggests
                      antidepressants or "just dealing with it." You know
                      something is wrong, but you feel dismissed, invisible,
                      unheard.{" "}
                      <span className="font-bold text-foreground">
                        You're done accepting "this is just how it is."
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 7 */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You look in the mirror and barely recognize the woman
                      staring back. You miss your energy, your confidence, your
                      spark. You want to feel vibrant, alive, and powerful
                      again.{" "}
                      <span className="font-bold text-foreground">
                        You're ready to reclaim your body, your health, and your
                        life.
                      </span>
                    </p>
                  </div>

                  {/* Checklist Item 8 - NEW */}
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--rose-gold)" }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      You've spent years putting everyone else first—your
                      career, your family, your responsibilities. Now you're
                      ready to invest in yourself and finally prioritize YOUR
                      health, YOUR energy, YOUR happiness.{" "}
                      <span className="font-bold text-foreground">
                        You deserve to thrive, not just survive.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="bg-primary/10 rounded-2xl p-8 md:p-12 border-2 border-primary">
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    If you nodded your head to even ONE of these...
                  </p>
                  <p className="text-xl text-gray-700 mb-8">
                    The Longevity Reset was created specifically for YOU.
                  </p>
                  <a
                    href={vipCheckoutUrl}
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Yes, This Is Me—I'm Ready
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section - Moved here for optimal conversion */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(to bottom, #FAF8F5 0%, #FFF5F0 100%)",
        }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-luxury-serif font-bold text-foreground mb-4">
              See Real Transformations
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch women share their personal journeys and the life-changing
              results they've achieved with Victoria's approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Video Testimonial 1 */}
            <Card className="border-2 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/843807324?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Sarah M. Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">
                    "I Got My Life Back"
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Lost 12kg, eliminated hot flashes, sleeping 8
                    hours/night—watch Sarah's complete transformation.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Sarah M., Age 48
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonial 2 */}
            <Card className="border-2 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/843807307?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Jennifer K. Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">
                    "No More Hot Flashes!"
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Balanced hormones naturally, regained confidence, off
                    antidepressants—Jennifer's inspiring journey.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Jennifer K., Age 52
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonial 3 */}
            <Card className="border-2 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/843807252?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Michelle R. Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-foreground mb-2">
                    "Balanced & Thriving"
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Restored mental clarity, lost 15kg, energy like her 30s—see
                    Michelle's remarkable results.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Michelle R., Age 55
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - 3 New Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            {/* Video Testimonial 4 */}
            <Card className="border-2 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/843807220?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Client Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Victoria's approach transformed my understanding of my body and health."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      L
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Lisa T.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonial 5 */}
            <Card className="border-2 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/846844123?badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Client Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The results speak for themselves. I finally have my energy back!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      K
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Karen M.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonial 6 */}
            <Card className="border-2 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/852854805?h=678f033de8&badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Client Testimonial"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Life-changing program. I wish I had found Victoria years ago!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      A
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Amanda R.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a
              href={vipCheckoutUrl}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Ready to Write Your Own Success Story?
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section
        id="pricing"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #E8F2E6 0%, #F5F1E8 50%, #FFFDF7 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-luxury-serif font-bold text-foreground mb-4">
                Choose Your Experience
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Both tiers give you access to the complete 2-day transformation
                event. VIP members receive exclusive bonuses worth $361.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* General Admission */}
              <div 
                className="rounded-3xl p-8 border-2 border-white/30 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(149, 165, 145, 0.85)' }}
              >
                {/* Product Mockup Placeholder */}
                <div className="mb-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="w-48 h-64 mx-auto bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center mb-4">
                      <div className="text-white text-center p-6">
                        <p className="text-sm mb-2">The</p>
                        <p className="text-3xl font-luxury-serif font-bold mb-2">Longevity</p>
                        <p className="text-3xl font-luxury-serif font-bold mb-4">Reset</p>
                        <p className="text-xs">Essentials Guide</p>
                        <div className="mt-4 px-3 py-1 rounded text-xs" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                          Victoria O'Sullivan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white text-center mb-2">
                  General Admission
                </h4>
                
                <p className="text-5xl font-bold text-white text-center mb-6">
                  $97
                </p>

                <p className="text-white/90 text-center mb-6 text-lg">
                  Perfect for getting started on your transformation journey.
                </p>

                <ul className="space-y-3 mb-8 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Full access to both days (10am-5pm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>All live training sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Live Q&A with Victoria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Lifetime access to recordings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Private community access</span>
                  </li>
                </ul>

                <a
                  href={generalCheckoutUrl}
                  className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  Register Now
                </a>
              </div>

              {/* VIP Experience */}
              <div 
                className="rounded-3xl p-8 border-2 border-white/30 backdrop-blur-sm relative"
                style={{ backgroundColor: 'rgba(149, 165, 145, 0.85)' }}
              >
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--rose-gold) 0%, #A05566 100%)",
                    }}
                  >
                    ⭐ MOST POPULAR
                  </div>
                </div>

                {/* Product Mockup Placeholder */}
                <div className="mb-8 flex items-center justify-center min-h-[200px]">
                  <div className="flex gap-4 items-center">
                    {/* Phone mockup */}
                    <div className="w-24 h-48 bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center">
                      <div className="text-white text-xs text-center p-2">
                        <p className="font-bold">App</p>
                        <p className="text-[8px] mt-1">Access</p>
                      </div>
                    </div>
                    {/* Book mockup */}
                    <div className="w-40 h-56 bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <p className="text-xs mb-1">The</p>
                        <p className="text-2xl font-luxury-serif font-bold mb-1">Longevity</p>
                        <p className="text-2xl font-luxury-serif font-bold mb-2">Reset</p>
                        <p className="text-[10px] mb-3">Complete Program</p>
                        <div className="px-2 py-1 rounded text-[8px]" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                          Victoria O'Sullivan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white text-center mb-2">
                  VIP Experience
                </h4>
                
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-white/60 line-through">
                    $197
                  </span>
                  <span className="text-5xl font-bold text-white">
                    $177
                  </span>
                </div>

                <div className="inline-block px-4 py-1 rounded-full mb-4 mx-auto block w-fit" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                  <span className="text-sm font-bold text-gray-900">
                    Early Bird Price - Save $20!
                  </span>
                </div>

                <p className="text-white/90 text-center mb-6 text-lg">
                  Best for those who want expert guidance, live coaching, and a supportive community.
                </p>

                <p className="text-white font-bold mb-4">
                  Includes everything in General Admission, plus:
                </p>

                <ul className="space-y-3 mb-8 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Complete Hormone Balancing Guide</strong> - Know exactly which hormones need attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">14-Day Meal Plan & Recipes</strong> - Delicious meals that balance hormones & burn fat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Personalized Protocol Template</strong> - Your custom roadmap to implement immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Workbooks & Progress Trackers</strong> - Stay accountable and see your transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Priority Q&A Access</strong> - Get your questions answered first</span>
                  </li>
                </ul>

                <div className="mb-6 p-4 rounded-xl text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <p className="text-sm font-bold text-white">
                    Total Value: $558
                  </p>
                  <p className="text-xs text-white/80">
                    Early Bird: Just $177 (Regular $197)
                  </p>
                </div>

                <a
                  href={vipCheckoutUrl}
                  className="inline-flex items-center justify-center w-full font-bold py-4 px-8 rounded-full transition-colors text-lg text-gray-900"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--champagne-gold) 0%, #D4AF37 100%)',
                  }}
                >
                  Get the VIP Experience
                </a>
              </div>
            </div>

            {/* Security & Guarantee Badges */}
            <div className="mt-12 space-y-4">
              {/* 100% Guarantee Badge */}
              <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-sm max-w-3xl mx-auto">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">100% Money-Back Guarantee</h4>
                  <p className="text-sm text-gray-700">If you're not completely satisfied after Day 1, we'll refund your investment—no questions asked.</p>
                </div>
              </div>

              {/* Security & Scarcity Message */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm max-w-3xl mx-auto">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Secure SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Your Data Protected</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">Limited to 100 Attendees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Agenda Section - Phone Mockup Design */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Side - Compelling Copy */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-luxury-serif font-bold text-gray-900 mb-6 leading-tight">
                  Want to Feel Like Yourself Again?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In just 2 days, you'll discover exactly what's been holding you back—and walk away with a personalized roadmap to reclaim your energy, balance your hormones, and finally feel like YOU again.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  No more guessing. No more confusion. Just clear, science-backed strategies tailored to your body, your hormones, and your life.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full" style={{ backgroundColor: '#B4A57A' }}>
                    <svg className="w-10 h-10 text-white p-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Day 1: Reboot & Reset</h4>
                    <p className="text-gray-600">Decode your hormones, understand what's sabotaging your metabolism, and discover why your brain craves the foods that keep you stuck.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full" style={{ backgroundColor: '#B4A57A' }}>
                    <svg className="w-10 h-10 text-white p-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Day 2: Build & Sustain</h4>
                    <p className="text-gray-600">Get your personalized eating blueprint, learn about bioidentical hormones, and unlock the secret to thriving in midlife—not just surviving it.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={vipCheckoutUrl}
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-full shadow-lg transition-all hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: '#B4A57A' }}
                >
                  Claim My Spot Now
                </a>
                <p className="text-sm text-gray-500 mt-3">68 spots taken • 32 spots left</p>
              </div>
            </div>

            {/* Right Side - Two Phone Mockups */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 sm:gap-6">
              {/* Day 1 Phone */}
              <div className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] mx-auto sm:mx-0 flex-shrink-0">
                <img
                  src="/phone-day1-final.png"
                  alt="Day 1: Reboot & Reset - Mobile App Interface"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
              {/* Day 2 Phone */}
              <div className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] mx-auto sm:mx-0 flex-shrink-0">
                <img
                  src="/phone-day2-final.png"
                  alt="Day 2: Build & Sustain - Mobile App Interface"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare the Programs - Comparison Table */}
      <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-luxury-serif font-bold text-foreground mb-4">
                Compare the Programs
              </h3>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <div className="text-left">
                  <h4 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">Features</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-xs sm:text-sm md:text-lg font-bold text-gray-900 mb-1">General</h4>
                  <p className="text-xs sm:text-sm text-gray-600">($97)</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xs sm:text-sm md:text-lg font-bold text-gray-900 mb-1">VIP</h4>
                  <p className="text-xs sm:text-sm text-gray-600">($177)</p>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800">Full access to both days (10am-5pm) with all live training sessions</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800">Live Q&A sessions with Victoria to get your specific questions answered</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800">Lifetime access to all session recordings to watch at your own pace</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800">Access to private support community with 17,000+ women</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* VIP ONLY FEATURES */}
                {/* Row 5 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold">Complete Hormone Balancing Guide - Know exactly which hormones need attention</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold">14-Day Meal Plan & Recipes - Delicious meals that balance hormones & burn fat</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 7 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold">Personalized Protocol Template - Your custom roadmap to implement immediately</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 8 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold">Downloadable Workbooks & Progress Trackers - Stay accountable and see your transformation</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 9 */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold">Priority Q&A Access - Get your questions answered first</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Footer with Value */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200">
                <div className="text-left flex items-center">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">Total Value</p>
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">$97</p>
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: 'var(--rose-gold)' }}>$558</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Early Bird: Just $177</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              <a
                href={generalCheckoutUrl}
                className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
              >
                Register - General Admission
              </a>
              <a
                href={vipCheckoutUrl}
                className="inline-flex items-center justify-center w-full font-bold py-4 px-8 rounded-full transition-colors text-lg text-white"
                style={{ 
                  background: 'linear-gradient(135deg, var(--rose-gold) 0%, #A05566 100%)',
                }}
              >
                Register - VIP Experience ⭐
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 border-y"
        style={{
          background: "linear-gradient(to bottom, #F5F1E8 0%, #FAF8F5 100%)",
          borderColor: "#D4AF37",
        }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-luxury-serif font-bold text-foreground mb-4">
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
                  answer:
                    "No problem at all! You'll get <strong>lifetime access to all recordings</strong>, so you can watch at your own pace, rewatch any session, and never miss a thing. Many of our most successful participants watch the recordings on their own schedule.",
                },
                {
                  question:
                    "Is this right for me if I'm already on HRT or bioidentical hormones?",
                  answer:
                    "Absolutely! We cover <strong>both natural and bioidentical hormone approaches</strong>, and you'll learn how to optimize whatever protocol you're currently on. Many women on HRT still struggle with weight, energy, and symptoms because they're missing the other critical pieces—which we'll address in depth.",
                },
                {
                  question:
                    "I've tried everything—diets, supplements, exercise. Why will this work when nothing else has?",
                  answer:
                    "Because this isn't another generic diet or supplement protocol. Victoria's approach is <strong>evidence-based and personalized</strong> to how YOUR body works in perimenopause and menopause. You'll learn exactly why previous approaches failed and get a customized strategy based on your hormones, metabolism, and lifestyle—not a one-size-fits-all plan.",
                },
                {
                  question:
                    "What's the time commitment? I have a busy schedule.",
                  answer:
                    "The live event runs <strong>10am-5pm on February 7-8</strong> (with lunch breaks and Q&A). But remember, you get lifetime access to recordings, so you can watch on your schedule. Plus, the strategies you'll learn are designed to fit into a busy life—not add more stress.",
                },
                {
                  question:
                    "Will I get personalized guidance, or is this just general information?",
                  answer:
                    "You'll get <strong>both</strong>! The curriculum covers comprehensive strategies that work for all women in midlife, PLUS you'll have dedicated Q&A sessions with Victoria to ask YOUR specific questions. You'll also receive personalized protocols based on your symptoms and goals.",
                },
                {
                  question:
                    "What's the difference between General Admission and VIP?",
                  answer:
                    "<strong>General Admission ($97)</strong> includes full access to both days, all training sessions, live Q&A, lifetime recordings, and community access. <strong>VIP ($197)</strong> includes everything in General PLUS $361 worth of exclusive bonuses: Complete Hormone Balancing Guide, 14-Day Meal Plan, Personalized Protocol Template, Workbooks & Trackers, and priority Q&A access. VIP members get their questions answered first and receive actionable tools to implement immediately.",
                },
                {
                  question: "Is VIP worth the extra $100?",
                  answer:
                    "Absolutely! You're getting <strong>$361 in bonuses for just $100 more</strong>—that's $261 in extra value. The VIP bonuses include the exact tools you need to implement what you learn: personalized protocols, meal plans, tracking workbooks, and priority access to Victoria. Most successful participants choose VIP because they want the complete transformation toolkit, not just information.",
                },
                {
                  question: "When do I need to pay?",
                  answer:
                    "Payment is required at registration to secure your spot. You'll choose your tier (General $97 or VIP $197) during checkout. Limited to 100 attendees total, so register early to guarantee your place.",
                },
                {
                  question: "What if I'm in a different time zone?",
                  answer:
                    "The event is scheduled for <strong>Australian Eastern Time (AEST)</strong>, but with lifetime recording access, you can participate from anywhere in the world on your own schedule. Many international participants watch the recordings and submit questions via our private community.",
                },
                {
                  question:
                    "How is this different from other hormone or menopause programs?",
                  answer:
                    "Victoria's approach combines <strong>over 25 years of clinical experience with cutting-edge research</strong> and has helped thousands of women transform their health. Unlike generic programs, you'll get evidence-based strategies tailored to midlife metabolism, ongoing support in our thriving community, and practical tools you can implement immediately—not just theory.",
                },
                {
                  question: "What's included in the VIP bonuses?",
                  answer:
                    "VIP members receive <strong>$361 in exclusive bonuses</strong>: Complete Hormone Balancing Guide ($97 value), 14-Day Meal Plan with Recipes ($67 value), Personalized Protocol Template ($147 value), Downloadable Workbooks & Trackers ($50 value), plus priority Q&A access. These bonuses are designed to help you implement everything you learn immediately and get faster results.",
                },
                {
                  question: "Can I upgrade from General to VIP later?",
                  answer:
                    "Yes! You can upgrade to VIP anytime before the event starts by paying the $100 difference. However, we recommend choosing VIP when you register to ensure you receive all bonuses and materials in advance, giving you time to prepare and get the most out of the event.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/10 hover:border-primary/30 transition-all cursor-pointer"
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-bold text-base md:text-lg text-foreground">
                        {faq.question}
                      </h4>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                          openFaqIndex === index ? "rotate-180" : ""
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
                  Register now and we'll answer any questions you have before
                  the event.
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
            <h3 className="text-3xl md:text-4xl font-luxury-serif font-bold text-foreground mb-4">
              Reserve Your Spot
            </h3>
            <p className="text-lg text-muted-foreground">
              Secure your spot for The Longevity Reset. Limited to 100
              attendees—register now before spots fill up.
            </p>
          </div>

          {/* Guarantee */}
          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-green-900 mb-1 text-lg">
                  100% Satisfaction Guarantee
                </p>
                <p className="text-sm text-green-800">
                  If you don't feel this event was worth 10X what you
                  paid, we'll refund you in full—no questions asked. You
                  have nothing to lose and your health to gain.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* General Admission */}
            <Card className="border-2 border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  General Admission
                </h4>
                <p className="text-4xl font-bold text-gray-900 mb-4">
                  $97
                </p>
                <p className="text-gray-600 mb-6">
                  Full 2-day event access + lifetime recordings
                </p>
                <a
                  href={generalCheckoutUrl}
                  className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  Register Now
                </a>
              </CardContent>
            </Card>

            {/* VIP Experience */}
            <Card className="border-4 shadow-xl hover:shadow-2xl transition-all relative" style={{ borderColor: 'var(--rose-gold)' }}>
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div
                  className="text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--rose-gold) 0%, #A05566 100%)",
                  }}
                >
                  ⭐ MOST POPULAR
                </div>
              </div>
              
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  VIP Experience
                </h4>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-gray-400 line-through">
                    $197
                  </span>
                  <span className="text-4xl font-bold" style={{ color: 'var(--rose-gold)' }}>
                    $177
                  </span>
                </div>
                <div className="inline-block px-4 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                  <span className="text-sm font-bold text-gray-900">
                    Early Bird - Save $20!
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Everything + $361 in exclusive bonuses
                </p>
                <a
                  href={vipCheckoutUrl}
                  className="inline-flex items-center justify-center w-full font-bold py-4 px-8 rounded-full transition-colors text-lg text-white"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--rose-gold) 0%, #A05566 100%)',
                  }}
                >
                  Get VIP Experience ⭐
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter/Community CTA Section */}
      <section
        className="py-20 border-t relative overflow-hidden bg-white"
        style={{
          borderColor: "#D4AF37",
        }}
      >
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Side - Device Mockup */}
              <div className="relative">
                <img
                  src="/longevity-reset-mockup.png"
                  alt="The Longevity Reset on multiple devices"
                  className="w-full h-auto"
                />
              </div>

              {/* Right Side - CTA Copy & Form */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-luxury-serif leading-tight mb-6">
                    <span className="font-normal">join </span>
                    <span className="font-bold">17,000+ women</span>
                    <span className="font-normal"> to get all the </span>
                    <span className="font-normal">
                      resources + tools you need to{" "}
                    </span>
                    <span className="italic text-primary">
                      thrive in midlife
                    </span>
                  </h3>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    Learn the exact strategies to balance your hormones, boost
                    your energy, and reclaim your vitality. From understanding
                    your metabolism to mastering the midlife eating blueprint,
                    Victoria O'Sullivan covers it all in this transformative
                    2-day event!
                  </p>

                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    Register now to secure your spot and receive exclusive bonuses
                    and VIP access to The Longevity Reset.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary/20">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <a
                    href={vipCheckoutUrl}
                    className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
                  >
                    Secure Your Spot Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer id="contact" className="bg-gradient-to-b from-white to-[#F5F1E8] border-t">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Column */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                The Longevity Reset
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Transform your hormones, metabolism, and future in just 2 days with Victoria O'Sullivan's science-backed approach.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/victoriaosullivan.naturopath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/victoriaosullivan.naturopath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://victoriaosullivan.com.au/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://victoriaosullivan.com.au/meet-the-team/" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Victoria
                  </a>
                </li>
                <li>
                  <a href="https://victoriaosullivan.com.au/blog/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://victoriaosullivan.com.au/contact/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@thelongevityreset.com.au" className="hover:text-foreground transition-colors">
                    info@thelongevityreset.com.au
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+61 (0) 123 456 789</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Australia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 The Longevity Reset. All rights reserved.</p>
            <p className="mt-2">Hosted by Victoria O'Sullivan Functional Medicine</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
