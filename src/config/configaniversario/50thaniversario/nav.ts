export type dropDownOption50thnav = {

   
    irimg:string;
    irvideo:string;
 regresar:string;

    

};

export type NavbarOption50thnav = {



    admin?: boolean;
    dropDown: boolean;
    dropDownOptions50thnav?: dropDownOption50thnav[];
};

export const navbarOptions50thnav: NavbarOption50thnav[] = [
    
    {
  

        dropDown: true,
        dropDownOptions50thnav: [

                {
                 irimg:"/aniversarios/50th/50th-aniversario-imagenes",
                 irvideo:"/aniversarios/50th/50th-aniversario-videos",
                 regresar:"/aniversarios"
                
                }, 
           
            ],
        
    }


];



