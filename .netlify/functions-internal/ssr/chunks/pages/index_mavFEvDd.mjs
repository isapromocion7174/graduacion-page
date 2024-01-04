/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, j as addAttribute, g as renderSlot, e as renderComponent } from '../astro_6nN-EmNV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { U as UserPlaceHolderImg, a as getUsers, $ as $$Layout, g as getEventos } from './_id__zUm5k9Qd.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="bg-white rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 relative border-gray-200 dark:bg-gray-800 dark:border-gray-700 container justify-between text-center max-w-80 pb-6  "> <div class="
		  flex flex-col items-center justify-center
		  max-h-96
		  gap-3
		  w-full
"> <div class="transform w-full overflow-hidden mb-3 rounded-t-2xl h-96 "> <img${addAttribute(img || UserPlaceHolderImg.src, "src")}${addAttribute(title, "alt")} class="object-cover object-center w-full h-full scale-105 transition-transform duration-300 ease-in-out transform hover:scale-105"> </div> <span class=" font-bold dark:text-white text-gray-800 text-xl mb-2"> ${title} </span> ${body && renderTemplate`<p class="text-gray-700 dark:text-gray-300 text-base px-6 line-clamp-2 h-24 w-full
					"> ${body} </p>`} ${renderSlot($$result, $$slots["default"])} <button class=" bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 block mt-3  ">
Ver mas
</button> </div> </a>`;
}, "E:/Programacion/NodeJs/graduacion-page/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardContainer;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`grid grid-cols-1 gap-10 
sm:grid-cols-1 sm:gap-10
md:grid-cols-2 md:gap-10
lg:grid-cols-3 lg:gap-10
xl:grid-cols-3 xl:gap-10
2xl:grid-cols-3 2xl:gap-10 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/Programacion/NodeJs/graduacion-page/src/components/CardContainer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const users = await getUsers();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resumenes de vida", "data-astro-cid-pcuhpxml": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-pcuhpxml> <h1 class=" mt-8 text-4xl font-bold text-center text-gray-800 dark:text-gray-100" data-astro-cid-pcuhpxml> Miembros </h1> ${renderComponent($$result2, "CardContainer", $$CardContainer, { "className": "", "data-astro-cid-pcuhpxml": true }, { "default": ($$result3) => renderTemplate`${users.map((user) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "title": user.nombres + " " + user.apellidos, "img": user?.foto?.img_url, "href": `/resumen-vidas/${user._id}`, "body": user.descripcion || "No hay descripci\xF3n", "data-astro-cid-pcuhpxml": true })}`)}` })} </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/resumen-vidas/index.astro", void 0);

const $$file$1 = "E:/Programacion/NodeJs/graduacion-page/src/pages/resumen-vidas/index.astro";
const $$url$1 = "/resumen-vidas";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const eventos = await getEventos();
  const formatDate = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  };
  const formatHora = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos", "data-astro-cid-qx75fxq3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-qx75fxq3> <h1 class=" mt-8 text-4xl font-bold text-center text-gray-800 dark:text-gray-100" data-astro-cid-qx75fxq3> Encuentros </h1> ${renderComponent($$result2, "CardContainer", $$CardContainer, { "className": "", "data-astro-cid-qx75fxq3": true }, { "default": ($$result3) => renderTemplate`${eventos.map((evento) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "title": evento.nombreEvento, "img": evento?.foto?.img_url, "href": `/encuentros/${evento._id}`, "data-astro-cid-qx75fxq3": true }, { "default": ($$result4) => renderTemplate` <div class="flex flex-col text-gray-800
                            dark:text-gray-100 w-full gap-4 items-start px-8
                            h-full
                            " data-astro-cid-qx75fxq3> <p class="truncate" data-astro-cid-qx75fxq3><strong data-astro-cid-qx75fxq3> Fecha:</strong> ${formatDate(evento.fechaInicio)} - ${formatDate(evento.fechaFinal)} </p> <p class="truncate" data-astro-cid-qx75fxq3><strong data-astro-cid-qx75fxq3> Lugar:</strong> ${evento.lugar}</p> <p data-astro-cid-qx75fxq3><strong data-astro-cid-qx75fxq3> Horario:</strong> ${formatHora(evento.fechaInicio)} - ${formatHora(evento.fechaFinal)}</p> </div> ` })}`)}` })} </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/encuentros/index.astro", void 0);

const $$file = "E:/Programacion/NodeJs/graduacion-page/src/pages/encuentros/index.astro";
const $$url = "/encuentros";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
