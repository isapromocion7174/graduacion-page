import React from "react";
import { nisa } from "@/config/config";

function Text() {
    return (
        <div className="h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-8 flex text-center items-center justify-center gap-8">
                    <div className="flex items-center gap-12">
                        <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white">
                            Carta de Aceptación
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 xl:gap-8">
                    <div className="mx-auto mb-5">
                        <img
                            src={nisa.carta}
                            alt="ISA Image"
                            className="w-full max-w-2xl rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Text;
