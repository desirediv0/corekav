import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ContactCTA from '@/components/ContactCTA';
import { CheckCircle, ArrowRight, Package } from 'lucide-react';

const ExportPageTemplate = ({
    title,
    subtitle,
    heroImage,
    overview,
    products,
    whySource,
    specTable // Optional html/component for detailed specs
}) => {
    return (
        <main>
            <Hero title={title} subtitle={subtitle} bgImage={heroImage} variant="internal" align="left" />

            <SectionWrapper className="bg-white">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-2">
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Vertical Overview</span>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Sector Capabilities</h2>
                        <div className="prose prose-lg text-primary/80 leading-relaxed whitespace-pre-line">
                            {overview}
                        </div>
                    </div>
                    <div className="bg-neutral-50 p-8 border-t-4 border-secondary shadow-sm">
                        <h3 className="text-lg font-bold font-serif text-primary mb-6">Why Source from CoreKAV?</h3>
                        <ul className="space-y-4">
                            {whySource.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="text-secondary shrink-0 mt-1" size={18} />
                                    <span className="text-primary/80 text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-neutral-50 border-t border-neutral-200">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Product Portfolio</h2>
                    <p className="text-primary/60">Standardized specifications available for immediate export.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <div key={i} className="bg-white border border-neutral-100 hover:border-secondary transition-all duration-300 p-8 group h-full flex flex-col shadow-sm hover:shadow-lg">
                            <div className="bg-primary/5 w-12 h-12 flex items-center justify-center rounded-sm mb-6 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                                <Package size={24} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold font-serif text-primary mb-3 group-hover:text-secondary transition-colors">{product.name}</h4>
                            <p className="text-primary/70 text-sm mb-6 flex-grow leading-relaxed">{product.description}</p>

                            {product.specs && (
                                <div className="bg-neutral-50 p-4 rounded-sm text-xs text-primary/70 space-y-2 mb-6">
                                    {product.specs.map((spec, j) => (
                                        <div key={j} className="flex justify-between border-b border-dashed border-gray-200 last:border-0 pb-1 last:pb-0">
                                            <span className="font-semibold">{spec.label}:</span>
                                            <span>{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-auto">
                                <span className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Request Catalog <ArrowRight size={12} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <ContactCTA />
        </main>
    );
};
export default ExportPageTemplate;
