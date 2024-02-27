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
      <h5 className="mt-2 cursor-pointer text-center text-primary">
        Shop Flyer
      </h5>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-4 w-full max-w-screen-xl"
      >
        <CarouselContent>
          {dealItems.map((item, index) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/4" key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square flex-col justify-center gap-3 p-4">
                    <img
                      src={item.url}
                      className="mx-auto h-48 w-72 rounded-md object-cover"
                    />
                    <p className="text-sm h-8">
                      {item.name}
                    </p>
                    <p className="text-left mb-1">
                      <span className="font-bold text-destructive">{item.specialPrice}</span>{" "}
                      was {item.retailPrice}
                    </p>
                    <Button size="sm">Add to Cart</Button>
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
    url: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Blueberries - Fresh, 1 pint, 1 each",
    specialPrice: "$3.99",
    retailPrice: "$7.99",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1664472658489-8bb2cf572db1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Meat Lasagna - 907 Gram",
    specialPrice: "$7.49",
    retailPrice: "$11.69",
  },
  {
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ancient Grains Bread - 600 Gram",
    specialPrice: "$3.99",
    retailPrice: "$7.99",
  },
  {
    url: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Maple & Brown Sugar Flavour Oat Meal",
    specialPrice: "$3.00",
    retailPrice: "$4.79",
  },
  {
    url: "https://images.unsplash.com/photo-1517456944721-229d38679dfa?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Breakfast Cereal - 850 Gram",
    specialPrice: "$8.99",
    retailPrice: "$12.49",
  },
  {
    url: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sea Salt &  Vinegar Potato Chips - 200 Gram",
    specialPrice: "$3.79",
    retailPrice: "$5.49",
  },
  {
    url: "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Coca-Cola Soft Drinks - 12 x 355ml",
    specialPrice: "$8.69",
    retailPrice: "$12.49",
  },
];
