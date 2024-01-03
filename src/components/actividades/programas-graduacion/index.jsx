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
            <div className=" h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex text-center items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h2 className="md:text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                                Programas de Graduación
                            </h2>
                        </div>
                 
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <div
                           class="group relative flex  h-32 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]"
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
