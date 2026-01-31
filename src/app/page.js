import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Globe, ShieldCheck, Factory, Zap, Stethoscope, Sprout } from 'lucide-react';

// Client images: category collages in /public (nutra, animal-feed, industrial, medical, veterinary, etc.)
const WHAT_WE_DO_CARD_IMAGES = {
  nutraceutical: '/products/herbal/Ashwagandha-Extract.png',
  foodSpices: '/products/agro/Paprika-Oleoresin.jpg',
  agro: '/products/Nutrients/Makhana.jpeg',
  animalFeed: '/products/animal-feed/Lactation-Concentrate.jpg',
  veterinary: '/products/veterinary/Vet-Grade-Disposable-Syringes.jpeg',
  medical: '/products/medical/Disposable-Medical-Syringes.jpeg',
  industrial: '/products/industrial/IP-Rated-Inverter-Enclosures.png',
  carbon: '/esg-hero.jpg',
};

export default function Home() {
  return (
    <main>
      <Hero
        title="CoreKAV International Trade"
        subtitle="Institutional Export Supply Chain Partner From India"
        variant="home"
        ctaText="View Products"
        ctaLink="#what-we-do"
        bgImage="/home-hero-bg.jpg"
      />

      {/* Intro Text */}
      <SectionWrapper className="bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">Supplying Essential Products to Global Markets</h2>
          <p className="text-lg text-primary/70 leading-relaxed">
            Supplying essential products across nutraceutical, herbal extracts & ayurveda ingredients, food, spices & plant-based ingredients, specialised agro (makhana, saffron), animal feed supplements & nutritional concentrates, veterinary & animal husbandry consumables, human medical consumables, and electrical, industrial & renewable energy components to import-dependent global markets.
          </p>
        </div>
      </SectionWrapper>

      {/* WHAT WE DO – Export & Services (infographic-style, LDC-inspired) */}
      <SectionWrapper id="what-we-do" className="bg-neutral/20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Export &amp; Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-4">What We Do</h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            We responsibly source, transform, and deliver essential products across agriculture, nutrition, healthcare, and infrastructure to institutional buyers worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Nutraceutical, Herbal & Ayurveda"
            desc="Botanical extracts, powders, and formulation inputs for supplements and personal care."
            icon={Leaf}
            image={WHAT_WE_DO_CARD_IMAGES.nutraceutical}
            href="/exports/herbal-nutraceutical-ayurveda-ingredients"
          />
          <ServiceCard
            title="Food, Spices & Plant-Based"
            desc="Bulk spices, natural food colours, oleoresins, and plant-based functional ingredients."
            icon={Sprout}
            image={WHAT_WE_DO_CARD_IMAGES.foodSpices}
            href="/exports/food-spices-plant-based"
          />
          <ServiceCard
            title="Specialised Agro (Makhana, Saffron)"
            desc="Fox nuts, pea protein, saffron, and dehydrated vegetables."
            icon={Sprout}
            image={WHAT_WE_DO_CARD_IMAGES.agro}
            href="/exports/makhana-fox-nuts-lotus-seeds"
          />
          <ServiceCard
            title="Animal Feed & Nutrition"
            desc="Compound feed, concentrates, and supplements for livestock, poultry, and aquaculture."
            icon={Factory}
            image={WHAT_WE_DO_CARD_IMAGES.animalFeed}
            href="/exports/animal-feed"
          />
          <ServiceCard
            title="Veterinary & Animal Husbandry"
            desc="Vet-grade disposables, farm tools, and consumables for commercial livestock."
            icon={ShieldCheck}
            image={WHAT_WE_DO_CARD_IMAGES.veterinary}
            href="/exports/veterinary-animal-husbandry-consumables"
          />
          <ServiceCard
            title="Human Medical Consumables"
            desc="Hospital disposables and diagnostic consumables for healthcare institutions."
            icon={Stethoscope}
            image={WHAT_WE_DO_CARD_IMAGES.medical}
            href="/exports/medical-consumables"
          />
          <ServiceCard
            title="Industrial & Electrical"
            desc="Power system accessories, enclosures, and components for renewable and infrastructure."
            icon={Zap}
            image={WHAT_WE_DO_CARD_IMAGES.industrial}
            href="/exports/industrial-electrical-components"
          />
          <ServiceCard
            title="Carbon &amp; ESG"
            desc="Carbon credit trading, project aggregation, and ESG-aligned advisory."
            icon={Globe}
            image={WHAT_WE_DO_CARD_IMAGES.carbon}
            href="/exports/carbon-credits-esg-climate-solutions"
          />
        </div>
      </SectionWrapper>


      {/* Global Markets – Alternate Background (Midnight Blue #0A2540) */}
      <SectionWrapper className="bg-primary-light text-neutral overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Global Markets We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <MarketItem name="South Asia" />
            <MarketItem name="Middle East & GCC" />
            <MarketItem name="Africa" />
            <MarketItem name="South East Asia" />
            <MarketItem name="Central Asia" />
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center border-t border-white/10 pt-10">
            <p className="text-xl font-light opacity-90 mb-8">
              If you are an importer, distributor, EPC contractor, or institutional buyer seeking a stable and compliant Indian export supplier, we welcome structured discussions.
            </p>
            <div className="inline-block p-6 border border-secondary rounded-xl bg-white/5 backdrop-blur-sm text-left">
              <h3 className="font-bold text-secondary text-lg mb-2">Contact Us</h3>
              <p className="font-semibold text-neutral">CoreKAV International Trade</p>
              <p>B-39, 1st Floor, Middle Cir, Connaught Place, New Delhi, India 110001</p>
              <p>Mobile/WhatsApp: +91-9319337377</p>
              <p>Email: info@corekav.com</p>
            </div>
          </div>

        </div>
      </SectionWrapper>

    </main>
  );
}

const ServiceCard = ({ title, desc, icon: Icon, image, href }) => (
  <Link href={href} className="group bg-white rounded shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/20 block h-full overflow-hidden">
    {/* Client image: top of card (category collage) */}
    {image ? (
      <div className="relative h-40 w-full overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
    ) : (
      <div className="w-12 h-12 mt-8 ml-8 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={24} className="text-primary group-hover:text-white" />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-primary/60 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center text-secondary text-sm font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
        Explore <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </Link>
);

const MarketItem = ({ name }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
      <Globe className="text-secondary" />
    </div>
    <span className="font-bold tracking-wide">{name}</span>
  </div>
);
