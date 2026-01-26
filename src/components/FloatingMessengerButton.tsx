import { MESSENGER_LINK } from "@/data/flowerCatalog";

const FloatingMessengerButton = () => {
  return (
    <a
      href={MESSENGER_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 md:hidden"
      aria-label="Message us on Messenger"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.545 3.697 7.247.194.145.31.377.302.624l-.074 1.979a.748.748 0 001.06.672l2.208-.974a.748.748 0 01.49-.033c.81.219 1.676.335 2.573.335 5.523 0 10-4.145 10-9.243S17.523 2 12 2z"/>
        <path fill="hsl(var(--background))" d="M6.75 13.5l3.5-5.5 2 2 3.5-2-3.5 5.5-2-2z"/>
      </svg>
    </a>
  );
};

export default FloatingMessengerButton;
