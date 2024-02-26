export default function HeroBanners() {
  return (
    <>
      <div className="mx-auto mt-4 max-w-screen-xl sm:px-2 lg:mt-6">
        <img
          src="/xl_banner_mobile_380x200.jpg"
          className="w-full cursor-pointer sm:hidden"
        />
        <img
          src="/xl_banner_1490x250.jpg"
          className="mx-auto hidden cursor-pointer sm:block"
        />
      </div>
      <div className="mx-auto mt-4  grid max-w-screen-xl grid-cols-1 gap-4 sm:grid-cols-4 sm:px-2">
        <img src="sm_banner3_380x150.jpg" className="cursor-pointer" />
        <img src="sm_banner_380x150.jpg" className="cursor-pointer" />
        <img src="sm_banner4_380x150.jpg" className="cursor-pointer" />
        <img src="sm_banner2_380x150.jpg" className="cursor-pointer" />
      </div>
    </>
  );
}
