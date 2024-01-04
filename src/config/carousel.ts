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
        image: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721614/ANIVERSARIOS/ANI-6%2850TH%29/WhatsApp_Image_2021-08-08_at_8.54.16_PM_1_nrrtox.jpg",
        link: "/aniversarios",
        active: "active",
        background:
            "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721622/ANIVERSARIOS/ANI-6%2850TH%29/WhatsApp_Image_2021-08-06_at_11.56.40_AM_gtuq7t.jpg",
    },
    {
        title: "Encuentros",
        description:
            "¡Participa en nuestra sección de encuentros y eventos! Comparte la emoción de reunirnos nuevamente, revive momentos especiales y crea nuevos recuerdos. ",
        image: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721604/ANIVERSARIOS/ANI-6%2850TH%29/WhatsApp_Image_2021-08-08_at_8.52.16_PM_1_boe5wg.jpg",
        link: "/encuentros",
        background: InstitutoIMG.src,
    },
    {
        title: "Miembros",
        description:
            "Explora la diversidad y la riqueza de historias que conforman nuestra comunidad. Conoce a cada miembro, sus experiencias únicas, y descubre sus trayectorias de vida. ",
        image: "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721534/ANIVERSARIOS/ANI-3%2835TH%29/Imagen11_xb3u84.jpg",
        link: "/resumen-vidas",
        background:
            "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721566/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160808-WA0001_efjkrg.jpg",
    },
    {
        title: "Instituto de ISA",
        description:
            "El Instituto Superior de Agricultura (ISA), originalmente un centro de educación vocacional agrícola, fue creado en virtud a un acuerdo entre la Asociación para el Desarrollo Inc., el Estado Dominicano y la Misión en el país de la AID.",
        image: "https://isa.edu.do/_next/image?url=https://app.isa.edu.do/wp-content/uploads/2021/05/cover-2.jpg&w=1920&q=75",
        link: "/nuestro-isa",
        background: InstitutoIMG.src,
    },
];
