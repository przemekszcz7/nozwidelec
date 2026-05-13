/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  ArrowRight, 
  ArrowUpRight,
  Menu as MenuIcon,
  X 
} from 'lucide-react';
import { useState } from 'react';

const IMAGES = [
  'https://i.postimg.cc/3JY9mLj2/678231774-122096478290490291-5487522569061861839-n.jpg',
  'https://i.postimg.cc/BQppgxNX/679116572-122097868142490291-4353572363636622827-n.jpg',
  'https://i.postimg.cc/m2jjwQVS/680434956-122098048988490291-7178630437425897769-n.jpg',
  'https://i.postimg.cc/Dy66gq56/681038370-122098049072490291-6671704270626545724-n.jpg',
  'https://i.postimg.cc/Wb88nMS6/682274249-122098049120490291-5533783276560338049-n.jpg',
  'https://i.postimg.cc/4NPP5zw6/682460113-122098343876490291-4415707818873171256-n.jpg',
  'https://i.postimg.cc/9FbbpG1T/682504518-122098344002490291-7211030975369005791-n.jpg',
  'https://i.postimg.cc/sDmmcpKh/682731378-122098344044490291-5910975186829476796-n.jpg',
  'https://i.postimg.cc/dt66B8nR/682934250-122098343834490291-3674201518974502631-n.jpg',
  'https://i.postimg.cc/wT22VhFF/683027191-122098048946490291-8364414347473849409-n.jpg',
  'https://i.postimg.cc/VLggRj4X/683241064-122098343960490291-648952527804301457-n.jpg',
  'https://i.postimg.cc/X7LL8wxX/683716077-122098466234490291-2815645456003471960-n.jpg',
  'https://i.postimg.cc/65cc0dzZ/683834402-122098466150490291-3164904962001303167-n.jpg',
  'https://i.postimg.cc/bNggTQL2/684127011-122098466192490291-7483362250272597268-n.jpg',
  'https://i.postimg.cc/Pryy4mKp/684282483-122098466318490291-1764714521828724965-n.jpg',
  'https://i.postimg.cc/CL77NjJj/686433007-122098343918490291-7812295735270440260-n.jpg',
  'https://i.postimg.cc/RVddRcGW/686489859-122098466276490291-1380550124381157008-n.jpg'
];

const LOGO = 'https://i.postimg.cc/Rq5RDRyp/676127530-122094925430490291-3468934761746806779-n.jpg';

