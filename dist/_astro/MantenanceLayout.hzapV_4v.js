import{j as e}from"./jsx-runtime.KYujgZxC.js";import{r as c}from"./index.068npczX.js";import{i as x,F as f}from"./index.esm.6-tFfpGr.js";import{A as i,u as g}from"./config.ih-VIoj1.js";import{i as m}from"./inputphoto.Aet8rEnX.js";import{Q as b}from"./_astro-entry_react-toastify.c8cYhFng.js";const h=({fechaInicio:r,fechaFin:a})=>{const t=o=>{if(!o)return null;const n=new Date(o),d=n.toISOString().split("T")[0],u=n.toLocaleTimeString("es-ES",{hour:"numeric",minute:"numeric"});return`${d}T${u}`};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("label",{for:"birthdate",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:["Fecha de inicio del evento"," ",e.jsx("span",{class:"text-red-500",children:"*"})]}),e.jsx("input",{type:"datetime-local",id:"birthdate",name:"fechaInicio",defaultValue:t(r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{for:"birthdate",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:["Fecha de cierre del evento"," ",e.jsx("span",{class:"text-red-500",children:"*"})]}),e.jsx("input",{type:"datetime-local",id:"birthdate",defaultValue:t(a),name:"fechaFinal",class:`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\r
      `,required:!0})]})]})},p=({nombre:r,lugar:a,direccion:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("label",{for:"input-group-2",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:["Nombre del evento",e.jsx("span",{class:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",id:"input-group-2",defaultValue:r,class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Ingrese el nombre del evento",name:"nombreEvento",required:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{for:"input-group-1",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:["Lugar del evento ",e.jsx("span",{class:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",id:"input-group-1",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Lugar del evento",name:"lugar",defaultValue:a,required:!0})]}),e.jsxs("div",{children:[e.jsxs("label",{for:"address",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:["Dirección del evento ",e.jsx("span",{class:"text-red-500",children:"*"})]}),e.jsx("textarea",{id:"address",name:"direccion",defaultValue:t||"",rows:"4",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Ingrese su dirección aquí...",required:!0})]})]}),y=async r=>await(await fetch(`${i}/event/${r}`)).json(),k=async(r,a)=>await(await fetch(`${i}/event`,{method:"POST",headers:{"x-token":a},body:r})).json(),j=async(r,a,t)=>await(await fetch(`${i}/event/${r}`,{method:"PUT",headers:{"x-token":t},body:a})).json(),w=async(r,a)=>await(await fetch(`${i}/event/${r}`,{method:"DELETE",headers:{"Content-Type":"application/json","x-token":a}})).json(),v=({id:r=!1})=>{const a=g(s=>s.user),t=g(s=>s.token),[o,n]=c.useState(!1),d=c.useRef();c.useEffect(()=>{!a&&!t&&(window.location.href="/login")},[]),c.useEffect(()=>{d.current.reset(),n(!1),r&&(async()=>{const l=await y(r);n(l)})()},[r]);const u=async s=>{s.stopPropagation(),s.preventDefault();const l=new FormData(s.target);Object.fromEntries(l.entries()),document.querySelector("dialog").close(),r?await b.promise(j(r,l,t),{pending:"Actualizando Evento...",success:"Evento actualizado ",error:"Error al actualizar Evento"}):await b.promise(k(l,t),{pending:"Creando Evento...",success:"Anecdota creada",error:"Error al crear Anecdota"}),s.target.reset(),window.location.reload()};return e.jsxs("form",{onSubmit:u,ref:d,class:"flex flex-col w-full p-10 gap-6 bg-white rounded-lg shadow dark:bg-gray-800 ",children:[e.jsx(p,{direccion:o?.direccion,lugar:o?.lugar,nombre:o?.nombreEvento}),e.jsx("div",{class:"grid gap-6 mb-6 md:grid-cols-2",children:e.jsx(h,{fechaFin:o?.fechaFinal,fechaInicio:o?.fechaInicio})}),e.jsx(m,{src:o?.foto?.img_url}),e.jsx("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Guardar"})]})},D=({title:r,headers:a,data:t,messages:o})=>{const[n,d]=c.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{class:"flex flex-col items-center justify-center w-full h-32",children:e.jsx("h1",{class:`text-3xl text-center text-gray-700 font-bold leading-8 mt-10\r
                dark:text-gray-100 sm:text-4xl sm:leading-10\r
            `,children:r})}),e.jsx(x,{headers:a,data:t,deleteObject:w,messages:o,setId:d}),e.jsx("dialog",{class:` rounded-lg bg-white shadow-md dark:bg-gray-800 \r
                    `,children:e.jsxs("div",{className:"flex flex-col w-full relative",children:[e.jsx("button",{className:` absolute top-0 right-0\r
                text-3xl text-gray-700 font-bold leading-8 mx-5\r
                dark:text-gray-100 sm:text-4xl sm:leading-10 transition-all duration-300\r
                    hover:text-red-600\r
\r
                    \r
\r
                `,onClick:()=>{document.querySelector("dialog").close()},children:e.jsx("span",{"aria-hidden":"true",children:"×"})}),e.jsx(v,{id:n})]})}),e.jsxs("button",{class:` absolute bottom-0 right-0 m-5 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300\r
                text-center\r
        `,onClick:()=>{d(null),document.querySelector("dialog").showModal()},children:[" ",e.jsx(f,{})]})]})};export{D as default};
