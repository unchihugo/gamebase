function SideBar() {
    return (
      <div className="h-screen w-60 bg-slate-900 hidden lg:block fixed left-0 top-0 overflow-y-auto pt-12 border-r border-slate-600">
        <div className="flex flex-col items-center font-display font-medium mt-4">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 my-2"	
              >Home</a>
              <a
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 my-2"
              >Library</a>
              <a
                href="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-slate-300 my-2"
              >Charts</a>
            </div>
      </div>
    );
}



export default SideBar;
