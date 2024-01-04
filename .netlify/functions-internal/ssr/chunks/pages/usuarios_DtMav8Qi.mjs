/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_6nN-EmNV.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { u as useUserStore, U as UserPlaceHolderImg, A as API_URL, b as getUser, c as updateUser, d as createUser, e as deleteUser, a as getUsers, $ as $$Layout } from './_id__zUm5k9Qd.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa6/index.esm.js';
/* empty css                             */

const index = ({ headers, data, deleteObject, messages, setId }) => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const [filter, setFilter] = useState(data);
  const formRef = useRef();
  const handleDelete = async (id) => {
    if (user._id == id)
      return toast.error("No puedes eliminar tu propio usuario");
    if (user?.rol?._id == id)
      return toast.error("No puedes eliminar tu propio rol");
    const deleted = confirm(
      messages?.delete || "¿Seguro que desea eliminar este objeto?"
    );
    if (!deleted)
      return;
    await toast.promise(deleteObject(id, token), {
      pending: messages?.pending || "Eliminando objeto...",
      success: messages?.success || "Objeto eliminado",
      error: messages?.error || "Error al eliminar objeto"
    });
    window.location.reload();
  };
  const handleEdit = (id) => {
    setId(id);
    document.querySelector("dialog").showModal();
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const info = Object.fromEntries(form.entries());
    const filter2 = info.filter.toLowerCase();
    if (!filter2)
      return setFilter(data);
    const filterData = data.filter((row) => {
      return Object.keys(row).some(
        (key) => row[key]?.toString()?.toLowerCase()?.includes(filter2)
      );
    });
    setFilter(filterData);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col w-full gap-6 px-6\r\n            sm:max-w-screen-sm\r\n            md:max-w-screen-md\r\n            lg:max-w-screen-lg\r\n        ",
      children: [
        /* @__PURE__ */ jsxs("div", { className: " flex gap-14 items-center w-full justify-between", children: [
          /* @__PURE__ */ jsxs("form", { onSubmit: handleFilter, className: "w-96", ref: formRef, children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                for: "default-search",
                class: " text-sm font-medium text-gray-900 sr-only dark:text-white",
                children: "Search"
              }
            ),
            /* @__PURE__ */ jsxs("div", { class: "relative", children: [
              /* @__PURE__ */ jsx("div", { class: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  class: "w-4 h-4 text-gray-500 dark:text-gray-400",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "search",
                  id: "default-search",
                  class: "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                  placeholder: "Ingrese valor de busqueda.",
                  name: "filter"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  class: "text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  children: "Search"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "\r\n                        text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800 h-10\r\n                        truncate\r\n                    ",
              onClick: () => {
                formRef.current.reset();
                setFilter(data);
              },
              children: "Limpiar Filtros"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { class: "relative overflow-x-auto shadow-md sm:rounded-lg", children: /* @__PURE__ */ jsxs("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", children: [
          /* @__PURE__ */ jsx("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsxs("tr", { children: [
            headers.map((header, index2) => /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: header.name }, index2)),
            /* @__PURE__ */ jsx("th", { scope: "col", class: "px-6 py-3", children: "Acciones" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: filter.map((row, index2) => /* @__PURE__ */ jsxs(
            "tr",
            {
              class: "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700",
              children: [
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4 hidden", children: row.id }, index2),
                headers.map((header, index3) => {
                  if (header.key == "img_url") {
                    return /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: row[header.key] || UserPlaceHolderImg.src,
                        class: "w-10 h-10 rounded-full object-cover"
                      }
                    ) }, index3);
                  }
                  return /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: row[header.key] }, index3);
                }),
                /* @__PURE__ */ jsx("td", { class: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { class: "flex gap-4", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleEdit(row.id),
                      class: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                      children: "Editar"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleDelete(row.id),
                      class: `font-medium text-red-600 dark:text-red-500 hover:underline 
                                            disabled:opacity-50 disabled:hover:no-underline
                                        `,
                      disabled: user?._id == row.id || user?.rol?._id == row.id,
                      children: "Eliminar"
                    }
                  )
                ] }) })
              ]
            },
            index2
          )) })
        ] }) })
      ]
    }
  );
};

