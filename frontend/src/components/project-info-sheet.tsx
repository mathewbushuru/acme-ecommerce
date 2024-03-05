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
    "aboutAcme" | "roadmap" | "technicalDocs" | "databaseDesign"
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
      pageContent = <TechnicalDocs onNextPage={setActivePage} />;
      break;
    case "databaseDesign":
      pageContent = <DatabaseDesign />;
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
              Technical design
            </Button>
            <Button
              variant={activePage === "databaseDesign" ? "secondary" : "ghost"}
              className="justify-start"
              size="sm"
              onClick={() => setActivePage("databaseDesign")}
            >
              Database design
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
    React.SetStateAction<
      "aboutAcme" | "roadmap" | "technicalDocs" | "databaseDesign"
    >
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

const roadmapItems = [
  {
    item: <>Users can register accounts and sign into them.</>,
    complete: true,
  },
  {
    item: <>Users can view all products per category/aisle.</>,
    complete: false,
  },
  { item: <>Users can place orders.</>, complete: false },
  { item: <>Users can check order status.</>, complete: false },
  { item: <>Users can pay for orders.</>, complete: false },
  { item: <>Users can view and write product reviews.</>, complete: false },
  { item: <>Users can search for products.</>, complete: false },
  { item: <>Admin can add products.</>, complete: false },
  {
    item: (
      <>Use machine learning to show product recommendations on home page</>
    ),
    complete: false,
  },
  {
    item: (
      <>
        Scale service to be able to handle Amazon scale (300 million active
        monthly users -&gt; assume each user does 10 searches a month -&gt; 3
        billion searches -&gt; 3B / (30 days x 24 hrs x 60 mins x 60 secs) -&gt;
        3B / 2,592,000 secs -&gt; 3B / ~3 million secs -&gt;{" "}
        <span className="font-bold">1,000 searches/second</span>,{" "}
        <span className="font-bold">10 million products</span> -&gt; assume 10
        MB metadata for each product -&gt; 10 million x 10 MB -&gt; 100 million
        MB -&gt; 100,000 GB -&gt;{" "}
        <span className="font-bold">100 TB storage.</span>)
      </>
    ),
    complete: false,
  },
];

