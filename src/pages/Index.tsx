import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlowerSection from "@/components/FlowerSection";
import HowToOrder from "@/components/HowToOrder";
import ReviewsSection from "@/components/ReviewsSection";
import ImportantReminders from "@/components/ImportantReminders";
import Footer from "@/components/Footer";
import { flowerSections } from "@/data/flowerCatalog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        {/* How to Order - Second Section */}
        <HowToOrder />

        {/* Flower Catalog Sections */}
        {flowerSections.map((section, index) => (
          <div
            key={section.id}
            className={index % 2 === 1 ? "bg-cream" : ""}
          >
            <FlowerSection section={section} />
          </div>
        ))}

        <ReviewsSection />
        <ImportantReminders />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
