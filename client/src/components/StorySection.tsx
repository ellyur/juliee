import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Sparkles, Compass, Heart, BookOpen, MessageCircle, X } from 'lucide-react';

// Import new images
import lovestory1 from '@assets/lovestory1_1761211706824.jpg';
import lovestory2 from '@assets/lovestory2_1761211706824.jpg';
import lovestory3 from '@assets/lovestory3_1761211706825.jpg';
import lovestory4 from '@assets/lovestory4_1761211706825.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [showFullStoryModal, setShowFullStoryModal] = useState(false);

  const fullStoryText = `We were classmates back in high school. He was the silent type of boy — always wearing a cap and sitting quietly at the back of the room based on what I remember. I, on the other hand, was a boyish type of girl who only focused on my studies.

We didn't have any special interaction back then — just ordinary classmates.

Fast forward to an unexpected day.

One ordinary day, someone suddenly chatted me on Messenger, saying, "Hi, kumusta?" I replied with just a simple, "Hello."

From that simple hi and hello, our conversation grew longer and deeper — until it lasted for a year. At that time, I was in Cebu while he was in Davao. We started our story through a long-distance connection — just through phone calls and messages, yet it felt like we were always close.

During one of our conversations, I mentioned to him how strict my parents were, even though I had already finished my studies. So, I told him, "If your intentions are pure, come and visit our house — show yourself to my parents."

Then suddenly, during the holiday vacation, he went home to Bicol — and it just so happened that I also went home for my year-end vacation.

When we finally saw each other again for the first time since our high school graduation. I honestly didn't know how to react. It was my first time meeting someone I had already built such a deep connection. So instead of a hug or handshake… I went for a fist bump! 😂. He looked at me, a bit confused, wondering why a fist bump — but that moment was just so us — awkward, funny, and unforgettable. And while we were both laughing, I could still feel his nervousness — the kind of nervousness that makes your heart beat fast, yet somehow feels so right. 💖

What made it even funnier was how we showed up that day — I was just wearing my pambahay clothes, while he came in a white shirt, smelling as if he bathed in an entire bottle of perfume. That I could literally smell him even from afar! 😆. I used to think that every love story had to be like a fairy tale, full of grand gestures, surprises and big moments but ours wasn't like that. Our story was made up of simple gestures, quiet moments, and genuine love. There was no extravagant proposal, no big scene — just the two of us, choosing each other in the sincerest way. 💕. Giving me the kind of princess treatment I never thought I'd experience. Who would have thought that someone like me who once prided on being independent in everything would one day find comfort in depending on a man not because I needed it but because I chose to.

And now, on our wedding day, we celebrate not just our love but the journey we've shared. From that simple "Hi, kumusta?" to this moment of saying "I do." After five beautiful years together, we're finally starting a new chapter - proof that even the simplest beginnings can lead to the most beautiful forever. 💍`;

  const storyCards = [
    {
      id: 1,
      title: "From Classmates to Connection",
      shortText: "We were classmates in high school — he was the silent type, I focused on my studies. One day, a simple \"Hi, kumusta?\" on Messenger changed everything. That conversation grew deeper and lasted for a year.",
      image: lovestory1,
      icon: MessageCircle
    },
    {
      id: 2,
      title: "Long Distance Love",
      shortText: "I was in Cebu, he was in Davao. Through phone calls and messages, we built a deep connection. I told him: if your intentions are pure, come visit my parents and show yourself.",
      image: lovestory2,
      icon: Compass
    },
    {
      id: 3,
      title: "The Fist Bump Meeting",
      shortText: "When we finally met after graduation, I was so nervous I went for a fist bump! 😂 I showed up in pambahay clothes while he wore a white shirt, smelling like he bathed in perfume.",
      image: lovestory3,
      icon: Sparkles
    },
    {
      id: 4,
      title: "Our Forever",
      shortText: "Our love story wasn't a fairy tale — it was made of simple gestures and genuine love. After five beautiful years together, we're starting a new chapter. 💍",
      image: lovestory4,
      icon: Heart
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal || !animationsEnabled) return;

    // Detect mobile/tablet viewports
    const isMobile = window.innerWidth < 1024;
    const scrollMultiplier = isMobile ? 3 : 2;
    const scrubValue = isMobile ? 0.3 : 0.2;

    // Create horizontal scrolling animation with dynamic width calculation
    const horizontalScrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - container.offsetWidth),
      ease: "none",
    });

    // Create ScrollTrigger with dynamic end calculation - Give each card much more vertical scroll space
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${(horizontal.scrollWidth - container.offsetWidth) * scrollMultiplier}`,
      pin: true,
      scrub: scrubValue,
      animation: horizontalScrollTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    // Refresh ScrollTrigger after images and fonts load
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Add load listener for window to refresh after fonts and lazy images
    window.addEventListener('load', handleRefresh);

    // Add load listeners to all images to refresh after each image loads
    const images = horizontal.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleRefresh, { once: true });
      }
    });

    // Initial refresh to handle any already loaded content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Animate story cards on load
    gsap.fromTo(".story-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-card",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener('load', handleRefresh);
      images.forEach(img => {
        img.removeEventListener('load', handleRefresh);
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationsEnabled]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="bg-emerald-600 relative overflow-hidden isolate"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* Header */}
      <div className="text-center py-16 sm:py-20 px-4 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black mb-6 sm:mb-8 text-white" data-testid="text-story-title">
            Together Forever
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 text-white/90">
            Scroll to discover our commitment to each other
          </p>
          
          {/* SVG Arrow Indicator */}
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
            <span className="text-xs sm:text-sm text-white/80">Scroll down</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </motion.div>
      </div>
      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef} 
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div 
          ref={horizontalRef}
          className="flex h-full items-center will-change-transform"
          style={{ width: `${storyCards.length * 100 + 100}vw` }}
        >
          {/* Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12"
              style={{ width: '100vw', minWidth: '100vw' }}
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  background: mousePosition[card.id] 
                    ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 40%), rgba(0, 0, 0, 0.05)`
                    : 'rgba(0, 0, 0, 0.05)'
                }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                    <card.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-white" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl leading-relaxed text-white/90" data-testid={`text-story-card-${card.id}-text`}>
                    {card.shortText}
                  </p>

                  {/* Read Full Story Button - Only on last card */}
                  {card.id === 4 && (
                    <button
                      onClick={() => setShowFullStoryModal(true)}
                      className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-white text-emerald-600 hover:bg-white/90 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                      data-testid="button-read-full-story"
                    >
                      <BookOpen className="w-5 h-5" />
                      Read Full Story
                    </button>
                  )}

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px bg-white/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-white/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                    {/* Square image with rounded corners on all screen sizes */}
                    <img
                      src={card.image}
                      alt={`${card.title} moment`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      data-testid={`img-story-card-${card.id}`}
                    />

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final "The Vow" Section */}
          <div className="story-card flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Background SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
                <defs>
                  <radialGradient id="vowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="400" cy="300" r="250" fill="url(#vowGradient)"/>
                
                {/* Decorative hearts */}
                <g className="animate-pulse">
                  <path d="M200,150 C200,140 185,130 175,140 C165,130 155,140 155,150 C155,160 175,180 200,200 C225,180 245,160 245,150 C245,140 235,130 225,140 C215,130 200,140 200,150 Z" 
                        fill="white" opacity="0.2"/>
                  <path d="M600,450 C600,440 585,430 575,440 C565,430 555,440 555,450 C555,460 575,480 600,500 C625,480 645,460 645,450 C645,440 635,430 625,440 C615,430 600,440 600,450 Z" 
                        fill="white" opacity="0.2"/>
                </g>
              </svg>

              <div className="relative z-10 space-y-6 sm:space-y-8">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic font-black mb-6 sm:mb-8 text-white" data-testid="text-story-vow-title">
                  Our Vow
                </h3>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl leading-relaxed italic mb-4 text-white">
                    "Above all, clothe yourselves with love, which binds us all together in perfect harmony."
                  </p>
                  <p className="text-base sm:text-lg font-body text-white/80">
                    Colossians 3:14
                  </p>
                </div>
                
                {/* SVG Hearts decoration */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-white/60"></div>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-white/60"></div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      {showFullStoryModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowFullStoryModal(false)}
          data-testid="modal-full-story-overlay"
        >
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-full-story-content"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowFullStoryModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-colors duration-200 shadow-lg"
              data-testid="button-close-full-story"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Story Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-script italic text-emerald-600 mb-8 text-center">
                Our Love Story
              </h2>
              
              <div className="prose prose-lg max-w-none">
                {fullStoryText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <svg className="w-12 h-12 text-emerald-600 animate-pulse" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default StorySection;
