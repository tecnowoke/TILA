export interface Curso {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;       // texto corto presentación
  descripcionLarga: string;  // texto largo para sección final
  imagen: string;            // imagen fondo header
  imagen2: string;           // imagen bloque info (izq)
  imagen3: string;           // imagen bloque texto + imagen (der)
  modalidad: string;
  precioPesos: string;
  precioDolares: string;
  formasPago: string;
  linkPago: string;
  linkVerMas: string;
  linkPagoDolares?: string;


}

export const formaciones: Curso[] = [
  {
    slug: "masaje-abhyanga",
    titulo: "Masaje Abhyanga",
    subtitulo: "Terapia tradicional ayurvédica",
    descripcion: "Aprende esta técnica ancestral para equilibrar cuerpo y mente.",
    descripcionLarga: "Abhyanga es el masaje tradicional de la medicina Ayurveda de cuerpo completo. Se adapta a cada persona y sus necesidades. Se realiza con aceites generalmente medicados con plantas medicinales.",
    imagen: "https://static.wixstatic.com/media/061ef9_41a1e56bbfa34a2ca713a1dcf20278f8~mv2.png/v1/fill/w_918,h_1230,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Abhyanga_1.png",
    imagen2: "https://static.wixstatic.com/media/061ef9_41a1e56bbfa34a2ca713a1dcf20278f8~mv2.png",
    imagen3: "https://static.wixstatic.com/media/061ef9_41a1e56bbfa34a2ca713a1dcf20278f8~mv2.png",
    modalidad: "Presencial y Online",
    precioPesos: "$650000",
    precioDolares: "U$S900",
    formasPago: "Transferencia bancaria, MercadoPago y PayPal",
    linkPago: "https://payments.tiendup.com/checkout/52399/ZZoLVxuqQB",
    linkVerMas: "https://tila-sembrar-salud.tiendup.com/curso/abhyanga-intensivo"
  },
    {
    slug: "tecnicas-avanzadas",
    titulo: "Técnicas Avanzadas",
    subtitulo: "Profundización en terapias ayurvédicas",
    descripcion: "Para quienes buscan perfeccionar su conocimiento en Ayurveda.",
    descripcionLarga: "Formación con Aval de la Embajada India en Argentina. Incluye prácticas avanzadas y certificación oficial.",
    imagen: "https://static.wixstatic.com/media/061ef9_d8f742b493c9452391681d758e20402d~mv2.png/v1/fill/w_918,h_1230,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tecnicas_1.png",
    imagen2: "https://static.wixstatic.com/media/061ef9_d8f742b493c9452391681d758e20402d~mv2.png",
    imagen3: "https://static.wixstatic.com/media/061ef9_d8f742b493c9452391681d758e20402d~mv2.png",
    modalidad: "Presencial",
    precioPesos: "$950000",
    precioDolares: "U$S800",
    formasPago: "Transferencia bancaria, MercadoPago y PayPal",
    linkPago: "https://payments.tiendup.com/checkout/52399/ZZoLVxuqQB",
        linkVerMas: "https://tila-sembrar-salud.tiendup.com/curso/tecnicas-avanzadas",
   linkPagoDolares: "https://payments.tiendup.com/checkout/52399/ZZoLVxuqQB",


  },
  {
    slug: "marma-chikitsa",
    titulo: "Marma Chikitsa",
    subtitulo: "Sanación a través de puntos energéticos",
    descripcion: "Explora los puntos marmas y su impacto en la salud.",
    descripcionLarga: "Formación profesional en técnicas ayurvédicas: Shirodhara, Padabhyanga, Pindas, Bastis, etc. Incluye teoría, práctica, material de estudio, clases en vivo y certificación. Para terapeutas y profesionales que buscan ampliar su abordaje terapéutico.",
    imagen: "https://static.wixstatic.com/media/061ef9_b6ba6d0d029d496082c1307f35c25a98~mv2.png/v1/fill/w_910,h_1219,al_c,q_90,enc_avif,quality_auto/Marma-chikitsa_1.png",
    imagen2: "https://static.wixstatic.com/media/061ef9_b6ba6d0d029d496082c1307f35c25a98~mv2.png",
    imagen3: "https://static.wixstatic.com/media/061ef9_b6ba6d0d029d496082c1307f35c25a98~mv2.png",
    modalidad: "Online",
    precioPesos: "$280000",
    precioDolares: "U$S280",
    formasPago: "Transferencia bancaria, MercadoPago y PayPal",
    linkPago: "https://payments.tiendup.com/checkout/52399/ZZoLVxuqQB",
    linkVerMas: "https://tila-sembrar-salud.tiendup.com/curso/marmachikitsa",
    linkPagoDolares: "https://payments.tiendup.com/checkout/52399/ZZoLVxuqQB"

  }
];
