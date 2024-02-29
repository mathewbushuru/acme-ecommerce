import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Footer() {
  return (
    <div className="mt-8 bg-secondary p-4">
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="mb-2  text-center text-sm text-secondary-foreground ">
          <span className="hidden sm:inline">
            This is a dev preview for a project I'm working on that contains
            building blocks for digital commerce.
          </span>{" "}
          <ProjectInfoSheet />
        </p>
        <p className="text-center text-sm text-secondary-foreground">
          <span className="cursor-pointer">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;Acme Groceries
          </span>
        </p>
      </div>
    </div>
  );
}

function ProjectInfoSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="cursor-pointer text-primary hover:underline">
          Click here to learn more
        </span>
      </SheetTrigger>
      <SheetContent size="lg">
        <SheetHeader>
          <SheetTitle>Building blocks for digital commerce</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4 antialiased">
          <p className="text-sm ">
            This project aims to create commerce modules and tools to build
            rich, reliable and performant commerce applications without
            reinventing core commerce logic.
          </p>
          <p className="text-sm">
            It contains modularized commerce logic like carts, products,
            authentication, pricing, order management, and tools you can use to
            build powerful ecommerce websites.
          </p>
          <p className="text-sm">Building Blocks:</p>
          <li className="text-sm">
            Product module - Manage product information, build categories, and
            more.
          </li>
          <li className="text-sm">
            Pricing Module - Define granular pricing rules and display the
            correct price every time.
          </li>
          <li className="text-sm">
            Inventory module - Get your stock levels right, across locations and
            in real-time.
          </li>
        </div>
      </SheetContent>
    </Sheet>
  );
}
