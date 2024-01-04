/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6nN-EmNV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { g as getEventos, $ as $$Layout } from './_id__zUm5k9Qd.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Eventos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Eventos;
  const eventos = await getEventos();
  const messages = {
    delete: "\xBFEst\xE1 seguro que desea eliminar este evento?",
    pending: "Eliminando evento...",
    success: "Evento eliminado correctamente",
    error: "Error al eliminar el evento"
  };
  const headers = [
    { name: "Titulo", key: "nombreEvento" },
    { name: "Inicio", key: "inicio" },
    { name: "Fin", key: "fin" },
    { name: "Horario", key: "horario" },
    { name: "Lugar", key: "lugar" }
  ];
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString(
      "es-ES",
      { year: "numeric", month: "long", day: "numeric" }
    );
  };
  const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString(
      "es-ES",
      { hour: "numeric", minute: "numeric" }
    );
  };
  const eventoData = eventos.map((evento) => {
    return {
      id: evento._id,
      nombreEvento: evento.nombreEvento,
      inicio: formatDate(evento.fechaInicio),
      fin: formatDate(evento.fechaFinal),
      horario: `${formatTime(evento.fechaInicio)} - ${formatTime(evento.fechaFinal)}`,
      lugar: evento.lugar
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos - Admin", "data-astro-cid-sdgivehk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-sdgivehk> ${renderComponent($$result2, "MantenanceLayout", null, { "title": "Mantenimiento de Eventos", "messages": messages, "headers": headers, "data": eventoData, "client:load": true, "client:only": true, "client:component-hydration": "load", "client:component-path": "@/components/event/MantenanceLayout", "client:component-export": "default", "data-astro-cid-sdgivehk": true })} </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/admin/eventos.astro", void 0);

const $$file = "E:/Programacion/NodeJs/graduacion-page/src/pages/admin/eventos.astro";
const $$url = "/admin/eventos";

export { $$Eventos as default, $$file as file, $$url as url };
