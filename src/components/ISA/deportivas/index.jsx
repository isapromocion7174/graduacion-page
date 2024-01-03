import React, { useEffect, useState } from "react";
import Overlay from "@/components/aniversario/modal/modal";
import { deportivasImages } from "@/config/deportivas/deportivas";

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
            <div className=" max-w-screen-lg h-full py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex text-center items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12 justify-center">
                            <h2 className="text-3xl font-bold  text-gray-800 lg:text-4xl dark:text-white">
                                DEPORTIVAS
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <div
                            className="group relative rounded-2xl flex h-36 bg-gray-100 shadow-lg md:h-80"
                            onClick={() => openOverlay(deportivasImages[0])}
                        >
                            <img
                                src={deportivasImages[0]}
                                className="absolute rounded-2xl inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[1])}
                            class="group relative flex h-44    rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={deportivasImages[1]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[3])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={deportivasImages[3]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[4])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={deportivasImages[4]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(deportivasImages[13])}
                            class="group relative flex h-80 rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={deportivasImages[13]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(deportivasImages[6])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={deportivasImages[6]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[5])}
                            class="group relative flex h-52 rounded-2xl  bg-gray-100 shadow-lg md:h-80  "
                        >
                            <img
                                src={deportivasImages[5]}
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[7])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80 "
                        >
                            <img
                                src={deportivasImages[7]}
                                loading="lazy"
                                alt="Photo by Magicle"
                                class="absolute inset-0 h-full w-full rounded-2xl object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />
                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(deportivasImages[12])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={deportivasImages[12]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(deportivasImages[10])}
                            class="group relative flex h-36    rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={deportivasImages[10]}
                                loading="lazy"
                                alt="Photo by Martin Sanchez"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>
                        <div
                            onClick={() => openOverlay(deportivasImages[14])}
                            class="group relative flex h-36    rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={deportivasImages[14]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[16])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:h-80"
                        >
                            <img
                                src={deportivasImages[16]}
                                loading="lazy"
                                alt="Photo by Lorenzo Herrera"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[15])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <img
                                src={deportivasImages[15]}
                                loading="lazy"
                                alt="Photo by Martin Sanchez"
                                class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                            />

                            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                        </div>

                        <div
                            onClick={() => openOverlay(deportivasImages[11])}
                            class="group relative flex h-36 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[700px] md:w-[945px]"
                        >
                            <img
                                src={deportivasImages[11]}
                                loading="lazy"
                                alt="Photo by Minh Pham"
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