function Roadmap({
  onNextPage,
}: {
  onNextPage: React.Dispatch<
    React.SetStateAction<
      "aboutAcme" | "roadmap" | "technicalDocs" | "databaseDesign"
    >
  >;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Project Roadmap</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 pt-4 text-sm antialiased">
        {roadmapItems.map((roadmapItem, index) => (
          <div key={index} className="flex items-center gap-4">
            <Checkbox checked={roadmapItem.complete} />
            <Label className="leading-6">{roadmapItem.item}</Label>
          </div>
        ))}
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

function TechnicalDocs({
  onNextPage,
}: {
  onNextPage: React.Dispatch<
    React.SetStateAction<
      "aboutAcme" | "roadmap" | "technicalDocs" | "databaseDesign"
    >
  >;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Technical Documentation</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4 text-sm antialiased">
        <p>
          I am designing this system to be as fault-tolerant as it could
          possibly be which is going to involve a bit more work since e-commerce
          systems have a decent number of moving parts. The system can be
          divided at a high level into four parts - the client(user), the API,
          the database and payments processor.
        </p>
        <img src="/docs/high-level-overview.jpg" className="mx-auto max-h-40" />

        <p>
          The main approach to achieving fault-tolerancy is by using replicas.
          For example, our MySQL database on AWS has an exact replica as shown
          below.
        </p>
        <img src="/docs/database.jpg" className="mx-auto max-h-40" />

        <p>
          The first single point of failure in the system above is the API. We
          have a single API server in our system, and if it fails, the user is
          completely unable to interact with our system. To solve this, we are
          simply going to duplicate our API server and introduce an API load
          balancer.
        </p>
        <img
          src="/docs/high-level-overview2.jpg"
          className="mx-auto max-h-60"
        />

        <p>
          We have a similar problem with the load balancer, if it fails then our
          whole system is down again. A workaround for this is to have load
          balancers with different IP addresses and configure our DNS to return
          both IP addresses. If we pass in our domain name e.g{" "}
          <span className="font-mono">acme.mathewbushuru.com</span>, the DNS
          server translates that into a set of two IP addresses. When a browser
          receives multiple ip addresses for a domain, it will either use a
          round-robin approach or pick the first one. And if one of them is not
          available, it will try another. Downsides of this approach are: DNS is
          usually cached on the client making it harder to introduce new load
          balancers, and in the event that a load balancer is down, there is
          increased latency to find the working one. But that's better than the
          whole system going down.
        </p>
        <img
          src="/docs/high-level-overview3.jpg"
          className="mx-auto max-h-60"
        />

        <p>
          The other single point of failure is the Payments Processor. This
          becomes easier when using third-party services because these services
          offer Service Level Agreements (SLA) that give us the expected uptime.
          For example, Stripe which is one service I will be integrating has an
          uptime of 99.9999%. We can introduce a standby payment processor but
          this increases complexity since different services have different
          APIs.
        </p>

        <SheetFooter className="sm:justify-start">
          <SheetCancel asChild>
            <Button variant="outline" className="">
              Go back to dev preview
            </Button>
          </SheetCancel>
          <Button
            variant="outline"
            onClick={() => onNextPage("databaseDesign")}
          >
            Next page (Database design)
          </Button>
        </SheetFooter>
      </div>
    </>
  );
}

function DatabaseDesign() {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Database Design</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4 text-sm antialiased">
        <p>
          User information is structured so a SQL database makes sense for this.
        </p>
        <img src="/docs/user-erd.jpg" className="mx-auto max-h-40" />

        <p>
          We could add fields for billing address and delivery address to the
          user table but that would restrict the user to only having one address
          at a time. To allow the user to have multiple addresses on file and
          prevent duplication of data, we will have a separate address table
        </p>
        <img src="/docs/address-erd.jpg" className="mx-auto max-h-40" />

        <p>
          Product data is inherently unstructured so the best option for it
          would be to use a NoSQL / Document database like DynamoDB or MongoDB.
        </p>

        <p>
          Orders can be stored in either a SQL or document database. In a
          document database, each order will be a JSON object with the following
          fields: <span className="font-mono">orderId</span>,{" "}
          <span className="font-mono">userId</span>,{" "}
          <span className="font-mono">addressId</span>,{" "}
          <span className="font-mono">amountBeforeTax</span>,{" "}
          <span className="font-mono">taxAmount</span>, and{" "}
          <span className="font-mono">
            itemsArray (itemId, quantity, price, currency)
          </span>
          .
        </p>

        <p>
          For the review database, we will use a key - value database such as
          Redis. Each review will consist of each of the following keys:{" "}
          <span className="font-mono">reviewId</span>,{" "}
          <span className="font-mono">rating</span>,{" "}
          <span className="font-mono">description</span>,{" "}
          <span className="font-mono">imageUrl</span>,{" "}
          <span className="font-mono">videoUrl</span>, and{" "}
          <span className="font-mono">userId</span>.
        </p>

        <h5 className="font-semibold">APIs / Services</h5>
        <li>
          <span className="font-mono">getRecommendations(userId)</span>: return
          list of 10 product recommendations.
        </li>
        <li>
          <span className="font-mono">search(searchString,userId)</span>: return
          list of product search results.
        </li>
        <li>
          <span className="font-mono">
            addToCart(userId,productId,quantity)
          </span>
          : return boolean (true or false) on whether addition was successful.
        </li>
        <li>
          <span className="font-mono">
            placeOrder(userId, orderId, addressId, paymentMethod)
          </span>
          : return boolean (true or false) on whether order was successful.
        </li>
        <li>
          <span className="font-mono">
            checkOrderStatus(orderId)
          </span>
          : return progress of order (received, shipped, delivered).
        </li>

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
