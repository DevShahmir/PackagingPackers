export default function FeatureStrip() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V3.75a1.125 1.125 0 00-1.125-1.125h-9A1.125 1.125 0 002.25 3.75v10.5m12-7.5h-12" />
        </svg>
      ),
      title: "Reliable Delivery",
      desc: "Safe, damage-free delivery across Pakistan",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Zero Dieline Stress",
      desc: "Free size fitting & 3D dieline proofing",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Low 100-pc Minimums",
      desc: "Order small test runs or scale up easily",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Factory-Direct Pricing",
      desc: "Cut distributor markup and protect margins",
    },
  ];

  return (
    <section className="bg-brown-950/30 border-y border-gold-500/15 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 group hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 border border-gold-400/20 mb-3 group-hover:bg-gold-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-cream-100">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-cream-400 font-light mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
