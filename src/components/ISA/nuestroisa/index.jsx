import React from "react";
import { nisa } from "@/config/config";

function Text() {
  return (
    <div className="bg-slate-200 dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8 flex text-center items-center justify-center gap-8">
        <div className="flex items-center gap-12">
          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white">
            NUESTRO ISA
          </h2>
        </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:gap-8">
          <p className="text-sm text-gray-800 lg:text-base dark:text-white">
            El Instituto Superior de Agricultura (ISA), originalmente un centro
            de educación vocacional agrícola, fue creado en virtud a un acuerdo
            entre la Asociación para el Desarrollo Inc., el Estado Dominicano y
            la Misión en el país de la AID. Su inauguración se realizó el 26 de
            Enero de 1964 y ese mismo día se inició la docencia.
          </p>
          <p className="text-sm text-gray-800 lg:text-base dark:text-white">
            El ISA cuenta con miles de tareas de terrenos, incluyendo su campus
            y otras instalaciones. Además, cuenta con más de 30 Edificios,
            Dormitorios, Cafetería, Laboratorios, Planta de Procesamiento de
            Alimentos, Gallineros, entre otros. Originalmente su plan de
            estudios era de 3 años, pero en 1968 en cooperación con la
            Pontificia Universidad Católica Madre y Maestra (PUCMM), el ISA
            inicia un programa de educación superior en agricultura.
          </p>
          <p className="text-sm text-gray-800 lg:text-base dark:text-white">
            En 1986, como resultado del trabajo constante del instituto en el
            desarrollo de una infraestructura física adecuada, la excelente
            calidad de su cuerpo docente, de su historial de investigación y
            dada la alta calidad profesional de sus egresados, el gobierno
            dominicano le otorgó a ISA la categoría de Universidad. El
            desarrollo de las actividades de la Universidad ISA durante las
            últimas cinco décadas, ha respondido claramente a las necesidades de
            tecnificación e industrialización de los sectores productivos de la
            agropecuaria nacional.
          </p>
          <div className="mx-auto mb-5">
            <img src={nisa.img} alt="ISA Image" className="w-full max-w-2xl rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
