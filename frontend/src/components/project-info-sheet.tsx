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

export default function ProjectInfoSheet() {
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
            <Button variant="secondary" className="justify-start" size="sm">
              About Acme
            </Button>
            <Button variant="ghost" className="justify-start" size="sm">
              Roadmap
            </Button>
            <Button variant="ghost" className="justify-start" size="sm">
              Technical docs
            </Button>
          </div>

          <div className="h-full overflow-y-scroll p-8">
            <SheetHeader>
              <SheetTitle>Building blocks for digital commerce</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4 text-sm antialiased">
              <p>
                This project aims to create commerce modules and tools to build
                rich, reliable and performant commerce applications without
                reinventing core commerce logic.
              </p>
              <p>
                It contains modularized commerce logic like carts, products,
                authentication, pricing, order management, and tools you can use
                to build powerful ecommerce websites.
              </p>

              <p className="font-bold">Building Blocks:</p>
              <li>
                <span className="font-semibold">Product module</span> - Manage
                product information, build categories, and more.
              </li>
              <li>
                <span className="font-semibold">Pricing Module </span> - Define
                granular pricing rules and display the correct price every time.
              </li>
              <li>
                <span className="font-semibold"> Inventory module </span>- Get
                your stock levels right, across locations and in real-time.
              </li>

              <p className="font-bold">Provided Recipes:</p>
              <li>
                <span className="font-semibold">E-commerce</span> - Multi-region
                and multi-channel store with customization options. Allow
                customers to browse products and make purchases. It also
                includes accepting payments, managing orders and more.
              </li>
              <li>
                <span className="font-semibold">Marketplace</span> - Set up
                marketplace with multiple vendors. Set up a storefront where
                different vendors sell their products within the same commerce
                system. Customers can purchase from any of these vendors, and
                vendors manage their orders separately.
              </li>
              <li>
                <span className="font-semibold">Subscription Business</span> -
                Handle subscription-based orders and set up custom renewal
                logic. Allows customers to purchase products for a specified
                period, and the payment and fulfillment is processed within a
                regular interval in that period.
              </li>
              <li>
                <span className="font-semibold">B2B Store</span> - Set unique
                price lists, discounts, product access, and shopping experience
                for B2B customers.
              </li>
              <li>
                <span className="font-semibold">Point of Sales</span> - Support
                in-store purchases with focus on data sync across channels,
                seamless offline transactions in addition to online sales, and
                modularity to integrate with your existing stack.
              </li>
              <li>
                <span className="font-semibold">Back Office Admin</span> - A
                prebuilt admin dashboard to manage orders, inventory,
                promotions, gift cards, pricing, customer loyalty and reports to
                get you started quickly and scale globally.
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
                <span className="font-semibold">AWS S3</span> - Scalable and
                secure cloud storage on Amazon Web Services.
              </li>
              <li>
                <span className="font-semibold">Algolia</span> - Improve search
                functionality within your site.
              </li>
              <li>
                <span className="font-semibold">Contentful</span> - for a rich
                Content Management System functionality.
              </li>
              <SheetFooter className="sm:justify-start">
                <SheetCancel asChild>
                  <Button variant="outline" className="">
                    Go back to dev preview
                  </Button>
                </SheetCancel>
              </SheetFooter>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
