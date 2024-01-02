import React from "react";
import { navbarOptions50thnav } from "../../../config/configaniversario/50thaniversario/nav";

function text() {
  return (
    <div className="bg-slate-200 dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12 ">
      {navbarOptions50thnav
        .filter((option) => option.dropDown && option.dropDownOptions50thnav)
        .map((option) =>
          option.dropDownOptions50thnav.map((dropDownOption50thnav) => (
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
                      href={dropDownOption50thnav.irimg}
                      className="inline-flex rounded-lg border bg-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 hover:bg-zinc-100 focus-visible:ring active:bg-gray-300 md:px-8 md:py-3 md:text-base"
                      >
                      Ver imágenes
                     
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href={dropDownOption50thnav.regresar}
                      className="inline-flex rounded-lg border bg-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 hover:bg-zinc-100 focus-visible:ring active:bg-gray-300 md:px-8 md:py-3 md:text-base"
                      >
                      Aniversarios
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                           href={dropDownOption50thnav.irvideo}
                           className="inline-flex rounded-lg border bg-white dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 hover:bg-zinc-100 focus-visible:ring active:bg-gray-300 md:px-8 md:py-3 md:text-base"
                           >
                      Ver videos
                      
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:gap-6 xl:gap-8 ">
                <h1 className="md:text-2xl font-bold text-gray-800 lg:text-2xl dark:text-white text-right">
                  <span className="italic">Aprender</span>{" "}
                  <span className="font-normal italic">para</span> servir,{" "}
                  <span className="font-normal italic">servir para</span>{" "}
                  <span className="italic">construir</span>
                </h1>
                <p className="md:text-sm text-gray-800 lg:text-sm dark:text-white">
                  Años, sé que a varios de nosotros no les agrada hablar de
                  años, mucho menos de edad, pero afortunadamente un día como
                  hoy 7 de agosto, estamos celebrando 50 años de habernos
                  conocido aquel 8 de agosto de 1971. El más joven de nosotros
                  por lo menos hoy tiene 65 años. Varios tratan de simular menos
                  edad con cirugías, ejercicios, tintes, maquillajes, pero todos
                  llevamos un anciano a cuestas, quiérase o no.
                </p>
                <p className="md:text-sm text-gray-800 lg:text-sm dark:text-white">
                  Aquel afortunado día dejamos atrás familia, amores, amigos,
                  para iniciar una nueva etapa de nuestra vida llena de sueños y
                  nuevos proyectos. ¡Cuántos maravillosos recuerdos! y otros no
                  agradables, como aquellas famosas novatadas y ese sonido de la
                  campana por las mañanas, la cual nos anunciaba una nueva
                  jornada de arduos trabajos y estudios. Pero finalmente
                  logramos cumplir y tres años más tarde alcanzamos uno de
                  nuestros sueños: graduarnos de Bachilleres en Ciencias
                  Agrícolas. Siempre bajo el lema Isiano de Aprender para servir
                  y servir para construir.
                </p>
                <p className="md:text-sm text-gray-800 lg:text-sm dark:text-white font-bold">
                  APRENDER: ¡Cuánto hemos aprendido! Yo aprendí como profesor
                  que lo importante no era enseñar, sino aprender. Varios de
                  nosotros hemos continuado como docentes, otros como muy buenos
                  profesionales del campo, otros como doctores en medicina,
                  Abogados, Administradores, Empresarios, Políticos, en fin,
                  hemos aprendido a aprender sirviendo.
                </p>
                <p className="md:text-sm text-gray-800 lg:text-sm dark:text-white font-bold">
                  SERVIR: el diccionario define servir como capacitado, apto o
                  útil para un fin. A mí me gustaría indicar esta frase: “el que
                  no vive para servir no sirve para vivir”. El ISA nos enseñó a
                  servir, ejemplo de esto es que nuestra promoción es la única
                  en haber tenido en ISA, 4 vicerrectores, Académicos,
                  Administrativos y de Investigación. Un vice-presidente de la
                  república, un gran atleta seleccionado varias veces como el
                  mejor futbolista dominicano, todos sirviéndoles al país.
                  Tenemos un PhD, 8 con Maestrías, varios Ingenieros, sin
                  menospreciar en lo más mínimo la labor de varios como
                  servidores agrícolas, doctores, microempresarios, abogados,
                  entre otros. sirviendo.
                </p>
                <p className="md:text-sm text-gray-800 lg:text-sm dark:text-white font-bold">
                  CONSTRUIR: hemos aprendido a servir construyendo, a veces
                  sueños y en otras ocasiones realidades. Hoy varios de nosotros
                  construyó su propia micro o mediana empresa, otros
                  construyeron sus sueños, educando, otros investigando, otros
                  construyeron sus sueños fuera del país, aunque creo que uno de
                  los mayores logros es la construcción y mantenimiento de
                  nuestras propias familias. Deseo destacar, además, que quizás
                  la mejor y más importante de todas las construcciones es esta
                  bella hermandad que tenemos los miembros de esta familia ISA
                  71-74 y haber logrado con muchos éxitos, reunirnos aquí hoy
                  para celebrar 50 años de habernos conocido por primera vez.
                </p>
                <p className="md:text-sm text-gray-800 lg:text-sm dark:text-white">
                  Finalmente, he querido con esta memoria recorrer con imágenes
                  estos 50 años de nuestras vidas y motivar a que cada uno de
                  los miembros de nuestra hermandad, ponga cada día más interés
                  en fomentar la unión entre nosotros. ¡Felicidades y muchas
                  gracias!
                </p>
                <div className="flex flex-col md:flex-row justify-between mb-5">
  <span className="mb-2 md:mb-0 md:text-sm text-gray-800 lg:text-sm dark:text-white">
    Santiago, 7 de agosto 2021.
  </span>
  <span className="md:text-sm text-gray-800 lg:text-sm dark:text-white">
    Ramón Antonio Martínez de Mota
  </span>
</div>

              </div>
            </div>
          ))
        )}
    </div>
  );
}

export default text;
