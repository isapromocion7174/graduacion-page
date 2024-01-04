import React, { useEffect, useState } from "react";
import Overlay from "@/components/aniversario/modal/modal";
import { activi } from "@/config/actividades/activi";
const App = () => {
    const [selectedImage, setSelectedImage] = useState("");

    const openOverlay = (imageSrc) => {
        setSelectedImage(imageSrc);
        document.body.classList.add("overflow-y-auto");
    };

    const closeOverlay = () => {
        setSelectedImage("");
        document.body.classList.remove("overflow-y-auto");
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeOverlay();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <div class="mx-4 py-6  sm:py-8 lg:py-12 flex items-center justify-center max-w-screen-lg ">
                <div
                    class=" flex flex-col gap-8 md:px-8 md:items-center md:justify-center shadow-lg 
				border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800 px-4 py-8
			"
                >
                    <div className="flex text-center items-center justify-between gap-8  ">
                        <h2 className="md:text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                            Programas de Graduación
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 place-content-center">
                        <div
                            class="group relative flex  h-32 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px] justify-center items-center"
                            onClick={() => openOverlay(activi.images[0])}
                        >
                            <img
                                src={activi.images[0]}
                                className="absolute rounded-2xl inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(activi.images[1])}
                            class="group relative flex  h-32 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]"
                        >
                            <img
                                src={activi.images[1]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                    </div>
                </div>
                {selectedImage && (
                    <Overlay imageSrc={selectedImage} onClose={closeOverlay} />
                )}
            </div>
        </>
    );
};

export default App;
