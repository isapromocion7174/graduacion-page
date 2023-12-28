import EventoIMG from "@/assets/img/evento.png";
import AmigosIMG from "@/assets/img/a.jpg";
import GrupoIMG from "@/assets/img/grupo.jpg";
import InstitutoIMG from "@/assets/img/universidad-isa-1.jpg";

export type dropDownOption = {
    name: string;
    path: string;
};

export type NavbarOption = {
    name: string;
    path: string;
    admin?: boolean;
    dropDown: boolean;
    dropDownOptions?: dropDownOption[];
};

export const navbarOptions: NavbarOption[] = [
    {
        name: "Inicio",
        path: "/",
        dropDown: false,
    },
    {
        name: "ISA",
        path: "/",
        dropDown: true,
        dropDownOptions: [
            {
                name: "Nuestro ISA",
                path: "/nuestro-isa",
            },
            {
                name: "Carta de Aceptación",
                path: "/carta-aceptacion",
            },
            {
                name: "Distribucion por habitacion",
                path: "/distribucion-habitacion",
            },
            {
                name: "Un dia tipico en ISA",
                path: "/dia-tipico",
            },
        ],
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
                path: "/encuentros",
            },
            {
                name: "Anecdotas y Jocosidades",
                path: "/anecdotas-jocosidades",
            },
            {
                name: "Programas de Graduacion",
                path: "/programas-graduacion",
            },
            {
                name: "Deportivas",
                path: "/deportivas",
            },
            {
                name: "",
                path: "/deportivas",
            },
            {
                name: "Otros",
                path: "/otros",
            },
        ],
    },
    {
        /*
    
        Aniversarios
        20th Aniversario
        25th Aniversario
        35th Aniversario
        42th Aniversario
        43th Aniversario
        50th Aniversario
    */
        name: "Aniversarios",
        path: "/aniversarios",
        dropDown: false,
    },
    {
        name: "Admin",
        path: "/admin",
        admin: true,
        dropDown: true,
        dropDownOptions: [
            {
                name: "Usuarios",
                path: "/admin/usuarios",
            },
            {
                name: "Eventos",
                path: "/admin/eventos",
            },
        ],
    },
];

export type carouselItem = {
    title: string;
    description: string;
    image: string;
    link: string;
    active?: string;
    background?: string;
};

export const carouselItems = [
    {
        title: "Bienvenidos al Portal",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sed sunt molestiae adipisci cumque vero quos possimus eum deleniti, laboriosam dolor! Suscipit in consectetur provident dolore eligendi sed eum numquam.",
        image: "https://listindiario.com/files/main_image/uploads/2018/03/26/6433bfdd08a37.jpeg",
        link: "/nuestro-isa",
        active: "active",
        background: InstitutoIMG.src,
    },
    {
        title: "Encuentros",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sed sunt molestiae adipisci cumque vero quos possimus eum deleniti, laboriosam dolor! Suscipit in consectetur provident dolore eligendi sed eum numquam.",
        image: EventoIMG.src,
        link: "/encuentros",
        background: AmigosIMG.src,
    },
    {
        title: "Grupos de ISA",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sed sunt molestiae adipisci cumque vero quos possimus eum deleniti, laboriosam dolor! Suscipit in consectetur provident dolore eligendi sed eum numquam.",
        image: GrupoIMG.src,
        link: "/grupos",
        background: GrupoIMG.src,
    },
    {
        title: "Instituto de ISA",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sed sunt molestiae adipisci cumque vero quos possimus eum deleniti, laboriosam dolor! Suscipit in consectetur provident dolore eligendi sed eum numquam.",
        image: AmigosIMG.src,
        link: "/instituto",
        background: InstitutoIMG.src,
    },
];

export const API_URL =
    import.meta.env.PUBLIC_API_URL || "http://localhost:3000";
