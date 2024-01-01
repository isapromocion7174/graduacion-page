export type dropDownOption25th = {

    imageUrl:string;
    imageUrl2:string;
    imageUrl3:string;
    regresar:string;

};

export type NavbarOption25th = {



    admin?: boolean;
    dropDown: boolean;
    dropDownOptions25th?: dropDownOption25th[];
};

export const navbarOptions25th: NavbarOption25th[] = [
    
    {
  

        dropDown: true,
        dropDownOptions25th: [

                {
                    
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721511/ANIVERSARIOS/ANI-2%2825TH%29/Imagen8_tibzo9.png",
                    imageUrl2:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721505/ANIVERSARIOS/ANI-2%2825TH%29/3_yxy8z5.png",
                    imageUrl3:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721499/ANIVERSARIOS/ANI-2%2825TH%29/2_rreikg.png",
                regresar:"/aniversarios/indexaniversario"
                
                },
           
            ],
        
    }


];

