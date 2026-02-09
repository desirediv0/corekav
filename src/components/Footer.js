import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-neutral pt-20 pb-10 border-t border-secondary/20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info – logo + tagline (client colours) */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.png"
                                alt="COREKAV International Trade"
                                width={160}
                                height={64}
                                className="h-20 w-auto object-contain"
                            />
                            <span className="block text-[9px] font-sans tracking-[0.2em] uppercase text-neutral/70 mt-2 max-w-[180px]">
                                International Trade, Export &amp; Global Sourcing Solutions
                            </span>
                        </Link>
                        <p className="text-neutral/70 text-sm leading-relaxed max-w-xs">
                            Supplying essential products to institutional buyers, importers, and government entities across South Asia, Middle East, Africa, and Emerging Markets.
                        </p>
                    </div>

                    {/* What We Do (pages 2–9) */}
                    <div>
                        <h3 className="text-base font-serif font-bold text-secondary mb-6 uppercase tracking-wider">What We Do</h3>
                        <ul className="space-y-3 text-sm text-neutral/80">
                            <li><Link href="/exports/food-spices-plant-based" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Food, Spices &amp; Plant-Based</Link></li>
                            <li><Link href="/exports/makhana-fox-nuts-lotus-seeds" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Specialised Agro</Link></li>
                            <li><Link href="/exports/herbal-nutraceutical-ayurveda-ingredients" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Nutraceutical &amp; Herbal</Link></li>
                            <li><Link href="/exports/animal-feed" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Animal Feed</Link></li>
                            <li><Link href="/exports/veterinary-animal-husbandry-consumables" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Veterinary Consumables</Link></li>
                            <li><Link href="/exports/medical-consumables" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Human Medical Consumables</Link></li>
                            <li><Link href="/exports/industrial-electrical-components" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Industrial &amp; Electrical</Link></li>
                            <li><Link href="/exports/carbon-credits-esg-climate-solutions" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Carbon &amp; Sustainability</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-serif font-bold text-secondary mb-6 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3 text-sm text-neutral/80">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">Who We Are</Link></li>
                            <li><Link href="/markets-and-contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-trade" className="hover:text-secondary transition-colors">Terms of Trade</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-serif font-bold text-secondary mb-6 uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-5 text-sm text-neutral/80">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">COREKAV International Trade<br />B-39, 1st Floor, Middle Cir, Connaught Place<br />New Delhi, India 110001</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <a href="https://wa.me/919319337377" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors">
                                    <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="shrink-0" />
                                    +91-9319337377
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <IconWrapper icon={Mail} />
                                <a href="mailto:info@corekav.com" className="text-secondary font-semibold hover:text-white transition-colors">info@corekav.com</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral/50 gap-4">
                    <p>© {new Date().getFullYear()} COREKAV International Trade. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-neutral transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-trade" className="hover:text-neutral transition-colors">Terms of Trade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const IconWrapper = ({ icon: Icon }) => (
    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-secondary" />
    </div>
);

export default Footer;