export default function App() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-accent-primary selection:text-text-light overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-8">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between border-b border-text-light/20 pb-4">
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold italic tracking-tighter text-text-light">Nóż Widelec</span>
          </div>

          <div className="hidden md:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-text-light">
            <a href="#menu" className="hover:text-accent-primary transition-colors">Menu</a>
            <a href="#galeria" className="hover:text-accent-primary transition-colors">Galeria</a>
            <a href="#kontakt" className="hover:text-accent-primary transition-colors">Kontakt</a>
            <a 
              href="https://www.facebook.com/profile.php?id=61564708745370" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              Facebook <Facebook className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <button className="md:hidden text-text-light" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-dark flex flex-col p-12"
          >
            <button className="self-end p-2 mb-12" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8 text-text-light" />
            </button>
            <div className="flex flex-col gap-8 text-6xl font-serif italic text-text-light">
              <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
              <a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galeria</a>
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
              <a 
                href="https://www.facebook.com/profile.php?id=61564708745370" 
                target="_blank" 
                rel="noreferrer"
                className="text-2xl font-sans mt-12 flex items-center gap-4 border-t border-text-light/10 pt-12"
              >
                Facebook <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Section 00: Hero */}
        <section className="relative h-[90vh] md:h-screen min-h-[600px] md:min-h-[800px] flex items-center px-6 md:px-20 overflow-hidden bg-bg-dark">
          <div className="absolute inset-0 z-0">
             <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5 }}
              src={IMAGES[2]} 
              alt="Hero image" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
          </div>
          
          <div className="relative z-10 w-full max-w-[1200px] mx-auto mt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[16vw] md:text-[14vw] lg:text-[180px] font-serif italic leading-[0.8] text-text-light mb-12 tracking-tighter">
                Kuchnia <br />
                Domowa.
              </h1>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-text-light/20 pt-8">
                <p className="text-text-light/60 max-w-sm text-base md:text-lg leading-relaxed font-light">
                  Tradycyjne dania ze świeżych składników. 
                  Gołdap, Warsztatowa 2. Domowa pasja w każdym kęsie.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="tel:730336747" 
                    className="flex flex-col items-start gap-3 md:gap-4 px-8 md:px-12 py-8 md:py-10 bg-accent-primary text-text-primary rounded-full hover:bg-accent-dark transition-colors group w-full md:w-auto"
                  >
                    <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">Zadzwoń i zamów</span>
                    <span className="text-2xl md:text-3xl font-serif italic leading-none group-hover:translate-x-2 transition-transform">730 336 747</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bold-divider" />

        {/* Section 01: The Menu */}
        <section id="menu" className="py-24 md:py-40 px-6 md:px-20 bg-bg-primary relative overflow-hidden">
          <span className="section-number">01</span>
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-5 gap-16 md:gap-20">
            <div className="lg:col-span-2">
              <span className="section-label">Nasze Ceny</span>
              <h2 className="text-7xl md:text-9xl font-serif italic text-text-primary mb-8 md:mb-12 leading-none">Prostota.</h2>
              <p className="text-text-secondary text-base md:text-lg leading-loose font-light">
                Stawiamy na przejrzystość i autentyczność. Nasz cennik odzwierciedla domowy charakter naszej kuchni – bez zbędnych komplikacji, za to z dbałością o każdy detal.
              </p>
              
              <div className="mt-12 md:mt-20 space-y-12">
                <blockquote className="text-2xl md:text-3xl font-serif italic text-accent-primary border-l-2 border-accent-muted pl-6 md:pl-8 leading-relaxed">
                  "Połówka czy cały? Wybór należy do Ciebie. Smak pozostaje zawsze tak samo domowy."
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-3 lg:pl-20 md:border-l border-border-warm space-y-16 md:space-y-24">
              <div className="space-y-10 md:space-y-12">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline group cursor-default">
                    <h3 className="text-3xl md:text-6xl font-serif italic group-hover:text-accent-primary transition-colors">Na miejscu</h3>
                    <div className="flex-grow border-b border-dotted border-text-muted/30 mx-4 h-1"></div>
                    <span className="text-xl md:text-2xl font-sans font-medium">17 / 19 zł</span>
                  </div>
                  <p className="text-text-muted text-xs md:text-sm tracking-wide">Pyszny obiad zjedzony w naszej przytulnej kuchni.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline group cursor-default">
                    <h3 className="text-3xl md:text-6xl font-serif italic group-hover:text-accent-primary transition-colors">Z dowozem</h3>
                    <div className="flex-grow border-b border-dotted border-text-muted/30 mx-4 h-1"></div>
                    <span className="text-xl md:text-2xl font-sans font-medium text-accent-primary">20 / 22 zł</span>
                  </div>
                  <p className="text-text-muted text-xs md:text-sm tracking-wide">Cena obejmuje dowóz oraz szczelne opakowanie.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline group cursor-default">
                    <h3 className="text-3xl md:text-6xl font-serif italic group-hover:text-accent-primary transition-colors">Trojak</h3>
                    <div className="flex-grow border-b border-dotted border-text-muted/30 mx-4 h-1"></div>
                    <span className="text-xl md:text-2xl font-sans font-medium">18 / 20 zł</span>
                  </div>
                  <p className="text-text-muted text-xs md:text-sm tracking-wide">Nasze unikalne zestawienie smakowe.</p>
                </div>
              </div>
              
              <div className="p-8 md:p-12 bg-bg-secondary flex flex-col gap-6">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Codziennie świeże</span>
                <p className="text-lg md:text-xl italic font-serif leading-relaxed">Menu zmienia się codziennie, aby zapewnić Państwu najwyższą świeżość produktów.</p>
                <a href="tel:730336747" className="text-accent-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Zapytaj o dzisiejszą kartę <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="bold-divider opacity-10" />

        {/* Section 02: Gallery */}
        <section id="galeria" className="py-24 md:py-40 bg-bg-secondary relative">
          <span className="section-number opacity-10">02</span>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-8 md:gap-12 mb-20 md:mb-32">
              <div className="flex flex-col md:flex-row items-baseline gap-6 md:gap-12">
                <span className="section-label mb-0">Wizualnie</span>
                <h2 className="text-7xl md:text-9xl font-serif italic text-text-primary leading-none">Detale.</h2>
              </div>
              <div className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] text-accent-primary">
                Kolekcja {IMAGES.length} momentów
              </div>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {IMAGES.map((src, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                  className={`relative overflow-hidden break-inside-avoid cursor-zoom-in group bg-bg-primary
                    ${i % 7 === 0 ? 'aspect-[3/4]' : ''}
                    ${i % 5 === 0 ? 'aspect-square' : ''}
                    ${i % 11 === 0 ? 'aspect-video' : ''}
                  `}
                  onClick={() => setSelectedImg(src)}
                >
                  <img 
                    src={src} 
                    alt={`Galeria obraz ${i + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
              
              {/* Central Text Block */}
              <div className="break-inside-avoid p-16 bg-bg-primary border border-border-warm flex flex-col justify-center gap-8 italic font-serif text-3xl leading-relaxed text-text-primary">
                "W naszej kuchni czas płynie inaczej. Każde danie to osobna historia o smaku i tradycji."
              </div>
            </div>
            
            <div className="mt-40 flex flex-col items-center gap-12">
              <div className="w-[1px] h-32 bg-divider-bold/20" />
              <p className="font-serif italic text-2xl text-text-secondary max-w-lg text-center">
                Wszystkie nasze potrawy przygotowujemy z pasją, używając wyłącznie najświeższych składników od lokalnych dostawców.
              </p>
            </div>
          </div>
        </section>

        <div className="bold-divider" />

        {/* Section 03: Location */}
        <section id="kontakt" className="py-24 md:py-40 bg-bg-dark text-text-light relative overflow-hidden">
          <span className="section-number text-white opacity-5">03</span>
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-5 gap-16 md:gap-32">
            <div className="md:col-span-3 order-2 md:order-1">
              <div className="h-[400px] md:h-[600px] w-full rounded-sm grayscale invert contrast-125 brightness-75 hover:grayscale-0 hover:invert-0 hover:brightness-100 transition-all duration-700 overflow-hidden border border-text-light/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2327.8554988105248!2d22.302909177198412!3d54.30650580245026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e16fda528dceab%3A0x9dd02207876638de!2sWarsztatowa%202%2C%2019-500%20Go%C5%82dap!5e0!3m2!1spl!2spl!4v1778656976752!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="md:col-span-2 order-1 md:order-2 flex flex-col justify-center">
              <span className="section-label !text-accent-muted">Kontakt</span>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-10 md:mb-12 tracking-tighter">Odwiedź Nas.</h2>
              <div className="space-y-12 md:space-y-16">
                <div className="border-t border-text-light/10 pt-8 flex flex-col gap-2">
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-text-muted">Lokalizacja</span>
                  <p className="text-xl md:text-2xl font-light leading-snug">
                    Warsztatowa 2, <br />
                    19-500 Gołdap
                  </p>
                  <a href="https://maps.app.goo.gl/9xXpXG9X9X9X9X9X9" target="_blank" rel="noreferrer" className="text-accent-muted text-sm flex items-center gap-2 mt-2 hover:translate-x-2 transition-transform">
                    Nawiguj <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="border-t border-text-light/10 pt-8 flex flex-col gap-2">
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-text-muted">Zamówienia</span>
                  <a href="tel:730336747" className="text-3xl lg:text-5xl font-serif italic hover:text-accent-muted transition-colors truncate">
                    730 336 747
                  </a>
                </div>

                <div className="border-t border-text-light/10 pt-8 flex flex-col gap-2">
                  <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-text-muted">Kuchnia domowa</span>
                  <p className="text-base md:text-lg text-text-muted leading-relaxed font-light italic">
                    Znajdziesz nas codziennie ze świeżym obiadem. Zapraszamy do kontaktu telefonicznego w celu rezerwacji lub zamówienia na wynos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg-dark text-text-light py-16 md:py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto border-t border-text-light/10 pt-16 md:pt-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-20">
          <div>
            <h4 className="text-5xl md:text-6xl font-serif italic leading-none mb-4">Nóż Widelec.</h4>
            <p className="text-text-muted font-light tracking-wide uppercase text-[10px]">Kuchnia Domowa Gołdap</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 md:gap-32">
            <div className="space-y-4">
               <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest opacity-30">Menu</span>
               <div className="flex flex-col gap-2 text-sm">
                 <a href="#menu" className="hover:text-accent-muted transition-colors">Cennik</a>
                 <a href="#galeria" className="hover:text-accent-muted transition-colors">Galeria</a>
                 <a href="#kontakt" className="hover:text-accent-muted transition-colors">Lokalizacja</a>
               </div>
            </div>

            <div className="space-y-4">
               <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest opacity-30">Społeczność</span>
               <div className="flex flex-col gap-2 text-sm">
                 <a href="https://www.facebook.com/profile.php?id=61564708745370" target="_blank" rel="noreferrer" className="hover:text-accent-muted transition-colors flex items-center gap-2">
                   Facebook <Facebook className="w-3 h-3" />
                 </a>
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto mt-24 md:mt-40 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-20 gap-6 text-center">
          <span>{new Date().getFullYear()} Nóż Widelec Gołdap</span>
          <span className="hidden md:inline">Warsztatowa 2, Gołdap 19-500</span>
          <span>Crafted with passion</span>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-bg-dark/95 backdrop-blur-3xl flex items-center justify-center p-8 md:p-24"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-12 right-12 text-text-light/40 hover:text-text-light transition-colors" onClick={() => setSelectedImg(null)}>
              <X className="w-12 h-12 stroke-thin" />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg} 
              alt="Full view" 
              className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
