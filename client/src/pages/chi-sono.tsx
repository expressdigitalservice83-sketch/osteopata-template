import { SEOHead } from "@/components/seo-head";
import { STUDIO_CONFIG } from "@/lib/config";
import { GraduationCap, Award, UserCheck, Tag } from "lucide-react";

export default function ChiSono() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Laurea in Osteopatia",
      subtitle: "Università Statale Milano",
      color: "blue"
    },
    {
      icon: Tag,
      title: "Specializzazione Pediatrica",
      subtitle: "AIFI - Certificazione",
      color: "green"
    },
    {
      icon: Award,
      title: "Terapia Cranio-Sacrale",
      subtitle: "Upledger Institute",
      color: "cyan"
    },
    {
      icon: UserCheck,
      title: "Iscrizione ROI",
      subtitle: "N. 1234567",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "green":
        return "bg-green-100 text-green-600";
      case "cyan":
        return "bg-cyan-100 text-cyan-600";
      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <>
      <SEOHead 
        title="Chi sono - Osteopata Professionista"
        description="Scopri la formazione e l'esperienza del nostro osteopata professionista. Oltre 10 anni di esperienza nel trattamento di disturbi muscolo-scheletrici."
        path="/chi-sono"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional photo */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Dottore osteopata professionista" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Chi sono</h1>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Sono un osteopata qualificato con oltre 10 anni di esperienza nel trattamento di disturbi muscolo-scheletrici. 
                  La mia passione è aiutare i pazienti a ritrovare il benessere attraverso un approccio olistico e personalizzato.
                </p>
                
                <p>
                  Durante la mia carriera ho avuto l'opportunità di lavorare con pazienti di tutte le età, dagli sportivi professionisti 
                  alle future mamme, dai bambini agli anziani. Ogni paziente rappresenta una sfida unica che affronto con dedizione 
                  e competenza professionale.
                </p>
                
                <p>
                  Il mio approccio si basa sull'ascolto attento del paziente, su una valutazione accurata e su tecniche 
                  osteopatiche moderne ed efficaci. Credo fermamente nell'importanza della prevenzione e dell'educazione 
                  del paziente per mantenere i risultati ottenuti nel tempo.
                </p>
              </div>
            </div>
          </div>
          
          {/* Credentials Section */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Formazione e Certificazioni
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg smooth-transition"
                    data-testid={`credential-${index}`}
                  >
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${getColorClasses(credential.color)}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{credential.title}</h3>
                    <p className="text-sm text-gray-600">{credential.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Philosophy Section */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              La mia filosofia
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl text-gray-700 italic text-center mb-6">
                "Ogni corpo ha la capacità innata di guarire se stesso. Il mio ruolo è quello di facilitare 
                questo processo naturale attraverso tecniche osteopatiche mirate e un approccio umano."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Ascolto</h3>
                  <p className="text-gray-600">
                    Ogni paziente ha una storia unica che merita attenzione e comprensione
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Precisione</h3>
                  <p className="text-gray-600">
                    Valutazione accurata e trattamenti mirati per risultati efficaci
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Cura</h3>
                  <p className="text-gray-600">
                    Approccio delicato e rispettoso per il benessere completo della persona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
