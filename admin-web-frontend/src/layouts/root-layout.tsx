import AdminNavbar from "@/components/admin-navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full mx-auto max-w-screen-2xl">
      <AdminNavbar />
      <main className="flex-1 flex">{children}</main>
    </div>
  );
}
