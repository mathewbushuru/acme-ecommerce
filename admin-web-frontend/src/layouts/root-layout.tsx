import AdminNavbar from "@/components/admin-navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col">
      <AdminNavbar />
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
