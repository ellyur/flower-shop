import { LOGO_URL, MESSENGER_LINK } from "@/data/flowerCatalog";

const Footer = () => {
  return (
    <footer className="py-16 md:py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        {/* CTA */}
        <p className="font-serif text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Screenshot your chosen flower and message us on Facebook Messenger to order.
        </p>

        {/* Messenger Button */}
        <a
          href={MESSENGER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg mb-12"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.545 3.697 7.247.194.145.31.377.302.624l-.074 1.979a.748.748 0 001.06.672l2.208-.974a.748.748 0 01.49-.033c.81.219 1.676.335 2.573.335 5.523 0 10-4.145 10-9.243S17.523 2 12 2z"/>
            <path fill="hsl(var(--foreground))" d="M6.75 13.5l3.5-5.5 2 2 3.5-2-3.5 5.5-2-2z"/>
          </svg>
          Order on Messenger
        </a>

        {/* Logo and Shop Name */}
        <div className="flex flex-col items-center gap-4 pt-8 border-t border-background/20">
          <img
            src={LOGO_URL}
            alt="Liceria Rose Flower Shop"
            className="h-16 w-auto object-contain opacity-90"
          />
          <p className="font-serif text-lg opacity-80">
            Liceria Rose Flower Shop
          </p>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
