/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, f as createTransitionScope, g as renderSlot, h as renderTransition, i as renderHead, j as addAttribute, m as maybeRenderHead } from '../astro_6nN-EmNV.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { create } from 'zustand';
import { ToastContainer } from 'react-toastify';
/* empty css                         */

const navbarOptions = [
  {
    name: "Inicio",
    path: "/",
    dropDown: false
  },
  {
    name: "ISA",
    path: "/",
    dropDown: true,
    dropDownOptions: [
      {
        name: "Nuestro ISA",
        path: "/nuestro-isa"
      },
      {
        name: "Carta de Aceptación",
        path: "/carta-aceptacion"
      },
      {
        name: "Distribución por habitación",
        path: "/distribucion-habitacion"
      },
      {
        name: "Un día tipico en ISA",
        path: "/dia-tipico"
      },
      {
        name: "Deportivas",
        path: "/deportivas"
      },
      {
        name: "Resumen de vidas",
        path: "/resumen-vidas"
      }
    ]
  },
  {
    /*
            Miscelaneos
    
            Encuentros
            Anecdotas y Jocosidades
            Programas de Graduacion
            Otros
        */
    name: "Actividades",
    path: "/actividades",
    dropDown: true,
    dropDownOptions: [
      {
        name: "Encuentros",
        path: "/encuentros"
      },
      {
        name: "Anecdotas y Jocosidades",
        path: "/anecdotas-jocosidades"
      },
      {
        name: "Programas de Graduación",
        path: "/programas-graduacion"
      }
    ]
  },
  {
    name: "Aniversarios",
    path: "/aniversarios/",
    dropDown: false
  },
  {
    name: "Admin",
    path: "/admin",
    admin: true,
    dropDown: true,
    dropDownOptions: [
      {
        name: "Usuarios",
        path: "/admin/usuarios"
      },
      {
        name: "Eventos",
        path: "/admin/eventos"
      },
      {
        name: "Anecdotas",
        path: "/admin/anecdotas"
      }
    ]
  }
];
const navbarOptionsani = [
  {
    name: "Contacto",
    path: "/aniversarios",
    dropDown: true,
    dropDownOptionsani: [
      {
        name: "20th Aniversario",
        imageUrl: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721437/ANIVERSARIOS/ANI-1%2820TH%29/ANI-1_IMG8_zmmvat.jpg",
        path: "/aniversarios/20th-aniversario"
      },
      {
        name: "25th Aniversario",
        imageUrl: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721499/ANIVERSARIOS/ANI-2%2825TH%29/2_rreikg.png",
        path: "/aniversarios/25th-aniversario"
      },
      {
        name: "35th Aniversario",
        imageUrl: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721528/ANIVERSARIOS/ANI-3%2835TH%29/Imagen10_cpwrty.jpg",
        path: "/aniversarios/35th-aniversario"
      },
      {
        name: "42th Aniversario",
        imageUrl: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721557/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160807-WA0020_xore1z.jpg",
        path: "/aniversarios/42th-aniversario"
      },
      {
        name: "50th Aniversario",
        imageUrl: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721614/ANIVERSARIOS/ANI-6%2850TH%29/WhatsApp_Image_2021-08-08_at_8.54.16_PM_1_nrrtox.jpg",
        path: "/aniversarios/50th/50th-aniversario"
      }
    ]
  }
];
const nisa = {
  img: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1704171755/Nuestro%20isa/Captura_cbfyzd.png",
  carta: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1704173116/Nuestro%20isa/INI-2_tlokdq.jpg"
};
const API_URL = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_API_URL || "http://localhost:3000";

const useUserStore = create((set) => ({
    isLogged: false,
    user: null,
    token: null,
    setUser: (user) => set({ user }),
    setIsLogged: (isLogged) => set({ isLogged }),
    setToken: (token) => set({ token }),
}));

const Dropdown = ({ dropDownOption, id, admin = false }) => {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id,
      className: "z-50 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 border-gray-300 dark:border-none shadow-sm border-2",
      children: [
        /* @__PURE__ */ jsx(
          "ul",
          {
            className: "py-2 text-sm text-gray-700 dark:text-gray-200",
            "aria-labelledby": "dropdownLargeButton",
            children: dropDownOption.map((item, index) => {
              return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.path,
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: item.name
                }
              ) }, index);
            })
          }
        ),
        admin && /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full\r\n                        text-left",
            type: "button",
            onClick: () => {
              setUser(null);
              setToken(null);
              localStorage.removeItem("x-token");
            },
            children: "Sign out"
          }
        ) })
      ]
    }
  );
};

