import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Video, Mail, Phone, MapPin, Menu, X, ChevronRight, Globe, Maximize2, MessageCircle, CheckCircle2 } from 'lucide-react';

// Custom Instagram Icon to avoid lucide-react "not found" issues
const InstagramIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('ar');
  const [selectedGallery, setSelectedGallery] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  const content = {
    ar: {
      nav: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'تواصل معنا'],
      heroTitle: <>نلتقط <br /> <span className="text-red-600 underline decoration-2 underline-offset-8">الروح</span> لا الصور</>,
      heroDesc: "في سركل ادفرتيزنغ، نؤمن أن كل لحظة لها قصة تستحق أن تُروى بأعلى جودة فنية وبلمسة إبداعية فريدة.",
      heroBtn1: "احجز جلستك الآن",
      heroBtn2: "شاهد أعمالنا",
      servicesTitle: "خدماتنا الإحترافية",
      portfolioTitle: "معرض الأعمال",
      portfolioDesc: "مجموعة مختارة من أفضل لحظاتنا",
      portfolioViewAll: "عرض الكل",
      contactTitle: <>هل أنت مستعد <br />لخلق شيء مذهل؟</>,
      contactName: "الاسم الكامل",
      contactEmail: "البريد الإلكتروني",
      contactMsg: "أخبرنا عن مشروعك...",
      contactSend: "إرسال الطلب",
      contactSuccess: "تم الإرسال بنجاح! سنتواصل معك قريباً.",
      contactSending: "جاري الإرسال...",
      footerRights: "© 2026 سركل ادفرتيزنغ. جميع الحقوق محفوظة.",
      services: [
        { title: "تصوير فوتوغرافي", desc: "لقطات احترافية تخلد أجمل لحظات العمر بدقة عالية وإضاءة مثالية." },
        { title: "إنتاج سينمائي", desc: "تصوير وإخراج فيديوهات إعلانية وقصص قصيرة بأسلوب سينمائي مبهر." },
        { title: "تعديل احترافي", desc: "معالجة الألوان والترميم الرقمي للصور لتظهر بأفضل حلة ممكنة." }
      ],
      socialSectionTitle: "تابعنا على منصاتنا",
      whatsappBtn: "تواصل معنا عبر واتساب",
      instagramBtn: "تابعنا على إنستغرام"
    },
    en: {
      nav: ['Home', 'Services', 'Portfolio', 'Contact'],
      heroTitle: <>Capturing <br /> <span className="text-red-600 underline decoration-2 underline-offset-8">Soul</span> Not Just Photos</>,
      heroDesc: "At Circle Advertising, we believe every moment has a story worth telling with the highest artistic quality and a unique creative touch.",
      heroBtn1: "Book Your Session",
      heroBtn2: "View Portfolio",
      servicesTitle: "Professional Services",
      portfolioTitle: "Portfolio",
      portfolioDesc: "A curated selection of our best moments",
      portfolioViewAll: "View All",
      contactTitle: <>Ready to <br />Create Magic?</>,
      contactName: "Full Name",
      contactEmail: "Email Address",
      contactMsg: "Tell us about your project...",
      contactSend: "Send Request",
      contactSuccess: "Sent successfully! We'll contact you soon.",
      contactSending: "Sending...",
      footerRights: "© 2026 Circle Advertising. All rights reserved.",
      services: [
        { title: "Photography", desc: "Professional shots that immortalize life's most beautiful moments with high precision." },
        { title: "Cinematography", desc: "Filming and directing cinematic commercials and short stories." },
        { title: "Expert Editing", desc: "Color grading and digital restoration to make your photos look their best." }
      ],
      socialSectionTitle: "Connect With Us",
      whatsappBtn: "Contact us on WhatsApp",
      instagramBtn: "Follow us on Instagram"
    }
  };

  const images = {
    logo: "img/logo.png",
    hero: "/img/hero.jpg", 
    services: [
      "/img/service1.jpg",
      "/img/service2.jpg",
      "/img/service3.jpg"
    ],
    portfolio: [
      "img/p1.jpg", "img/p2.jpg", "img/p3.jpg",
      "img/p4.jpg", "img/p5.jpg", "img/p6.jpg",
      "img/p7.jpg", "img/p8.jpg", "img/p9.jpg"
    ]
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  return (
    <div className={`min-h-screen bg-zinc-950 text-white selection:bg-red-600/30 ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Floating WhatsApp Button - FIXED */}
      <a 
        href="https://wa.me/96170000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        style={{ right: lang === 'en' ? '2rem' : 'auto', left: lang === 'ar' ? '2rem' : 'auto' }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Lightbox Overlay */}
      {selectedGallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-6 overflow-y-auto animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold uppercase italic">{content[lang].portfolioTitle}</h2>
              <button onClick={() => setSelectedGallery(null)} className="p-3 bg-white/10 rounded-full hover:bg-red-600 hover:text-white transition-all">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20">
              {images.portfolio.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-zinc-900">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Portfolio ${idx}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={images.logo} alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Circle'; }} />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic hidden sm:block">Circle Advertising</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse font-medium text-sm uppercase tracking-widest">
            {content[lang].nav.map((item, idx) => (
              <a key={item} href={`#section-${idx}`} className="hover:text-red-600 transition-colors">{item}</a>
            ))}
            <button onClick={toggleLang} className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition-all">
              <Globe className="w-4 h-4" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="section-0" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={images.hero} className="w-full h-full object-cover scale-105 opacity-60" alt="Hero background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight italic uppercase">{content[lang].heroTitle}</h1>
            <p className="text-lg text-zinc-300 mb-8 max-w-lg leading-relaxed">{content[lang].heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#section-3" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-red-600/20">{content[lang].heroBtn1}</a>
              <a href="#section-2" className="border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all">{content[lang].heroBtn2}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="section-1" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase italic">{content[lang].servicesTitle}</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content[lang].services.map((service, index) => (
              <div key={index} className="group bg-zinc-950 p-8 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all">
                <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  {index === 0 ? <Camera className="w-8 h-8" /> : index === 1 ? <Video className="w-8 h-8" /> : <ImageIcon className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{service.desc}</p>
                <img src={images.services[index]} className="w-full h-48 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all" alt={service.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="section-2" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold uppercase italic">{content[lang].portfolioTitle}</h2>
              <p className="text-zinc-500 mt-2">{content[lang].portfolioDesc}</p>
            </div>
            <button onClick={() => setSelectedGallery(true)} className="flex items-center text-red-600 font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
              {content[lang].portfolioViewAll} <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.portfolio.slice(0, 6).map((img, i) => (
              <div key={i} onClick={() => setSelectedGallery(true)} className="aspect-square overflow-hidden rounded-2xl bg-zinc-800 relative group cursor-pointer">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Maximize2 className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - "ERSAL TALAB" CHAGHALE */}
      <section id="section-3" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-red-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-white">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase">{content[lang].contactTitle}</h2>
                <div className="space-y-4 font-bold">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse"><Mail className="w-5 h-5" /> <span>hello@circleadvertising.com</span></div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse"><Phone className="w-5 h-5" /> <span>+961 70 000 000</span></div>
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-md p-8 rounded-3xl">
                {formStatus === 'success' ? (
                  <div className="text-center py-10 animate-fade-in">
                    <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-xl font-bold">{content[lang].contactSuccess}</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input 
                      required
                      type="text" 
                      placeholder={content[lang].contactName} 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border-white/10 rounded-xl p-4 placeholder-white/60 text-white focus:outline-none focus:bg-white/20" 
                    />
                    <input 
                      required
                      type="email" 
                      placeholder={content[lang].contactEmail} 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border-white/10 rounded-xl p-4 placeholder-white/60 text-white focus:outline-none focus:bg-white/20" 
                    />
                    <textarea 
                      required
                      placeholder={content[lang].contactMsg} 
                      rows="4" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/10 border-white/10 rounded-xl p-4 placeholder-white/60 text-white focus:outline-none focus:bg-white/20"
                    ></textarea>
                    <button 
                      disabled={formStatus === 'sending'}
                      className="w-full bg-white text-red-600 font-bold py-4 rounded-xl hover:bg-zinc-100 transition-colors uppercase tracking-widest disabled:opacity-50"
                    >
                      {formStatus === 'sending' ? content[lang].contactSending : content[lang].contactSend}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase italic">{content[lang].socialSectionTitle}</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://wa.me/96170000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border border-white/10 hover:border-green-500/50 bg-white/5 p-8 rounded-2xl transition-all duration-300 w-full max-w-xs flex flex-col items-center"
            >
              <MessageCircle className="w-12 h-12 text-[#25D366] mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold uppercase tracking-widest">{content[lang].whatsappBtn}</span>
            </a>
            <a 
              href="https://instagram.com/circle_advertising" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border border-white/10 hover:border-pink-500/50 bg-white/5 p-8 rounded-2xl transition-all duration-300 w-full max-w-xs flex flex-col items-center"
            >
              <InstagramIcon className="w-12 h-12 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold uppercase tracking-widest">{content[lang].instagramBtn}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-white/5 bg-zinc-950">
        <p>{content[lang].footerRights}</p>
      </footer>
    </div>
  );
};

export default App;