import { SEOHead } from "@/components/seo-head";
import { STUDIO_CONFIG, HOURS } from "@/lib/config";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function Contatti() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefono",
      value: STUDIO_CONFIG.phone,
      href: `tel:${STUDIO_CONFIG.phone}`,
      color: "blue"
    },
    {
      icon: Mail,
      label: "Email", 
      value: STUDIO_CONFIG.email,
      href: `mailto:${STUDIO_CONFIG.email}`,
      color: "green"
    },
    {
      icon: MapPin,
      label: "Indirizzo",
      value: `${STUDIO_CONFIG.address}, ${STUDIO_CONFIG.city}`,
      href: `https://maps.google.com/?q=${STUDIO_CONFIG.mapsLink}`,
      color: "cyan"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Scrivici su WhatsApp",
      href: STUDIO_CONFIG.whatsappLink,
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-primary/10 text-primary";
      case "green":
        return "bg-primary/10 text-primary";
      case "cyan":
        return "bg-primary/10 text-primary";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <>
      <SEOHead 
        title="Contatti - Come Raggiungerci"
        description={`Contatta il nostro studio osteopatico a ${STUDIO_CONFIG.city}. Telefono, email, indirizzo e mappa per raggiungerci facilmente.`}
        path="/contatti"
      />
      
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contatti</h1>
            <p className="text-xl text-muted-foreground">
              Siamo qui per te. Contattaci per qualsiasi informazione o per prenotare la tua visita.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Informazioni di contatto</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(contact.color)}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <a 
                            href={contact.href}
                            className="text-lg font-semibold text-foreground hover:text-primary smooth-transition"
                            target={contact.label === "WhatsApp" || contact.label === "Indirizzo" ? "_blank" : undefined}
                            rel={contact.label === "WhatsApp" || contact.label === "Indirizzo" ? "noopener noreferrer" : undefined}
                            data-testid={`contact-${contact.label.toLowerCase()}`}
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Orari */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Orari di apertura</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground ml-16">
                    <div className="flex justify-between">
                      <span>Lunedì - Venerdì</span>
                      <span>{HOURS.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabato</span>
                      <span>{HOURS.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domenica</span>
                      <span>{HOURS.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* OpenStreetMap */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-foreground">Come raggiungerci</h2>
              </div>
              <div className="w-full" style={{ height: '380px' }}>
                <iframe 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.0354%2C45.5586%2C8.0654%2C45.5786&layer=mapnik&marker=45.5686%2C8.0504"
                  width="100%" 
                  height="380px" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Mappa OpenStreetMap della posizione dello studio osteopatico a Biella"
                  data-testid="openstreetmap"
                />
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Informazioni utili
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Chiamaci</h3>
                <p className="text-muted-foreground">
                  Siamo disponibili dal lunedì al sabato per rispondere alle tue domande
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Scrivici</h3>
                <p className="text-muted-foreground">
                  Contattaci via WhatsApp per una risposta rapida e diretta
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Vieni a trovarci</h3>
                <p className="text-muted-foreground">
                  Studio facilmente raggiungibile con mezzi pubblici e parcheggio disponibile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
