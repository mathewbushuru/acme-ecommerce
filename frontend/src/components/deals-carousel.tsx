import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function DealsCarousel() {
  return (
    <div className="mx-auto mt-6 max-w-screen-xl px-4">
      <h3 className="text-center text-lg font-bold">Hot Deals this Week</h3>
      <h5 className="mt-2 text-center text-primary">Shop Flyer</h5>

      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="mx-auto mt-4 w-full max-w-screen-xl"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="">1</span>
                    </CardContent>
                </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="">2</span>
                    </CardContent>
                </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="">3</span>
                    </CardContent>
                </Card>
            </div>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="">4</span>
                    </CardContent>
                </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="">5</span>
                    </CardContent>
                </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
                <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="">6</span>
                    </CardContent>
                </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
