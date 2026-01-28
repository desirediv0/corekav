const SectionWrapper = ({ children, className = "", id = "", bg }) => {
    return (
        <section id={id} className={`py-10 md:py-16 px-4 md:px-6 relative ${className}`} style={bg ? { background: bg } : {}}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
