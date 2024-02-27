export default function Footer() {
  return (
    <div className="mt-8 bg-secondary p-4">
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="text-center text-sm text-secondary-foreground">
          <span className="cursor-pointer">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;Acme Groceries
          </span>
        </p>
      </div>
    </div>
  );
}
