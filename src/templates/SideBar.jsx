function SideBar() {
    return (
      <div className="h-screen w-60 bg-slate-800 hidden lg:block fixed left-0 top-0 overflow-y-auto pt-12">
        <div className="flex flex-col">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 mr-4"
              >
                Home
              </a>
              <a
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 mr-4"
              >
                Library
              </a>
              <a
                href="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300"
              >
                Charts
              </a>
            </div>
      </div>
    );
}



export default SideBar;
