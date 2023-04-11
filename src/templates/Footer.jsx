function Footer() {
    return (
        <footer class="bg-slate-900 z-10 border-t border-slate-600">
        <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/home" class="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-2" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-display font-semibold whitespace-nowrap">Gamebase</span>
                </a>
                <div></div>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-400 sm:mb-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 sm:mx-auto border-slate-700 lg:my-8 opacity-50" />
            <span class="block text-sm text-slate-400 sm:text-center">React Website made by Hugo Li (<a href="https://github.com/takkuchi/gamebase" className="hover:underline" target="_blank">GitHub Repository</a>)</span>
            <span class="block text-sm text-slate-400 sm:text-center mb-5">© 2023 Gamebase™. All Rights Reserved.</span>
            <span className="block text-sm text-slate-400 sm:text-center">Made with ❤️ from <span className="ml-0.5 text-base text-center">🇳🇱 🇧🇪 🇨🇳</span></span>
        </div>
    </footer>
    );
}

export default Footer;