const NavbarItem = ({
  name,
  path,
  dropDown,
  dropDownOptions,
  admin = false,
  className = ""
}) => {
  const id = `dropdownNavbar ${name} ${crypto.randomUUID()}`;
  return /* @__PURE__ */ jsx(Fragment, { children: !dropDown ? /* @__PURE__ */ jsx("li", { className, children: /* @__PURE__ */ jsx(
    "a",
    {
      href: path,
      className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
      children: name
    }
  ) }) : /* @__PURE__ */ jsxs("li", { className, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        id: "dropdownNavbarLink",
        "data-dropdown-toggle": id,
        className: "flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
        children: [
          name,
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
    dropDownOptions && /* @__PURE__ */ jsx(
      Dropdown,
      {
        id,
        dropDownOption: dropDownOptions,
        admin
      }
    )
  ] }) });
};

const useThemeStore = create((set) => ({
    theme: null,
    setTheme: (theme) => set({ theme }),
}));

const SwitcherDarkMode = () => {
  const themeToggleDarkIcon = useRef();
  const themeToggleLightIcon = useRef();
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    if (theme) {
      themeToggleLightIcon.current.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.current.classList.remove("hidden");
    }
  }, []);
  const handleClick = () => {
    themeToggleDarkIcon.current.classList.toggle("hidden");
    themeToggleLightIcon.current.classList.toggle("hidden");
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setTheme("light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setTheme(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setTheme(true);
      }
    }
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleClick,
      id: "theme-toggle",
      type: "button",
      className: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 md:border-0 ",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            ref: themeToggleDarkIcon,
            id: "theme-toggle-dark-icon",
            className: "hidden w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" })
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            ref: themeToggleLightIcon,
            id: "theme-toggle-light-icon",
            className: "hidden w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            )
          }
        )
      ]
    }
  );
};

const ADMIN_ROLE = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_ADMIN_ROLE;
const LogoDarkMode = (props) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703890101/TakeThis_te0wjp.png",
      alt: "ISA LOGO",
      ...props
    }
  );
};
const LogoLightMode = (props) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703888573/Instituto-Superior-de-Agricultura-ISA-removebg-preview_d7xypv.png",
      alt: "ISA LOGO",
      ...props
    }
  );
};
const index = () => {
  const user = useUserStore((state) => state.user);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  useEffect(() => {
    if (localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
  return /* @__PURE__ */ jsx("nav", { className: "bg-[#d0fff3] rela border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full ", children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/",
        className: "flex items-center space-x-3 rtl:space-x-reverse",
        children: [
          theme == "dark" ? /* @__PURE__ */ jsx(
            LogoDarkMode,
            {
              className: "h-6 ms:h-9 \r\n                    md:h-10\r\n                    lg:h-12\r\n                    xl:h-14\r\n                    "
            }
          ) : /* @__PURE__ */ jsx(
            LogoLightMode,
            {
              className: "h-6 ms:h-9 \r\n                    md:h-10\r\n                    lg:h-12\r\n                    xl:h-14\r\n                    "
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "self-center text-lg font-semibold whitespace-nowrap dark:text-white\r\n                        ms:text-lg\r\n                        md:text-xl\r\n                    ",
              children: "ISA PROMOCION 71-74"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        "data-collapse-toggle": "navbar-dropdown",
        type: "button",
        className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
        "aria-controls": "navbar-dropdown",
        "aria-expanded": "false",
        children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 17 14",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M1 1h15M1 7h15M1 13h15"
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
        className: "hidden w-full md:block md:w-auto",
        id: "navbar-dropdown",
        children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 items-center justify-center", children: [
          navbarOptions.map((item, index2) => {
            const notIsAdmin = item.admin && !(user?.rol?.nombre == ADMIN_ROLE);
            return /* @__PURE__ */ jsx(
              NavbarItem,
              {
                name: item.name,
                path: item.path,
                dropDown: item.dropDown,
                dropDownOptions: item.dropDownOptions,
                admin: item.admin,
                className: notIsAdmin ? "hidden" : ""
              },
              `${item.name}-${index2}`
            );
          }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(SwitcherDarkMode, {}) })
        ] })
      }
    )
  ] }) });
};

const getUsers = async (query) => {
    const response = await fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    });
    const data = await response.json();
    return data;
};

