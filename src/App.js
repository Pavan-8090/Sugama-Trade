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
  Award,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Maximize2,
  Minimize2,
  RotateCcw,
  RefreshCw,
  Activity,
  TrendingDown,
  DollarSign,
  Bitcoin,
  Ethereum,
  Coins,
  Wallet,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Download,
  Upload,
  Share2,
  Heart,
  Bookmark,
  Filter,
  Search,
  Bell,
  User,
  LogOut,
  Cog,
  HelpCircle,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Link,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  Percent,
  Hash,
  AtSign
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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  


  // Simple cursor following div with error handling
  useEffect(() => {
    const handleMouseMove = (e) => {
      try {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      } catch (err) {
        console.error('Error updating cursor position:', err);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Cursor following effect for 3D cards with error handling
  useEffect(() => {
    const handleMouseMove = (e) => {
      try {
        const cards = document.querySelectorAll('.card-3d-lift');
        
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Calculate distance from cursor to card center
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;
          
          // Calculate rotation based on mouse position
          const rotateX = (deltaY / (rect.height / 2)) * -10; // Max 10 degrees
          const rotateY = (deltaX / (rect.width / 2)) * 10;   // Max 10 degrees
          
          // Apply the rotation using CSS custom properties
          card.style.setProperty('--rotate-x', `${rotateX}deg`);
          card.style.setProperty('--rotate-y', `${rotateY}deg`);
          
          // Add cursor-follow class when hovering
          if (e.target.closest('.card-3d-lift') === card) {
            card.classList.add('cursor-follow');
          } else {
            card.classList.remove('cursor-follow');
          }
        });
      } catch (err) {
        console.error('Error in 3D card effect:', err);
      }
    };

    const handleMouseLeave = () => {
      try {
        const cards = document.querySelectorAll('.card-3d-lift');
        cards.forEach(card => {
          card.classList.remove('cursor-follow');
          card.style.setProperty('--rotate-x', '0deg');
          card.style.setProperty('--rotate-y', '0deg');
        });
      } catch (err) {
        console.error('Error in mouse leave handler:', err);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        // Load World's Best Premium Fonts including Noto Serif Devanagari
  useEffect(() => {
    const loadFonts = async () => {
      try {
        setIsLoading(true);
        // Load multiple premium font families
        const fontLinks = [
          // Clash Display - Premium display font
          'https://fonts.cdnfonts.com/css/clash-display',
          // General Sans - Modern geometric sans-serif
          'https://fonts.cdnfonts.com/css/general-sans',
          // Cabinet Grotesk - Premium variable font
          'https://fonts.cdnfonts.com/css/cabinet-grotesk',
          // Google Fonts - Premium selections including Noto Serif Devanagari
          'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800&family=Albert+Sans:wght@100;200;300;400;500;600;700;800;900&family=Onest:wght@100;200;300;400;500;600;700;800;900&family=Geist:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&family=Noto+Serif+Devanagari:wght@100;200;300;400;500;600;700;800;900&display=swap'
        ];

        const loadPromises = fontLinks.map(href => {
          return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.href = href;
            link.rel = 'stylesheet';
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
          });
        });

        await Promise.all(loadPromises);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading fonts:', err);
        setError('Failed to load fonts');
        setIsLoading(false);
      }
    };

    loadFonts();
    
    // Add sophisticated typography styles and animations
    const style = document.createElement('style');
    style.textContent = `
      /* Premium Typography System */
      .font-clash { font-family: 'Clash Display', sans-serif; }
      .font-general { font-family: 'General Sans', sans-serif; }
      .font-cabinet { font-family: 'Cabinet Grotesk', sans-serif; }
      .font-albert { font-family: 'Albert Sans', sans-serif; }
      .font-onest { font-family: 'Onest', sans-serif; }
      .font-geist { font-family: 'Geist', sans-serif; }
      .font-jetbrains { font-family: 'JetBrains Mono', monospace; }
      .font-devanagari { font-family: 'Noto Serif Devanagari', serif; }
      
      /* Advanced Text Gradients */
      .text-gradient-primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .text-gradient-secondary {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .text-gradient-tech {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .text-gradient-premium {
        background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      /* Sophisticated Text Shadows */
      .text-shadow-soft {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .text-shadow-glow {
        text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      }
      
      .text-shadow-neon {
        text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4);
      }
      
      /* Advanced Letter Spacing */
      .tracking-tight { letter-spacing: -0.025em; }
      .tracking-wide { letter-spacing: 0.025em; }
      .tracking-wider { letter-spacing: 0.05em; }
      .tracking-widest { letter-spacing: 0.1em; }
      
      /* Premium Line Heights */
      .leading-tight { line-height: 1.25; }
      .leading-snug { line-height: 1.375; }
      .leading-normal { line-height: 1.5; }
      .leading-relaxed { line-height: 1.625; }
      .leading-loose { line-height: 2; }
      
      /* Text Animation Effects */
      @keyframes textGlow {
        0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
      }
      
      @keyframes textFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      @keyframes textPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      .animate-text-glow {
        animation: textGlow 2s ease-in-out infinite;
      }
      
      .animate-text-float {
        animation: textFloat 3s ease-in-out infinite;
      }
      
      .animate-text-pulse {
        animation: textPulse 2s ease-in-out infinite;
      }
      
      /* Custom blink animation for smart routing section */
      @keyframes sectionBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      
      .smart-routing-container:hover {
        animation: sectionBlink 0.8s ease-in-out;
      }
      
      /* Premium Typography Classes */
      .hero-title {
        font-family: 'Noto Serif Devanagari', serif;
        font-weight: 700;
        font-size: clamp(2.5rem, 5vw, 4.5rem);
        line-height: 1.1;
        letter-spacing: -0.02em;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .section-title {
        font-family: 'Noto Serif Devanagari', serif;
        font-weight: 600;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        line-height: 1.2;
        letter-spacing: -0.01em;
      }
      
      .body-text {
        font-family: 'Noto Serif Devanagari', serif;
        font-weight: 400;
        line-height: 1.6;
        letter-spacing: 0.01em;
      }
      
      .accent-text {
        font-family: 'Noto Serif Devanagari', serif;
        font-weight: 500;
        letter-spacing: 0.02em;
      }
      
      .code-text {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 400;
        letter-spacing: 0.02em;
      }
      
      /* Marquee animations */
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
      
      /* Advanced 3D Effects and Lift Styling */
      .card-3d-lift {
        transform: translateY(0) translateZ(0);
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: 
          0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06),
          0 0 0 0 rgba(59, 130, 246, 0);
      }
      
      .card-3d-lift:hover {
        transform: translateY(-12px) translateZ(20px);
        box-shadow: 
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(59, 130, 246, 0.1),
          0 0 40px rgba(59, 130, 246, 0.15),
          0 0 80px rgba(147, 51, 234, 0.1);
      }
      
      .card-3d-lift.cursor-follow {
        transform: translateY(-12px) translateZ(20px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
        transition: transform 0.1s ease-out;
      }
      
      .card-3d-lift.cursor-follow .icon-3d-container {
        transform: translateZ(30px) rotateY(calc(var(--rotate-y, 0deg) * 0.5)) rotateX(calc(var(--rotate-x, 0deg) * 0.3));
        transition: transform 0.1s ease-out;
      }
      
      .card-3d-lift.cursor-follow .text-3d-lift {
        transform: translateZ(20px) translateX(calc(var(--rotate-y, 0deg) * 0.1px)) translateY(calc(var(--rotate-x, 0deg) * 0.1px));
        transition: transform 0.1s ease-out;
      }
      
      /* Enhanced Feature Cards with Multiple Colors */
      .feature-card-enhanced {
        position: relative;
        transform-style: preserve-3d;
        perspective: 1000px;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .feature-card-enhanced::before {
        content: '';
        position: absolute;
        inset: -3px;
        background: linear-gradient(45deg, 
          var(--border-color-1, #3b82f6), 
          var(--border-color-2, #8b5cf6), 
          var(--border-color-3, #06b6d4), 
          var(--border-color-1, #3b82f6));
        border-radius: 1.5rem;
        opacity: 0;
        transition: opacity 0.6s ease;
        z-index: -1;
        filter: blur(8px);
        animation: borderRotate 3s linear infinite;
      }
      
      .feature-card-enhanced:hover::before {
        opacity: 1;
      }
      
      @keyframes borderRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .feature-card-enhanced .card-inner {
        position: relative;
        background: linear-gradient(135deg, 
          var(--bg-color-1, rgba(31, 41, 55, 0.8)), 
          var(--bg-color-2, rgba(17, 24, 39, 0.8)));
        border-radius: 1rem;
        padding: 1.5rem;
        border: 2px solid transparent;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        backdrop-filter: blur(20px);
      }
      
      .feature-card-enhanced:hover .card-inner {
        transform: translateZ(10px) rotateX(2deg) rotateY(2deg);
        border-color: var(--border-color-1, #3b82f6);
        box-shadow: 
          0 25px 50px -12px rgba(0, 0, 0, 0.4),
          0 0 0 1px var(--border-color-1, #3b82f6),
          0 0 40px var(--border-color-1, #3b82f6),
          0 0 80px var(--border-color-2, #8b5cf6);
      }
      
      .feature-card-enhanced .icon-container {
        position: relative;
        width: 4rem;
        height: 4rem;
        margin: 0 auto 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        background: linear-gradient(135deg, 
          var(--icon-bg-1, rgba(59, 130, 246, 0.2)), 
          var(--icon-bg-2, rgba(139, 92, 246, 0.2)));
      }
      
      .feature-card-enhanced:hover .icon-container {
        transform: translateZ(30px) scale(1.1) rotateY(10deg);
        background: linear-gradient(135deg, 
          var(--icon-bg-1, rgba(59, 130, 246, 0.4)), 
          var(--icon-bg-2, rgba(139, 92, 246, 0.4)));
        box-shadow: 
          0 10px 30px rgba(0, 0, 0, 0.3),
          0 0 20px var(--icon-color, #3b82f6);
      }
      
      .feature-card-enhanced .icon-container svg {
        color: var(--icon-color, #3b82f6);
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .feature-card-enhanced:hover .icon-container svg {
        color: var(--icon-hover-color, #60a5fa);
        transform: scale(1.2);
      }
      
      .feature-card-enhanced .content {
        transform: translateZ(0);
        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .feature-card-enhanced:hover .content {
        transform: translateZ(5px);
      }
      
      .feature-card-enhanced h3 {
        font-family: 'Noto Serif Devanagari', serif;
        font-weight: 600;
        font-size: 1.1rem;
        color: white;
        text-align: center;
        margin-bottom: 0.75rem;
        transition: color 0.6s ease;
      }
      
      .feature-card-enhanced:hover h3 {
        color: white !important;
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4);
        font-weight: 700;
      }
      
      .feature-card-enhanced p {
        font-family: 'Noto Serif Devanagari', serif;
        font-size: 0.875rem;
        color: #9ca3af;
        text-align: center;
        line-height: 1.5;
        transition: color 0.6s ease;
      }
      
      .feature-card-enhanced:hover p {
        color: #f3f4f6 !important;
        text-shadow: 0 0 10px rgba(243, 244, 246, 0.6);
        font-weight: 500;
      }
      
      /* Floating particles for enhanced cards */
      .feature-card-enhanced .particles {
        position: absolute;
        inset: 0;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.6s ease;
        pointer-events: none;
      }
      
      .feature-card-enhanced:hover .particles {
        opacity: 1;
      }
      
      .feature-card-enhanced .particle {
        position: absolute;
        border-radius: 50%;
        animation: particleFloat 3s ease-in-out infinite;
      }
      
      @keyframes particleFloat {
        0%, 100% { 
          transform: translateY(0px) scale(1);
          opacity: 0.7;
        }
        50% { 
          transform: translateY(-10px) scale(1.2);
          opacity: 1;
        }
      }
      
      /* Enhanced Smart Routing Section Effects */
      .smart-routing-container {
        position: relative;
        overflow: hidden;
      }
      
      .smart-routing-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
          rgba(34, 197, 94, 0.1) 0%, 
          rgba(16, 185, 129, 0.1) 25%, 
          rgba(5, 150, 105, 0.1) 50%, 
          rgba(34, 197, 94, 0.1) 75%, 
          rgba(16, 185, 129, 0.1) 100%);
        opacity: 0;
        transition: opacity 0.8s ease;
        z-index: 1;
      }
      
      .smart-routing-container:hover::before {
        opacity: 1;
        animation: routingGradientShift 4s ease-in-out infinite;
      }
      
      @keyframes routingGradientShift {
        0%, 100% { 
          background-position: 0% 50%;
        }
        50% { 
          background-position: 100% 50%;
        }
      }
      
      .smart-routing-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, #22c55e, #10b981);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 2rem;
        font-weight: 700;
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
        position: relative;
        overflow: hidden;
        transition: all 0.6s ease;
        box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
      }
      
      .smart-routing-badge::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent, 
          rgba(255, 255, 255, 0.4), 
          transparent);
        transition: left 0.8s ease;
      }
      
      .smart-routing-badge:hover::before {
        left: 100%;
      }
      
      .smart-routing-badge:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 
          0 15px 35px rgba(34, 197, 94, 0.5),
          0 0 30px rgba(34, 197, 94, 0.6);
      }
      
      .smart-routing-title {
        font-family: 'Noto Serif Devanagari', serif;
        font-weight: 800;
        font-size: clamp(2.5rem, 5vw, 4rem);
        line-height: 1.1;
        margin-bottom: 1.5rem;
        position: relative;
        transition: all 0.6s ease;
      }
      
      .smart-routing-title .gradient-text {
        background: linear-gradient(135deg, 
          #60a5fa 0%, 
          #8b5cf6 25%, 
          #ec4899 50%, 
          #8b5cf6 75%, 
          #60a5fa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 200% 200%;
        animation: titleGradient 3s ease-in-out infinite;
      }
      
      @keyframes titleGradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .smart-routing-container:hover .smart-routing-title .gradient-text {
        animation: titleGradient 1.5s ease-in-out infinite;
      }
      
      .smart-routing-description {
        font-family: 'Noto Serif Devanagari', serif;
        font-size: 1.125rem;
        line-height: 1.7;
        color: #d1d5db;
        position: relative;
        transition: all 0.6s ease;
        margin-bottom: 2rem;
      }
      
      .smart-routing-container:hover .smart-routing-description {
        color: #f3f4f6;
        text-shadow: 0 0 15px rgba(34, 197, 94, 0.4);
      }
      
      .smart-routing-chat-container {
        position: relative;
        transform-style: preserve-3d;
        perspective: 1200px;
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .smart-routing-chat-container:hover {
        transform: translateZ(40px) rotateY(-8deg) rotateX(5deg);
      }
      
      .smart-routing-chat-container::before {
        content: '';
        position: absolute;
        inset: -6px;
        background: linear-gradient(45deg, 
          #22c55e, #10b981, #059669, #22c55e);
        border-radius: 2rem;
        opacity: 0;
        transition: opacity 0.6s ease;
        z-index: -1;
        filter: blur(15px);
        animation: chatBorderRotate 5s linear infinite;
      }
      
      .smart-routing-chat-container:hover::before {
        opacity: 0.9;
      }
      
      @keyframes chatBorderRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .smart-routing-chat-inner {
        position: relative;
        background: linear-gradient(135deg, 
          rgba(240, 253, 244, 0.95), 
          rgba(220, 252, 231, 0.95));
        border-radius: 1.5rem;
        overflow: hidden;
        border: 3px solid transparent;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        backdrop-filter: blur(20px);
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(34, 197, 94, 0.1);
      }
      
      .smart-routing-chat-container:hover .smart-routing-chat-inner {
        border-color: #22c55e;
        box-shadow: 
          0 40px 80px -12px rgba(0, 0, 0, 0.3),
          0 0 0 1px #22c55e,
          0 0 60px #22c55e,
          0 0 120px rgba(16, 185, 129, 0.4);
      }
      
      .chat-bubble {
        transition: all 0.4s ease;
        transform: translateZ(0);
      }
      
      .smart-routing-chat-container:hover .chat-bubble {
        transform: translateZ(10px);
      }
      
      .chat-bubble:hover {
        transform: translateZ(15px) scale(1.02);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .action-button {
        position: relative;
        overflow: hidden;
        transition: all 0.4s ease;
        transform: translateZ(0);
      }
      
      .action-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent, 
          rgba(255, 255, 255, 0.3), 
          transparent);
        transition: left 0.6s ease;
      }
      
      .action-button:hover::before {
        left: 100%;
      }
      
      .action-button:hover {
        transform: translateZ(5px) translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }
      
      .floating-elements {
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.6s ease;
      }
      
      .smart-routing-chat-container:hover .floating-elements {
        opacity: 1;
      }
      
      .floating-element {
        position: absolute;
        border-radius: 50%;
        animation: floatingBounce 3s ease-in-out infinite;
      }
      
      @keyframes floatingBounce {
        0%, 100% { 
          transform: translateY(0px) scale(1);
          opacity: 0.7;
        }
        50% { 
          transform: translateY(-15px) scale(1.1);
          opacity: 1;
        }
      }
      

      
      .card-3d-lift:active {
        transform: translateY(-8px) translateZ(10px);
        transition: all 0.1s ease;
      }
      
      .feature-card-3d {
        position: relative;
        transform-style: preserve-3d;
        perspective: 1000px;
      }
      
      .feature-card-3d::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
        border-radius: 1rem;
        opacity: 0;
        transition: opacity 0.6s ease;
        transform: translateZ(-1px);
      }
      
      .feature-card-3d:hover::before {
        opacity: 1;
      }
      
      .icon-3d-container {
        transform-style: preserve-3d;
        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .feature-card-3d:hover .icon-3d-container {
        transform: translateZ(30px) rotateY(10deg);
      }
      
      .text-3d-lift {
        transform: translateZ(0);
        transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .feature-card-3d:hover .text-3d-lift {
        transform: translateZ(20px);
      }
      
      .glow-expansion {
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, 
          rgba(59, 130, 246, 0.3), 
          rgba(147, 51, 234, 0.3), 
          rgba(59, 130, 246, 0.3));
        border-radius: 1rem;
        opacity: 0;
        transition: opacity 0.6s ease;
        filter: blur(8px);
        z-index: -1;
      }
      
      .feature-card-3d:hover .glow-expansion {
        opacity: 1;
        animation: glowPulse 2s ease-in-out infinite;
      }
      
      @keyframes glowPulse {
        0%, 100% { 
          opacity: 0.6;
          transform: scale(1);
        }
        50% { 
          opacity: 1;
          transform: scale(1.05);
        }
      }
      
      .depth-shadow {
        box-shadow: 
          0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06),
          0 0 0 1px rgba(59, 130, 246, 0.05);
      }
      
      .depth-shadow:hover {
        box-shadow: 
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04),
          0 0 0 1px rgba(59, 130, 246, 0.1),
          0 0 30px rgba(59, 130, 246, 0.2),
          0 0 60px rgba(147, 51, 234, 0.1);
      }
      

      
      /* Responsive Typography */
      @media (max-width: 768px) {
        .hero-title {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(2rem, 8vw, 3rem);
          line-height: 1.2;
        }
        
        .section-title {
          font-family: 'Noto Serif Devanagari', serif;
          font-size: clamp(1.5rem, 6vw, 2rem);
          line-height: 1.3;
        }
        
        .card-3d-lift:hover {
          transform: translateY(-8px) translateZ(10px);
        }
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
        home: { background: 'transparent', borderColor: 'transparent', blur: 'none' },
        platforms: { background: 'rgba(147, 51, 234, 0.1)', borderColor: 'rgba(147, 51, 234, 0.3)', blur: 'blur(20px)' },
        routing: { background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)', blur: 'blur(20px)' },
        onboarding: { background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)', blur: 'blur(20px)' },
        language: { background: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.3)', blur: 'blur(20px)' },
        query: { background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)', blur: 'blur(20px)' },
        biconomy: { background: 'rgba(147, 51, 234, 0.1)', borderColor: 'rgba(147, 51, 234, 0.3)', blur: 'blur(20px)' },
        features: { background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)', blur: 'blur(20px)' },
        cta: { background: 'rgba(147, 51, 234, 0.1)', borderColor: 'rgba(147, 51, 234, 0.3)', blur: 'blur(20px)' }
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

  // Error boundary
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900/50 to-black flex items-center justify-center font-devanagari">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900/50 to-black flex items-center justify-center font-devanagari">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading Sugama Trade...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden font-devanagari antialiased">
              {/* Enhanced Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          {/* Floating particles effect with reduced motion support */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse" aria-hidden="true"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500/40 rounded-full animate-ping" aria-hidden="true"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse" aria-hidden="true"></div>
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
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              {/* Premium Sugama Robot Logo */}
              <div className="flex items-center space-x-3">
                <img 
                  src="/robot_ultra_hd.png" 
                  alt="Sugama Trade Logo" 
                  className="w-10 h-10 object-cover rounded-lg shadow-lg"
                  loading="eager"
                  decoding="async"
                />
                <div className="text-lg font-devanagari font-black bg-gradient-to-r from-pink-400 via-purple-500 to-violet-600 bg-clip-text text-transparent tracking-wider drop-shadow-2xl shadow-black/50 filter drop-shadow-lg hover:scale-105 transition-all duration-300 transform hover:translate-y-[-2px] hover:rotate-1">
                  Sugama Trade
                </div>
              </div>
            </motion.div>



            {/* Trade Button */}
            <motion.a
              href="https://t.me/sugamatradebot"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-devanagari font-semibold py-3 px-8 rounded-2xl transition-all duration-500 flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 overflow-hidden group tracking-wide cursor-pointer"
              aria-label="Start trading on Telegram"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/30 group-hover:to-pink-600/20 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-3">
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-devanagari font-semibold tracking-wide">Trade Now</span>
                <Sparkles className="w-4 h-4 text-yellow-300 group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </motion.a>
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
                <h1 className="text-5xl lg:text-7xl font-devanagari font-black mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
                  The Easiest Way to Trade Perps on Base
                </h1>
                
                {/* Sub-headline */}
                <p className="text-xl mb-8 text-gray-300 leading-relaxed font-devanagari font-medium tracking-wide">
                  Secure, gasless onboarding, and AI-assisted. Powered by Smart Sessions and intelligent trade execution.
                </p>
                
                {/* Feature Description */}
                <p className="text-lg mb-8 text-gray-400 leading-relaxed font-devanagari font-normal tracking-wide">
                  Real-time perp routing across the Base chain — optimized for execution price, fees, and funding using our custom scoring engine.
                </p>
                
                {/* Platform Indicator */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-white">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30">
                    <span className="text-lg font-devanagari font-medium text-blue-200">Live on</span>
                    <ArrowRight className="w-5 h-5 text-blue-300" />
                    <img 
                      src="/base.png" 
                      alt="Base Logo" 
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-lg font-devanagari font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BASE</span>
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
                <h3 className="text-lg font-devanagari font-semibold text-gray-300 mb-3 flex items-center justify-center space-x-2">
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
                    { name: "Avantis", color: "green" },
                    { name: "Base", color: "purple" },
                    { name: "Sugama", color: "green" },
                    { name: "Avantis", color: "green" },
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
                        <span className="text-2xl font-devanagari font-bold text-white group-hover:text-gray-200 transition-colors duration-500">
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
        <section ref={routingRef} id="routing" className="py-20 bg-gray-900 relative overflow-hidden smart-routing-container">
          {/* Enhanced Background with gradient overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            {/* Enhanced Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-500/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-teal-400/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                {/* Enhanced Badge */}
                <div className="smart-routing-badge">
                  <Target className="w-5 h-5" />
                  <span>Smart Routing Across Base</span>
                </div>
                
                {/* Enhanced Main Headline */}
                <h2 className="smart-routing-title">
                  Maximize your returns with<br />
                  <span className="gradient-text">intelligent market selection</span>
                </h2>
                
                {/* Enhanced Description */}
                <p className="smart-routing-description">
                  We compare spread, impact, funding fees, and gas to route you to the best execution venue.
                </p>
              </motion.div>
              
              {/* Right Side - Enhanced Chat Interface Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="smart-routing-chat-container">
                  <div className="smart-routing-chat-inner w-80 h-96 p-4">
                    {/* Floating Elements */}
                    <div className="floating-elements">
                      <div 
                        className="floating-element" 
                        style={{
                          width: '6px',
                          height: '6px',
                          background: '#22c55e',
                          top: '10%',
                          left: '15%',
                          animationDelay: '0s'
                        }}
                      ></div>
                      <div 
                        className="floating-element" 
                        style={{
                          width: '4px',
                          height: '4px',
                          background: '#10b981',
                          top: '70%',
                          right: '20%',
                          animationDelay: '1s'
                        }}
                      ></div>
                      <div 
                        className="floating-element" 
                        style={{
                          width: '5px',
                          height: '5px',
                          background: '#059669',
                          bottom: '20%',
                          left: '25%',
                          animationDelay: '2s'
                        }}
                      ></div>
                    </div>
                    
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
                            <div className="chat-bubble bg-gray-200 rounded-2xl px-4 py-2 max-w-xs">
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
                            <div className="chat-bubble bg-gray-200 rounded-2xl px-4 py-3 max-w-xs">
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
                        <button className="action-button flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                          <BarChart3 className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">Show Best Markets</span>
                        </button>
                        <button className="action-button flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Proceed Trade</span>
                        </button>
                      </div>
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
              <h2 className="hero-title text-center mb-4 animate-text-glow">
                Advanced Trading Features
              </h2>
              <p className="text-xl text-gradient-tech max-w-3xl mx-auto font-devanagari font-medium tracking-wide">
                Experience the future of decentralized trading with our cutting-edge platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Secure Trading",
                  description: "Advanced security protocols and smart contract audits",
                  colors: {
                    borderColor1: '#10b981',
                    borderColor2: '#059669',
                    borderColor3: '#34d399',
                    bgColor1: 'rgba(16, 185, 129, 0.1)',
                    bgColor2: 'rgba(5, 150, 105, 0.1)',
                    iconBg1: 'rgba(16, 185, 129, 0.2)',
                    iconBg2: 'rgba(5, 150, 105, 0.2)',
                    iconColor: '#10b981',
                    iconHoverColor: '#34d399',
                    textHoverColor: '#34d399'
                  }
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Lightning Fast",
                  description: "Sub-second execution with optimized routing",
                  colors: {
                    borderColor1: '#f59e0b',
                    borderColor2: '#d97706',
                    borderColor3: '#fbbf24',
                    bgColor1: 'rgba(245, 158, 11, 0.1)',
                    bgColor2: 'rgba(217, 119, 6, 0.1)',
                    iconBg1: 'rgba(245, 158, 11, 0.2)',
                    iconBg2: 'rgba(217, 119, 6, 0.2)',
                    iconColor: '#f59e0b',
                    iconHoverColor: '#fbbf24',
                    textHoverColor: '#fbbf24'
                  }
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "AI Assisted",
                  description: "Intelligent trade execution and risk management",
                  colors: {
                    borderColor1: '#8b5cf6',
                    borderColor2: '#7c3aed',
                    borderColor3: '#a78bfa',
                    bgColor1: 'rgba(139, 92, 246, 0.1)',
                    bgColor2: 'rgba(124, 58, 237, 0.1)',
                    iconBg1: 'rgba(139, 92, 246, 0.2)',
                    iconBg2: 'rgba(124, 58, 237, 0.2)',
                    iconColor: '#8b5cf6',
                    iconHoverColor: '#a78bfa',
                    textHoverColor: '#a78bfa'
                  }
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Base Chain",
                  description: "Built on Ethereum L2 for low fees and high speed",
                  colors: {
                    borderColor1: '#06b6d4',
                    borderColor2: '#0891b2',
                    borderColor3: '#22d3ee',
                    bgColor1: 'rgba(6, 182, 212, 0.1)',
                    bgColor2: 'rgba(8, 145, 178, 0.1)',
                    iconBg1: 'rgba(6, 182, 212, 0.2)',
                    iconBg2: 'rgba(8, 145, 178, 0.2)',
                    iconColor: '#06b6d4',
                    iconHoverColor: '#22d3ee',
                    textHoverColor: '#22d3ee'
                  }
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="feature-card-enhanced"
                  style={{
                    '--border-color-1': feature.colors.borderColor1,
                    '--border-color-2': feature.colors.borderColor2,
                    '--border-color-3': feature.colors.borderColor3,
                    '--bg-color-1': feature.colors.bgColor1,
                    '--bg-color-2': feature.colors.bgColor2,
                    '--icon-bg-1': feature.colors.iconBg1,
                    '--icon-bg-2': feature.colors.iconBg2,
                    '--icon-color': feature.colors.iconColor,
                    '--icon-hover-color': feature.colors.iconHoverColor,
                    '--text-hover-color': feature.colors.textHoverColor
                  }}
                >
                  <div className="card-inner">
                    {/* Floating Particles */}
                    <div className="particles">
                      <div 
                        className="particle" 
                        style={{
                          width: '4px',
                          height: '4px',
                          background: feature.colors.iconColor,
                          top: '20%',
                          left: '20%',
                          animationDelay: '0s'
                        }}
                      ></div>
                      <div 
                        className="particle" 
                        style={{
                          width: '3px',
                          height: '3px',
                          background: feature.colors.iconHoverColor,
                          top: '60%',
                          right: '25%',
                          animationDelay: '1s'
                        }}
                      ></div>
                      <div 
                        className="particle" 
                        style={{
                          width: '2px',
                          height: '2px',
                          background: feature.colors.borderColor2,
                          bottom: '30%',
                          left: '30%',
                          animationDelay: '2s'
                        }}
                      ></div>
                    </div>
                    
                    {/* Icon Container */}
                    <div className="icon-container">
                      {feature.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
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
              <h2 className="text-4xl font-devanagari font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Ready to Start Trading?
              </h2>
              <p className="text-xl text-blue-300 mb-8">
                Join thousands of traders using the most advanced perpetual trading platform on Base
              </p>
              <a href="https://t.me/sugamatradebot" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/30 group-hover:to-pink-600/20 transition-all duration-500 transform group-hover:scale-110"></div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-semibold tracking-wide">Launch Sugama Trade</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800 py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10zM30 10h10v10H30zM50 10h10v10H50zM10 30h10v10H10zM30 30h10v10H30zM50 30h10v10H50zM10 50h10v10H10zM30 50h10v10H30zM50 50h10v10H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Column 1 - Brand & Mission */}
              <div className="lg:col-span-1">
                                {/* Premium Enhanced Logo */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <img 
                      src="/robot_ultra_hd.png" 
                      alt="Sugama Trade Logo" 
                      className="w-12 h-12 object-cover rounded-xl shadow-xl"
                    />
                    {/* Premium glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                                                                                     <div className="text-2xl font-devanagari font-black bg-gradient-to-r from-pink-400 via-purple-500 to-violet-600 bg-clip-text text-transparent tracking-wider drop-shadow-2xl shadow-black/50 filter drop-shadow-lg hover:scale-105 transition-all duration-300 transform hover:translate-y-[-2px] hover:rotate-1">
                  Sugama Trade
                </div>
                </div>
                
                {/* Enhanced Mission */}
                <div className="mb-8">
                  <h3 className="text-base font-devanagari font-semibold text-white mb-2 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Our Mission
                  </h3>
                  <p className="text-gray-300 font-devanagari leading-relaxed text-sm">
                    We believe in complete decentralization, empowering traders with cutting-edge technology and transparent, secure trading experiences.
                  </p>
                </div>
                
                {/* Enhanced Social Links */}
                <div>
                  <h3 className="text-lg font-devanagari font-semibold text-white mb-4 flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Connect With Us
                  </h3>
                  <div className="flex space-x-6">
                    {/* Premium Twitter/X */}
                    <a href="https://x.com/sugamatrade" target="_blank" rel="noopener noreferrer" className="group relative">
                      <div className="relative w-14 h-14 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110 overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:via-blue-400/30 group-hover:to-blue-600/20 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12"></div>
                        {/* Border glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/50 group-hover:to-blue-600/50 transition-all duration-500"></div>
                        {/* Icon */}
                        <svg className="relative z-10 w-7 h-7 text-white group-hover:text-blue-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        {/* Floating particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </a>
                    
                    {/* Premium Telegram */}
                    <a href="https://t.me/sugamatradebot" target="_blank" rel="noopener noreferrer" className="group relative">
                      <div className="relative w-14 h-14 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110 overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:via-cyan-400/30 group-hover:to-blue-600/20 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12"></div>
                        {/* Border glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-cyan-500/0 group-hover:from-blue-400/50 group-hover:to-cyan-500/50 transition-all duration-500"></div>
                        {/* Icon */}
                        <svg className="relative z-10 w-7 h-7 text-white group-hover:text-cyan-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.479 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        {/* Floating particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </a>
                    
                    {/* Premium Website */}
                    <a href="https://www.sugamatrade.xyz" target="_blank" rel="noopener noreferrer" className="group relative">
                      <div className="relative w-14 h-14 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 group-hover:scale-110 overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-400/0 to-purple-600/0 group-hover:from-purple-500/20 group-hover:via-indigo-400/30 group-hover:to-purple-600/20 transition-all duration-700 transform group-hover:scale-150 group-hover:rotate-12"></div>
                        {/* Border glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/0 to-indigo-500/0 group-hover:from-purple-400/50 group-hover:to-indigo-500/50 transition-all duration-500"></div>
                        {/* Earth/Globe Icon */}
                        <svg className="relative z-10 w-7 h-7 text-white group-hover:text-purple-300 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        {/* Floating particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-2 right-2 w-1 h-1 bg-indigo-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Column 2 - Sugama */}
              <div>
                <h3 className="text-xl font-devanagari font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Sugama
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                      Our Team
                    </a>
                  </li>

                </ul>
              </div>
              
              {/* Column 3 - Development Tools */}
              <div>
                <h3 className="text-xl font-devanagari font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Development Tools
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                      Telegram Bot
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/sugamatrader" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                      Social Trade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></div>
                      Base Explorer
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Column 4 - Community */}
              <div>
                <h3 className="text-xl font-devanagari font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Community
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></div>
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-devanagari text-lg flex items-center group">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></div>
                      Documentation
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            
            {/* Enhanced Copyright */}
            <div className="border-t border-gray-800 mt-16 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 font-devanagari text-center md:text-left mb-4 md:mb-0">
                  <p>&copy; 2024 Sugama Trade. All rights reserved. Built with ❤️ for the decentralized future.</p>
                </div>
                <div className="flex space-x-6 text-sm text-gray-400 font-devanagari">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Cursor Following Div */}
        <div 
          className="fixed pointer-events-none z-50 w-4 h-4 bg-white rounded-full shadow-lg transition-transform duration-100 ease-out will-change-transform"
          style={{
            left: cursorPosition.x - 8,
            top: cursorPosition.y - 8,
            transform: 'translate(0, 0)'
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default App; 