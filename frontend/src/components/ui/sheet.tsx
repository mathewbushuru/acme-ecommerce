import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-alert-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: {
    position: "right",
  },
});

interface SheetPortalProps
  extends SheetPrimitive.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const SheetPortal = ({ position, children, ...props }: SheetPortalProps) => {
  return (
    <SheetPrimitive.Portal {...props}>
      <div className={portalVariants({ position })}>{children}</div>
    </SheetPrimitive.Portal>
  );
};

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, children, ...props }, ref) => {
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
        className,
      )}
      {...props}
    />
  );
});

const SheetVariants = cva(
  "fixed z-50 scale-100 bg-background p-6 opacity-100 shadow-lg overflow-y-auto",
  {
    variants: {
      position: {
        top: "animate-in slide-in-from-top w-full duration-300 border",
        bottom: "animate-in slide-in-from-bottom w-full duration-300 border",
        left: "animate-in slide-in-from-left h-full duration-300",
        right: "animate-in slide-in-from-right h-full duration-300",
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/2 sm:h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "content",
        class: "max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-5/6 sm:w-1/3",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-2/3 sm:w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-5/6 sm:w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen",
      },
    ],
    defaultVariants: {
      position: "right",
      size: "default",
    },
  },
);

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof SheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ position, size, className, children, ...props }, ref) => {
  return (
    <SheetPortal position={position}>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(SheetVariants({ position, size }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Cancel className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity focus-within:ring-ring hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Cancel>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
};

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
};

const SheetAction = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Action>
>(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Action
      ref={ref}
      className={cn(
        "flex flex-col-reverse items-stretch sm:flex-row sm:items-center sm:justify-end sm:space-x-2",
        className,
      )}
      {...props}
    />
  );
});

const SheetCancel = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Cancel>
>(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Cancel
      ref={ref}
      className={cn(
        "flex flex-col-reverse items-stretch sm:flex-row sm:items-center sm:justify-end sm:space-x-2",
        className,
      )}
      {...props}
    />
  );
});

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
});

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => {
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetAction,
  SheetCancel,
  SheetTitle,
  SheetDescription,
};
