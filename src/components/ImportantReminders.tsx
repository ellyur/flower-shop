import { AlertCircle } from "lucide-react";

const ImportantReminders = () => {
  const reminders = [
    "No specific delivery time guaranteed",
    "No customized wrapping or flower arrangements",
    "No payment, no order",
    "Orders confirmed only after full payment",
    "Subject to availability; similar replacements may be used",
    "Delivery fees apply",
    "Double-check recipient details before ordering",
    "No photo requests during delivery",
    "No cancellation and no refund once payment is made",
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Important Reminders
            </h2>
          </div>

          <div className="bg-accent/50 rounded-2xl p-6 md:p-8">
            <ul className="space-y-4">
              {reminders.map((reminder, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-foreground/80 leading-relaxed">
                    {reminder}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantReminders;
