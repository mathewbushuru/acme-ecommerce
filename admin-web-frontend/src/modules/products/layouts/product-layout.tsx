export default function ProductLayout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="h-full">
      <div className="h-[75px]">
        <h1 className="text-lg font-semibold md:text-xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <main className="h-[calc(100%-75px)] overflow-y-hidden rounded-lg border border-dashed p-4 shadow-sm">
        {children}
      </main>
    </div>
  );
}
