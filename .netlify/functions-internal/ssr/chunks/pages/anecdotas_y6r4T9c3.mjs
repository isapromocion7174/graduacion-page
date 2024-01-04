/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6nN-EmNV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_id__zUm5k9Qd.mjs';
import { g as getAnecdotas } from './anecdotas-jocosidades_1uMzfh4i.mjs';
/* empty css                              */

const $$Astro = createAstro();
const $$Anecdotas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Anecdotas;
  const anecdotas = await getAnecdotas();
  const messages = {
    delete: "\xBFEst\xE1 seguro que desea eliminar esta anecdota?",
    pending: "Eliminando anecdota...",
    success: "Anecdota eliminado correctamente",
    error: "Error al eliminar la anecdota"
  };
  const headers = [
    { name: "Titulo", key: "titulo" },
    { name: "Usuario", key: "usuario" },
    { name: "Ultima Modificaci\xF3n", key: "updatedAt" }
  ];
  const anecdotaData = anecdotas.map((anecdota) => {
    return {
      id: anecdota._id,
      titulo: anecdota.titulo,
      usuario: anecdota.usuario.nombres + " " + anecdota.usuario.apellidos,
      updatedAt: new Date(anecdota.updatedAt).toLocaleDateString(
        "es-ES",
        { year: "numeric", month: "long", day: "numeric" }
      )
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anecdotas - Admin", "data-astro-cid-ncwtpnpe": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ncwtpnpe> ${renderComponent($$result2, "MantenanceLayout", null, { "title": "Mantenimiento de Anecdotas", "headers": headers, "data": anecdotaData, "messages": messages, "client:load": true, "client:only": true, "client:component-hydration": "load", "client:component-path": "@/components/Mantenances/Anecdotas/MantenanceLayout", "client:component-export": "default", "data-astro-cid-ncwtpnpe": true })} </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/admin/anecdotas.astro", void 0);

const $$file = "E:/Programacion/NodeJs/graduacion-page/src/pages/admin/anecdotas.astro";
const $$url = "/admin/anecdotas";

export { $$Anecdotas as default, $$file as file, $$url as url };
