import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  MessageCircle, 
  ArrowRight, 
  ChevronRight,
  Globe,
  Users,
  Menu,
  X,
  Send,
  BarChart3,
  Check,
  Monitor,
  ArrowUp,
  Star,
  Sparkles,
  Target,
  Rocket,
  Crown,
  Gem,
  Diamond,
  Award
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navStyle, setNavStyle] = useState({
    background: 'transparent',
    borderColor: 'transparent',
    blur: 'none'
  });
  const [heroBlend, setHeroBlend] = useState(0);

  // Section refs
  const homeRef = useRef(null);
  const platformsRef = useRef(null);
  const routingRef = useRef(null);
  const onboardingRef = useRef(null);
  const languageRef = useRef(null);
  const queryRef = useRef(null);
  const biconomyRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  // Load Premium Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Add custom marquee animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 20s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all section positions
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'platforms', ref: platformsRef },
        { id: 'routing', ref: routingRef },
        { id: 'onboarding', ref: onboardingRef },
        { id: 'language', ref: languageRef },
        { id: 'query', ref: queryRef },
        { id: 'biconomy', ref: biconomyRef },
        { id: 'features', ref: featuresRef },
        { id: 'cta', ref: ctaRef }
      ];

      const scrollPosition = window.scrollY + 100;
      let currentSection = 'home';

      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);

      // Update nav style based on active section
      const sectionStyles = {
        home: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(59, 130, 246, 0.5)', blur: 'blur(20px)' },
        platforms: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(147, 51, 234, 0.5)', blur: 'blur(20px)' },
        routing: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(34, 197, 94, 0.5)', blur: 'blur(20px)' },
        onboarding: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(59, 130, 246, 0.5)', blur: 'blur(20px)' },
        language: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(249, 115, 22, 0.5)', blur: 'blur(20px)' },
        query: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(59, 130, 246, 0.5)', blur: 'blur(20px)' },
        biconomy: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(147, 51, 234, 0.5)', blur: 'blur(20px)' },
        features: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(59, 130, 246, 0.5)', blur: 'blur(20px)' },
        cta: { background: 'rgba(0, 0, 0, 0.9)', borderColor: 'rgba(147, 51, 234, 0.5)', blur: 'blur(20px)' }
      };

      setNavStyle(sectionStyles[currentSection] || { background: 'transparent', borderColor: 'transparent', blur: 'none' });

      // Calculate hero blend effect
      if (homeRef.current) {
        const heroRect = homeRef.current.getBoundingClientRect();
        const navHeight = 80; // Navigation height
        const blendStart = navHeight;
        const blendEnd = navHeight + 200; // Blend over 200px
        
        if (heroRect.top <= blendStart && heroRect.bottom >= blendEnd) {
          const progress = (blendStart - heroRect.top) / (blendEnd - blendStart);
          setHeroBlend(Math.min(Math.max(progress, 0), 1));
        } else if (heroRect.top > blendStart) {
          setHeroBlend(0);
        } else if (heroRect.bottom < blendEnd) {
          setHeroBlend(1);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden font-['Outfit'] antialiased">
              {/* Enhanced Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/40 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse"></div>
          </div>
        </div>

      {/* Enhanced Navigation */}
      <nav 
        className="fixed w-full z-50 transition-all duration-700"
        style={{
          background: navStyle.background,
          backdropFilter: navStyle.blur,
          borderBottom: `1px solid ${navStyle.borderColor}`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              {/* Enhanced Robot head logo */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <div className="w-5 h-5 bg-black rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-['Plus_Jakarta_Sans'] font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">Sugama Trade</div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center space-x-8"
            >
              {[
                { id: 'home', label: 'Home', color: 'blue' },
                { id: 'platforms', label: 'Platforms', color: 'purple' },
                { id: 'routing', label: 'Smart Routing', color: 'green' },
                { id: 'onboarding', label: 'Onboarding', color: 'blue' },
                { id: 'language', label: 'AI Trading', color: 'orange' },
                { id: 'query', label: 'One Query', color: 'blue' },
                { id: 'biconomy', label: 'Security', color: 'purple' },
                { id: 'features', label: 'Features', color: 'blue' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                    activeSection === item.id
                      ? `text-${item.color}-300 bg-${item.color}-500/20 border border-${item.color}-500/30`
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 bg-${item.color}-500/20 rounded-lg border border-${item.color}-500/30`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Trade Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-['Plus_Jakarta_Sans'] font-semibold py-3 px-8 rounded-2xl transition-all duration-500 flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/30 group-hover:to-pink-600/20 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-3">
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-['Plus_Jakarta_Sans'] font-semibold">Trade Now</span>
                <Sparkles className="w-4 h-4 text-yellow-300 group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={homeRef} id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
          {/* Hero Background Image with Blend Effect */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full" style={{
              backgroundImage: `url("/hero sugama.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4 - (heroBlend * 0.3), // Fade out as nav blends
              filter: `blur(${heroBlend * 2}px)`, // Add blur effect
              transform: `scale(${1 + heroBlend * 0.05})`, // Slight scale effect
              transition: 'all 0.3s ease-out'
            }}></div>
          </div>
          
          {/* Blend Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(0, 0, 0, ${heroBlend * 0.8}) 0%, 
                rgba(0, 0, 0, ${heroBlend * 0.4}) 50%, 
                rgba(0, 0, 0, 0) 100%)`,
              transition: 'all 0.3s ease-out'
            }}
          ></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
                style={{
                  opacity: 1 - (heroBlend * 0.3), // Fade content slightly
                  transform: `translateY(${heroBlend * 20}px)`, // Move content down slightly
                  transition: 'all 0.3s ease-out'
                }}
              >
                {/* Main Headline */}
                <h1 className="text-5xl lg:text-7xl font-['Plus_Jakarta_Sans'] font-black mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
                  The Easiest Way to Trade Perps on Base
                </h1>
                
                {/* Sub-headline */}
                <p className="text-xl mb-8 text-blue-200 leading-relaxed font-['Outfit'] font-semibold">
                  Secure, gasless onboarding, and AI-assisted. Powered by Smart Sessions and intelligent trade execution.
                </p>
                
                {/* Feature Description */}
                <p className="text-lg mb-8 text-gray-200 leading-relaxed font-['Outfit'] font-medium">
                  Real-time perp routing across the Base chain — optimized for execution price, fees, and funding using our custom scoring engine.
                </p>
                
                {/* Platform Indicator */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-white">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                    <span className="text-lg font-['Outfit'] font-medium text-blue-200">Live on</span>
                    <ArrowRight className="w-5 h-5 text-blue-300" />
                    <span className="text-lg font-['Plus_Jakarta_Sans'] font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BASE</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Side - Empty for Background Robot */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-end"
                style={{
                  opacity: 1 - (heroBlend * 0.4), // Fade more than left content
                  transform: `translateY(${heroBlend * 30}px) scale(${1 - heroBlend * 0.1})`, // Move down and scale
                  transition: 'all 0.3s ease-out'
                }}
              >
                {/* Space for background robot to show through */}
                <div className="w-80 h-96"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trading Platforms Marquee Section */}
        <section ref={platformsRef} id="platforms" className="py-16 bg-black relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title with Enhanced Effects */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-['Outfit'] font-semibold text-gray-300 mb-3 flex items-center justify-center space-x-2">
                  <span>Powered by</span>
                  <img 
                    src="/biconomy.png" 
                    alt="Biconomy Logo" 
                    className="w-12 h-8 object-contain"
                  />
                  <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">Leading Platforms</span>
                </h3>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-4"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
              </motion.div>
            </div>
            
            {/* Enhanced Marquee Container */}
            <div className="relative overflow-hidden">
              {/* Gradient Fade Effects */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
              
              {/* Single Marquee Row with Enhanced Effects */}
              <motion.div 
                className="flex animate-marquee whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-20 mx-8">
                  {[
                    { name: "Avantis", color: "blue" },
                    { name: "Base", color: "purple" },
                    { name: "Sugama", color: "green" },
                    { name: "Avantis", color: "yellow" },
                    { name: "Base", color: "blue" },
                    { name: "Sugama", color: "purple" },
                    { name: "Avantis", color: "green" },
                    { name: "Base", color: "yellow" }
                  ].map((platform, index) => (
                    <div key={index} className="group relative">
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-${platform.color}-500/20 rounded-full blur-xl group-hover:bg-${platform.color}-500/40 transition-all duration-500`}></div>
                      
                      {/* Platform Name with Effects */}
                      <div className="relative flex items-center space-x-3 px-6 py-3 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105">
                        <div className={`w-3 h-3 bg-${platform.color}-500 rounded-full animate-pulse group-hover:animate-ping transition-all duration-500`}></div>
                        <span className="text-2xl font-['Plus_Jakarta_Sans'] font-bold text-white group-hover:text-gray-200 transition-colors duration-500">
                          {platform.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Smart Routing Section */}
        <section ref={routingRef} id="routing" className="py-20 bg-gray-900 relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white"
              >
                {/* Green Heading */}
                <div className="text-green-400 font-['Outfit'] font-bold mb-4 flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Smart Routing Across Base</span>
                </div>
                
                {/* Main Headline */}
                <h2 className="text-4xl lg:text-5xl font-['Plus_Jakarta_Sans'] font-black mb-6 leading-tight">
                  Maximize your returns with<br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">intelligent market selection</span>
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-200 leading-relaxed font-['Outfit'] font-medium">
                  We compare spread, impact, funding fees, and gas to route you to the best execution venue.
                </p>
              </motion.div>
              
              {/* Right Side - Chat Interface Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                {/* Smartphone/Chat Interface */}
                <div className="relative w-80 h-96 bg-green-100 rounded-3xl border-2 border-white p-4 shadow-2xl">
                  {/* Doodle Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='80' cy='30' r='2'/%3E%3Ccircle cx='40' cy='70' r='4'/%3E%3Cpath d='M10 50 Q30 30 50 50 T90 50' stroke='%23000000' stroke-width='1' fill='none'/%3E%3Cpath d='M15 80 Q35 60 55 80 T95 80' stroke='%23000000' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  {/* Chat Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Chat Bubbles */}
                    <div className="space-y-4 mt-4">
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="flex items-end space-x-2">
                          <div className="bg-gray-200 rounded-2xl px-4 py-2 max-w-xs">
                            <p className="text-gray-800 text-sm">Find me the best market for a $100,000 BTC long.</p>
                          </div>
                          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bot Response */}
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          </div>
                          <div className="bg-gray-200 rounded-2xl px-4 py-3 max-w-xs">
                            <p className="text-gray-800 text-sm mb-2">Found 2 optimal markets that could reduce your opening slippage and funding costs.</p>
                            <div className="flex items-center space-x-2">
                              <BarChart3 className="w-4 h-4 text-blue-500" />
                              <span className="text-blue-600 text-sm font-medium">Estimated savings: $980–$1,050 on this position.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-6">
                      <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Show Best Markets</span>
                      </button>
                      <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Proceed Trade</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seamless Onboarding Section */}
        <section ref={onboardingRef} id="onboarding" className="py-20 bg-black relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image Block */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-start"
              >
                {/* Image Container */}
                <div className="relative w-[768px] h-[576px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Trading Chart Interface Image */}
                  <img 
                    src="/su4.png" 
                    alt="Bitcoin Trading Chart Interface" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-500/5 rounded-2xl"></div>
                </div>
              </motion.div>
              
              {/* Right Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white"
              >
                {/* Blue Heading */}
                <div className="text-blue-400 font-semibold mb-4">
                  Seamless Onboarding
                </div>
                
                {/* Main Headline */}
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Start trading in seconds.
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  No wallet setup stress. We handle sessions, approvals, and UX flows — you focus on trading.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Natural Language Trading Section */}
        <section ref={languageRef} id="language" className="py-20 bg-gray-900 relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white"
              >
                {/* Orange Heading */}
                <div className="text-orange-400 font-semibold mb-4">
                  Trade with One Command
                </div>
                
                {/* Main Headline */}
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Effortless trading via natural language.
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  "Open a BTC long with $100 at 10x leverage" — just one message to our AI assistant.
                </p>
              </motion.div>
              
              {/* Right Side - Image Block */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                {/* Image Container */}
                <div className="relative w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Telegram Trading Interface Image */}
                  <img 
                    src="/su2.png" 
                    alt="Telegram Trading Bot Interface" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-orange-500/5 rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* One Query Trading Section */}
        <section ref={queryRef} id="query" className="py-20 bg-black relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image Block */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-start"
              >
                {/* Image Container */}
                <div className="relative w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* AI Trading Flow Illustration */}
                  <img 
                    src="/su5.png" 
                    alt="AI-Powered Trading Flow" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-500/5 rounded-2xl"></div>
                </div>
              </motion.div>
              
              {/* Right Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white"
              >
                {/* Blue Heading */}
                <div className="text-blue-400 font-semibold mb-4">
                  TRADE
                </div>
                
                {/* Main Headline */}
                <h2 className="text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  one query trading
                </h2>
                
                {/* Sub-headline */}
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Focus on trading we got you covered with just a query trading
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  With smart accounts its possible to trade with out approvals for every trade, trading never gets this easier.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Biconomy Smart Sessions Section */}
        <section ref={biconomyRef} id="biconomy" className="py-20 bg-gray-900 relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white"
              >
                {/* Purple Heading */}
                <div className="text-purple-400 font-semibold mb-4">
                  Biconomy Smart Sessions
                </div>
                
                {/* Main Headline */}
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Non-custodial security with<br />
                  <span className="text-blue-400">fine-grained permission control</span>
                </h2>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  No key sharing, no approvals beyond your scope. You control what gets signed.
                </p>
              </motion.div>
              
              {/* Right Side - Image Block */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                {/* Image Container */}
                <div className="relative w-80 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
                  {/* Account Abstraction Security Illustration */}
                  <img 
                    src="/su61.png" 
                    alt="Account Abstraction Security" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-purple-500/5 rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} id="features" className="py-20 bg-gray-900/50 relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/30 to-gray-900/50"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/15 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-['Space_Grotesk'] font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Advanced Trading Features
              </h2>
              <p className="text-xl text-blue-400 max-w-3xl mx-auto">
                Experience the future of decentralized trading with our cutting-edge platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Secure Trading",
                  description: "Advanced security protocols and smart contract audits"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast",
                  description: "Sub-second execution with optimized routing"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "AI Assisted",
                  description: "Intelligent trade execution and risk management"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Base Chain",
                  description: "Built on Ethereum L2 for low fees and high speed"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-110 overflow-hidden"
                >
                  {/* Moving Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/30 group-hover:to-blue-600/20 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/50 group-hover:via-purple-500/70 group-hover:to-blue-500/50 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping group-hover:animate-bounce"></div>
                    <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse group-hover:animate-ping"></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse group-hover:animate-bounce"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/40 group-hover:to-purple-500/40 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                      <div className="text-blue-400 group-hover:text-blue-200 group-hover:scale-110 transition-all duration-500">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-['Space_Grotesk'] font-semibold text-white mb-3 text-center group-hover:text-blue-200 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/15 group-hover:to-blue-500/10 transition-all duration-500 blur-xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} id="cta" className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative overflow-hidden">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/25 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/35 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-['Space_Grotesk'] font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-blue-300 mb-8">
                Join thousands of traders using the most advanced perpetual trading platform on Base
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all duration-300 flex items-center mx-auto space-x-2 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <Send className="w-5 h-5" />
                <span>Start Trading Now</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-l-4 border-purple-500 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Column 1 - Brand & Mission */}
              <div className="md:col-span-1">
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                  <div className="text-2xl font-['Space_Grotesk'] font-bold text-white">SugamaTrade</div>
                </div>
                
                {/* Mission */}
                <div className="mb-6">
                  <h3 className="text-gray-400 font-['Space_Grotesk'] font-semibold mb-2">Our Mission</h3>
                  <p className="text-white">We believe in complete decentralization.</p>
                </div>
                
                {/* Contact */}
                <div className="mb-6">
                  <h3 className="text-gray-400 font-['Space_Grotesk'] font-semibold mb-4">Contact Us</h3>
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Column 2 - Sugama */}
              <div>
                <h3 className="text-gray-400 font-['Space_Grotesk'] font-semibold mb-4">Sugama</h3>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-gray-300 transition-colors">About us</a></li>
                </ul>
              </div>
              
              {/* Column 3 - Design to Code Tools */}
              <div>
                <h3 className="text-gray-400 font-['Space_Grotesk'] font-semibold mb-4">Design to code tools</h3>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-gray-300 transition-colors">Telegram</a></li>
                  <li><a href="#" className="hover:text-gray-300 transition-colors">VS Code</a></li>
                  <li><a href="#" className="hover:text-gray-300 transition-colors">Base Explorer</a></li>
                </ul>
              </div>
              
              {/* Column 4 - Community */}
              <div>
                <h3 className="text-gray-400 font-['Space_Grotesk'] font-semibold mb-4">Commmunity</h3>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-gray-300 transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 SugamaTrade. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App; 