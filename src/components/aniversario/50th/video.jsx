import React, { useState, useRef, useEffect } from "react";

import { navbarOptions50thv } from "../../../config/configaniversario/50thaniversario/50thconigvideo";

const Img = () => {
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  useEffect(() => {}, [fullscreenVideo]);

  const openFullscreen = (videoUrl) => {
    setFullscreenVideo(videoUrl);
  };
  const closeFullscreen = () => {
    setFullscreenVideo(() => null);
  };

  useEffect(() => {
    let timeout;

    const handleMouseMove = () => {
      console.log("Mouse moved!");
      setIsMouseMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 2500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-slate-200 dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12 ">
      {navbarOptions50thv
        .filter((option) => option.dropDown && option.dropDownOptions50thv)
        .map((option) =>
          option.dropDownOptions50thv.map((dropDownOption50thv, index) => (
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 md:flex md:text-center md:items-center md:justify-between md:gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center  gap-12">
                  <h2 className="md:text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    50th Aniversario
                  </h2>
                </div>
                <div className="mt-3 sm:mt-5 sm:ml-8 flex gap-1 mb md:flex ">
                  <div className="mb-1">
                    <a
                      href={dropDownOption50thv.aniversario}
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
                      Regresar
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href={dropDownOption50thv.regresar}
                      className="inline-flex rounded-lg border bg-white dark:bg-gray-600 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-900 md:px-8 md:py-3 md:text-base"
                    >
                      Volver aniversarios
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 mb-4 gap-4 sm:grid-cols-3  xl:grid-cols-3">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px] md:h-[450px] rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl1`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}

                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px] md:h-[450px]  rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl2})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl2`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px]  md:h-[450px]  rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl3})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl4`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2  xl:grid-cols-2">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-44  md:h-[230px]   rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl4})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl3`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}

                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-44  md:h-[230px]   rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl5})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl7`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px]  md:h-[500px] rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl6})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl5`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}

                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px]  md:h-[500px] rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl7})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl6`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 mb-4 gap-4 sm:grid-cols-3  xl:grid-cols-3">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px] md:h-[550px]  rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl8})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl8`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}

                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px] md:h-[550px]  rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl9`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${dropDownOption50thv.imgUrl9})`, // Reemplaza con la ruta de tu imagen
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}

                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-[480px]  md:h-[550px]  rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl11})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl11`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2   xl:grid-cols-2">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`group relative flex h-44 md:h-[430px]  md:w-[900px] rounded-2xl bg-gray-100 shadow-lg overflow-hidden video-section-${index}`}
                    style={{
                      backgroundImage: `url(${dropDownOption50thv.imgUrl10})`, // Reemplaza con la ruta de tu imagen
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={() =>
                        openFullscreen(dropDownOption50thv[`videoUrl10`])
                      }
                      className="absolute inset-0 w-full h-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-16 h-16 text-gray-400 hover:text-white transition duration-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-50 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      {fullscreenVideo && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50`}
        >
          <button
            className={`absolute top-4 left-4 p-2 cursor-pointer text-white bg-transparent rounded-full transition-opacity duration-500 ease-in-out ${
              isMouseMoving ? "" : "opacity-0"
            }`}
            onClick={closeFullscreen}
            style={{ zIndex: 1000 }}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
          </button>

          <div
            className="absolute inset-0"
            style={{ backgroundColor: "black" }}
          >
            <video
              src={fullscreenVideo}
              className="w-full h-full object-contain"
              controls
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Img;
