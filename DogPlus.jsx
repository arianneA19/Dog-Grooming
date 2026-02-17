import React, { useState, useEffect, useRef } from 'react';
import {
  Dog,
  ShowerHead,
  Home,
  CheckCircle,
  Camera,
  Info,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  Scissors,
  Truck,
  CalendarCheck,
  ChevronRight,
  Star,
  Heart,
  Clock,
  Sparkles
} from 'lucide-react';

// --- Scroll Reveal Animation Wrapper ---
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Reusable SVG Waves ---
const SectionWaveTop = ({ color = "fill-white" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180 z-10">
    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={color}></path>
    </svg>
  </div>
);

const SectionWaveBottom = ({ color = "fill-white" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
    <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={color}></path>
    </svg>
  </div>
);

// --- Page Components ---

const HomePage = ({ setActivePage }) => (
  <div className="w-full">
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 flex items-center bg-[#4B0082]">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20">
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
            <Sparkles size={16} className="text-purple-300" />
            <span className="text-sm font-semibold tracking-wide text-purple-100">Premium Mobile Grooming</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Compassionate <br/>
            <span className="text-purple-200">Care for Pets.</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 leading-relaxed max-w-lg opacity-90">
            We bring the luxury salon experience directly to your driveway.
            Stress-free, cage-free, and convenient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://barklet.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#4B0082] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center">
              Book Appointment
            </a>
            <button onClick={() => setActivePage('services')} className="px-8 py-4 bg-[#6A0DAD] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#7B1FA2] transition-all flex items-center justify-center gap-2">
              Our Services <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="relative z-10 hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1588022274191-49b8004f24c3?auto=format&fit=crop&q=80&w=1200" alt="White Poodle" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
      <SectionWaveBottom color="fill-white" />
    </section>

    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#F3E5F5] rounded-full z-0"></div>
             <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" className="relative z-10 rounded-[2rem] shadow-xl w-full object-cover h-[500px]" alt="Grooming love" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#4B0082]">We Bring the Salon <br/><span className="text-purple-400">To Your Doorstep.</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">At Dog Plus, we believe grooming shouldn't be a chore. Our mobile units provide a quiet, cage-free environment where your pet receives undivided attention.</p>
            <ul className="space-y-4">
              {["100% Cage-Free Environment", "One-on-One Personalized Attention", "Premium Organic Products", "Fully Sanitized Mobile Vans"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="bg-[#4B0082] rounded-full p-1"><CheckCircle size={14} className="text-white" /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="pt-32 pb-24 bg-[#F8F5FA] min-h-screen relative">
    <SectionWaveTop color="fill-[#4B0082]" />
    <div className="h-40 bg-[#4B0082] absolute top-0 w-full"></div>
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <RevealOnScroll className="text-center mb-20 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Menu</h2>
        <p className="text-purple-100 text-lg">Premium care designed for the modern pet.</p>
      </RevealOnScroll>
      <div className="space-y-8">
        <RevealOnScroll className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1596797038583-a8d67a104383?auto=format&fit=crop&q=80&w=600" className="w-full md:w-1/3 h-64 object-cover rounded-3xl" alt="Grooming" />
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold text-[#4B0082]">Mobile Grooming</h3>
              <span className="text-2xl font-bold text-gray-900">$85+</span>
            </div>
            <p className="text-gray-600 mb-6">Signature service including hydro-massage bath, blueberry facial, hand fluff drying, and breed-specific haircut.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Full Styling', 'Sanitary Trim', 'Fresh Breath'].map(tag => (
                <span key={tag} className="px-4 py-1 bg-purple-50 text-[#4B0082] rounded-full text-xs font-bold">{tag}</span>
              ))}
            </div>
            <a href="https://barklet.com" className="px-8 py-3 bg-[#4B0082] text-white rounded-full font-bold inline-block">Book This Service</a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </div>
);

// --- Main App ---
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-[#4B0082] selection:text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className={`rounded-full px-6 py-3 flex justify-between items-center transition-all ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border border-gray-100' : 'bg-transparent'}`}>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActivePage('home')}>
              <div className="bg-[#4B0082] p-2 rounded-full text-white"><Dog size={20} /></div>
              <span className={`text-xl font-extrabold ${scrolled || activePage !== 'home' ? 'text-[#4B0082]' : 'text-white'}`}>DOG<span className="text-purple-400">+</span>PLUS</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => setActivePage(link.id)} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activePage === link.id ? 'bg-[#4B0082] text-white' : (scrolled || activePage !== 'home' ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10')}`}>
                  {link.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-[#4B0082]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu className={!scrolled && activePage === 'home' ? 'text-white' : ''} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'services' && <ServicesPage />}
        {activePage === 'contact' && (
          <div className="pt-40 pb-20 text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4">Reach out at (555) 123-PAWS</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-50 py-12 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Dog Plus Mobile Grooming. Built for furry friends.
        </div>
      </footer>
    </div>
  );
};

export default App;
