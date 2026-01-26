import { Search, Camera, Send, CheckCircle } from "lucide-react";

const HowToOrder = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse",
      description: "Browse our website and choose a flower you like",
    },
    {
      icon: Camera,
      title: "Screenshot",
      description: "Screenshot the flower image with the price",
    },
    {
      icon: Send,
      title: "Send",
      description: "Send the screenshot to our Facebook Messenger",
    },
    {
      icon: CheckCircle,
      title: "Confirm",
      description: "Wait for our order confirmation message",
    },
  ];

  return (
    <section id="how-to-order" className="py-16 md:py-20 bg-cream scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-4">
          How to Order
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Simple steps to get your beautiful flowers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <span className="absolute -top-2 -right-2 md:top-0 md:right-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
