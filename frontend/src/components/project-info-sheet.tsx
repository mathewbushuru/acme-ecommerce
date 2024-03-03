import { useState } from "react";

import {
  Sheet,
  SheetCancel,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ProjectInfoSheet() {
  const [activePage, setActivePage] = useState<
    "aboutAcme" | "roadmap" | "technicalDocs"
  >("aboutAcme");

  let pageContent: React.ReactNode;

  switch (activePage) {
    case "aboutAcme":
      pageContent = <AboutAcme onNextPage={setActivePage} />;
      break;
    case "roadmap":
      pageContent = <Roadmap onNextPage={setActivePage} />;
      break;
    case "technicalDocs":
      pageContent = <TechnicalDocs />;
      break;
    default:
      pageContent = <>Something went wrong</>;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="cursor-pointer text-primary hover:underline">
          Click here to learn more
        </span>
      </SheetTrigger>
      <SheetContent size="xl" className="h-full p-0">
        <div className="flex h-full">
          <div className="hidden min-w-44 flex-col gap-4 border-r px-4 py-8 sm:flex lg:min-w-48">
            <Button
              variant={activePage === "aboutAcme" ? "secondary" : "ghost"}
              className="justify-start"
              size="sm"
              onClick={() => setActivePage("aboutAcme")}
            >
              About Acme
            </Button>
            <Button
              variant={activePage === "roadmap" ? "secondary" : "ghost"}
              className="justify-start"
              size="sm"
              onClick={() => setActivePage("roadmap")}
            >
              Roadmap
            </Button>
            <Button
              variant={activePage === "technicalDocs" ? "secondary" : "ghost"}
              className="justify-start"
              size="sm"
              onClick={() => setActivePage("technicalDocs")}
            >
              Technical docs
            </Button>
          </div>

          <div className="h-full overflow-y-scroll p-8">{pageContent}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function AboutAcme({
  onNextPage,
}: {
  onNextPage: React.Dispatch<
    React.SetStateAction<"aboutAcme" | "roadmap" | "technicalDocs">
  >;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Building blocks for digital commerce</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4 text-sm antialiased">
        <p>
          This project aims to create commerce modules and tools to build rich,
          reliable and performant commerce applications without reinventing core
          commerce logic.
        </p>
        <p>
          It contains modularized commerce logic like carts, products,
          authentication, pricing, order management, and tools you can use to
          build powerful ecommerce websites.
        </p>

        <p className="font-bold">Building Blocks:</p>
        <li>
          <span className="font-semibold">Product module</span> - Manage product
          information, build categories, and more.
        </li>
        <li>
          <span className="font-semibold">Pricing Module </span> - Define
          granular pricing rules and display the correct price every time.
        </li>
        <li>
          <span className="font-semibold"> Inventory module </span>- Get your
          stock levels right, across locations and in real-time.
        </li>

        <p className="font-bold">Provided Recipes:</p>
        <li>
          <span className="font-semibold">E-commerce</span> - Multi-region and
          multi-channel store with customization options. Allow customers to
          browse products and make purchases. It also includes accepting
          payments, managing orders and more.
        </li>
        <li>
          <span className="font-semibold">Marketplace</span> - Set up
          marketplace with multiple vendors. Set up a storefront where different
          vendors sell their products within the same commerce system. Customers
          can purchase from any of these vendors, and vendors manage their
          orders separately.
        </li>
        <li>
          <span className="font-semibold">Subscription Business</span> - Handle
          subscription-based orders and set up custom renewal logic. Allows
          customers to purchase products for a specified period, and the payment
          and fulfillment is processed within a regular interval in that period.
        </li>
        <li>
          <span className="font-semibold">B2B Store</span> - Set unique price
          lists, discounts, product access, and shopping experience for B2B
          customers.
        </li>
        <li>
          <span className="font-semibold">Point of Sales</span> - Support
          in-store purchases with focus on data sync across channels, seamless
          offline transactions in addition to online sales, and modularity to
          integrate with your existing stack.
        </li>
        <li>
          <span className="font-semibold">Back Office Admin</span> - A prebuilt
          admin dashboard to manage orders, inventory, promotions, gift cards,
          pricing, customer loyalty and reports to get you started quickly and
          scale globally.
        </li>

        <p className="font-bold">Integrations:</p>
        <li>
          <span className="font-semibold">Stripe</span> - Integrate Stripe
          payment gateway for secure transactions.
        </li>
        <li>
          <span className="font-semibold">SendGrid</span> - For your
          transactional and promotional emails.
        </li>
        <li>
          <span className="font-semibold">AWS S3</span> - Scalable and secure
          cloud storage on Amazon Web Services.
        </li>
        <li>
          <span className="font-semibold">Algolia</span> - Improve search
          functionality within your site.
        </li>
        <li>
          <span className="font-semibold">Contentful</span> - for a rich Content
          Management System functionality.
        </li>

        <p className="font-bold">Why the name Acme</p>
        <p className="">
          Acme is a fictional corporation from the{" "}
          <span className="italic">Wile E. Coyote</span> animations and is used
          as a generic company name in many cartoons. In the past, it was
          commonly used in the names of real businesses in order to be listed
          towards the beginning of alphabetized telephone directories like the
          Yellow Pages. This makes it perfect as a stand-in for an e-commerce
          company.
        </p>
        <SheetFooter className="sm:justify-start">
          <SheetCancel asChild>
            <Button variant="outline" className="">
              Go back to dev preview
            </Button>
          </SheetCancel>
          <Button variant="outline" onClick={() => onNextPage("roadmap")}>
            Next page (Roadmap)
          </Button>
        </SheetFooter>
      </div>
    </>
  );
}

function Roadmap({
  onNextPage,
}: {
  onNextPage: React.Dispatch<
    React.SetStateAction<"aboutAcme" | "roadmap" | "technicalDocs">
  >;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Project Roadmap</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 pt-4 text-sm antialiased">
        <div className="flex items-center gap-2">
          <Checkbox checked />
          <Label>Users can register accounts and sign into them.</Label>
        </div>
        <SheetFooter className="mt-2 sm:justify-start">
          <SheetCancel asChild>
            <Button variant="outline" className="">
              Go back to dev preview
            </Button>
          </SheetCancel>
          <Button variant="outline" onClick={() => onNextPage("technicalDocs")}>
            Next page (Technical docs)
          </Button>
        </SheetFooter>
      </div>
    </>
  );
}

function TechnicalDocs() {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Technical Documentation</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4 text-sm antialiased">
        <p>Technical Docs content</p>
        <SheetFooter className="sm:justify-start">
          <SheetCancel asChild>
            <Button variant="outline" className="">
              Go back to dev preview
            </Button>
          </SheetCancel>
        </SheetFooter>
      </div>
    </>
  );
}
