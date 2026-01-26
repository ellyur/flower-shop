
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Maria Santos",
            rating: 5,
            text: "The bouquet I ordered was absolutely stunning! The flowers were fresh and the arrangement was elegant. Delivered right on time for my anniversary.",
            location: "Quezon City"
        },
        {
            id: 2,
            name: "John Reyes",
            rating: 5,
            text: "Highly recommended! Very responsive customer service and the roses were huge and fragrant. My girlfriend loved them!",
            location: "Makati"
        },
        {
            id: 3,
            name: "Sarah Lim",
            rating: 5,
            text: "Beautiful layout and very affordable prices for such premium quality. Will definitely order again for Valentine's.",
            location: "Taguig"
        }
    ];

    return (
        <section id="reviews" className="py-16 md:py-24 bg-background scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <span className="text-primary font-medium tracking-widest text-sm uppercase mb-3 block">
                        Testimonials
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                        Loved by Our Customers
                    </h2>
                    <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-muted-foreground mb-6 leading-relaxed italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                                    <p className="text-xs text-muted-foreground">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
