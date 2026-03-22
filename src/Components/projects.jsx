// ─────────────────────────────────────────────
//  Component: ProjectsSection
// ─────────────────────────────────────────────
import { PROJECTS } from "../data";
import { FadeIn } from "../utils";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
            Portfolio
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1.5px" }}
          >
            Recent Projects
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of our latest work across Canada, spanning every sector we serve.
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="group bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full">
                    {p.type}
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">{p.year}</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <span>📍</span>
                  <span>{p.location}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}