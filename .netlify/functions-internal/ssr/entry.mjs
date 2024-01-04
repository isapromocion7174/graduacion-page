import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_di8FE8-h.mjs';

const _page0  = () => import('./chunks/generic_7BjHvlbd.mjs');
const _page1  = () => import('./chunks/index_mLz-l4bF.mjs');
const _page2  = () => import('./chunks/distribucion-habitacion_B851-KJR.mjs');
const _page3  = () => import('./chunks/anecdotas-jocosidades_aiWo9Ph4.mjs');
const _page4  = () => import('./chunks/programas-graduacion_7Qjy2iMN.mjs');
const _page5  = () => import('./chunks/carta-aceptacion_mTkLDyXu.mjs');
const _page6  = () => import('./chunks/index_9PZtaugO.mjs');
const _page7  = () => import('./chunks/_id__w6pHvhpB.mjs');
const _page8  = () => import('./chunks/index_9TtPHiPI.mjs');
const _page9  = () => import('./chunks/20th-aniversario_OdZtP60v.mjs');
const _page10  = () => import('./chunks/25th-aniversario_zBI7ClXm.mjs');
const _page11  = () => import('./chunks/35th-aniversario_9TyZxfpO.mjs');
const _page12  = () => import('./chunks/42th-aniversario_-IS4DyE-.mjs');
const _page13  = () => import('./chunks/50th-aniversario-imagenes_PnfbPT_I.mjs');
const _page14  = () => import('./chunks/50th-aniversario-videos_FLLJnGIs.mjs');
const _page15  = () => import('./chunks/50th-aniversario_4xilEhVK.mjs');
const _page16  = () => import('./chunks/nuestro-isa_51YQDeOm.mjs');
const _page17  = () => import('./chunks/deportivas_Exn77qq7.mjs');
const _page18  = () => import('./chunks/dia-tipico_SPp9QKcV.mjs');
const _page19  = () => import('./chunks/index_UlGxH6c-.mjs');
const _page20  = () => import('./chunks/_id__ML6k7Zc_.mjs');
const _page21  = () => import('./chunks/anecdotas_ZbnEH0FG.mjs');
const _page22  = () => import('./chunks/usuarios_DXhpuI9W.mjs');
const _page23  = () => import('./chunks/eventos_HnTbN2vQ.mjs');
const _page24  = () => import('./chunks/login_BLbAZRSt.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/distribucion-habitacion.astro", _page2],["src/pages/anecdotas-jocosidades.astro", _page3],["src/pages/programas-graduacion.astro", _page4],["src/pages/carta-aceptacion.astro", _page5],["src/pages/resumen-vidas/index.astro", _page6],["src/pages/resumen-vidas/[id].astro", _page7],["src/pages/aniversarios/index.astro", _page8],["src/pages/aniversarios/20th-aniversario.astro", _page9],["src/pages/aniversarios/25th-aniversario.astro", _page10],["src/pages/aniversarios/35th-aniversario.astro", _page11],["src/pages/aniversarios/42th-aniversario.astro", _page12],["src/pages/aniversarios/50th/50th-aniversario-imagenes.astro", _page13],["src/pages/aniversarios/50th/50th-aniversario-videos.astro", _page14],["src/pages/aniversarios/50th/50th-aniversario.astro", _page15],["src/pages/nuestro-isa.astro", _page16],["src/pages/deportivas.astro", _page17],["src/pages/dia-tipico.astro", _page18],["src/pages/encuentros/index.astro", _page19],["src/pages/encuentros/[id].astro", _page20],["src/pages/admin/anecdotas.astro", _page21],["src/pages/admin/usuarios.astro", _page22],["src/pages/admin/eventos.astro", _page23],["src/pages/login.astro", _page24]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
