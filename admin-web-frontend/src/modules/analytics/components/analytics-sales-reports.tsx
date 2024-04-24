export default function AnalyticsSalesReports() {
  return (
    <div className="flex h-full flex-col gap-4 lg:gap-6">
      <div>
        <h1 className="text-lg font-semibold md:text-xl">Sales Analytics</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Filter by time period - hourly, daily, weekly, monthly and yearly.
          Dynamic updates to get a realtime view of your store.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-xl font-bold">You have no sales yet.</h3>
          <p className="text-sm text-muted-foreground">Come back later.</p>
        </div>
      </div>
    </div>
  );
}
