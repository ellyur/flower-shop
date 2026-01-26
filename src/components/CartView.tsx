import { useRef } from "react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Send, Download } from "lucide-react";
import { MESSENGER_LINK } from "@/data/flowerCatalog";
import { ScrollArea } from "@/components/ui/scroll-area";
import html2canvas from "html2canvas";
import { toast } from "sonner";

const CartView = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const collageRef = useRef<HTMLDivElement>(null);

    const handleDownloadCollage = async () => {
        if (!collageRef.current) return;

        try {
            toast.loading("Preparing your image...");

            // Wait a moment for images to ensure they are loaded (though they should be as we render them)
            const canvas = await html2canvas(collageRef.current, {
                useCORS: true, // Important for external images (Cloudinary)
                allowTaint: true,
                backgroundColor: "#ffffff",
                scale: 2, // Better quality
            });

            const link = document.createElement('a');
            link.download = `liceria-bloom-selection-${new Date().getTime()}.jpg`;
            link.href = canvas.toDataURL("image/jpeg", 0.9);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast.dismiss();
            toast.success("Image saved! Ready to send.");
        } catch (error) {
            console.error('Collage failed:', error);
            toast.dismiss();
            toast.error("Could not save image. Please try screenshotting instead.");
        }
    };

    if (cart.length === 0) return null;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
                    <Button
                        className="rounded-full shadow-2xl px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 border-2 border-white/20 backdrop-blur-md"
                        size="lg"
                    >
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        View Cart ({cart.length})
                    </Button>
                </div>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] rounded-t-[2rem] p-0 flex flex-col bg-background/95 backdrop-blur-xl border-t border-white/20">
                <div className="p-6 border-b border-border">
                    <SheetHeader className="text-center">
                        <SheetTitle className="font-serif text-3xl">Your Bouquet Selection</SheetTitle>
                        <SheetDescription className="text-base">
                            Review your selections below. Save the combined image to send to us!
                        </SheetDescription>
                    </SheetHeader>
                </div>

                <ScrollArea className="flex-1 p-6 relative">
                    {/* Visual Cart for User */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cart.map((item) => (
                            <div key={item.id} className="relative group rounded-xl overflow-hidden border border-border bg-card shadow-md flex flex-col">
                                <div className="aspect-square relative overflow-hidden">
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                                <div className="p-4 flex flex-col gap-3 flex-1 bg-white/50 backdrop-blur-sm">
                                    <span className="text-sm font-medium truncate py-1 text-center">{item.title}</span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 border-border/50"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hidden Collage Layout for capturing */}
                    <div
                        ref={collageRef}
                        className="absolute top-0 left-0 w-[800px] bg-white p-8 grid grid-cols-2 gap-4 pointer-events-none opacity-0 -z-50"
                    >
                        <div className="col-span-2 text-center mb-4">
                            <h2 className="font-serif text-3xl text-primary font-bold">My Liceria Bloom Selection</h2>
                            <p className="text-gray-500">I would like to inquire about these flowers:</p>
                        </div>
                        {cart.map((item) => (
                            <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm bg-gray-50 p-2">
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-64 object-cover rounded-md mb-2"
                                    crossOrigin="anonymous"
                                />
                                <p className="text-center font-medium text-gray-700 text-sm">{item.title}</p>
                            </div>
                        ))}
                        <div className="col-span-2 text-center mt-4 pt-4 border-t">
                            <p className="text-sm text-gray-400">Generated from Liceria Rose Flower Shop</p>
                        </div>
                    </div>
                </ScrollArea>

                <div className="p-6 border-t border-border bg-background/50">
                    <div className="flex flex-col gap-3 max-w-2xl mx-auto">
                        <Button
                            className="w-full bg-rose-500 hover:bg-rose-600 text-white shadow-lg text-lg py-6"
                            onClick={handleDownloadCollage}
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Save All as One Image
                        </Button>

                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={clearCart}
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Clear
                            </Button>

                            <a
                                href={MESSENGER_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <Button className="w-full bg-[#0084FF] hover:bg-[#0084FF]/90 text-white">
                                    <Send className="mr-2 h-4 w-4" />
                                    Send to Messenger
                                </Button>
                            </a>
                        </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                        Step 1: Save Image. Step 2: Send on Messenger.
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartView;
