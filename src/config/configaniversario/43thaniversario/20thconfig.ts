export type dropDownOption20th = {

    imageUrl:string;
    imageUrl2:string;
    imageUrl3:string;
    imageUrl4:string;
    imageUrl5:string;
    imageUrl6:string;
    imageUrl7:string;
    imageUrl8:string;
    imageUrl9:string;
    regresar:string;

};

export type NavbarOption20th = {



    admin?: boolean;
    dropDown: boolean;
    dropDownOptions20th?: dropDownOption20th[];
};

export const navbarOptions20th: NavbarOption20th[] = [
    
    {
  

        dropDown: true,
        dropDownOptions20th: [

                {
                    
                    imageUrl:"",
                    imageUrl2:"",
                    imageUrl3:"",
                    imageUrl4:"",
                    imageUrl5:"",
                    imageUrl6:"",
                    imageUrl7:"",
                    imageUrl8:"",
                    imageUrl9:"",
                  regresar:"/aniversarios/indexaniversario"
                
                },
           
            ],
        
    }


];