const getUser = async (id, query) => {
    const response = await fetch(`${API_URL}/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    });
    const data = await response.json();
    return data;
};

const createUser = async (form, token) => {
    const response = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers: {
            "x-token": token,
        },
        body: form,
    });
    const data = await response.json();
    return data;
};

const updateUser = async (id, form, token) => {
    const response = await fetch(`${API_URL}/user/${id}`, {
        method: "PUT",
        headers: {
            "x-token": token,
        },
        body: form,
    });
    const data = await response.json();
    return data;
};

const getUserByToken = async (token) => {
    try {
        const response = await fetch(`${API_URL}/user/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": token,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
};

const login = async (correo, password) => {
    const obj = {
        correo,
        password,
    };
    const response = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    const data = await response.json();

    if (data.mensaje) {
        throw new Error(data.mensaje);
    }
    return data;
};

const deleteUser = async (id, token) => {
    const response = await fetch(`${API_URL}/user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-token": token,
        },
    });
    const data = await response.json();
    return data;
};

const VerifyLogin = () => {
  const token = useUserStore((state) => state.token);
  const setToken = useUserStore((state) => state.setToken);
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    if (!token) {
      const tokenStorage = localStorage.getItem("x-token");
      if (!tokenStorage)
        return;
      setToken(tokenStorage);
    }
  }, []);
  useEffect(() => {
    if (!token)
      return;
    const fetchUser = async () => {
      try {
        const user2 = await getUserByToken(token);
        if (!user2)
          return;
        setUser(user2);
      } catch (e) {
      }
    };
    fetchUser();
  }, [token]);
  useEffect(() => {
  }, [user]);
  return /* @__PURE__ */ jsx(Fragment, {});
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<script>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
 
	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
<\/script> <html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="https://res.cloudinary.com/di1hmzv5y/image/upload/w_50/q_auto/f_auto/v1703888573/Instituto-Superior-de-Agricultura-ISA-removebg-preview_d7xypv.png"><meta name="generator"`, "><title>", " - Isa Promocion 71-74</title>", '</head> <body class="bg-gray-50 dark:bg-slate-600" data-astro-cid-sckkx6r4> <main data-astro-cid-sckkx6r4> ', " ", " ", " </main> ", "  </body> </html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "VerifyLogin", VerifyLogin, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Login/VerifyLogin", "client:component-export": "default", "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Navbar", index, { "client:visible": true, "data-astro-transition-persist": "navbar", "client:component-hydration": "visible", "client:component-path": "@/components/Navbar/index.jsx", "client:component-export": "default", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "7k4xbl3z", "", "navbar") }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ToastContainer", ToastContainer, { "position": "bottom-right", "autoClose": 3e3, "hideProgressBar": false, "newestOnTop": false, "closeOnClick": true, "rtl": false, "pauseOnFocusLoss": true, "draggable": true, "pauseOnHover": true, "theme": "dark", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "react-toastify", "client:component-export": "ToastContainer", "data-astro-cid-sckkx6r4": true, "data-astro-transition-persist": createTransitionScope($$result, "askmj6t7") }));
}, "E:/Programacion/NodeJs/graduacion-page/src/layouts/Layout.astro", "self");

