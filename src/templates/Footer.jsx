import logo from "../images/logo.png";	
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="bg-slate-900 z-10 border-t border-slate-600">
        <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex items-center mt-2 md:mt-0 mb-4 sm:mb-0">
                    <img src={logo} class="h-11 -my-2" alt="Gamebase logo" />
                </div>
                <div></div>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-400 sm:mb-0">
                    <li>
                        <Link to={"/landing"} class="mr-4 hover:underline md:mr-6 ">Return to Landing</Link>
                    </li>
                    <li>
                        <Link to={"/about"} class="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 sm:mx-auto border-slate-700 lg:my-8 opacity-50" />
            <span class="block text-sm text-slate-400 sm:text-center">React Website made by Hugo Li (<a href="https://github.com/takkuchi/gamebase" className="underline" target="_blank">GitHub Repository</a>)</span>
            <span class="block text-sm text-slate-400 sm:text-center mb-5">© 2023 Gamebase™. All Rights Reserved.</span>
            <span className="block text-sm text-slate-400 sm:text-center">Made with ❤️</span>
        </div>
    </footer>
    );
}

export default Footer;