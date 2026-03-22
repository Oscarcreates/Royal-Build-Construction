// ─────────────────────────────────────────────
//  Component: ServicesSection
//  "Learn More" now navigates to /services/:slug
// ─────────────────────────────────────────────
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../data";
import { FadeIn } from "../utils";

function ServiceCard({ service, index }) {
  const navigate = useNavigate();
  const { icon, title, desc, image, imagePlaceholderLabel, slug } = service;

  return (
    <FadeIn delay={index * 80}>
      <div className="group relative bg-white rounded-2xl border border-sky-100 overflow-hidden hover:shadow-2xl hover:shadow-sky-100 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* ── Image area ── */}
        <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: 220 }}>
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3 select-none"
              style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)", border: "2px dashed #7dd3fc" }}
            >
              <span className="text-5xl">{icon}</span>
              <div className="text-center px-4">
                <p className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-1">Image Slot</p>
                <p className="text-sky-400 text-[11px] leading-snug">
                  Set <code className="bg-sky-100 rounded px-1">image</code> in{" "}
                  <code className="bg-sky-100 rounded px-1">data/index.js</code>
                </p>
                <p className="text-sky-400/60 text-[10px] mt-1 italic">{imagePlaceholderLabel}</p>
              </div>
            </div>
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(to top, rgba(2,132,199,0.88) 0%, transparent 60%)" }}
          >
            <p className="text-white text-sm leading-relaxed font-medium">{desc}</p>
          </div>

          {/* Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-white/90 backdrop-blur-sm text-sky-700 text-xs font-black px-3 py-1.5 rounded-full shadow-sm">
              {icon} {title.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-sky-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>

          {/* ── Learn More Button ── */}
          <button
            onClick={() => navigate(`/services/${slug}`)}
            className="mt-5 w-full flex items-center justify-center gap-2 bg-sky-50 hover:bg-sky-500 border border-sky-200 hover:border-sky-500 text-sky-600 hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 group/btn"
          >
            <span>Learn More</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
            What We Do
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1.5px" }}
          >
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From foundation to finish, we deliver every project with integrity, expertise,
            and a commitment to excellence.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}