const UserPlaceHolderImg = new Proxy({"src":"/_astro/userPlaceHolder.-5fvwpNH.jpg","width":600,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const user = await getUser(id);
  user.edad = Math.floor(
    (/* @__PURE__ */ new Date() - new Date(user.fechaNacimiento).getTime()) / 315576e5
  );
  user.fechaNacimiento = new Date(user.fechaNacimiento).toLocaleDateString(
    "es-ES",
    { year: "numeric", month: "long", day: "numeric" }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Resumen de ${user.nombres} ${user.apellidos}`, "data-astro-cid-rfdx3tnm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-14 pt-14" data-astro-cid-rfdx3tnm> <div class="flex flex-col items-center justify-center gap-12 md:gap-24 p-10 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 max-w-screen-md mx-6" data-astro-cid-rfdx3tnm> <img class="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full shadow-lg object-cover"${addAttribute(user?.foto?.img_url || UserPlaceHolderImg.src, "src")}${addAttribute(`${user?.nombres} ${user?.apellidos}`, "alt")} data-astro-cid-rfdx3tnm> <ul class="dark:text-gray-100 grid grid-cols-1 gap-6 text-gray-700 text-sm sm:grid-cols-2 box-border" data-astro-cid-rfdx3tnm> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Nombre:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.nombres}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Apellido:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.apellidos}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Correo:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.correo}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Edad:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.edad}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Ultimo Grado Estudio:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.ultimoGradoEstudio}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Fecha de Nacimiento:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.fechaNacimiento}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Sexo:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.sexo}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Cantidad Hijos:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.cantidadHijos}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Teléfono Casa:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.telefonoCasa}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Celular:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.telefonoCelular}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Dirección:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.direccion}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Estado Civil:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.estadoCivil}</span> </li> <li class="text-2xl font-bold" data-astro-cid-rfdx3tnm> <span class="text-gray-500" data-astro-cid-rfdx3tnm>Ocupación:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-rfdx3tnm>${user?.descripcion || "Sin registrar"}</span> </li> </ul> </div> </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/resumen-vidas/[id].astro", void 0);

const $$file$1 = "E:/Programacion/NodeJs/graduacion-page/src/pages/resumen-vidas/[id].astro";
const $$url$1 = "/resumen-vidas/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const getEventos = async () => {
    const response = await fetch(`${API_URL}/event`);
    const data = await response.json();
    return data;
};

const getEvento = async (id) => {
    const response = await fetch(`${API_URL}/event/${id}`);
    const data = await response.json();
    return data;
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const evento = await getEvento(id);
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString(
      "es-ES",
      { year: "numeric", month: "long", day: "numeric" }
    );
  };
  const formatHora = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Evento - ${evento.nombreEvento} - ${evento.lugar}`, "data-astro-cid-j4rmax6v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-14 pt-14" data-astro-cid-j4rmax6v> <div class="flex flex-col items-center justify-center gap-12 p-10 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 max-w-screen-md mx-6" data-astro-cid-j4rmax6v> <h1 class="md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100
                    text-2xl o
                " data-astro-cid-j4rmax6v>${evento.nombreEvento}</h1> <img class="w-full shadow-lg object-cover rounded-lg"${addAttribute(evento?.foto?.img_url || UserPlaceHolderImg.src, "src")}${addAttribute(`${evento?.nombreEvento}`, "alt")} data-astro-cid-j4rmax6v> <ul class="dark:text-gray-100 grid grid-cols-1 gap-6 text-gray-700 text-sm sm:grid-cols-2 box-border" data-astro-cid-j4rmax6v> <li class="text-2xl font-bold" data-astro-cid-j4rmax6v> <span class="text-gray-500" data-astro-cid-j4rmax6v>Inicio:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-j4rmax6v>${formatDate(evento?.fechaInicio)}</span> </li> <li class="text-2xl font-bold" data-astro-cid-j4rmax6v> <span class="text-gray-500" data-astro-cid-j4rmax6v>Fin:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-j4rmax6v>${formatDate(evento?.fechaFinal)}</span> </li> <li class="text-2xl font-bold" data-astro-cid-j4rmax6v> <span class="text-gray-500" data-astro-cid-j4rmax6v>Lugar:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-j4rmax6v>${evento?.lugar}</span> </li> <li class="text-2xl font-bold" data-astro-cid-j4rmax6v> <span class="text-gray-500" data-astro-cid-j4rmax6v>Hora Inicio:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-j4rmax6v>${formatHora(evento?.fechaInicio)}</span> </li> <li class="text-2xl font-bold" data-astro-cid-j4rmax6v> <span class="text-gray-500" data-astro-cid-j4rmax6v>Hora Fin:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-j4rmax6v>${formatHora(evento?.fechaFinal)}</span> </li> <li class="text-2xl font-bold" data-astro-cid-j4rmax6v> <span class="text-gray-500" data-astro-cid-j4rmax6v>Direccion:</span> <span class="font-normal text-gray-900 dark:text-gray-100" data-astro-cid-j4rmax6v>${evento?.direccion}</span> </li> </ul> </div> </main> ` })} `;
}, "E:/Programacion/NodeJs/graduacion-page/src/pages/encuentros/[id].astro", void 0);

const $$file = "E:/Programacion/NodeJs/graduacion-page/src/pages/encuentros/[id].astro";
const $$url = "/encuentros/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, API_URL as A, UserPlaceHolderImg as U, _id_$1 as _, getUsers as a, getUser as b, updateUser as c, createUser as d, deleteUser as e, navbarOptionsani as f, getEventos as g, _id_ as h, login as l, nisa as n, useUserStore as u };
