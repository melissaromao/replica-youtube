import { FiSearch, FiUpload, FiBell } from "react-icons/fi";
import { MdMic } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { HiMiniUserCircle } from "react-icons/hi2";

const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-white text-black shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <button>
                    <SlMenu size={19} />
                </button>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube"
                    className="h-6"
                />
            </div>

            <div className="flex items-center w-1/2 max-w-xl">
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="flex-grow h-10 px-4 py-2 rounded-l-full text-black placeholder-gray-500 outline-none border border-gray-300"
                />
                <button className="h-10 px-4 rounded-r-full bg-gray-100 border border-gray-300 flex items-center justify-center">
                    <FiSearch size={20} />
                </button>
                <button className="ml-2 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <MdMic size={22} className="text-black" />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button>
                    <FiUpload size={22} />
                </button>
                <button>
                    <FiBell size={22} />
                </button>
                <button>
                    <HiMiniUserCircle size={30} />
                </button>
            </div>
        </header>
    );
};

export default Navbar;