import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import FAQAccordion from '@/components/FAQAccordion';
import InquiryForm from '@/components/InquiryForm';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'Contact | COREKAV International',
    description: 'Global Markets We Serve, FAQs, and Contact Information.',
};

export default function MarketsContact() {
    const markets = [
        { region: "South and South East Asia", countries: "Bangladesh, Nepal, Sri Lanka, Bhutan, Maldives, Vietnam, Indonesia, Philippines, Cambodia, Myanmar, Thailand, Laos" },
        { region: "Central Asia", countries: "Kazakhstan, Uzbekistan, Tajikistan, Kyrgyzstan, Turkmenistan" },
        { region: "Middle East and GCC", countries: "UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, Iraq, Jordan, Lebanon" },
        { region: "Africa", countries: "Kenya, Nigeria, Ghana, Tanzania, Uganda, Ethiopia, Rwanda, South Africa, Zambia, Zimbabwe" },
        { region: "USA", countries: "United States" },
        { region: "Latin America and Caribbean", countries: "Peru, Bolivia, Paraguay, Brazil, Mexico, Caribbean nations" }
    ];

    const faqs = [
        {
            question: "Do you export compound animal feed in bulk or bagged formats?",
            answer: "Yes. Animal feed is supplied in containerized bulk or bagged formats, depending on buyer specifications, port handling requirements, and destination regulations."
        },
        {
            question: "Which livestock segments do you supply feed for?",
            answer: "We export feed formulations for cattle, poultry, buffalo, sheep, goat, pig/swine, and aquaculture markets."
        },
        {
            question: "Are veterinary consumables supplied in bulk for institutional buyers?",
            answer: "Yes. All veterinary consumables are supplied in bulk quantities suitable for farms, distributors, veterinary hospitals, and government procurement."
        },
        {
            question: "Do you export medical consumables for hospitals and public procurement?",
            answer: "Yes. We export essential medical disposables for hospitals, clinics, NGOs, distributors, and public health procurement agencies."
        },
        {
            question: "Do you supply nutraceutical ingredients in bulk?",
            answer: "Yes. We supply nutraceutical ingredients strictly in bulk, ingredient-grade formats for manufacturers, formulators, and contract processors."
        },
        {
            question: "Do you export finished Ayurvedic products?",
            answer: "No. We export Ayurvedic ingredients and formulation inputs only."
        },
        {
            question: "Do you sell carbon credits directly?",
            answer: "We facilitate verified carbon credit transactions through brokerage and structured arrangements."
        }
    ];

    return (
        <main>
            <Hero
                title="Global Reach & Engagement"
                subtitle="We focus on import-dependent markets with structured buying behaviour across Asia, Africa, and the Middle East."
                bgImage="/markets-hero.jpg"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary text-center mb-8 sm:mb-12 px-2">Markets We Serve</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {markets.map((m, i) => (
                        <div key={i} className="bg-neutral-50 p-4 sm:p-6 border border-neutral-100 rounded-sm hover:border-secondary transition-colors">
                            <Globe className="text-secondary mb-2 sm:mb-3" size={22} />
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-xs sm:text-sm">{m.region}</h4>
                            <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">{m.countries}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-primary text-neutral">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8">Contact Us</h2>
                        <div className="space-y-6 sm:space-y-8">
                            <div className="flex gap-4">
                                <MapPin className="text-secondary flex-shrink-0 mt-0.5" size={24} />
                                <div>
                                    <h4 className="font-bold text-base sm:text-lg">Headquarters</h4>
                                    <p className="opacity-80 leading-relaxed text-sm sm:text-base">COREKAV International Trade<br />B-39, 1st Floor, Middle Cir, Connaught Place,<br />New Delhi, Delhi 110001, India</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4">
                                <a href="https://wa.me/919319337377" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 transition-all group w-full min-h-[56px] sm:min-h-0">
                                    <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} className="shrink-0" />
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-base sm:text-lg text-secondary group-hover:text-secondary">Phone / WhatsApp</h4>
                                        <span className="opacity-90 group-hover:text-white text-sm sm:text-base block">+91-9319337377</span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex gap-3 sm:gap-4">
                                <a href="mailto:info@corekav.com" className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 transition-all group w-full min-h-[56px] sm:min-h-0">
                                    <Mail className="text-secondary flex-shrink-0 group-hover:text-secondary mt-0.5" size={24} />
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-base sm:text-lg text-secondary group-hover:text-secondary">Email</h4>
                                        <span className="opacity-90 block text-sm sm:text-base break-all">info@corekav.com</span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex gap-3 sm:gap-4">
                                <a href="https://www.corekav.com" target="_blank" rel="noopener noreferrer" className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-secondary/20 border border-white/10 hover:border-secondary/50 transition-all group w-full min-h-[56px] sm:min-h-0">
                                    <Globe className="text-secondary flex-shrink-0 group-hover:text-secondary mt-0.5" size={24} />
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-base sm:text-lg text-secondary group-hover:text-secondary">Website</h4>
                                        <span className="opacity-90 block text-sm sm:text-base break-all">www.corekav.com</span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="text-secondary flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Business Hours</h4>
                                    <p className="opacity-80">Mon - Sat: 10:00 AM - 7:00 PM IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
                        <h3 className="text-xl font-bold mb-6">Send an Inquiry</h3>
                        <InquiryForm />
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-neutral-50" id="faq">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary text-center mb-8 sm:mb-12 px-2">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
            </SectionWrapper>
        </main>
    );
}
