import Navbar from "@/components/navbar";

function App() {
  return (
    <main>
      <Navbar />

      {/* Hero banners */}
      <div className="mx-auto mt-4 max-w-screen-xl sm:px-2">
        <img src="/xl_banner_mobile_380x200.jpg" className="w-full sm:hidden cursor-pointer" />
        <img
          src="/xl_banner_1490x250.jpg"
          className="mx-auto hidden sm:block cursor-pointer"
        />
      </div>
      <div className="mx-auto mt-4  max-w-screen-xl grid grid-cols-1 gap-4 sm:grid-cols-4 sm:px-2">
        <img src="sm_banner3_380x150.jpg" className="cursor-pointer" />
        <img src="sm_banner_380x150.jpg" className="cursor-pointer" />
        <img src="sm_banner4_380x150.jpg" className="cursor-pointer" />
        <img src="sm_banner2_380x150.jpg" className="cursor-pointer" />
      </div>
    </main>
  );
}

export default App;
