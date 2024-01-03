import React from "react";

function Text() {
  return (
    <div className="bg-slate-200 dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-8 flex text-center items-center justify-center gap-8">
          <div className="flex items-center gap-12">
            <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white">
              UN DIA TIPICO EN EL ISA
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:gap-8">
          <p className="text-sm text-gray-800 lg:text-base dark:text-white">
            El ISA era una institución de una férrea disciplina, altos niveles
            de estudio y mucho trabajo. Si un estudiante reprobaba una
            asignatura, se quedaba en su casa. Se promovía de forma muy sutil la
            competencia sana entre compañeros, tanto en lo académico como en lo
            deportivo. Fueron 3 años de mucho trabajo, estudios y disciplina.
          </p>
          <p className="text-sm text-gray-800 lg:text-base dark:text-white">
            Un día típico en el ISA se iniciaba alrededor de las 5:30 A.M. con
            el sonido de la famosa campana, se pasaba lista y cada uno se
            enviaba a trabajar, supervisado por profesores y estudiantes. Luego
            se desayunaba y entrabamos a clases desde las 8:00 A.M. hasta las
            12:00 M. había un descanso hasta las 2:00 P.M. y desde las 2:00 P.M.
            hasta las 5:00 P.M. se trabajaba en el campo, había más clases o
            talleres. A las 5:00 P.M. algunos debían volver a trabajar, hacer
            deportes o a otras actividades.
          </p>
          <p className="text-sm text-gray-800 lg:text-base dark:text-white">
            Todo dependía del día de la semana. A las 7:00 P.M. era la cena y
            desde las 8:00 P.M. hasta las 10:00 P.M. estudios en la habitación.
            A las 10:30 P.M. todas las luces debían estar apagadas y a dormir.
            Cualquier falta se pagaba con trabajos en la finca y no salida a
            Santiago los Domingos. <span className=" font-semibold"> SIEMPRE BAJO EL LEMA:</span>

          </p>
          <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 justify-center dark:text-white">
  <span className="font-semibold">A P R E N D E R</span>
  <span className="font-semibold">P A R A &nbsp; S E R V I R</span>
  <span className="font-semibold">S E R V I R &nbsp; P A R A</span>
  <span className="font-semibold">C O N S T R U I R</span>
</div>



        </div>
      </div>
    </div>
  );
}

export default Text;
