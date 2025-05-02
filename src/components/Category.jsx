import { useState } from "react";

const categories = [
    "Tudo", "Música", "Perfume", "Podcasts", "Jogos", "Mixes",
    "Ao vivo", "Programação de computadores", "Sofás", "Hino",
    "Gravações", "Gospel"
];

const Category = () => {
    const [selected, setSelected] = useState("Tudo");

    return (
        <div className="flex overflow-x-auto no-scrollbar space-x-3 py-3 px-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelected(category)}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-medium transition 
            ${selected === category
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black hover:bg-gray-300"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Category;