const inputphoto = ({ src = false }) => {
  const fileInput = useRef();
  const imagePreview = useRef();
  function handleFileSelect() {
    const selectedFile = fileInput.current.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function(e) {
        if (imagePreview.current) {
          imagePreview.current.innerHTML = `<img src="${e.target?.result}" alt="Vista previa de la imagen"
                        class="w-full h-full object-cover rounded-lg">`;
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      if (imagePreview.current) {
        imagePreview.current.innerHTML = "";
      }
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: " w-full", children: [
    /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: "fileInput",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        children: [
          "Seleccionar foto: ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full", children: /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: "dropzone-file",
        className: "flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 relative",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 20 16",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "mb-2 text-sm text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Haga clic para cargar" }),
              " ",
              "o arrastrar"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "SVG, PNG, JPG or GIF (MAX. 800x400px)" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "dropzone-file",
              ref: fileInput,
              onChange: handleFileSelect,
              type: "file",
              name: "foto",
              className: "absolute inset-0 opacity-0 cursor-pointer z-10"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: imagePreview,
              id: "imagePreview",
              className: "absolute inset-0",
              children: src && /* @__PURE__ */ jsx(
                "img",
                {
                  src,
                  alt: "Vista previa de la imagen",
                  class: "w-full h-full object-cover rounded-lg"
                }
              )
            }
          )
        ]
      }
    ) })
  ] });
};

const inputsdate = ({ fechaNacimiento, lugarNacimiento }) => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    if (fechaNacimiento) {
      const date2 = new Date(fechaNacimiento);
      setDate(date2.toISOString().split("T")[0]);
    }
  }, [fechaNacimiento]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "birthdate",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Fecha de Nacimiento ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "date",
          id: "birthdate",
          name: "fechaNacimiento",
          defaultValue: date,
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "birthplace",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Lugar de Nacimiento ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "birthplace",
          name: "lugarNacimiento",
          defaultValue: lugarNacimiento,
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          placeholder: "Ciudad, País",
          required: true
        }
      )
    ] })
  ] });
};

const inputsnumber = ({ cantidadHijos }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: "quantityChildren",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        children: [
          "Cantidad de Hijos ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        id: "quantityChildren",
        name: "cantidadHijos",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        placeholder: "Ingrese la cantidad de hijos",
        defaultValue: cantidadHijos || 0,
        required: true
      }
    )
  ] });
};

const InputsText = ({
  nombres,
  apellidos,
  telefonoCasa,
  correo,
  ultimoGradoEstudio
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "first_name",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Nombres ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative  ", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-[16px] h-[16px] text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 14 18",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "0.8",
                d: "M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "input-group-1",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Ingrese su nombre",
            defaultValue: nombres,
            name: "nombres",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "last_name",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Apellidos ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative  ", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-[16px] h-[16px] text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 14 18",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "0.8",
                d: "M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "input-group-1",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Ingrese su apellido",
            defaultValue: apellidos,
            name: "apellidos",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "phone",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Teléfono de casa",
            " "
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative  ", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-[16px] h-[16px] text-gray-800 dark:text-white",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 22 19",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "0.8",
                d: "M19.287 5H15m3.852 3H15m3.384 3H15m-9.47-.764h-.972A14.755 14.755 0 0 1 4.445 8c-.019-.747.019-1.494.113-2.236h.972a.95.95 0 0 0 .946-.856l.188-1.877a.951.951 0 0 0-.946-1.046H3.791a1.127 1.127 0 0 0-1.067.75A16.11 16.11 0 0 0 2 8a16.737 16.737 0 0 0 .743 5.242c.154.463 1.255.773 1.743.773h1.232a.95.95 0 0 0 .946-1.046l-.188-1.877a.95.95 0 0 0-.946-.856ZM19.063 2H10v12h8.273l1.716-10.847A.981.981 0 0 0 19.063 2ZM20 18H9v-2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2Z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "Numero de teléfono",
            defaultValue: telefonoCasa,
            name: "telefonoCasa"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "input-group-1",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Correo electronico ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative  ", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "w-4 h-4 text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 20 16",
            children: [
              /* @__PURE__ */ jsx("path", { d: "m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" }),
              /* @__PURE__ */ jsx("path", { d: "M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "input-group-1",
            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            placeholder: "name@flowbite.com",
            defaultValue: correo,
            name: "correo",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "ultimoGradoEstudio",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: [
            "Último Grado de Estudio",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "ultimoGradoEstudio",
          name: "ultimoGradoEstudio",
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          placeholder: "Ultimo grado de estudio",
          defaultValue: ultimoGradoEstudio,
          required: true
        }
      )
    ] })
  ] });
};

