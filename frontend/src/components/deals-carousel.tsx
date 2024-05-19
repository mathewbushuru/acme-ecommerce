import Autoplay from "embla-carousel-autoplay";

import { useGetAllProductsQuery } from "@/api";
import { ProductType } from "@/types/product";
import { fallbackAllProducts } from "@/lib/constants";

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
  const { data } = useGetAllProductsQuery();

  let allProducts: Omit<
    ProductType,
    "id" | "categoryId" | "isOnSpecial" | "createdAt" | "updatedAt"
  >[];

  if (data) {
    allProducts = data;
  } else {
    allProducts = fallbackAllProducts;
  }

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
          {allProducts.map((item, index) => (
            <>
              {item.specialPrice ? (
                <>
                  <CarouselItem
                    className="md:basis-1/3 lg:basis-1/4"
                    key={index}
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square flex-col justify-center gap-3 p-4">
                          <img
                            src={item.imageUrl}
                            className="mx-auto h-48 w-72 cursor-pointer rounded-md object-cover"
                          />
                          <p className="h-8 cursor-pointer text-sm">{`${item.name} - ${item.sizeAndMeasurement}`}</p>
                          <p className="mb-1 text-left">
                            <span className="font-bold text-destructive">
                              {`$${item.specialPrice}`}
                            </span>{" "}
                            was {`$${item.regularPrice}`}
                          </p>
                          <AuthModal>
                            <Button size="sm">Add to Cart</Button>
                          </AuthModal>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
