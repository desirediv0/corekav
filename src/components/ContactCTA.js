import Link from 'next/link';
import Image from 'next/image';

const ContactCTA = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-primary text-neutral text-center px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A24D 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-4xl relative z-10 px-1">
                <span className="block text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 sm:mb-4 animate-fade-in">
                    Partner With COREKAV
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
                    Reliable Supply Chain Solutions for Global Buyers
                </h2>
                <div className="h-px w-24 bg-secondary/30 mx-auto mb-6 sm:mb-8" />
                <p className="text-sm sm:text-base md:text-lg text-neutral/80 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Initiate a trade inquiry or request a detailed product catalog. Our export desk responds within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 bg-secondary text-primary font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm min-h-[48px]"
                    >
                        Contact Global Sales
                    </Link>
                    <a
                        href="https://wa.me/919319337377"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 border-2 border-secondary text-secondary bg-transparent font-bold uppercase tracking-widest hover:bg-secondary/20 transition-colors text-sm min-h-[48px]"
                    >
                        <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="shrink-0" />
                        <span className="text-center">WhatsApp: +91-9319337377</span>
                    </a>
                    <a
                        href="mailto:info@corekav.com"
                        className="inline-flex items-center justify-center px-8 py-4 sm:px-10 border border-secondary/50 text-secondary font-bold uppercase tracking-widest hover:bg-secondary/10 transition-colors text-sm min-h-[48px]"
                    >
                        Email Us
                    </a>
                </div>
            </div>
        </section>
    );
};
export default ContactCTA;
