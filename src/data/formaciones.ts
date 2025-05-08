// src/data/formaciones.ts

export interface Curso {
  slug: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
}

export const formaciones: Curso[] = [
  {
    slug: "masaje-abhyanga",
    titulo: "Masaje Abhyanga",
    subtitulo: "Terapia tradicional ayurvédica",
    descripcion: "Aprende esta técnica ancestral para equilibrar cuerpo y mente.",
  },
  {
    slug: "marma-chikitsa",
    titulo: "Marma Chikitsa",
    subtitulo: "Sanación a través de puntos energéticos",
    descripcion: "Explora los puntos marmas y su impacto en la salud.",
  },
  {
    slug: "tecnicas-avanzadas",
    titulo: "Técnicas Avanzadas",
    subtitulo: "Profundización en terapias ayurvédicas",
    descripcion: "Para quienes buscan perfeccionar su conocimiento en Ayurveda.",
  },
];
