import posterImage from "/poster.jpg";
import bannerImage from "/banner.jpg";
import couponImage from "/coupon.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Navigation } from "../components/Navigation";
import { AnnouncementSlider } from "../components/AnnouncementSlider";
import { FloatingShapes } from "../components/FloatingShapes";
import { ServiceCard } from "../components/ServiceCard";
import { SectionHeader } from "../components/SectionHeader";
import {
  Palette,
  Megaphone,
  Layout,
  ShoppingBag,
  Award,
  Ticket,
  Menu,
  FileText,
  BookOpen,
  ArrowRight,
  Send,
  Loader2,
  HelpCircle,
  Clock,
  DollarSign,
  Brush,
  Sparkles,
  Zap,
  MapPin,
  ArrowUp,
  Rocket,
  Package,
  Phone,
  CreditCard,
  ShoppingBag as ShoppingCart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { insertMessageSchema } from "@shared";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("poster");
  const [isCandyCursor, setIsCandyCursor] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Create form data for Formsubmit.co
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('category', values.category);
    formData.append('message', values.message);

    // Submit to Formsubmit.co
    fetch('https://formsubmit.co/ajax/cottoncandydesigns06@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Form submitted successfully:', data);
        form.reset();
        setModalMessage("Thank you for your message! We will get back to you soon.");
        setModalType("success");
        setShowModal(true);
      })
      .catch(error => {
        console.error('Form submission error:', error);
        setModalMessage("Sorry, there was an error submitting your form. Please try again.");
        setModalType("error");
        setShowModal(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  // Scroll effect for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 ${isCandyCursor ? 'cursor-candy' : ''}`}
      style={isCandyCursor ? { cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'28\' font-size=\'28\'>🍬</text></svg>"), auto' } : {}}>
      <Navigation isCandyCursor={isCandyCursor} onCursorToggle={() => setIsCandyCursor(!isCandyCursor)} onMobileMenuToggle={setIsMobileMenuOpen} />
      {!isMobileMenuOpen && <AnnouncementSlider />}

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-10 md:pt-24 md:pb-16 px-6 overflow-hidden">
        {/* Gradient background with radial overlays */}
        <div className="absolute inset-0 -z-20">
          {/* Diagonal gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.95) 0%, 
                hsl(var(--secondary) / 0.85) 100%)`
            }}
          />
          {/* Radial overlays for depth */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)`,
              left: '20%',
              bottom: '20%',
              transform: 'translate(-50%, 50%)'
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.3) 0%, transparent 70%)`,
              right: '20%',
              top: '20%',
              transform: 'translate(50%, -50%)'
            }}
          />
        </div>

        {/* Decorative cloud shapes */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-16 left-10 w-32 h-20 rounded-full opacity-40 blur-md"
            style={{
              background: `radial-gradient(ellipse, hsl(var(--primary) / 0.8) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-40 h-24 rounded-full opacity-40 blur-lg"
            style={{
              background: `radial-gradient(ellipse, hsl(var(--secondary) / 0.8) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-36 h-20 rounded-full opacity-30 blur-xl"
            style={{
              background: `radial-gradient(ellipse, hsl(var(--primary) / 0.7) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-44 h-28 rounded-full opacity-30 blur-2xl"
            style={{
              background: `radial-gradient(ellipse, hsl(var(--secondary) / 0.7) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? `hsl(var(--primary) / 0.6)` : `hsl(var(--secondary) / 0.6)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Decorative geometric shapes */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border-4 border-primary/20 rounded-lg md:block hidden"
            animate={{
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 border-4 border-secondary/20 rounded-full md:block hidden"
            animate={{
              rotate: [0, -45, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 transform rotate-45"
            animate={{
              rotate: [45, 90, 45],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* SVG Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 -z-10">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C150,100 350,0 600,32 C850,64 1050,0 1200,32 L1200,120 L0,120 Z"
              fill={`hsl(var(--primary) / 0.5)`}
            />
            <path
              d="M0,96 C200,32 400,128 600,96 C800,64 1000,128 1200,96 L1200,120 L0,120 Z"
              fill={`hsl(var(--secondary) / 0.4)`}
            />
          </svg>
        </div>

        <FloatingShapes />

        <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Mobile Logo Section - Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative md:hidden mb-3"
          >
            <div className="relative w-full flex items-center justify-center">
              {/* Mobile decorative elements */}
              <div
                className="absolute top-2 right-12 text-3xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍬
              </div>

              <div
                className="absolute bottom-2 left-12 text-3xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🎂
              </div>

              <div
                className="absolute top-8 left-2 text-2xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍭
              </div>

              <div
                className="absolute bottom-8 right-2 text-2xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🧁
              </div>

              <div
                className="absolute top-16 right-16 text-2xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >

              </div>

              <div
                className="absolute bottom-16 left-16 text-2xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >

              </div>

              {/* Mobile Logo Image */}
              <motion.img
                src="/Logo.jpeg"
                alt="CottonCandy Designs Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-2xl border-4 border-white/50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
              Sweet visuals, <br />
              crafted with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">creativity</span>.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
              Stunning posters, banners, and coupons designed in Canva and Adobe XD.
              Elevate your brand with a touch of magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base sm:text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-foreground font-bold text-base sm:text-lg border-2 border-primary/20 hover:border-primary/50 shadow-sm transition-all cursor-pointer"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative md:block hidden"
          >
            {/* Centered Logo - Desktop Only */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Simple candy logos avoiding logo area */}
              <div
                className="absolute top-24 right-12 text-5xl opacity-25"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍬
              </div>

              <div
                className="absolute bottom-24 -left-12 text-5xl opacity-25"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍭
              </div>

              <div
                className="absolute top-20 left-10 text-5xl opacity-25"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🧁
              </div>

              <div
                className="absolute bottom-14 right-4 text-5xl opacity-25"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍰
              </div>

              <div
                className="absolute top-12 right-50 text-5xl opacity-25"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍫
              </div>

              <div
                className="absolute bottom-7 left-50 text-5xl opacity-25"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍦
              </div>

              {/* Restored side candies */}
              <div
                className="absolute top-1/2 left-20 text-4xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🎂
              </div>

              <div
                className="absolute top-1/2 right-2 text-4xl opacity-20"
                style={{
                  background: `linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🍮
              </div>

              {/* Logo Image */}
              <motion.img
                src="/Logo.jpeg"
                alt="CottonCandy Designs Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECHNOLOGIES SECTION --- */}
      <section id="technologies" className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.15) 0%, 
                hsl(var(--secondary) / 0.18) 100%)`
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)`,
              left: '10%',
              top: '30%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)`,
              right: '10%',
              bottom: '30%',
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="My Toolkit" subtitle="Technologies" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Canva", color: "from-blue-400 to-teal-400" },
              { name: "Adobe XD", color: "from-pink-500 to-purple-600" },
              { name: "Figma", color: "from-orange-400 to-pink-500" },
              { name: "Photoshop", color: "from-blue-600 to-cyan-400" }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-primary/10 flex flex-col items-center justify-center text-center gap-4"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">{tech.name[0]}</span>
                </div>
                <h3 className="font-bold text-lg">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.18) 0%, 
                hsl(var(--secondary) / 0.15) 100%)`
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.25) 0%, transparent 70%)`,
              left: '15%',
              top: '20%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)`,
              right: '15%',
              bottom: '20%',
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="What We Do" subtitle="Our Services" />

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Palette}
              title="Poster Design"
              description="Eye-catching posters for events, promotions, and branding that grab attention instantly."
              color="primary"
              delay={0}
            />
            <ServiceCard
              icon={Megaphone}
              title="Banner Ads"
              description="Bold, high-impact visuals that drive clicks and brand visibility."
              color="secondary"
              delay={0}
            />
            <ServiceCard
              icon={Layout}
              title="Logo Design"
              description="Memorable brand marks that capture your identity at a glance."
              color="primary"
              delay={0}
            />
            <ServiceCard
              icon={ShoppingBag}
              title="T-Shirts and Hoodies"
              description="Trendy apparel designs that turn your brand into wearable art."
              color="secondary"
              delay={0}
            />
            <ServiceCard
              icon={Award}
              title="Certificates"
              description="Elegant certificate designs that make every achievement feel premium."
              color="primary"
              delay={0}
            />
            <ServiceCard
              icon={Ticket}
              title="Coupons"
              description="Attractive, conversion-focused coupons that boost sales and promotions."
              color="secondary"
              delay={0}
            />
            <ServiceCard
              icon={Menu}
              title="Menu Cards"
              description="Clean, appetizing menu layouts that make ordering effortless and inviting."
              color="primary"
              delay={0}
            />
            <ServiceCard
              icon={FileText}
              title="Brochure"
              description="Professionally structured brochures that present your services with clarity and style."
              color="secondary"
              delay={0}
            />
            <ServiceCard
              icon={BookOpen}
              title="Pamphlet"
              description="Concise, attention-grabbing pamphlets perfect for quick brand storytelling."
              color="primary"
              delay={0}
            />
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.12) 0%, 
                hsl(var(--secondary) / 0.16) 100%)`
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
              right: '5%',
              top: '25%',
              transform: 'translate(50%, -50%)'
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.25) 0%, transparent 70%)`,
              left: '10%',
              bottom: '30%',
              transform: 'translate(-50%, 50%)'
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Selected Work" subtitle="Portfolio" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Brochure Design", category: "Services Listing", image: "/work1.png" },
              { id: 2, title: "Poster Design", category: "Marketing", image: "/work2.png" },
              { id: 3, title: "Logo Design", category: "Branding", image: "/work3.png" },
              { id: 4, title: "Web Banner", category: "Digital Art", image: "/work4.png" },
              { id: 5, title: "Invitation Design", category: "Print Design", image: "/work5.png" },
              { id: 6, title: "Hoodie & T-ShirtDesign", category: "Apparel Design", image: "/work6.png" }
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                {/* Actual Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/portfolio${item.id}/400/300.jpg`;
                  }}
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-sm mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</span>
                  <h3 className="text-white font-display font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section id="why-choose-us" className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.15) 0%, 
                hsl(var(--secondary) / 0.17) 100%)`
            }}
          />
          <div
            className="absolute w-[550px] h-[550px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.25) 0%, transparent 70%)`,
              left: '20%',
              top: '40%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)`,
              right: '25%',
              bottom: '35%',
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader title="Why Choose Us?" subtitle="Our Strengths" />

          <div className="relative">
            {/* Diagonal accent lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent transform rotate-3 origin-left" />
              <div className="absolute bottom-10 right-0 w-full h-0.5 bg-gradient-to-l from-secondary/20 via-primary/20 to-transparent transform -rotate-3 origin-right" />
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  icon: Palette,
                  title: "Creative Excellence",
                  description: "Every design is crafted with artistic vision and attention to detail, ensuring your brand stands out.",
                  statLabel: "Designs Created",
                  color: "primary"
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  description: "Quick, reliable delivery without compromising quality. Your deadlines are our priority.",
                  statLabel: "Avg Delivery",
                  color: "secondary"
                },
                {
                  icon: DollarSign,
                  title: "Affordable Pricing",
                  description: "High-quality designs that fit your budget. No hidden fees, just great value.",
                  statLabel: "Starting Price",
                  color: "accent"
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
                  whileHover={{
                    y: -15,
                    rotateX: 5,
                    z: 50,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="relative group perspective-1000"
                >
                  {/* Card with unique shape */}
                  <div className="relative bg-white rounded-[3rem] p-10 shadow-2xl border border-white/50 transform-gpu preserve-3d">
                    {/* Animated corner decoration */}
                    <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-${item.color}/30 to-transparent blur-xl group-hover:scale-125 transition-transform duration-700`} />

                    {/* Different logos in random positions */}
                    {i === 0 && (
                      <div className="absolute -top-3 left-2 transform -rotate-6 z-10">
                        <span className="text-yellow-500 font-bold text-4xl">★</span>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="absolute top-2 right-2 transform rotate-12 z-10">
                        <span className="text-green-500 font-bold text-4xl">✓</span>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="absolute top-2 right-1 transform -rotate-3 z-10">
                        <span className="text-blue-500 text-4xl">💎</span>
                      </div>
                    )}

                    {/* Icon without spinning */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title with reveal effect */}
                    <div className="overflow-hidden mb-4">
                      <motion.h3
                        initial={{ x: -50 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.6, duration: 0.5 }}
                        className="text-xl font-bold font-display text-foreground"
                      >
                        {item.title}
                      </motion.h3>
                    </div>

                    {/* Description with typewriter effect */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.8, duration: 0.6 }}
                      className="text-muted-foreground leading-relaxed text-sm"
                    >
                      {item.description}
                    </motion.p>

                    {/* Stat label */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 1, duration: 0.4 }}
                      className={`mt-4 text-xs font-medium text-${item.color} uppercase tracking-wider`}
                    >
                      {item.statLabel}
                    </motion.div>

                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
                      {[...Array(3)].map((_, j) => (
                        <motion.div
                          key={j}
                          className={`absolute w-1 h-1 bg-${item.color} rounded-full opacity-0 group-hover:opacity-60`}
                          initial={{ scale: 0 }}
                          whileHover={{
                            scale: [0, 1, 0],
                            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2 + j * 0.5,
                            ease: "easeInOut",
                            repeatDelay: 0.5
                          }}
                          style={{
                            top: `${20 + j * 30}%`,
                            left: `${10 + j * 30}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- HAVE A DESIGN IN MIND? SECTION --- */}
      <section id="design-consultation" className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.16) 0%, 
                hsl(var(--secondary) / 0.15) 100%)`
            }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)`,
              right: '15%',
              top: '25%',
              transform: 'translate(50%, -50%)'
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)`,
              left: '20%',
              bottom: '30%',
              transform: 'translate(-50%, 50%)'
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
                Have a design <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">in mind?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Turn your vision into reality. Whether it's a bold poster, an eye-catching banner, or a coupon that converts, I’ll craft designs that speak to your audience and elevate your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Category selector */}
              <div className="flex justify-center gap-4 mb-6">
                {["poster", "banner", "coupon"].map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "bg-white text-foreground border-2 border-primary/20 hover:border-primary/50"
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>

              {/* Animated sketch design */}
              <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/25 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/90 to-white/95 rounded-3xl shadow-2xl shadow-secondary/30 border-2 border-primary/30 p-4 h-full flex flex-col justify-center items-center">
                  <AnimatePresence mode="wait">
                    {selectedCategory === "poster" && (
                      <motion.div
                        key="poster"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        {/* Poster sketch */}
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary/10 to-secondary/15 flex items-center justify-center cursor-pointer"
                          style={isCandyCursor ? { cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'28\' font-size=\'28\'>🍬</text></svg>"), auto' } : {}}>
                          <img
                            src="poster.jpg"
                            alt="Poster Sketch"
                            className="w-full h-full object-contain"
                            onLoad={() => console.log("Poster image loaded successfully")}
                            onError={(e) => {
                              console.log("Poster image failed to load, using fallback");
                              e.currentTarget.src = "https://picsum.photos/seed/poster/400/200.jpg";
                            }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedCategory === "banner" && (
                      <motion.div
                        key="banner"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        {/* Banner sketch */}
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-secondary/15 to-primary/12 flex items-center justify-center cursor-pointer"
                          style={isCandyCursor ? { cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'28\' font-size=\'28\'>🍬</text></svg>"), auto' } : {}}>
                          <img
                            src="banner.jpg"
                            alt="Banner Sketch"
                            className="w-full h-full object-contain"
                            onLoad={() => console.log("Banner image loaded successfully")}
                            onError={(e) => {
                              console.log("Banner image failed to load, using fallback");
                              e.currentTarget.src = "https://picsum.photos/seed/banner/400/200.jpg";
                            }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedCategory === "coupon" && (
                      <motion.div
                        key="coupon"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        {/* Coupon sketch */}
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary/12 to-secondary/18 flex items-center justify-center cursor-pointer"
                          style={isCandyCursor ? { cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'28\' font-size=\'28\'>🍬</text></svg>"), auto' } : {}}>
                          <img
                            src="coupon.jpg"
                            alt="Coupon Sketch"
                            className="w-full h-full object-contain"
                            onLoad={() => console.log("Coupon image loaded successfully")}
                            onError={(e) => {
                              console.log("Coupon image failed to load, using fallback");
                              e.currentTarget.src = "https://picsum.photos/seed/coupon/400/200.jpg";
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="py-24 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-20">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.14) 0%, 
                hsl(var(--secondary) / 0.12) 100%)`
            }}
          />
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)`,
              left: '10%',
              top: '35%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
              right: '15%',
              bottom: '25%',
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <SectionHeader title="Common Questions" subtitle="FAQ" />

          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-lg shadow-secondary/20 hover:shadow-secondary/30 border border-white relative overflow-hidden">
            <div className="relative z-10">
              <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">What services does Cottoncandy Designs offer?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    We provide high-quality poster designs, banners, flex designs, coupons, social media creatives, branding materials, and custom graphic solutions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">How can I place an order?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    Simply contact us through the form below, email, or Instagram. Share your requirements, and we'll provide a quote and timeline.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">What is the typical turnaround time?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    Most projects are completed within 2-5 business days depending on complexity and revisions required.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">Do you provide source files?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    Yes, source files are provided for all designs. You'll receive high-resolution files in formats like PNG, JPEG, PDF, and editable source files when applicable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">What software do you use?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    I primarily work with Canva and Adobe XD for design projects, ensuring professional quality and modern design standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">How can I make payment?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    Payment details will be shared after project confirmation. We accept online transfers and UPI payments.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-none">
                  <AccordionTrigger className="text-base sm:text-lg font-display font-semibold hover:text-primary transition-colors bg-background rounded-xl px-4 sm:px-6 py-3 sm:py-4 hover:no-underline data-[state=open]:bg-primary/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-left">Do you provide ongoing support?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 pt-3 sm:pt-4 pb-2 text-pink-600 text-sm sm:text-base leading-relaxed">
                    Absolutely! We offer maintenance packages to keep your website secure and up-to-date. We're partners in your long-term success.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-transparent via-primary/10 to-secondary/10 -z-10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl -z-10" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl -z-10" />

        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeader title="Let's Work Together" subtitle="Contact" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl shadow-primary/20 shadow-secondary/20 border border-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2 rounded-[2.5rem] -z-10" />

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get in touch</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Ready to start your next project? Fill out the form and we'll get back to you.
              </p>

              <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <div>
                    <p className="font-bold text-xs md:text-sm text-primary uppercase tracking-wider">Email</p>
                    <p className="font-semibold text-foreground text-sm md:text-base">cottoncandydesigns06@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div>
                    <p className="font-bold text-xs md:text-sm text-primary uppercase tracking-wider">Instagram</p>
                    <p className="font-semibold text-foreground text-sm md:text-base">cottoncandy.designs_06</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div>
                    <p className="font-bold text-xs md:text-sm text-secondary uppercase tracking-wider">Linkedin</p>
                    <p className="font-semibold text-foreground text-sm md:text-base">CottonCandy Designs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <div>
                    <p className="font-bold text-xs md:text-sm text-secondary uppercase tracking-wider">Contact</p>
                    <p className="font-semibold text-foreground text-sm md:text-base">6381787593</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-semibold text-sm md:text-base">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="h-10 md:h-12 rounded-xl bg-background border-2 border-transparent focus:border-primary/50 focus:ring-0 focus:shadow-lg focus:shadow-primary/20 transition-all text-sm md:text-base text-secondary placeholder:text-secondary/60"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-semibold text-sm md:text-base">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="hello@example.com"
                            {...field}
                            className="h-10 md:h-12 rounded-xl bg-background border-2 border-transparent focus:border-secondary/50 focus:ring-0 focus:shadow-lg focus:shadow-secondary/20 transition-all text-sm md:text-base text-secondary placeholder:text-secondary/60"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-semibold text-sm md:text-base">Category</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-10 md:h-12 rounded-xl bg-background border-2 border-transparent focus:border-primary/50 focus:ring-0 focus:shadow-lg focus:shadow-primary/20 transition-all cursor-pointer text-sm md:text-base text-secondary placeholder:text-secondary/60">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-2 border-border shadow-lg rounded-xl z-50">
                            <SelectItem value="poster" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Poster</SelectItem>
                            <SelectItem value="banner" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Banner</SelectItem>
                            <SelectItem value="brochure" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Brochure</SelectItem>
                            <SelectItem value="tshirt-hoodie" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">T-Shirt and Hoodie Design</SelectItem>
                            <SelectItem value="logo" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Logo</SelectItem>
                            <SelectItem value="coupons" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Coupons</SelectItem>
                            <SelectItem value="invitation" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Invitation</SelectItem>
                            <SelectItem value="certificates" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-pink-600 text-sm">Certificates</SelectItem>
                            <SelectItem value="menu" className="cursor-pointer hover:bg-secondary/10 focus:bg-primary/10 text-pink-600 text-sm">Menu</SelectItem>
                            <SelectItem value="pamphlet" className="cursor-pointer hover:bg-secondary/10 focus:bg-primary/10 text-pink-600 text-sm">Pamphlet</SelectItem>
                            <SelectItem value="brochure" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-secondary text-sm">Brochure</SelectItem>
                            <SelectItem value="tshirt-hoodie" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-secondary text-sm">T-Shirt and Hoodie Design</SelectItem>
                            <SelectItem value="logo" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-secondary text-sm">Logo</SelectItem>
                            <SelectItem value="coupons" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-secondary text-sm">Coupons</SelectItem>
                            <SelectItem value="invitation" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-secondary text-sm">Invitation</SelectItem>
                            <SelectItem value="certificates" className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 text-secondary text-sm">Certificates</SelectItem>
                            <SelectItem value="menu" className="cursor-pointer hover:bg-secondary/10 focus:bg-primary/10 text-secondary text-sm">Menu</SelectItem>
                            <SelectItem value="pamphlet" className="cursor-pointer hover:bg-secondary/10 focus:bg-primary/10 text-secondary text-sm">Pamphlet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-secondary font-semibold text-sm md:text-base">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[120px] md:min-h-[150px] rounded-xl bg-background border-2 border-transparent focus:border-secondary/50 focus:ring-0 focus:shadow-lg focus:shadow-secondary/20 transition-all resize-none text-sm md:text-base text-secondary placeholder:text-secondary/60"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin w-4 h-4 md:w-5 md:h-5" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CottonCandy Designs</h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60 text-sm text-center">© 2026 CottonCandy Designs. All rights reserved.</p>
            <p className="text-white/60 text-sm text-center">Powered by <a href="https://codecraftnet.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Code Craft</a></p>
          </div>
          <div className="flex gap-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-primary transition-colors cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-primary transition-colors cursor-pointer"
            >
              FAQ
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/30 transition-all flex items-center justify-center"
          >
            <Rocket className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${modalType === "success"
                  ? "bg-secondary/20 text-secondary"
                  : "bg-primary/20 text-primary"
                  }`}>
                  {modalType === "success" ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${modalType === "success" ? "text-secondary" : "text-primary"
                  }`}>
                  {modalType === "success" ? "Success!" : "Error!"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {modalMessage}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all shadow-lg ${modalType === "success"
                    ? "bg-gradient-to-r from-secondary to-primary text-white hover:shadow-xl hover:shadow-secondary/30"
                    : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl hover:shadow-primary/30"
                    }`}
                >
                  OK
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
