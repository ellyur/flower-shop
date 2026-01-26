
import { MESSENGER_LINK } from "@/data/flowerCatalog";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dr3xey7h9/video/upload/v1769428413/0126_1_aaiykh.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">

          <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-4">
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Premium Flower Collection
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-lg">
            Share the Language of <br />
            <span className="text-rose-200 italic">True Love</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover our exquisite bouquets designed to express what words cannot.
            Check our latest prices and find the perfect bloom for your special someone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#reviews"
              className="group px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-rose-50 transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Reviews</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#how-to-order"
              className="group px-8 py-4 bg-primary/90 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-primary transition-all shadow-black/20 shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#roses" className="text-white/80 hover:text-white transition-colors cursor-pointer">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </a>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/40 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
