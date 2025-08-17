import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/config";
import { 
  Bone, 
  Brain, 
  Stethoscope, 
  User, 
  Zap, 
  Baby,
  ArrowRight
} from "lucide-react";

const iconMap = {
  "bone": Bone,
  "head-side-brain": Brain,
  "lungs": Stethoscope,
  "walking": User,
  "running": Zap,
  "baby": Baby
};

export default function Servizi() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          link: "text-blue-600 hover:text-blue-700"
        };
      case "secondary":
        return {
          bg: "bg-green-100", 
          text: "text-green-600",
          link: "text-green-600 hover:text-green-700"
        };
      case "accent":
        return {
          bg: "bg-cyan-100",
          text: "text-cyan-600", 
          link: "text-cyan-600 hover:text-cyan-700"
        };
      default:
        return {
          bg: "bg-blue-100",
          text: "text-blue-600",
          link: "text-blue-600 hover:text-blue-700"
        };
    }
  };

  return (
    <>
      <SEOHead 
        title="Servizi Osteopatici - Trattamenti Specializzati"
        description="Scopri i nostri servizi osteopatici: trattamenti strutturali, cranio-sacrali, viscerali, posturali, sportivi e pediatrici. Approccio personalizzato per ogni esigenza."
        path="/servizi"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">I nostri servizi</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trattamenti specializzati per ogni esigenza, con approccio personalizzato e tecniche all'avanguardia
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Bone;
              const colors = getColorClasses(service.color);
              
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl smooth-transition"
                  data-testid={`service-${service.id}`}
                >
                  <div className={`${colors.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`${colors.text} w-8 h-8`} />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>• {benefit}</li>
                    ))}
                  </ul>
                  <Link href="/prenotazioni">
                    <button 
                      className={`${colors.link} font-medium smooth-transition inline-flex items-center group`}
                      data-testid={`button-prenota-${service.id}`}
                    >
                      Prenota ora 
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 smooth-transition" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Perché scegliere i nostri trattamenti
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Approccio Personalizzato</h3>
                <p className="text-gray-600">
                  Ogni trattamento è studiato specificatamente per le tue esigenze e condizioni
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecniche Moderne</h3>
                <p className="text-gray-600">
                  Utilizziamo le tecniche osteopatiche più aggiornate ed efficaci
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Risultati Duraturi</h3>
                <p className="text-gray-600">
                  Focus sulla risoluzione delle cause, non solo dei sintomi
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto a iniziare il tuo percorso di benessere?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Prenota la tua prima visita e scopri quale trattamento è più adatto alle tue esigenze
            </p>
            <Link href="/prenotazioni">
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 smooth-transition text-lg px-8 py-4"
                data-testid="button-prenota-visita-principale"
              >
                Prenota la tua visita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
