export type dropDownOption42th = {

    imageUrl:string;
    imageUrl2:string;
    imageUrl3:string;
    imageUrl4:string;
    imageUrl5:string;
    imageUrl6:string;
    imageUrl7:string;

    regresar:string;

};

export type NavbarOption42th = {



    admin?: boolean;
    dropDown: boolean;
    dropDownOptions42th?: dropDownOption42th[];
};

export const navbarOptions42th: NavbarOption42th[] = [
    
    {
  

        dropDown: true,
        dropDownOptions42th: [

                {
                    
                    imageUrl:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721569/ANIVERSARIOS/ANI-4%2842TH%29/1_qgo6cg.png",
                    imageUrl2:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721566/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160808-WA0001_efjkrg.jpg",
                    imageUrl3:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721565/ANIVERSARIOS/ANI-4%2842TH%29/2_reverq.png",
                    imageUrl4:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721565/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160807-WA0026_lklfla.jpg",
                    imageUrl5:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721563/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160807-WA0025_ro23zh.jpg",
                    imageUrl6:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721557/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160807-WA0020_xore1z.jpg",
                    imageUrl7:"https://res.cloudinary.com/di1hmzv5y/image/upload/v1703721556/ANIVERSARIOS/ANI-4%2842TH%29/IMG-20160806-WA0027_qxd29x.jpg",
         
                  regresar:"/aniversarios"
                
                },
           
            ],
        
    }


];

