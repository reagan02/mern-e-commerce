const smartphone = [
  // Product 1
  {
    name: "Samsung Galaxy S21",
    description:
      "Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Gray (SM-G991UZAAXAA)",
    category: "Smartphone",
    images: [
      "https://media.ldlc.com/r1600/ld/products/00/05/77/08/LD0005770879_1_0005770889.jpg",
      "https://fdn.gsmarena.com/imgroot/news/20/12/samsung-galaxy-s21-renders/-1200/gsmarena_005.jpg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTw_k1PqSbW9U347XzvZnTTFrBLqjqslE_IZrcohevPhJwPAqackas7IfR-oV_sXLIoujA9CgAF-4G-BSvU9pTHyFbgV0JpCJTKbSOwMKW-elO5ba89ANRc&usqp=CAE",
      "https://i0.wp.com/www.yugatech.com/wp-content/uploads/2021/01/galaxy-s21-series_2.png?fit=720%2C405&ssl=1",
    ],
    brand: "Samsung",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: ["Gray", "Black", "Violet"],
    variants: [
      {
        size: "128GB",
        price: 13999.99, // pesos
        stock: 50,
      },
      {
        size: "256GB",
        price: 14999.99, // pesos
        stock: 30,
      },
      {
        size: "512GB",
        price: 15999.99, // pesos
        stock: 20,
      },
    ],
  },
  // Product 2
  {
    name: "Apple iPhone 12",
    description: "Apple iPhone 12, 64GB, Black - Fully Unlocked (Renewed)",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_o4MZPyKtriqZ35sHTMeUxMplB5SsJ3uLkSZ8_xzrmSHDA5NaYoPuLXdr10Bw6sL94YqC1ElC5hH9pptFy-2lZfpy67pwzJui0Eoa1lF-fGi4X1MEN5Z4ww&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToCJG-RwcEkFGCj0Ycw520v3qw9qCqvISdIZ5hX4mD3btT2-U1A3SEVNgL8pdtFGUeOw9twar1lSS1HlkDX9i897IleUgQy-m8np7LV7CO5TtSkf2kphrM7w&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuFm6xseJ-Uk1SQc8j0riBHP4LhyCugc7lC9hgpy5bzp3D8nc4j5kbosQG0_b76vCx6u8uXv2GUB7EEdBKfg27Ri6fcY9wCDsdv7n_YsGwkvrrnjJGYUyE6g",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbrzYQJgWDGK79rKfyX1V3bDoJ8dPQfmd340PMJ0c4VmGM8a_26Ujk9m75dKS7xrXOKfRqortSlF-NnJetJRPhnMF9-hTHlE_OVMn6eYOScK8AywOnrbHZ",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6syj62i4ilQRDfTLlhbs4mTaazz23EnBNonxyahpGTpGJpb66Xs84fowB25J_a5PkrLElvZ9mqth5orcBLjJW-sec83PaLsyQzjF2fflGAcF0j3PwPaw4",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpajy-StRtLV7nFBdGmv2VqVgYF4u0ZKSy97Jl5UMNkpocmIlWxJXMOh2taVFpzBee5dzCRfinrgE1v1QxZ1sx3rWISARPTRIl92IDPbdThjw7XqCK71k_",
    ],
    brand: "Apple",
    rating: 4.7,
    discount: 10,
    numberOfReviews: 0,
    color: ["Black", "White", "Blue", "Red"],
    variants: [
      {
        size: "64GB",
        price: 42999.0, // pesos
        stock: 100,
      },
      {
        size: "128GB",
        price: 47999.0, // pesos
        stock: 50,
      },
      {
        size: "256GB",
        price: 52999.0, // pesos
        stock: 30,
      },
    ],
  },
  // Product 3
  {
    name: "OnePlus 9 Pro",
    description:
      "OnePlus 9 Pro 5G LE2120 256GB 12GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) International Version - Morning Mist",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzU0y8_URWOb4a20tSOCv6J_SYmNdNuboqcsaJTt_Mx6PsOjSwSYVJnMWMy9q3zkjcDIYBYYCH3qnXQ72uz3bBjkvBHjTb0XWCv0LHzYODzxrl4ww5F1uz6w",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5GevHyhDCY85_hct1n-oQLt0sSpPYiiMXlMPZzu30Wt8qoNPiY8ATYNr6qVo8_DAUP7SLPX88xEsk6LNN493j9fbly0WI9d_KK69lqnZyVUBfAhsbf0RUeA",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScgE8D5lYVeXafNlfezhci1YwWV77l0S4dNGWn01EgRUmJOuZe7M5Ez3I_UaX6v0_oXg2-XlGLh8fFcsK4IRerO9r2CN7XqfxTb1siVIeJQu0_nIShmFXT",
    ],
    brand: "OnePlus",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: ["Morning Mist", "Pine Green", "Stellar Black"],
    variants: [
      {
        size: "64GB",
        price: 51999.5, // pesos
        stock: 20,
      },
      {
        size: "128GB",
        price: 53999.5, // pesos
        stock: 50,
      },
      {
        size: "256GB",
        price: 59999.5, // pesos
        stock: 30,
      },
    ],
  },
  // Product 4
  {
    name: "Xiaomi Mi 11",
    description:
      "Xiaomi Mi 11 5G Smartphone (8GB RAM, 256GB ROM) | 108MP Camera | Snapdragon 888 | 6.81” AMOLED Screen | 55W Fast Charging | Arctic White",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHSxxAaIJnXXHxmXcY_FHGN6IWhl7VdFL2qfnM3ktUDyOCGL3YKRYsIHQM9rQKPyjdUzyvDMtGl5jiggAlDXsmkxFDJsizej7K3GZI70T1NBRLMDzHxE6QMII",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzZtDEWUs-ULV0SJREAJCjqWa_pynd0WnPh7oWj99_-azSv7g56o0eMYdjRykFZMNhDvBcIJs2_Xvmq49rC0nobiJOnYlJksXQi_vQi1jYCdIJaY6cpTe3",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7JWKePsDD_xdWjqc7T13T2RRRKQYC9Gb2m1Ei2JsQ_-aVOUmwN8JfF7jlH-g1Iy22Ntp_kosngiuQhkqycyqfR2FetXpJ5AJWTgtuvXa9r_DHZty_TD5WYeM",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDxuADFWT5QJSDoRXg_pHxJabFNsYmhoWI2I1rhgc9wXH3PNBPP0FXTaiYU8f8pwxZHh_d0V4HRtpM7Ps3PNcLqZDIMP0caYECFHFlJAP53-6xjQH6g5md",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQes5ZGWBbX35MTkopP2i-wk_7jN8AWOGfE0VJHgHlg-Z6t-0fB8OWH8kI9bd-LEdPOlkkfB_rA8gB2YjtzfJU79YJmnnZy0Q",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAeR6Qd03FOmgJfpF4j37dVFxpULTF4sCYXfUXhd2-WSzSp-N5LnDXf8sxT-MXRdDN8m4s62YYWYp_au-qBO1o6VmES8PDo1BebEs5GyfC6Stgo9p44djV3g",
    ],
    brand: "Xiaomi",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: ["Arctic White", "Horizon Blue", "Midnight Gray"],
    variants: [
      {
        size: "128GB",
        price: 37499.5, // pesos
        stock: 50,
      },
      {
        size: "256GB",
        price: 39999.5, // pesos
        stock: 30,
      },
    ],
  },
  // Product 5
  {
    name: "Google Pixel 5",
    description:
      "Google Pixel 5 - 5G Android Phone - Water Resistant - Unlocked Smartphone with Night Sight and Ultrawide Lens - Just Black",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQX7oP2DWY8SlVF3nhd7GQsw10XJg-zcPRpqR4tb0NS5l5miTZdUR_IK-8LWVQ3NUEjRK_yWTQQTWgGhIONPZ32KcFR2wV6yaAh-bp9paZU7_ZhTvV45HMY",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUynihE7lDKLR91lKMXrfXn1vCdNKtWM_--_Mqy7alMwN403HhCDhiinSEcr6laajNtdCsr1beChWDoiNgWZklCjdqYBKZ21LnzhX-72o",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToiD66oZtPhHlH8VURf_Rc6QHWOeEldFAHVNP_8EEP7gLLjII1Ye_O3I8esP7S2N910ZYVL802_3OHasamWujn2tWf7cNu0uEyFRN92VXg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdg1a3sR5sZeYazYnVHKpLzHje10BT8tWPGA3Tzrgq89Ew3xsFNg8WDklDk069KvWHIjsz15bN3EOMAVo59N4aVKzjao0rjD_fZd-yPFs",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkPMhxML3cQp54UIVpMPoUEfPxq0osDg4I9fCF7wAhC-n47bNtjolu9fMA9cCOIiu9zM8fgK1hD3WA5jPLPOpDVQ8rfv94SPw3Df4639tdwXeAPWGR5BH0",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBXhww6uryW7x59vyHlJACEJBRr1yEOMQO7gGKWmY0Q5L-chREpvrYqa921Q4FQZIIxdD3VCk7X10Us8J6_2I6TcVv-fU2dPYas4tHSVZCOtxpKceOzM-p",
    ],
    brand: "Google",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: [" Black", "Sorta Sage"],
    variants: [
      {
        size: "128GB",
        price: 34999.5, // pesos
        stock: 50,
      },
      {
        size: "256GB",
        price: 39999.5, // pesos
        stock: 30,
      },
      {
        size: "512GB",
        price: 44999.5, // pesos
        stock: 20,
      },
    ],
  },
  // Product 6
  {
    name: "Sony Xperia 1 III",
    description:
      "Sony Xperia 1 III 5G Dual-SIM XQ-BC72 12GB/256GB, Frosted Black",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWI8mSoZov0qWwNdKMCfKetge3FrJgsik42ccmC9H4oVjDkHlZXCwSxpDoToeDAZrzmUmN-qWOsfeJFbFEwDtrlnJoKYZsT8tTfNfKtFnhX5jK0t3D1nSu",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTo74R1JiQXOW5_SxSm65GjVFkKF3XYUNwlk8-V2cn8SOJUJO7Dz8LbP6wY97PPORXwtp9m0V98NWXQzRsqbVryIFeZFhY8",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpLgJyIq0O6AXlWpc7te2dCfUQ9bZq-JqRJv3H7Cfp4ho12mQSwlGpPH4uiTBBpmBpu1WmSyuQvZrO-3qKo-NW3ZZU9dhc",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLib18rCDxz4aEHf1YAva50UOZnhtgFclKuqUHOGAbdPA4BX2li0J0dHX5QTem8pCIhC434NhOMVqp3SBiz7LWMxOy8Hh4Wg",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTm9-0yO94UFQadEks3CQanOdUNogogeTgyVHsffWrabLzoASRnaxvaZsXi_gC-nij3bOXVFjh3exWJ1oRx6cDwbtfTiq8I",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeH7iPebia0JKVoofUwYq_j81XZCFwjwHYpX-La22Z4zV3Dohg0jAh0V9t4Ag4di6HiCDDoYLD-LWi597W70evPbw5YnTp",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSz9QRjPkNwFqG0ymEtuZmmq-HvcJNbs-nreghD747hk6tKuP6nwZzkiGEVAMVycLooHcrYKnuSIRawil7SrFSSyvO8RM40",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTghTYGnA5rzWEehi8CkhqbiDbRiOTOs1OxiB6qEf6aBm7loqjgA5u4oMtOTQ85m7f4xLWHcxTCI_qgnK0la8t4PdGC_Wxv5w",
    ],
    brand: "Sony",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: ["Frosted Black"],
    variants: [
      {
        size: "256GB",
        price: 64999.5, // pesos
        stock: 50,
      },
    ],
  },
  // Product 7
  {
    name: "Asus ROG Phone 5",
    description:
      "ASUS ROG Phone 5 ZS673KS Dual-SIM 16GB/256GB 5G, Phantom Black",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwq2PptJqA361UzvVURTB70IZsQMCyESKCLR2hl2vdtVK9O5SOfXxwXhFACMofA82mh3gq42CRhrj2TJCocHD8h6rZvO43ODjtrueYHWg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3yqy5Br2JwANhIfNVpVI3qaQkhj7yQEnPf8NGG02ykQ-aBB6lnJy7AGJ1uD7e3GePeIePFKh7gvh-1oiQBr71UHeeQmjVo-Jgu-T6QCMu",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_4evVYp6do3_yRqrql33w9oqrMfvyuuc8Oue7hBxX24EHWDTwkMhTKOvrEEL0xUbF-dzJmGMT2b7XvC1dATfFsNALXm_diJw5vfUDdlw",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTW_c_t6obDRuNs8cwpwpBuIm57eQ_UEGf38CufLdodiUduX2Epfwf0Vx6b-7VQEkF68bBqeHC8Vsant-UHTldfDl_QLjSmP5hrS7unF8",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaLQ2GC7xlsxfqOqpnurxXGL2KP7ErLdQpmpA2LWc6xXE3qEtvP_fbsSMi5ZF8tH2vON7syKcpGZy0_257nVqf9hppakYI9JuSVlEArHs",
    ],
    brand: "Asus",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: ["Phantom Black"],
    variants: [
      {
        size: "256GB",
        price: 54999.5, // pesos
        stock: 50,
      },
      {
        size: "512GB",
        price: 59999.5, // pesos
        stock: 30,
      },
    ],
  },
  // Product 8
  {
    name: "Realme GT",
    description: "Realme GT 5G Dual-SIM RMX2202 12GB/256GB, Dashing Blue",
    category: "Smartphone",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFww2LzEVx7xcfAxunBuQ_2NOFh7cRVyKcEFGlZsZgTT_VF5Ab5iM0JMimXbwrBez083-p8Ki1x5zUWQjWlb-MdnXwPtx9VhSZs0k8h5k",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgxrlkX8pv2qQw-jAg0CeJWoRfqG_JtVQC3lT14zAw24Y1Y8iuzz6fD-vSIN_LzjOy_3zKLqxDuXZx_lwudVwY3Ti5ZCyCBtpd9k-wu03r6mvEH8A4g8_W",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGWuJAISbZBaIf5Sk9kE_fVvBXfM8h7rrw-EUECru1az8bIL_aTFaj51HuJaGHLPDXVOOp7TqxlqroHcHUmjie27zqR8bIvqQHOLYenQpX1_w2IgXEOFNA",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSheAdriA-uYjyT75_WZYa_lcHiSyK5irIqMER5Yms_jH-AA9LeUUHUO7n0eQA9vb5nD_4qpUcQqyDkaS-9WLAbg1O3pUZPoSH7iRrgJY7IxZcEmnBnXVfm",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6lhB1MKnxJPV9Ro2Ze5sOGfXN6kpLELE137ffb-l-r6zYB8YI4l0BNq-Sj62X8CwRyHsxvvebqKEJdXuk7vFECr8LcgMWhEGYtA6ArnK55mess4_JXGVRMw",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyAV0qNl9nTobNbd38fn7rCwPZK8CM6a0stls0SoavVoBUDhxLE8Oj8HI9v4tYbuVmWxsXR-f6yY7Zimch55AV3Si83bJKSE0oKIrIt4c",
    ],
    brand: "Realme",
    rating: 4.5,
    discount: 0,
    numberOfReviews: 0,
    color: ["Dashing Blue", "Dashing Silver"],
    variants: [
      {
        size: "128GB",
        price: 25999.5,
        stock: 30,
      },
      {
        size: "256GB",
        price: 29999.5,
        stock: 50,
      },

      {
        size: "512GB",
        price: 34999.5,
        stock: 20,
      },
    ],
  },
];

export default smartphone;
