'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);


    const whatWeDoLinks = [
        { name: 'Nutraceutical, Herbal & Ayurveda', href: '/exports/herbal-nutraceutical-ayurveda-ingredients' },
        { name: 'Food, Spices & Plant-Based', href: '/exports/food-spices-plant-based' },
        { name: 'Specialised Agro (Makhana, Saffron)', href: '/exports/makhana-fox-nuts-lotus-seeds' },
        { name: 'Animal Feed & Nutrition', href: '/exports/animal-feed' },
        { name: 'Veterinary & Animal Husbandry', href: '/exports/veterinary-animal-husbandry-consumables' },
        { name: 'Human Medical Consumables', href: '/exports/medical-consumables' },
        { name: 'Industrial & Electrical', href: '/exports/industrial-electrical-components' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-primary text-neutral shadow-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-24">

                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo.png"
                            alt="COREKAV International Trade"
                            width={200}
                            height={200}
                            className="h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
                            priority
                        />

                    </Link>

                    <nav className="hidden lg:flex space-x-8 items-center">
                        <Link
                            href="/"
                            className="text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest text-neutral/90"
                        >
                            Home
                        </Link>

                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest text-neutral/90 focus:outline-none"
                            >
                                What We Do <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full -left-4 w-72 bg-primary border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pt-2">
                                <div className="flex flex-col bg-primary py-2 rounded-sm shadow-2xl">
                                    <p className="px-6 py-2 text-[10px] uppercase tracking-widest text-neutral/50 border-b border-white/5">Export &amp; services</p>
                                    {whatWeDoLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="px-6 py-3 text-sm hover:bg-white/5 hover:text-secondary text-neutral/80 transition-colors block border-b border-white/5 last:border-0"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/exports/carbon-credits-esg-climate-solutions"
                            className="text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest text-neutral/90"
                        >
                            Carbon &amp; Sustainability
                        </Link>

                        <Link
                            href="/about"
                            className="text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest text-neutral/90"
                        >
                            Who We Are
                        </Link>

                        <Link
                            href="/faq"
                            className="text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest text-neutral/90"
                        >
                            FAQ
                        </Link>

                        <Link
                            href="/markets-and-contact"
                            className="text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest text-neutral/90"
                        >
                            Markets &amp; Contact
                        </Link>

                        <Link
                            href="/markets-and-contact"
                            className="ml-4 inline-flex items-center justify-center px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-sm"
                        >
                            Inquire Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-neutral hover:text-secondary focus:outline-none transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden bg-primary border-t border-neutral/10 absolute w-full shadow-xl max-h-[90vh] overflow-y-auto">
                    <div className="flex flex-col px-6 py-6 space-y-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold text-neutral hover:text-secondary uppercase tracking-wider block border-b border-white/5 pb-2"
                        >
                            Home
                        </Link>

                        {/* Mobile: What We Do dropdown */}
                        <div>
                            <button
                                onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                                className="flex items-center justify-between w-full text-sm font-semibold text-neutral hover:text-secondary uppercase tracking-wider border-b border-white/5 pb-2 focus:outline-none"
                            >
                                What We Do <ChevronDown size={14} className={`transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isWhatWeDoOpen && (
                                <div className="pl-4 mt-2 space-y-2 border-l border-white/10 ml-1">
                                    {whatWeDoLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block py-2 text-xs text-neutral/70 hover:text-secondary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/exports/carbon-credits-esg-climate-solutions"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold text-neutral hover:text-secondary uppercase tracking-wider block border-b border-white/5 pb-2"
                        >
                            Carbon &amp; Sustainability
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold text-neutral hover:text-secondary uppercase tracking-wider block border-b border-white/5 pb-2"
                        >
                            Who We Are
                        </Link>

                        <Link
                            href="/faq"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold text-neutral hover:text-secondary uppercase tracking-wider block border-b border-white/5 pb-2"
                        >
                            FAQ
                        </Link>

                        <Link
                            href="/markets-and-contact"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold text-neutral hover:text-secondary uppercase tracking-wider block border-b border-white/5 pb-2"
                        >
                            Markets & Contact
                        </Link>

                        <Link
                            href="/markets-and-contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 text-center py-3 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest rounded-sm"
                        >
                            Inquire Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
