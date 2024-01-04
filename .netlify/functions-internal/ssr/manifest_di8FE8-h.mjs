import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_6nN-EmNV.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"programas-graduacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/programas-graduacion","type":"page","pattern":"^\\/programas-graduacion\\/?$","segments":[[{"content":"programas-graduacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programas-graduacion.astro","pathname":"/programas-graduacion","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"carta-aceptacion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/carta-aceptacion","type":"page","pattern":"^\\/carta-aceptacion\\/?$","segments":[[{"content":"carta-aceptacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carta-aceptacion.astro","pathname":"/carta-aceptacion","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios","type":"page","pattern":"^\\/aniversarios\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/index.astro","pathname":"/aniversarios","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/20th-aniversario/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/20th-aniversario","type":"page","pattern":"^\\/aniversarios\\/20th-aniversario\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"20th-aniversario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/20th-aniversario.astro","pathname":"/aniversarios/20th-aniversario","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/25th-aniversario/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/25th-aniversario","type":"page","pattern":"^\\/aniversarios\\/25th-aniversario\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"25th-aniversario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/25th-aniversario.astro","pathname":"/aniversarios/25th-aniversario","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/35th-aniversario/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/35th-aniversario","type":"page","pattern":"^\\/aniversarios\\/35th-aniversario\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"35th-aniversario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/35th-aniversario.astro","pathname":"/aniversarios/35th-aniversario","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/42th-aniversario/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/42th-aniversario","type":"page","pattern":"^\\/aniversarios\\/42th-aniversario\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"42th-aniversario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/42th-aniversario.astro","pathname":"/aniversarios/42th-aniversario","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/50th/50th-aniversario-imagenes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/50th/50th-aniversario-imagenes","type":"page","pattern":"^\\/aniversarios\\/50th\\/50th-aniversario-imagenes\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"50th","dynamic":false,"spread":false}],[{"content":"50th-aniversario-imagenes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/50th/50th-aniversario-imagenes.astro","pathname":"/aniversarios/50th/50th-aniversario-imagenes","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/50th/50th-aniversario-videos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/50th/50th-aniversario-videos","type":"page","pattern":"^\\/aniversarios\\/50th\\/50th-aniversario-videos\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"50th","dynamic":false,"spread":false}],[{"content":"50th-aniversario-videos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/50th/50th-aniversario-videos.astro","pathname":"/aniversarios/50th/50th-aniversario-videos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"aniversarios/50th/50th-aniversario/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/aniversarios/50th/50th-aniversario","type":"page","pattern":"^\\/aniversarios\\/50th\\/50th-aniversario\\/?$","segments":[[{"content":"aniversarios","dynamic":false,"spread":false}],[{"content":"50th","dynamic":false,"spread":false}],[{"content":"50th-aniversario","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aniversarios/50th/50th-aniversario.astro","pathname":"/aniversarios/50th/50th-aniversario","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"nuestro-isa/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nuestro-isa","type":"page","pattern":"^\\/nuestro-isa\\/?$","segments":[[{"content":"nuestro-isa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nuestro-isa.astro","pathname":"/nuestro-isa","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"deportivas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/deportivas","type":"page","pattern":"^\\/deportivas\\/?$","segments":[[{"content":"deportivas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/deportivas.astro","pathname":"/deportivas","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"dia-tipico/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dia-tipico","type":"page","pattern":"^\\/dia-tipico\\/?$","segments":[[{"content":"dia-tipico","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dia-tipico.astro","pathname":"/dia-tipico","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/login","type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-yhoved5s]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:1rem;overflow-y:auto}\n"}],"routeData":{"route":"/distribucion-habitacion","type":"page","pattern":"^\\/distribucion-habitacion\\/?$","segments":[[{"content":"distribucion-habitacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/distribucion-habitacion.astro","pathname":"/distribucion-habitacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-3zucshe4]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto;padding:2rem;gap:2rem}\n"}],"routeData":{"route":"/anecdotas-jocosidades","type":"page","pattern":"^\\/anecdotas-jocosidades\\/?$","segments":[[{"content":"anecdotas-jocosidades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/anecdotas-jocosidades.astro","pathname":"/anecdotas-jocosidades","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-pcuhpxml]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto;gap:2rem}\n"}],"routeData":{"route":"/resumen-vidas","type":"page","pattern":"^\\/resumen-vidas\\/?$","segments":[[{"content":"resumen-vidas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resumen-vidas/index.astro","pathname":"/resumen-vidas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-rfdx3tnm]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto}\n"}],"routeData":{"route":"/resumen-vidas/[id]","type":"page","pattern":"^\\/resumen-vidas\\/([^/]+?)\\/?$","segments":[[{"content":"resumen-vidas","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/resumen-vidas/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-qx75fxq3]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto;gap:2rem}\n"}],"routeData":{"route":"/encuentros","type":"page","pattern":"^\\/encuentros\\/?$","segments":[[{"content":"encuentros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/encuentros/index.astro","pathname":"/encuentros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-j4rmax6v]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;overflow-y:auto}\n"}],"routeData":{"route":"/encuentros/[id]","type":"page","pattern":"^\\/encuentros\\/([^/]+?)\\/?$","segments":[[{"content":"encuentros","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/encuentros/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-ncwtpnpe]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:1rem;overflow-y:auto}\n"}],"routeData":{"route":"/admin/anecdotas","type":"page","pattern":"^\\/admin\\/anecdotas\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"anecdotas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/anecdotas.astro","pathname":"/admin/anecdotas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-jbpjf64y]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:1rem;overflow-y:auto}dialog[data-astro-cid-jbpjf64y]{overflow-y:auto}dialog[data-astro-cid-jbpjf64y]::backdrop{background-color:#00000080}\n"}],"routeData":{"route":"/admin/usuarios","type":"page","pattern":"^\\/admin\\/usuarios\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"usuarios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/usuarios.astro","pathname":"/admin/usuarios","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ox_EQ7fS.js"}],"styles":[{"type":"external","src":"/_astro/anecdotas.rD3Q5cMz.css"},{"type":"inline","content":"main[data-astro-cid-sdgivehk]{flex:1;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:1rem;overflow-y:auto}\n"}],"routeData":{"route":"/admin/eventos","type":"page","pattern":"^\\/admin\\/eventos\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"eventos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/eventos.astro","pathname":"/admin/eventos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Programacion/NodeJs/graduacion-page/src/pages/admin/anecdotas.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/admin/eventos.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/admin/usuarios.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/anecdotas-jocosidades.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/20th-aniversario.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/25th-aniversario.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/35th-aniversario.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/42th-aniversario.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/50th/50th-aniversario-imagenes.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/50th/50th-aniversario-videos.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/50th/50th-aniversario.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/aniversarios/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/carta-aceptacion.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/deportivas.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/dia-tipico.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/distribucion-habitacion.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/encuentros/[id].astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/encuentros/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/login.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/nuestro-isa.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/programas-graduacion.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/resumen-vidas/[id].astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/pages/resumen-vidas/index.astro",{"propagation":"in-tree","containsHead":true}],["E:/Programacion/NodeJs/graduacion-page/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/admin/anecdotas@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/admin/eventos@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/admin/usuarios@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/anecdotas-jocosidades@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/20th-aniversario@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/25th-aniversario@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/35th-aniversario@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/42th-aniversario@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/50th/50th-aniversario-imagenes@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/50th/50th-aniversario-videos@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/50th/50th-aniversario@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/aniversarios/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/carta-aceptacion@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/deportivas@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/dia-tipico@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/distribucion-habitacion@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/encuentros/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/encuentros/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/login@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/nuestro-isa@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/programas-graduacion@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/resumen-vidas/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/resumen-vidas/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/admin/anecdotas.astro":"chunks/pages/anecdotas_y6r4T9c3.mjs","/src/pages/distribucion-habitacion.astro":"chunks/pages/distribucion-habitacion_kCx3wbwp.mjs","/src/pages/admin/eventos.astro":"chunks/pages/eventos_ZZfU27i4.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_OuJc7F4a.mjs","/src/pages/admin/usuarios.astro":"chunks/pages/usuarios_DtMav8Qi.mjs","\u0000@astrojs-manifest":"manifest_di8FE8-h.mjs","E:/Programacion/NodeJs/graduacion-page/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_7BjHvlbd.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_mLz-l4bF.mjs","\u0000@astro-page:src/pages/distribucion-habitacion@_@astro":"chunks/distribucion-habitacion_B851-KJR.mjs","\u0000@astro-page:src/pages/anecdotas-jocosidades@_@astro":"chunks/anecdotas-jocosidades_aiWo9Ph4.mjs","\u0000@astro-page:src/pages/programas-graduacion@_@astro":"chunks/programas-graduacion_7Qjy2iMN.mjs","\u0000@astro-page:src/pages/carta-aceptacion@_@astro":"chunks/carta-aceptacion_mTkLDyXu.mjs","\u0000@astro-page:src/pages/resumen-vidas/index@_@astro":"chunks/index_9PZtaugO.mjs","\u0000@astro-page:src/pages/resumen-vidas/[id]@_@astro":"chunks/_id__w6pHvhpB.mjs","\u0000@astro-page:src/pages/aniversarios/index@_@astro":"chunks/index_9TtPHiPI.mjs","\u0000@astro-page:src/pages/aniversarios/20th-aniversario@_@astro":"chunks/20th-aniversario_OdZtP60v.mjs","\u0000@astro-page:src/pages/aniversarios/25th-aniversario@_@astro":"chunks/25th-aniversario_zBI7ClXm.mjs","\u0000@astro-page:src/pages/aniversarios/35th-aniversario@_@astro":"chunks/35th-aniversario_9TyZxfpO.mjs","\u0000@astro-page:src/pages/aniversarios/42th-aniversario@_@astro":"chunks/42th-aniversario_-IS4DyE-.mjs","\u0000@astro-page:src/pages/aniversarios/50th/50th-aniversario-imagenes@_@astro":"chunks/50th-aniversario-imagenes_PnfbPT_I.mjs","\u0000@astro-page:src/pages/aniversarios/50th/50th-aniversario-videos@_@astro":"chunks/50th-aniversario-videos_FLLJnGIs.mjs","\u0000@astro-page:src/pages/aniversarios/50th/50th-aniversario@_@astro":"chunks/50th-aniversario_4xilEhVK.mjs","\u0000@astro-page:src/pages/nuestro-isa@_@astro":"chunks/nuestro-isa_51YQDeOm.mjs","\u0000@astro-page:src/pages/deportivas@_@astro":"chunks/deportivas_Exn77qq7.mjs","\u0000@astro-page:src/pages/dia-tipico@_@astro":"chunks/dia-tipico_SPp9QKcV.mjs","\u0000@astro-page:src/pages/encuentros/index@_@astro":"chunks/index_UlGxH6c-.mjs","\u0000@astro-page:src/pages/encuentros/[id]@_@astro":"chunks/_id__ML6k7Zc_.mjs","\u0000@astro-page:src/pages/admin/anecdotas@_@astro":"chunks/anecdotas_ZbnEH0FG.mjs","\u0000@astro-page:src/pages/admin/usuarios@_@astro":"chunks/usuarios_DXhpuI9W.mjs","\u0000@astro-page:src/pages/admin/eventos@_@astro":"chunks/eventos_HnTbN2vQ.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_BLbAZRSt.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ox_EQ7fS.js","@/components/Login/Form.jsx":"_astro/Form.YkMxweAC.js","@/components/Login/VerifyLogin":"_astro/VerifyLogin.zEzb4jvq.js","@/components/aniversario/50th/index":"_astro/index.pcn1cktU.js","react-toastify":"_astro/_astro-entry_react-toastify.6TbdBdpp.js","@/components/actividades/programas-graduacion/index":"_astro/index.vpqPrLBb.js","@/components/aniversario/35th/img":"_astro/img.SBfO5g5W.js","@/components/aniversario/25th/img":"_astro/img.OuIAvM0P.js","@astrojs/react/client.js":"_astro/client.KTuLZ3Dv.js","@/components/ISA/deportivas/index":"_astro/index.-uxNNpwA.js","@/components/Navbar/index.jsx":"_astro/index.n7iW8rs-.js","@/components/aniversario/50th/img":"_astro/img.04i2qIJX.js","@/components/aniversario/20th/img":"_astro/img.Vl0dkp3k.js","@/components/aniversario/42th/img":"_astro/img.QfI064G0.js","@/components/event/MantenanceLayout":"_astro/MantenanceLayout.hzapV_4v.js","@/components/aniversario/50th/video":"_astro/video.TZn297fO.js","@/components/user/MantenanceLayout":"_astro/MantenanceLayout.b9Fz35lF.js","@/components/CardText/CardText":"_astro/CardText.UdeQ2UVy.js","@/components/Mantenances/Anecdotas/MantenanceLayout":"_astro/MantenanceLayout.4kZhDFjF.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/userPlaceHolder.-5fvwpNH.jpg","/_astro/universidad-isa-1.Hj4Wl-3u.jpg","/_astro/a.Di-QJqYA.jpg","/_astro/grupo.Dfzt-S79.jpg","/_astro/evento.R41ppOEt.png","/_astro/RD.2DRBqV7r.svg","/_astro/anecdotas.rD3Q5cMz.css","/favicon.svg","/logo.svg","/_astro/CardText.UdeQ2UVy.js","/_astro/client.KTuLZ3Dv.js","/_astro/config.ih-VIoj1.js","/_astro/Form.YkMxweAC.js","/_astro/hoisted.ox_EQ7fS.js","/_astro/img.04i2qIJX.js","/_astro/img.OuIAvM0P.js","/_astro/img.QfI064G0.js","/_astro/img.SBfO5g5W.js","/_astro/img.Vl0dkp3k.js","/_astro/index.-uxNNpwA.js","/_astro/index.068npczX.js","/_astro/index.esm.6-tFfpGr.js","/_astro/index.KDrvbZjt.js","/_astro/index.n7iW8rs-.js","/_astro/index.pcn1cktU.js","/_astro/index.vpqPrLBb.js","/_astro/inputphoto.Aet8rEnX.js","/_astro/jsx-runtime.KYujgZxC.js","/_astro/MantenanceLayout.4kZhDFjF.js","/_astro/MantenanceLayout.b9Fz35lF.js","/_astro/MantenanceLayout.hzapV_4v.js","/_astro/MantenanceLayout.yMbPFvwC.css","/_astro/modal.qSsH6n_S.js","/_astro/users.Lr6ixXEp.js","/_astro/VerifyLogin.zEzb4jvq.js","/_astro/video.TZn297fO.js","/_astro/_astro-entry_react-toastify.6TbdBdpp.js","/_astro/_astro-entry_react-toastify.c8cYhFng.js","/index.html","/programas-graduacion/index.html","/carta-aceptacion/index.html","/aniversarios/index.html","/aniversarios/20th-aniversario/index.html","/aniversarios/25th-aniversario/index.html","/aniversarios/35th-aniversario/index.html","/aniversarios/42th-aniversario/index.html","/aniversarios/50th/50th-aniversario-imagenes/index.html","/aniversarios/50th/50th-aniversario-videos/index.html","/aniversarios/50th/50th-aniversario/index.html","/nuestro-isa/index.html","/deportivas/index.html","/dia-tipico/index.html","/login/index.html"]});

export { manifest };
