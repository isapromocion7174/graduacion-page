import React, { useEffect, useState } from "react";
import Overlay from "@/components/aniversario/modal/modal";
import { navbarOptions42th } from "../../../config/configaniversario/42thaniversario/42thconfig";

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
      <div className="bg-slate-200 dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
        {navbarOptions42th
          .filter((option) => option.dropDown && option.dropDownOptions42th)
          .map((option) =>
            option.dropDownOptions42th.map((dropDownOption42th) => (
              <div
                className="mx-auto max-w-screen-2xl px-4 md:px-8"
                key={dropDownOption42th.imageUrl}
              >
                <div className="mb-4 flex text-center items-center justify-between gap-8 sm:mb-8 md:mb-12">
                  <div className="flex items-center gap-12">
                    <h2 className="md:text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                      42th Aniversario
                    </h2>
                  </div>
                  <div className="mt-3 sm:mt-5 sm:ml-8">
                    <a
                      href={dropDownOption42th.regresar}
                      className="inline-flex rounded-lg border bg-white dark:bg-gray-600 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-900 md:px-8 md:py-3 md:text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-6 mr-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        ></path>
                      </svg>
                      Volver aniversarios
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                  <div
                      class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]"
                      onClick={() => openOverlay(dropDownOption42th.imageUrl)}
                  >
                    <img
                      src={dropDownOption42th.imageUrl}
                      className="absolute rounded-2xl inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>

                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl2)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
       
                    <img
                      src={dropDownOption42th.imageUrl2}
                      loading="lazy"
                      alt="Photo by Magicle"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>

                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl3)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
          
                    <img
                      src={dropDownOption42th.imageUrl3}
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>

                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl4)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
          
                    <img
                      src={dropDownOption42th.imageUrl4}
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>

                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl4)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
          
                    <img
                      src={dropDownOption42th.imageUrl4}
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>


                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl5)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
          
                    <img
                      src={dropDownOption42th.imageUrl5}
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>


                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl6)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
          
                    <img
                      src={dropDownOption42th.imageUrl6}
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>
              
                  <div
                    onClick={() => openOverlay(dropDownOption42th.imageUrl7)}
                    class="group relative flex  h-52 rounded-2xl bg-gray-100 shadow-lg md:col-span-2 md:h-[500px] md:w-[745px]">
          
                    <img
                      src={dropDownOption42th.imageUrl7}
                      loading="lazy"
                      alt="Photo by Martin Sanchez"
                      class="absolute rounded-2xl inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-[102%]"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50"></div>
                  </div>
                </div>
              </div>
            ))
          )}
        {selectedImage && (
          <Overlay imageSrc={selectedImage} onClose={closeOverlay} />
        )}
      </div>
    </>
  );
};

export default App;
