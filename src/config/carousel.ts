import EventoIMG from "@/assets/img/evento.png";
import AmigosIMG from "@/assets/img/a.jpg";
import GrupoIMG from "@/assets/img/grupo.jpg";
import InstitutoIMG from "@/assets/img/universidad-isa-1.jpg";

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
        title: "Bienvenidos a la Promoción ISA 71-74",
        description:
            "Explora imágenes emotivas, anécdotas entrañables y resúmenes de vida mientras nos sumergimos en los recuerdos únicos de cada miembro. Celebremos juntos la historia que nos une, construyendo puentes de recuerdos que perdurarán por siempre. ¡Disfruta del viaje a través de los inolvidables años de la ISA Promoción 71-74!",
        image: "https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721614/ANIVERSARIOS/ANI-6%2850TH%29/WhatsApp_Image_2021-08-08_at_8.54.16_PM_1_nrrtox.jpg",
        link: "/aniversarios",
        active: "active",
        background: InstitutoIMG.src,
    },
    {
        title: "Encuentros",
        description:
            "¡Participa en nuestra sección de encuentros y eventos! Comparte la emoción de reunirnos nuevamente, revive momentos especiales y crea nuevos recuerdos. ",
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
