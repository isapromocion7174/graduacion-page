

export type dropDownOption = {
    name: string;
    path: string;
};

export type NavbarOption = {
    name: string;
    path: string;
    dropDown: boolean;
    dropDownOptions?: dropDownOption[];
}; 

export type AdminOption = {
    name: string;
    path: string;
  };
  
  export type AdminNavbarOption = {
    name: string;
    path: string;
    dropDown: boolean;
    dropDownOptions?: AdminOption[];
  };
  
export const navbarOptions: NavbarOption[] = [

    {
        name: "Admin",
        path: "/admin",
        dropDown: false,
    },
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
        dropDown: true,
        dropDownOptions: [
            {
                name: "20th Aniversario",
                path: "/20th-aniversario",
            },
            {
                name: "25th Aniversario",
                path: "/25th-aniversario",
            },
            {
                name: "35th Aniversario",
                path: "/35th-aniversario",
            },
            {
                name: "42th Aniversario",
                path: "/42th-aniversario",
            },
            {
                name: "43th Aniversario",
                path: "/43th-aniversario",
            },
            {
                name: "50th Aniversario",
                path: "/50th-aniversario",
            },
        ],
    }
    ]
    export const adminNavbarOptions: AdminNavbarOption[] = [
        {
          name: "Admin",
          path: "/admin",
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
      