const select = ({ sexo, estadoCivil }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "genero",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: "Sexo"
        }
      ),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "sexo",
          name: "sexo",
          defaultValue: sexo,
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          onChange: "handleGenderChange(this)",
          children: [
            /* @__PURE__ */ jsx("option", { value: "Masculino", children: "Masculino" }),
            /* @__PURE__ */ jsx("option", { value: "Femenino", children: "Femenino" }),
            /* @__PURE__ */ jsx("option", { value: "Otro", children: "Otro" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "estadoCivil",
          className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          children: "Estado civil"
        }
      ),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "estadoCivil",
          name: "estadoCivil",
          defaultValue: estadoCivil,
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          onChange: "handleGenderChange(this)",
          children: [
            /* @__PURE__ */ jsx("option", { value: "Soltero/a", children: "Soltero/a" }),
            /* @__PURE__ */ jsx("option", { value: "Casado/a", children: "Casado/a" }),
            /* @__PURE__ */ jsx("option", { value: "Union Libre", children: "Unión libre o unión de hecho." }),
            /* @__PURE__ */ jsx("option", { value: "Separado/a", children: "Separado/a" }),
            /* @__PURE__ */ jsx("option", { value: "Divorciado/a", children: "Divorciado/a" }),
            /* @__PURE__ */ jsx("option", { value: "Viudo/a", children: "Viudo/a" })
          ]
        }
      )
    ] })
  ] });
};

const getRoles = async () => {
    try {
        const response = await fetch(`${API_URL}/role/`);
        const data = await response.json();
        return data;
    } catch (error) {}
};

const role = ({ id }) => {
  const [roles, setRoles] = useState(null);
  useEffect(() => {
    const fetchRoles = async () => {
      const roles2 = await getRoles();
      setRoles(roles2);
    };
    fetchRoles();
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: "rol",
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        children: "Rol"
      }
    ),
    /* @__PURE__ */ jsx(
      "select",
      {
        id: "rol",
        name: "rol",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        onChange: "handleGenderChange(this)",
        defaultValue: id,
        children: roles && roles.map((rol) => {
          return /* @__PURE__ */ jsx("option", { value: rol._id, children: rol.nombre }, rol._id);
        })
      }
    )
  ] });
};

