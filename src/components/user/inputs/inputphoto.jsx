import React, { useRef } from "react";

const inputphoto = () => {
    const fileInput = useRef();
    const imagePreview = useRef();
    function handleFileSelect() {
        const selectedFile = fileInput.current.files?.[0];

        if (selectedFile && selectedFile.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = function (e) {
                if (imagePreview.current) {
                    imagePreview.current.innerHTML = `<img src="${e.target?.result}" alt="Vista previa de la imagen"
                        class="w-full h-full object-cover rounded-lg">`;
                }
            };

            reader.readAsDataURL(selectedFile);
        } else {
            if (imagePreview.current) {
                imagePreview.current.innerHTML = "";
            }
        }
    }

    return (
        <div className=" w-full">
            <label
                htmlFor="fileInput"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Seleccionar foto: <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                                Haga clic para cargar
                            </span>{" "}
                            o arrastrar
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input
                        id="dropzone-file"
                        ref={fileInput}
                        onChange={handleFileSelect}
                        type="file"
                        name="imagen"
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />

                    <div
                        ref={imagePreview}
                        id="imagePreview"
                        className="absolute inset-0"
                    ></div>
                </label>
            </div>
        </div>
    );
};

export default inputphoto;
