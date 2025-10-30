export interface LandingData {
  siteName: string;
  whatsappNumber: string;
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    image: string;
  };
  problemPromise: {
    title: string;
    paragraphs: string[];
    bullets: string[];
  };
  howItWorks: {
    title: string;
    steps: { title: string; description: string }[];
  };
  resultsOffer: {
    title: string;
    benefits: string[];
    testimonial: {
      quote: string;
      author: string;
      company: string;
    };
  };
  privacyNotice: {
    title: string;
    paragraphs: string[];
  };
}

export const landingData: LandingData = {
  siteName: "WhatsApp Automation",
  whatsappNumber: "+5215551234567",

  hero: {
    headline: "Automatiza tus mensajes en WhatsApp y atiende clientes 24/7 ",
    subheadline:
      "Con nuestro sistema de automatización podrás responder más rápido, ahorrar tiempo y no perder ningún cliente.",
    cta: "Quiero automatizar mi WhatsApp",
    image: "/assets/images/hero-whatsapp.png"
  },

  problemPromise: {
    title: "¿Aún respondes tus mensajes manualmente?",
    paragraphs: [
      "Muchos negocios pierden clientes potenciales por no contestar a tiempo.",
      "Con una automatización simple puedes programar respuestas, mensajes de bienvenida y recordatorios automáticos."
    ],
    bullets: [
      " Responde automáticamente preguntas frecuentes",
      " No pierdas clientes fuera de horario",
      " Mejora tu atención y ahorra tiempo de tu equipo"
    ]
  },

  howItWorks: {
    title: "¿Cómo funciona?",
    steps: [
      {
        title: "1. Configura tu número de WhatsApp",
        description:
          "Ingresa el número de tu negocio y define los mensajes automáticos que se enviarán a tus clientes."
      },
      {
        title: "2. Personaliza tus respuestas",
        description:
          "Elige entre plantillas predefinidas o crea tus propios mensajes automáticos personalizados."
      },
      {
        title: "3. Activa y monitorea",
        description:
          "Activa el sistema y observa cómo tus clientes reciben respuestas instantáneas sin intervención manual."
      }
    ]
  },

  resultsOffer: {
    title: "Resultados que notarás desde el primer día",
    benefits: [
      " Respuestas automáticas en segundos",
      " Asistencia constante, sin pausas",
      " Aumento en la satisfacción de tus clientes",
      " Más ventas cerradas gracias a la rapidez"
    ],
    testimonial: {
      quote:
        "Desde que automatizamos nuestro WhatsApp, ahorramos más de 10 horas semanales y duplicamos las respuestas a prospectos.",
      author: "María López",
      company: "Tienda Luna"
    }
  },

  privacyNotice: {
    title: "Aviso de Privacidad",
    paragraphs: [
      "La información que compartas en este sitio será utilizada únicamente para brindarte información sobre nuestros servicios de automatización de WhatsApp.",
      "No compartimos tus datos con terceros y puedes solicitar su eliminación en cualquier momento enviando un mensaje a nuestro número oficial de contacto."
    ]
  }
};
