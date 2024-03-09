import Autoplay from "embla-carousel-autoplay";

import AuthModal from "@/components/auth-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DealsCarousel() {
  return (
    <div className="mx-auto mt-6 max-w-screen-xl px-12">
      <h3 className="text-center text-lg font-bold">Hot Deals this Week</h3>
      <h5 className="mt-2 cursor-pointer text-center text-primary hover:underline">
        Shop Flyer
      </h5>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-4 w-full max-w-screen-xl"
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {dealItems.map((item, index) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/4" key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square flex-col justify-center gap-3 p-4">
                    <img
                      src={item.imageUrl}
                      className="mx-auto h-48 w-72 cursor-pointer rounded-md object-cover"
                    />
                    <p className="h-8 cursor-pointer text-sm">{`${item.name} - ${item.size}`}</p>
                    <p className="mb-1 text-left">
                      <span className="font-bold text-destructive">
                        {`$${(item.specialPriceInCents / 100).toFixed(2)}`}
                      </span>{" "}
                      was {`$${(item.regularPriceInCents / 100).toFixed(2)}`}
                    </p>
                    <AuthModal>
                      <Button size="sm">Add to Cart</Button>
                    </AuthModal>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

const dealItems = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Blueberries",
    specialPriceInCents: 399,
    regularPriceInCents: 799,
    size: "1 pint, 1 each",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Meat Lasagna",
    specialPriceInCents: 749,
    regularPriceInCents: 1169,
    size: "907 Grams",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ancient Grains Bread",
    specialPriceInCents: 399,
    regularPriceInCents: 799,
    size: "600 Grams",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Maple & Brown Sugar Flavour Oat Meal",
    specialPriceInCents: 300,
    regularPriceInCents: 479,
    size: "12 Pack",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517456944721-229d38679dfa?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Breakfast Cereal",
    specialPriceInCents: 899,
    regularPriceInCents: 1249,
    size: "850 Grams",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sea Salt &  Vinegar Potato Chips",
    specialPriceInCents: 379,
    regularPriceInCents: 549,
    size: "200 Grams",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Coca-Cola Soft Drinks",
    specialPriceInCents: 869,
    regularPriceInCents: 1249,
    size: "12 Pack",
  },
];
