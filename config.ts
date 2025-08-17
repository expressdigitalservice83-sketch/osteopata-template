// Studio configuration - replace these values with actual studio information
export const STUDIO_CONFIG = {
  name: import.meta.env.VITE_STUDIO_NAME || "[NOME_STUDIO]",
  city: import.meta.env.VITE_STUDIO_CITY || "[CITTÀ]",
  address: import.meta.env.VITE_STUDIO_ADDRESS || "[INDIRIZZO]",
  phone: import.meta.env.VITE_STUDIO_PHONE || "[TEL]",
  email: import.meta.env.VITE_STUDIO_EMAIL || "[EMAIL]",
  whatsappLink: import.meta.env.VITE_WHATSAPP_LINK || "[WHATSAPP_LINK]",
  mapsLink: import.meta.env.VITE_MAPS_LINK || "[LINK_MAPS]",
  website: import.meta.env.VITE_WEBSITE_URL || "https://studio-osteopatico.vercel.app"
};

export const HOURS = {
  weekdays: "09:00 - 19:00",
  saturday: "09:00 - 13:00",
  sunday: "Chiuso"
};

export const SERVICES = [
  {
    id: "strutturale",
    title: "Osteopatia Strutturale",
    description: "Trattamento delle disfunzioni articolari e muscolari per ripristinare la mobilità e ridurre il dolore.",
    icon: "bone",
    benefits: [
      "Dolori articolari",
      "Problemi posturali", 
      "Tensioni muscolari"
    ],
    color: "primary"
  },
  {
    id: "cranio-sacrale",
    title: "Terapia Cranio-Sacrale",
    description: "Tecnica delicata per equilibrare il sistema cranio-sacrale e favorire l'autoguarigione del corpo.",
    icon: "head-side-brain",
    benefits: [
      "Mal di testa",
      "Stress e ansia",
      "Disturbi del sonno"
    ],
    color: "secondary"
  },
  {
    id: "viscerale",
    title: "Osteopatia Viscerale",
    description: "Trattamento degli organi interni per migliorare la loro mobilità e funzionalità.",
    icon: "lungs",
    benefits: [
      "Problemi digestivi",
      "Disfunzioni respiratorie",
      "Dolori riferiti"
    ],
    color: "accent"
  },
  {
    id: "posturale",
    title: "Correzione Posturale",
    description: "Analisi e correzione degli squilibri posturali per prevenire dolori e migliorare il benessere.",
    icon: "walking",
    benefits: [
      "Scoliosi",
      "Cifosi e lordosi",
      "Dolori cervicali"
    ],
    color: "primary"
  },
  {
    id: "sportiva",
    title: "Osteopatia Sportiva",
    description: "Trattamenti specifici per atleti, prevenzione infortuni e ottimizzazione delle performance.",
    icon: "running",
    benefits: [
      "Prevenzione infortuni",
      "Recupero post-gara",
      "Miglioramento performance"
    ],
    color: "secondary"
  },
  {
    id: "pediatrica",
    title: "Gravidanza e Neonati",
    description: "Trattamenti delicati per future mamme e neonati, supporto durante e dopo la gravidanza.",
    icon: "baby",
    benefits: [
      "Supporto in gravidanza",
      "Coliche neonatali",
      "Disturbi del sonno"
    ],
    color: "accent"
  }
];
