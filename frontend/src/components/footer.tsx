import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="mt-8 bg-secondary p-4">
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="mb-2 text-center text-sm text-secondary-foreground">
          This is a dev preview for a project I'm working on that contains
          building blocks for digital commerce. <ProjectInfoSheet />
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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Building blocks for digital commerce</SheetTitle>
          <SheetDescription>
            This project aims to create commerce modules and tools to build
            rich, reliable and performant commerce applications without
            reinventing core commerce logic.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            I'm building modularized commerce logic like carts, products,
            pricing, order management, and tools you can use to build powerful
            ecommerce websites
          </p>
          <p className="text-sm text-muted-foreground">
            These modules are portable such that you can use them independently
            in your application. The modules will be developed to work with a
            JavaScript frontend(starting out with ReactJS and NextJS. Vue and
            Svelte support coming later). Backend modules will be provided for
            Node(TypeScript/JavaScript) with support for Java(SpringBoot) and
            Python(Django) coming later.
          </p>
          <p className="text-sm text-muted-foreground">
            If you are looking for a fully hosted solution, I will be provided a
            Platform As A Service Offering(PAAS) for a fee.
          </p>
          <p className="text-sm">Building Blocks</p>
          <ol className="grid gap-4 py-4">
            <li className="text-sm">
              1. Product module - Manage product information, build categories,
              and more.
            </li>
            <li className="text-sm">
              2. Pricing Module - Define granular pricing rules and display the
              correct price every time.
            </li>
            <li className="text-sm">
              3. Inventory module - Get your stock levels right - across
              locations, in real-time.
            </li>
          </ol>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Go back</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
