import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-neutral pt-20 pb-10 border-t border-secondary/20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-serif font-bold text-secondary tracking-wide">
                                COREKAV
                            </span>
                            <span className="block text-[10px] font-sans tracking-[0.2em] uppercase text-neutral/70 mt-1">
                                International Trade
                            </span>
                        </Link>
                        <p className="text-neutral/70 text-sm leading-relaxed max-w-xs">
                            Your trusted partner in global sourcing. We bridge the gap between Indian excellence and international demand with institutional-grade reliability.
                        </p>
                    </div>

                    {/* Export Verticals */}
                    <div>
                        <h3 className="text-base font-serif font-bold text-secondary mb-6 uppercase tracking-wider">Export Divisions</h3>
                        <ul className="space-y-3 text-sm text-neutral/80">
                            <li><Link href="/exports/animal-feed" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Animal Feed</Link></li>
                            <li><Link href="/exports/veterinary-animal-husbandry-consumables" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Veterinary</Link></li>
                            <li><Link href="/exports/medical-consumables" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Medical Consumables</Link></li>
                            <li><Link href="/exports/industrial-electrical-components" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Industrial & Electrical</Link></li>
                            <li><Link href="/exports/makhana-fox-nuts-lotus-seeds" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Spices & Food</Link></li>
                            <li><Link href="/exports/herbal-nutraceutical-ayurveda-ingredients" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Nutraceuticals</Link></li>
                            <li><Link href="/exports/carbon-credits-esg-climate-solutions" className="hover:text-secondary flex items-center gap-2 transition-colors"><ArrowRight size={14} className="text-secondary/50" /> Carbon & ESG</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-serif font-bold text-secondary mb-6 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3 text-sm text-neutral/80">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About/Profile</Link></li>
                            <li><Link href="/markets-and-contact" className="hover:text-secondary transition-colors">Markets Served</Link></li>
                            <li><Link href="/markets-and-contact" className="hover:text-secondary transition-colors">Partner With Us</Link></li>
                            <li><Link href="/markets-and-contact#faq" className="hover:text-secondary transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-serif font-bold text-secondary mb-6 uppercase tracking-wider">Contact HQ</h3>
                        <div className="space-y-5 text-sm text-neutral/80">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Trade Tower, Mumbai<br />Maharashtra, India</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <IconWrapper icon={Phone} />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <IconWrapper icon={Mail} />
                                <a href="mailto:export@corekav.com" className="hover:text-white transition-colors">export@corekav.com</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral/50 gap-4">
                    <p>© {new Date().getFullYear()} CoreKAV International Trade. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-neutral transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-trade" className="hover:text-neutral transition-colors">Terms of Trade</Link>
                        <Link href="/sitemap" className="hover:text-neutral transition-colors">Sitemap</Link>
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
