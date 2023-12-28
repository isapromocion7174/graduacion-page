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
                name: "Origen y titulos acuales",
                path: "/origen-titulos",
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
        name: "Miscelaneos",
        path: "/miscelaneos",
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
                name: "Otros",
                path: "/otros",
            },
        ],
    },
    {
        name: "Aniversarios",
        path: "/aniversarios/indexaniversario",
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
    }
    
]

export type dropDownOptionani = {
    name: string;
    imageUrl:string;
    path: string;
};

export type NavbarOptionani = {
    name: string;
   
    path: string;
    admin?: boolean;
    dropDown: boolean;
    dropDownOptionsani?: dropDownOptionani[];
};

export const navbarOptionsani: NavbarOptionani[] = [
    
    {
        name: "Contacto",
        path: "/aniversarios",
        dropDown: true,
        dropDownOptionsani: [

                {
                    name: "20th Aniversario",
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721437/ANIVERSARIOS/ANI-1%2820TH%29/ANI-1_IMG8_zmmvat.jpg",
                    path: "/aniversarios/20th-aniversario",
                },
                {
                    name: "25th Aniversario",
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721499/ANIVERSARIOS/ANI-2%2825TH%29/2_rreikg.png",
                    path: "/aniversarios/25th-aniversario",
                },
                {
                    name: "35th Aniversario",
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721528/ANIVERSARIOS/ANI-3%2835TH%29/Imagen10_cpwrty.jpg",
                    path: "/aniversarios/35th-aniversario",
                },
                {
                    name: "42th Aniversario",
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721557/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160807-WA0020_xore1z.jpg",
                    path: "/aniversarios/42th-aniversario",
                },
                {
                    name: "43th Aniversario",
                    imageUrl:"",
                    path: "/aniversarios/43th-aniversario",
                },
                {
                    name: "50th Aniversario",
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721614/ANIVERSARIOS/ANI-6%2850TH%29/WhatsApp_Image_2021-08-08_at_8.54.16_PM_1_nrrtox.jpg",
                    path: "/aniversarios/50th-aniversario",
                },
            ],
        
    }


];


