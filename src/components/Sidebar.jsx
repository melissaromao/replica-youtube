import {
    MdHomeFilled,
    MdOutlineSubscriptions,
    MdHistory,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdOutlineLocalFireDepartment,
    MdLiveTv,
    MdOutlineSportsEsports,
    MdOutlineArticle,
    MdOutlineLibraryMusic,
    MdOutlineShoppingBag,
    MdOutlineMovie,
    MdPodcasts,
    MdOutlineMenuBook,
    MdOutlinePlaylistPlay,
} from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="w-48 bg-white p-4 shadow hidden md:block overflow-y-auto h-screen">
            <ul className="space-y-2">
                <li className="cursor-pointer bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdHomeFilled size={24} className="text-black" />
                    <span className="text-sm">Início</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineLocalFireDepartment size={24} className="text-black" />
                    <span className="text-sm">Shorts</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineSubscriptions size={24} className="text-black" />
                    <span className="text-sm">Inscrições</span>
                </li>
            </ul>

            <hr className="my-4 border-t border-gray-300" />
            <h3 className="text-pretty font-bold">Você</h3>
            <ul className="space-y-2">
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdHistory size={24} className="text-black" />
                    <span className="text-sm">Histórico</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlinePlaylistPlay size={24} className="text-black" />
                    <span className="text-sm">Playlists</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineWatchLater size={24} className="text-black" />
                    <span className="text-sm">Assistir mais tarde</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdThumbUpOffAlt size={24} className="text-black" />
                    <span className="text-sm">Vídeos com "Gostei"</span>
                </li>
            </ul>

            <hr className="my-4 border-t border-gray-300" />
            <h3 className="text-pretty font-bold">Explorar</h3>
            <ul className="space-y-2">
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineLocalFireDepartment size={24} className="text-black" />
                    <span className="text-sm">Em alta</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineShoppingBag size={24} className="text-black" />
                    <span className="text-sm">Shopping</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineLibraryMusic size={24} className="text-black" />
                    <span className="text-sm">Música</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineMovie size={24} className="text-black" />
                    <span className="text-sm">Filmes</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdLiveTv size={24} className="text-black" />
                    <span className="text-sm">Ao vivo</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineSportsEsports size={24} className="text-black" />
                    <span className="text-sm">Jogos</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineArticle size={24} className="text-black" />
                    <span className="text-sm">Notícias</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineLibraryMusic size={24} className="text-black" />
                    <span className="text-sm">Esportes</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdOutlineMenuBook size={24} className="text-black" />
                    <span className="text-sm">Cursos</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 flex items-center space-x-3">
                    <MdPodcasts size={24} className="text-black" />
                    <span className="text-sm">Podcasts</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;