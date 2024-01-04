/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6nN-EmNV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { A as API_URL, $ as $$Layout } from './_id__zUm5k9Qd.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import Parse from 'html-react-parser';
/* empty css                                          */

const getAnecdotas = async () => {
    const response = await fetch(`${API_URL}/anecdota`);
    const data = await response.json();
    return data;
};

const StringToHTML = ({ html }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: Parse(html) });
};

const ModaText = ({ anecdota }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("dialog", { id: anecdota?.titulo, class: "rounded-lg", children: /* @__PURE__ */ jsx(
    "form",
    {
      method: "dialog",
      class: "flex flex-col justify-center items-center w-full p-6 min-w-96 min-h-96 md:p-6 h-full rounded-lg max-w-screen-lg shadow-lg dark:bg-gray-800 dark:text-gray-100 bg-white\r\n                    ",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          class: "   w-full flex flex-col\r\n                            flex-1 text-pretty\r\n\r\n                    ",
          children: [
            /* @__PURE__ */ jsx("h2", { class: "text-xl font-bold mb-2", children: anecdota?.titulo }),
            /* @__PURE__ */ jsx("div", { class: "flex-1 overflow-y-hidden text-pretty text-ellipsis w-full", children: /* @__PURE__ */ jsx(StringToHTML, { html: anecdota?.descripcion || "" }) }),
            /* @__PURE__ */ jsxs("div", { class: "w-full flex flex-col gap-4 mt-8", children: [
              /* @__PURE__ */ jsxs("span", { class: "text-gray-500 text-sm", children: [
                "~",
                " ",
                anecdota?.usuario?.nombres + " " + anecdota?.usuario?.apellidos
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                  onClick: () => {
                    document.querySelector("dialog").close();
                  },
                  children: "Cerrar"
                }
              )
            ] })
          ]
        }
      )
    }
  ) }) });
};

const CardText = ({ anecdotas }) => {
  const [anecdota, setAnecdota] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ModaText, { anecdota }),
    anecdotas.map((anecdota2) => /* @__PURE__ */ jsxs(
      "div",
      {
        class: "bg-white rounded-lg shadow-lg p-6 h-96 flex flex-col\r\n                    hover:shadow-xl transition-shadow duration-300 ease-in-out\r\n                    dark:bg-gray-800 dark:hover:shadow-xl dark:text-gray-100\r\n                ",
        children: [
          /* @__PURE__ */ jsx("h2", { class: "text-xl font-bold mb-2", children: anecdota2.titulo }),
          /* @__PURE__ */ jsx("div", { class: "flex-1 overflow-y-hidden text-pretty text-ellipsis", children: /* @__PURE__ */ jsx(StringToHTML, { html: anecdota2.descripcion }) }),
          /* @__PURE__ */ jsxs("div", { class: "w-full flex flex-col gap-4 ", children: [
            /* @__PURE__ */ jsxs("span", { class: "text-gray-500 text-sm", children: [
              "~",
              " ",
              anecdota2.usuario.nombres + " " + anecdota2.usuario.apellidos
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\r\n                            transition-all duration-300 ease-in-out\r\n                            dark:bg-blue-600 dark:hover:bg-blue-700\r\n                            ",
                onClick: () => {
                  setAnecdota(anecdota2);
                  document.querySelector("dialog").showModal();
                },
                children: "Ver más"
              }
            )
          ] })
        ]
      },
      anecdota2._id
    ))
  ] });
};

const $$Astro = createAstro();
const $$AnecdotasJocosidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnecdotasJocosidades;
  const anecdotas = await getAnecdotas();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anecdotas y Jocosidades", "data-astro-cid-3zucshe4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-3zucshe4> <h1 class="text-4xl font-bold text-center
            dark:text-white
        " data-astro-cid-3zucshe4> Anecdotas y jocosidades</h1> <div class="w-full h-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-2 lg:grid-cols-3 gap-10 pb-6
        " data-astro-cid-3zucshe4> ${renderComponent($$result2, "CardText", CardText, { "anecdotas": anecdotas, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CardText/CardText", "client:component-export": "default", "data-astro-cid-3zucshe4": true })} </div> </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/anecdotas-jocosidades.astro", void 0);

const $$file = "E:/Programacion/NodeJs/graduacion-page/src/pages/anecdotas-jocosidades.astro";
const $$url = "/anecdotas-jocosidades";

const anecdotasJocosidades = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AnecdotasJocosidades,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { anecdotasJocosidades as a, getAnecdotas as g };
