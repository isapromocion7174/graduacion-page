export type dropDownOption35th = {
    imageUrl: string;
    imageUrl2: string;
    imageUrl3: string;
    imageUrl4: string;
    imageUrl5: string;
    imageUrl6: string;

    regresar: string;
};

export type NavbarOption35th = {
    admin?: boolean;
    dropDown: boolean;
    dropDownOptions35th?: dropDownOption35th[];
};

export const navbarOptions35th: NavbarOption35th[] = [
    {
        dropDown: true,
        dropDownOptions35th: [
            {
                imageUrl:
                    "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721534/ANIVERSARIOS/ANI-3%2835TH%29/Imagen11_xb3u84.jpg",
                imageUrl2:
                    "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721532/ANIVERSARIOS/ANI-3%2835TH%29/Imagen12_zec0u0.jpg",
                imageUrl3:
                    "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721528/ANIVERSARIOS/ANI-3%2835TH%29/Imagen10_cpwrty.jpg",
                imageUrl4:
                    "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721528/ANIVERSARIOS/ANI-3%2835TH%29/Imagen15_nqo4hs.jpg",
                imageUrl5:
                    "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721524/ANIVERSARIOS/ANI-3%2835TH%29/Imagen14_t86yj4.jpg",
                imageUrl6:
                    "https://res.cloudinary.com/di1hmzv5y/image/upload/w_1000/q_auto/f_auto/v1703721524/ANIVERSARIOS/ANI-3%2835TH%29/Imagen13_qgvuyj.jpg",
                regresar: "/aniversarios",
            },
        ],
    },
];