new Proxy({"src":"/_astro/RD.2DRBqV7r.svg","width":20,"height":15,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const BanderaRDSvg = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      "aria-hidden": "true",
      viewBox: "0 0 20 15",
      className: "h-4 w-4 me-2",
      children: [
        /* @__PURE__ */ jsx("rect", { width: "19.6", height: "14", y: ".5", fill: "#fff", rx: "2" }),
        /* @__PURE__ */ jsx(
          "mask",
          {
            id: "a",
            style: { maskType: "luminance" },
            x: "0",
            width: 20,
            height: 15,
            y: "0",
            maskUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ jsx("rect", { width: "19.6", height: "14", y: ".5", fill: "#fff", rx: "2" })
          }
        ),
        /* @__PURE__ */ jsxs("g", { mask: "url(#a)", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              fill: "#D02F44",
              fillRule: "evenodd",
              d: "M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z",
              clipRule: "evenodd"
            }
          ),
          /* @__PURE__ */ jsx("path", { fill: "#46467F", d: "M0 .5h8.4v6.533H0z" }),
          /* @__PURE__ */ jsx("g", { filter: "url(#filter0_d_343_121520)", children: /* @__PURE__ */ jsx(
            "path",
            {
              fill: "url(#paint0_linear_343_121520)",
              fillRule: "evenodd",
              d: "M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z",
              clipRule: "evenodd"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_343_121520",
              x1: ".933",
              x2: ".933",
              y1: "1.433",
              y2: "6.1",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#F0F0F0" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "filter0_d_343_121520",
              width: "6.533",
              height: "5.667",
              x: ".933",
              y: "1.433",
              colorInterpolationFilters: "sRGB",
              filterUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                /* @__PURE__ */ jsx(
                  "feColorMatrix",
                  {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  }
                ),
                /* @__PURE__ */ jsx("feOffset", { dy: "1" }),
                /* @__PURE__ */ jsx("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_343_121520"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "feBlend",
                  {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_343_121520",
                    result: "shape"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
};
const inputcelular = ({ number }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: "phone",
        className: "block text-sm font-medium text-gray-900 dark:text-white",
        children: [
          "Teléfono celular ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("main", { className: "max-w-sm mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          id: "dropdown-phone-button",
          "data-dropdown-toggle": "dropdown-phone",
          className: "flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600",
          type: "button",
          children: [
            /* @__PURE__ */ jsx(BanderaRDSvg, {}),
            "+1",
            " ",
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-2.5 h-2.5 ms-2.5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 10 6",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "m1 1 4 4 4-4"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          id: "dropdown-phone",
          className: "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700",
          children: /* @__PURE__ */ jsx(
            "ul",
            {
              className: "py-2 text-sm text-gray-700 dark:text-gray-200",
              "aria-labelledby": "dropdown-phone-button",
              children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                  role: "menuitem",
                  children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center w-full", children: [
                    /* @__PURE__ */ jsx(BanderaRDSvg, {}),
                    "Rep. Dom (+1)"
                  ] })
                }
              ) })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "phone-input",
          className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
          children: "Phone number:"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "phone-input",
          className: "block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500",
          pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
          placeholder: "123-456-7890",
          name: "telefonoCelular",
          defaultValue: number,
          required: true
        }
      ) })
    ] }) })
  ] }) });
};

const UserForm = ({ id = false }) => {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const [userEdit, setUserEdit] = useState(false);
  const formRef = useRef();
  useEffect(() => {
    setUserEdit(false);
    if (id) {
      const fetchUser = async () => {
        const user2 = await getUser(id);
        setUserEdit(user2);
      };
      fetchUser();
    }
  }, [id]);
  useEffect(() => {
    if (!user && !token) {
      window.location.href = "/login";
    }
  }, []);
  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const form = new FormData(e.target);
    Object.fromEntries(form.entries());
    if (id) {
      await toast.promise(
        updateUser(id, form, token),
        {
          pending: "Actualizando usuario...",
          success: "Usuario actualizado",
          error: "Error al actualizar usuario"
        }
      );
    } else {
      await toast.promise(createUser(form, token), {
        pending: "Creando usuario...",
        success: "Usuario creado",
        error: "Error al crear usuario"
      });
    }
    e.target.reset();
    window.location.reload();
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !user && !token ? /* @__PURE__ */ jsx("h1", { children: "Sin Acesso" }) : /* @__PURE__ */ jsxs(
    "form",
    {
      ref: formRef,
      className: "p-10 rounded-lg bg-white shadow-md dark:bg-gray-800    flex flex-col gap-6    items-center justify-center  ",
      onSubmit: handleSubmit,
      method: "dialog",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `grid grid-cols-1 gap-6 
              sm:grid-cols-2
              `,
            children: [
              /* @__PURE__ */ jsx(
                InputsText,
                {
                  apellidos: userEdit.apellidos,
                  correo: userEdit.correo,
                  nombres: userEdit.nombres,
                  telefonoCasa: userEdit.telefonoCasa,
                  ultimoGradoEstudio: userEdit.ultimoGradoEstudio
                }
              ),
              /* @__PURE__ */ jsx(inputsnumber, { cantidadHijos: userEdit.cantidadHijos }),
              /* @__PURE__ */ jsx(
                inputsdate,
                {
                  fechaNacimiento: userEdit.fechaNacimiento,
                  lugarNacimiento: userEdit.lugarNacimiento
                }
              ),
              /* @__PURE__ */ jsx(inputcelular, { number: userEdit.telefonoCelular }),
              /* @__PURE__ */ jsx(
                select,
                {
                  estadoCivil: userEdit.estadoCivil,
                  sexo: userEdit.sexo
                }
              ),
              /* @__PURE__ */ jsx(role, { id: userEdit?.rol?._id })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: "address",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: [
                "Dirección ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "address",
              name: "direccion",
              rows: "4",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Ingrese su dirección aquí...",
              defaultValue: userEdit?.direccion || "",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: "descripcion",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: [
                "Descripcion ",
                /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "descripcion",
              name: "descripcion",
              defaultValue: userEdit?.descripcion || "",
              rows: "4",
              className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Ingrese a lo que se dedica actualmente...",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(inputphoto, { src: userEdit?.foto?.img_url }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-64 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700",
            children: "Guardar"
          }
        )
      ]
    }
  ) });
};

