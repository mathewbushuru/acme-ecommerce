import RootLayout from "@/layouts/root-layout"; 

export default function SidebarLayout({
  sidebarComponent,
  mainComponent,
}: {
  sidebarComponent: React.ReactNode;
  mainComponent: React.ReactNode;
}) {
  return (
    <RootLayout>
      <div className="grid w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="hidden shadow-lg md:block 2xl:shadow-none">
          {sidebarComponent}
        </div>
        <main className="p-4 lg:p-6">{mainComponent}</main>
      </div>
    </RootLayout>
  );
}
