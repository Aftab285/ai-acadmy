import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import { WHATSAPP_LINK, WHATSAPP_DEMO_MESSAGE } from "@/lib/constants";

interface ShortItem {
  id: string;
  title: string;
  badge: string;
}

const SHORTS: ShortItem[] = [
  {
    id: "327gBQiCdBw",
    title: "Inside Live AI Class — Student Project Demo",
    badge: "Live Class Demo 🎥",
  },
  {
    id: "uWv0dkED5cA",
    title: "How Students Learn Artificial Intelligence",
    badge: "Student Showcase 🚀",
  },
  {
    id: "9--hN_Qluks",
    title: "Parent & Student Experience at Pakistan AI Academy",
    badge: "Real Results 🏆",
  },
];

export default function YouTubeShorts() {
  return (
    <section id="shorts" className="py-20 bg-gradient-to-b from-slate-900 via-primary/95 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background blur elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-light/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Watch Our Live AI Class Shorts"
          subtitle="Experience how Pakistani students learn Artificial Intelligence in interactive 100% live online sessions."
          centered
          className="[&_h2]:text-white [&_p]:text-blue-100"
        />

        {/* Video Shorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {SHORTS.map((short) => (
            <div
              key={short.id}
              className="group relative bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-secondary/20"
            >
              {/* Badge Header */}
              <div className="p-4 bg-gradient-to-r from-slate-900/90 to-primary/30 flex items-center justify-between border-b border-white/10">
                <span className="text-xs font-semibold px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                  {short.badge}
                </span>
                <span className="text-xs text-blue-200 flex items-center gap-1 font-medium">
                  <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube Short
                </span>
              </div>

              {/* Iframe Container in 9:16 Aspect Ratio */}
              <div className="relative w-full aspect-[9/16] bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Card Title Footer */}
              <div className="p-4 bg-slate-900/90 text-center border-t border-white/10">
                <h3 className="font-outfit font-semibold text-sm text-white line-clamp-2 leading-snug">
                  {short.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action below videos */}
        <div className="mt-14 text-center">
          <p className="text-blue-100 text-lg mb-6 max-w-xl mx-auto">
            Want your child to build real AI projects like this? Book a <strong>Free Live Demo Class</strong> on WhatsApp today!
          </p>
          <CTAButton href={WHATSAPP_LINK(WHATSAPP_DEMO_MESSAGE)} external variant="whatsapp" size="lg">
            Book Free Demo Class on WhatsApp
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
