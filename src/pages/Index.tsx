import { Phone, Mail, MapPin, Shield, Users, Building, Eye, Clock, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";
import heroTeam from "@/assets/hero-team.jpg";
import vehicle from "@/assets/vehicle.jpg";
import { Button } from "@/components/ui/button";
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="MyBrada Security Logo" className="h-12 w-12 rounded-full object-cover" />
        <span className="font-heading font-bold text-xl text-foreground">
          MY<span className="text-primary">BRADA</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
        <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
        <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
        <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
      </nav>
      <a href="tel:0333421076">
        <Button variant="hero" size="lg" className="hidden md:flex">
          <Phone className="h-4 w-4" />
          Call Now
        </Button>
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-dark" />
    <div className="absolute inset-0 opacity-20">
      <img src={heroTeam} alt="MyBrada Security Team" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="animate-fade-up">
        <img src={logo} alt="MyBrada Security" className="w-32 h-32 mx-auto mb-8 rounded-full shadow-gold" />
        <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-4">
          A Safe Haven for the Vulnerable
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground mb-6">
          YOUR SAFETY IS<br />
          <span className="text-gradient-gold">OUR MISSION</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Professional protection for businesses, homes, and individuals. 
          We're your trusted partner in building safer communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0333421076">
            <Button variant="hero" size="xl">
              <Phone className="h-5 w-5" />
              033 342 1076
            </Button>
          </a>
          <a href="#services">
            <Button variant="heroOutline" size="xl">
              Our Services
            </Button>
          </a>
        </div>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>24/7 Protection</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span>Armed Response</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          <span>Fighting GBV</span>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: Shield,
    title: "Armed Response",
    description: "Rapid armed response units ready to protect your property 24/7 with trained security professionals.",
  },
  {
    icon: Building,
    title: "Business Security",
    description: "Comprehensive security solutions for businesses including site inspection, access control, and monitoring.",
  },
  {
    icon: Users,
    title: "Residential Protection",
    description: "Keep your home and family safe with our reliable residential security services and patrols.",
  },
  {
    icon: Eye,
    title: "Site Inspection",
    description: "Thorough site assessments to identify vulnerabilities and implement effective security measures.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-up">
        <p className="text-primary font-heading uppercase tracking-widest text-sm mb-4">What We Offer</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Our Security <span className="text-gradient-gold">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ensuring safety from the ground up. Where vigilance meets action.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-secondary p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 shadow-card"
          >
            <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-6 shadow-gold">
              <service.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-4">About MyBrada</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            More Than Just <span className="text-gradient-gold">Security</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our professional team is here to protect what matters most — your home, business, and peace of mind. 
            We provide reliable protection for businesses, homes, and individuals.
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            We're more than just security; we're your trusted partner in building safer communities. 
            MyBrada Security stands boldly against Gender-Based Violence, empowering and protecting 
            the vulnerable while providing safety education.
          </p>
          
          <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-primary/30">
            <Heart className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <p className="font-heading font-bold text-foreground">Fighting Against GBV</p>
              <p className="text-muted-foreground text-sm">Empowering women and providing safety education</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={team1} 
              alt="Security officer conducting inspection" 
              className="rounded-lg shadow-card w-full h-64 object-cover"
            />
            <img 
              src={team2} 
              alt="Site security inspection" 
              className="rounded-lg shadow-card w-full h-64 object-cover mt-8"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gradient-gold p-6 rounded-lg shadow-gold">
            <p className="font-heading font-bold text-4xl text-primary-foreground">24/7</p>
            <p className="text-primary-foreground font-medium">Protection</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-fade-up">
        <p className="text-primary font-heading uppercase tracking-widest text-sm mb-4">Our Team in Action</p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Professional <span className="text-gradient-gold">Excellence</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="group overflow-hidden rounded-lg">
          <img 
            src={team1} 
            alt="Security team officers" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="group overflow-hidden rounded-lg">
          <img 
            src={team3} 
            alt="Armed response team" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="group overflow-hidden rounded-lg">
          <img 
            src={team4} 
            alt="Security officers on patrol" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="group overflow-hidden rounded-lg">
          <img 
            src={vehicle} 
            alt="Armed response vehicle" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="group overflow-hidden rounded-lg">
          <img 
            src={team5} 
            alt="Security operations" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="group overflow-hidden rounded-lg">
          <img 
            src={team6} 
            alt="Professional security team" 
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-heading uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contact <span className="text-gradient-gold">Us Today</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to secure what matters most? Contact us for affordable, 24/7 protection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <a 
            href="tel:0333421076"
            className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:scale-110 transition-transform">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">Call Us</h3>
            <p className="text-primary font-semibold">033 342 1076</p>
          </a>
          
          <a 
            href="mailto:info@mybradamail.co.za"
            className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group"
          >
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:scale-110 transition-transform">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">Email Us</h3>
            <p className="text-primary font-semibold text-sm">info@mybradamail.co.za</p>
          </a>
          
          <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:scale-110 transition-transform">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground text-sm">30 Timber Street, Pietermaritzburg, South Africa, 3201</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="tel:0333421076">
            <Button variant="hero" size="xl">
              <Phone className="h-5 w-5" />
              Get Protected Today
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-card border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MyBrada Security Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg text-foreground">
            MY<span className="text-primary">BRADA</span> SECURITY
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} MyBrada Security. A Safe Haven for the Vulnerable.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
