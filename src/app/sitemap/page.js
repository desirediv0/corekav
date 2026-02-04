import SectionWrapper from '@/components/SectionWrapper';
import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
    title: 'Sitemap | COREKAV International',
    description: 'Site overview and navigation structure.',
};

export default function Sitemap() {
    const pages = [
        {
            category: "Main Pages",
            links: [
                { name: "Home", href: "/" },
                { name: "Who We Are", href: "/about" },
                { name: "Markets & Contact", href: "/markets-and-contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Trade", href: "/terms-of-trade" },
            ]
        },
        {
            category: "Export Verticals",
            links: [
                { name: "Animal Feed", href: "/exports/animal-feed" },
                { name: "Veterinary Consumables", href: "/exports/veterinary-animal-husbandry-consumables" },
                { name: "Medical Consumables", href: "/exports/medical-consumables" },
                { name: "Industrial & Electrical", href: "/exports/industrial-electrical-components" },
                { name: "Spices & Food Ingredients", href: "/exports/makhana-fox-nuts-lotus-seeds" },
                { name: "Nutraceuticals & Ayurveda", href: "/exports/herbal-nutraceutical-ayurveda-ingredients" },
                { name: "Carbon & Sustainability", href: "/exports/carbon-credits-esg-climate-solutions" },
            ]
        }
    ];

    return (
        <main>
            <Hero
                title="Sitemap"
                subtitle="Overview of COREKAV International Website Structure"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    {pages.map((section, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">{section.category}</h2>
                            <ul className="space-y-4">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href={link.href} className="text-primary/80 hover:text-secondary font-medium transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 bg-secondary rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}
