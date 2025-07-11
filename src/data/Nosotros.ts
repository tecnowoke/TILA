// src/data/nosotros.ts

export interface Terapeuta {
  nombre: string;
  bajada: string;
  texto: string;
  imagen: string;
  instagram?: string;
  facebook?: string;
  mail?: string;
}

const terapeutas: Terapeuta[] = [
  {
    nombre: "Constanza Caputo",
    bajada: "Lic. en Psicología, Cofundadora Tila sembrar salud, Asesora en Salud Ayurveda",
    texto: "Psicóloga de formación y terapeuta ayurvédica, fui profundizando en el cruce entre ambas disciplinas integrándolas a mi práctica profesional. Me formé en la Fundación de Salud Ayurveda Prema, donde también fui docente y terapeuta. He dictado formaciones en Argentina y Uruguay. En 2019 co fundé Tila Sembrar Salud, un espacio de formación de terapeutas donde acompaño procesos individuales y grupales con compromiso y dedicación. Mi búsqueda de aprendizaje sigue en movimiento: he profundizado en Ayurveda y Marma Chikitsa con el Dr. Vasant Lad a través de Ayurprana, y ampliado mis conocimientos en neurociencias con la Dra. Nazareth Castellanos (Universidad Complutense de Madrid). Actualmente, me encuentro formándome en Jyotish (astrología védica) con Federico Assunto Suárez (Jyotish del Sur).",
    imagen: "https://static.wixstatic.com/media/061ef9_6828b202938244c097f077005d1779f4~mv2.png/v1/fill/w_368,h_460,al_c,lg_1,q_85,enc_avif,quality_auto/constanza.png",
    instagram: "https://instagram.com/diana",
    facebook: "https://facebook.com/diana",
    mail: "diana@tila.com",
  },
  {
    nombre: "Diana Zorzoli",
    bajada: "Cofundadora Tila, Asesora en Salud Ayurveda",
    texto: "Soy terapeuta ayurvédica, docente y cofundadora de Tila Sembrar Salud. Mi camino en Ayurveda comenzó en 2016 en la Fundación de Salud Ayurveda Prema donde trabajé como terapeuta y docente. En 2018 viajé a Londres para profundizar mis estudios junto al Dr. Vasant Lad, con quien continúo formándome a través de Ayurprana. Desde 2021 complemento con grandes referentes del mundo de la salud como lo son Alicia Cobos, Katie Williamson, Alex Von Foerter. Colaboro como docente en la escuela Ronda Lunar. Disfruto compartir herramientas que exploro en mi propio cuerpo, con una mirada vital y amorosa del cuidado. Actualmente atiendo en Tigre, CABA y La Pampa, y acompaño procesos de formación y transformación a través de Tila.",
    imagen: "https://static.wixstatic.com/media/061ef9_1eaee2e25b0d489ca28424618197a28e~mv2.png/v1/fill/w_720,h_1280,al_c,q_90,enc_avif,quality_auto/diana.png",
    instagram: "https://instagram.com/constanza",
    facebook: "https://facebook.com/constanza",
    mail: "constanza@tila.com",
  },
  {
    nombre: "Ariel Sotof",
    bajada: "Terapeuta Ayurveda",
    texto: "Vengo del mundo de la danza, donde el cuerpo fue mi primer gran maestro. Luego de atravesar una lesión importante, conocí el Ayurveda y encontré en él un camino de sanación y sentido. Mi primer acercamiento con esta medicina fue en el 2016 con Glenda Salas terapeuta ayurvédica. Luego, me formé como Asistente en Salud Ayurveda en la Fundación de Salud Ayurveda Prema, y profundicé con Diana Zorzoli y Constanza Caputo en Tila Sembrar Salud. Hoy acompaño a personas que buscan equilibrio y bienestar, combinando técnicas corporales con una escucha atenta y cercana.",
    imagen: "https://static.wixstatic.com/media/061ef9_b2290d6b2cc04062967599b141991837~mv2.png/v1/fill/w_720,h_1280,al_c,q_90,enc_avif,quality_auto/ari.png",
    instagram: "https://instagram.com/constanza",
    facebook: "https://facebook.com/constanza",
    mail: "constanza@tila.com",
  }
];

export default terapeutas;
