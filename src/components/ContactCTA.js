import Link from 'next/link';

const ContactCTA = () => {
    return (
        <section className="py-24 bg-primary text-neutral text-center px-4 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A24D 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto max-w-4xl relative z-10">
                <span className="block text-secondary text-sm font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in">
                    Partner With CoreKAV
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                    Reliable Supply Chains for Global Buyers
                </h2>
                <div className="h-px w-24 bg-secondary/30 mx-auto mb-8" />
                <p className="text-lg text-neutral/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Initiate a trade inquiry or request a detailed product catalog. Our export desk responds within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                        href="/markets-and-contact"
                        className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-primary font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm"
                    >
                        Contact Global Sales
                    </Link>
                    <a
                        href="https://wa.me/9876543210"
                        className="inline-flex items-center justify-center px-10 py-4 border border-secondary/30 text-secondary bg-transparent font-bold uppercase tracking-widest hover:bg-secondary/10 transition-colors text-sm"
                    >
                        WhatsApp Official
                    </a>
                </div>
            </div>
        </section>
    );
};
export default ContactCTA;
