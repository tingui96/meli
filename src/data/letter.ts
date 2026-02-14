export type LetterBlock =
  | {
      type: "paragraph";
      id: string;
      text: string;
    }
  | {
      type: "photo";
      id: string;
      src: string;
      alt: string;
      caption?: string;
    };

export const letterBlocks: LetterBlock[] = [
  {
    type: "paragraph",
    id: "p1",
    text: "No sé decir ciertas cosas en voz alta sin quedarme a medias. Por eso te escribo aquí: para que la verdad tenga tiempo, y no se me caiga de las manos.",
  },
  {
    type: "paragraph",
    id: "p2",
    text: "A veces te miro y pienso que lo más raro no es quererte; lo raro es lo fácil que se volvió el mundo cuando apareciste. Como si la vida, sin avisar, hubiera bajado el volumen del ruido.",
  },
  {
    type: "photo",
    id: "ph1",
    src: "/memories/WhatsApp%20Image%202026-02-13%20at%202.25.05%20PM%20%281%29.jpeg",
    alt: "Una foto juntos sonriendo",
    caption: "Un instante cualquiera que se quedó conmigo.",
  },
  {
    type: "paragraph",
    id: "p3",
    text: "Me enamora tu manera de estar: sin pedir permiso, pero sin empujar. Me gusta que no todo sea perfecto; me gusta que sea real. Que podamos ser torpes, y aún así elegirnos.",
  },
  {
    type: "paragraph",
    id: "p4",
    text: "No quiero prometer cosas grandilocuentes. Quiero prometer lo pequeño: escuchar cuando algo te pese, quedarme cuando sea más cómodo irme, hablar con cuidado, aprender tus silencios sin invadirlos.",
  },
  {
    type: "photo",
    id: "ph2",
    src: "/memories/WhatsApp%20Image%202026-02-13%20at%202.25.05%20PM%20%282%29.jpeg",
    alt: "Una foto al aire libre",
    caption: "Hay días que guardo como si fueran papel doblado en el bolsillo.",
  },
  {
    type: "paragraph",
    id: "p5",
    text: "Me descubro pensando en ti sin drama, sin urgencia. Solo con una calma nueva. Como quien encuentra una lámpara encendida al volver tarde, y entiende que hay hogar en una presencia.",
  },
  {
    type: "paragraph",
    id: "p6",
    text: "Si alguna vez dudas, vuelve a esta frase: yo te elijo en lo cotidiano. En lo simple. En lo que no se publica. En lo que se sostiene cuando nadie mira.",
  },
  {
    type: "photo",
    id: "ph3",
    src: "/memories/us.jpeg",
    alt: "Una foto juntos, sin prisa",
    caption: "Lo nuestro se parece más a esto: suave, cercano, sin prisa.",
  },
  {
    type: "paragraph",
    id: "p7",
    text: "Gracias por dejarme acercarme a tu vida como se entra a una casa: despacio, limpiándome los zapatos, aprendiendo dónde se enciende la luz. Gracias por confiarme tu verdad.",
  },
  {
    type: "paragraph",
    id: "p8",
    text: "No tengo una forma perfecta de terminar. Solo esto: me haces bien. Y si el tiempo nos enseña caminos nuevos, yo quiero caminar contigo, con honestidad y con ternura.",
  },
  {
    type: "paragraph",
    id: "p9",
    text: "— Siempre tuyo/a, en voz baja.",
  },
];