const MantenanceLayout = ({ title, headers, data, messages }) => {
  const [id, setId] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { class: "flex flex-col items-center justify-center w-full h-32", children: /* @__PURE__ */ jsx(
      "h1",
      {
        class: "text-3xl text-center text-gray-700 font-bold leading-8 mt-10\r\n                dark:text-gray-100 sm:text-4xl sm:leading-10\r\n            ",
        children: title
      }
    ) }),
    /* @__PURE__ */ jsx(
      index,
      {
        headers,
        data,
        deleteObject: deleteUser,
        messages,
        setId
      }
    ),
    /* @__PURE__ */ jsx(
      "dialog",
      {
        class: " rounded-lg bg-white shadow-md dark:bg-gray-800 \r\n                    ",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full relative", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: " absolute top-0 right-0\r\n                text-3xl text-gray-700 font-bold leading-8 mx-5\r\n                dark:text-gray-100 sm:text-4xl sm:leading-10 transition-all duration-300\r\n                    hover:text-red-600\r\n\r\n                    \r\n\r\n                ",
              onClick: () => {
                document.querySelector("dialog").close();
              },
              children: /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "×" })
            }
          ),
          /* @__PURE__ */ jsx(UserForm, { id })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        class: " absolute bottom-0 right-0 m-5 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300\r\n                text-center\r\n        ",
        onClick: () => {
          setId(null);
          document.querySelector("dialog").showModal();
        },
        children: [
          " ",
          /* @__PURE__ */ jsx(FaPlus, {})
        ]
      }
    )
  ] });
};

const $$Astro = createAstro();
const $$Usuarios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Usuarios;
  const messages = {
    delete: "\xBFEst\xE1 seguro que desea eliminar este usuario?",
    pending: "Eliminando usuario...",
    success: "Usuario eliminado correctamente",
    error: "Error al eliminar el usuario"
  };
  const users = await getUsers();
  const headers = [
    { name: "IMG", key: "img_url" },
    { name: "Nombres", key: "nombres" },
    { name: "Apellidos", key: "apellidos" },
    { name: "Email", key: "correo" },
    { name: "Rol", key: "rol" },
    { name: "Sexo", key: "sexo" }
  ];
  const usersData = users.map((user) => {
    return {
      id: user._id,
      img_url: user?.foto?.img_url,
      nombres: user.nombres,
      apellidos: user.apellidos,
      correo: user.correo,
      rol: user.rol.nombre,
      sexo: user.sexo
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Usuarios - Admin", "data-astro-cid-jbpjf64y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-jbpjf64y> ${renderComponent($$result2, "MantenanceLayout", MantenanceLayout, { "title": "Mantenimiento de Usuario", "headers": headers, "data": usersData, "messages": messages, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/user/MantenanceLayout", "client:component-export": "default", "data-astro-cid-jbpjf64y": true })} </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/admin/usuarios.astro", void 0);

const $$file = "E:/Programacion/NodeJs/graduacion-page/src/pages/admin/usuarios.astro";
const $$url = "/admin/usuarios";

export { $$Usuarios as default, $$file as file, $$url as url };
