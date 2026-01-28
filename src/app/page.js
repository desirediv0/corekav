import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ExportVerticalCard from '@/components/ExportVerticalCard';
import ContactCTA from '@/components/ContactCTA';
import { Wheat, Stethoscope, Factory, Leaf, Flower, Globe, ShieldCheck, Truck, Anchor, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'CoreKAV International Trade | Diversified Exporter from India',
  description: 'Supplying essential products across agriculture, healthcare, industry, energy, and construction to import-dependent global markets.',
};

export default function Home() {
  const verticals = [
    {
      title: "Animal Feed & Nutrition",
      description: "Bulk compound feed, concentrates, supplements, and processed feed products for livestock, poultry, and aquaculture.",
      link: "/exports/animal-feed",
      icon: Wheat
    },
    {
      title: "Veterinary Consumables",
      description: "Veterinary disposables, farm-use tools, and nutritional consumables for commercial livestock operations.",
      link: "/exports/veterinary-animal-husbandry-consumables",
      icon: Stethoscope
    },
    {
      title: "Medical Consumables",
      description: "Hospital-use medical disposables and diagnostic consumables for healthcare institutions, NGOs, and public procurement.",
      link: "/exports/medical-consumables",
      icon: ShieldCheck
    },
    {
      title: "Industrial & Electrical",
      description: "Power system accessories, enclosures, connectors, and distribution components for infrastructure and renewable projects.",
      link: "/exports/industrial-electrical-components",
      icon: Factory
    },
    {
      title: "Spices & Food Ingredients",
      description: "Bulk spices, natural food inputs, and plant-based functional ingredients supplied for food processing and institutional consumption.",
      link: "/exports/makhana-fox-nuts-lotus-seeds",
      icon: Leaf
    },
    {
      title: "Nutraceuticals & Ayurveda",
      description: "Botanical ingredients, standardized herbal extracts, and ayurveda-based formulation inputs for wellness and beauty applications.",
      link: "/exports/herbal-nutraceutical-ayurveda-ingredients",
      icon: Flower
    },
    {
      title: "Carbon Trading & ESG",
      description: "Structured carbon credit trading, project aggregation, and ESG-aligned advisory services for long-term decarbonization.",
      link: "/exports/carbon-credits-esg-climate-solutions",
      icon: Globe
    }
  ];

  return (
    <main className="bg-background">
      <Hero
        title="Diversified Exporter from India for Institutional Buyers"
        subtitle="Supplying essential products across agriculture, healthcare, industry, energy, and construction to import-dependent global markets."
        bgImage="/home-hero-bg.jpg"
        ctaText="Engage with a Reliable Partner"
        ctaLink="/markets-and-contact"
        variant="home"
      />

      <SectionWrapper id="about-intro" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight">Institutional Reliability in Global Trade</h2>
            <div className="h-1 w-20 bg-secondary" />
            <p className="text-primary/70 leading-loose text-lg font-light">
              We are an India-based export company supplying essential, high-rotation products to institutional buyers, importers, distributors, EPC contractors, and government-linked procurement entities across South Asia, SE Asia, the Middle East (GCC), Africa, and Central Asia.
            </p>
            <p className="text-primary/70 leading-loose text-lg font-light">
              Our operations are built on repeat-order relationships, compliance-led sourcing, conservative financial planning, and disciplined execution, positioning us as a long-term export partner rather than a short-term trading intermediary.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-neutral-100 -z-10 rounded-lg transform translate-x-8 translate-y-8" />
            <div className="bg-primary p-10 rounded-lg text-neutral grid grid-cols-1 sm:grid-cols-2 gap-8 shadow-2xl">
              <div className="p-4 border border-neutral/10 rounded-lg hover:bg-white/5 transition-colors">
                <Anchor className="text-secondary mb-4" size={32} />
                <h4 className="text-xl font-bold font-serif mb-2">Steady Scale-Up</h4>
                <span className="text-xs opacity-70 leading-relaxed block">Controlled growth with predictable working capital cycles.</span>
              </div>
              <div className="p-4 border border-neutral/10 rounded-lg hover:bg-white/5 transition-colors">
                <Factory className="text-secondary mb-4" size={32} />
                <h4 className="text-xl font-bold font-serif mb-2">Compliance Led</h4>
                <span className="text-xs opacity-70 leading-relaxed block">Strict documentation and banking transparency.</span>
              </div>
              <div className="p-4 border border-neutral/10 rounded-lg hover:bg-white/5 transition-colors">
                <Globe className="text-secondary mb-4" size={32} />
                <h4 className="text-xl font-bold font-serif mb-2">Multi-Region</h4>
                <span className="text-xs opacity-70 leading-relaxed block">Presence across GCC, Africa, SE Asia.</span>
              </div>
              <div className="p-4 border border-neutral/10 rounded-lg hover:bg-white/5 transition-colors">
                <ShieldCheck className="text-secondary mb-4" size={32} />
                <h4 className="text-xl font-bold font-serif mb-2">Long-Term</h4>
                <span className="text-xs opacity-70 leading-relaxed block">Focus on repeat and program-based procurement.</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="verticals" className="bg-neutral-50 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#0B1F3B 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="text-center max-w-4xl mx-auto mb-10 relative z-10">
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Strategic Export Verticals</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
          <p className="text-primary/70 text-lg leading-relaxed font-light">
            We operate across multiple essential product categories, each managed with dedicated sourcing, quality control, and export execution discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
          {verticals.map((v, i) => (
            <ExportVerticalCard key={i} {...v} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Global Markets We Serve</h2>
          <div className="h-1 w-24 bg-secondary mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {['South Asia', 'Middle East & GCC', 'Africa', 'South East Asia', 'Central Asia', 'Emerging Global Markets'].map((m) => (
            <div key={m} className="p-6 border border-neutral-100 rounded-sm hover:border-secondary transition-colors group cursor-default">
              <Globe className="mx-auto text-secondary mb-3 group-hover:scale-110 transition-transform" size={24} />
              <span className="font-bold text-primary text-sm">{m}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <ContactCTA />
    </main>
  );
}
