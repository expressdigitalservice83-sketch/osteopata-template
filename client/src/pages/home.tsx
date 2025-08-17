import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { STUDIO_CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <>
      <SEOHead 
        title={`Ritrova il benessere con trattamenti osteopatici su misura a ${STUDIO_CONFIG.city}`}
        description={`Studio osteopatico professionale a ${STUDIO_CONFIG.city}. Trattamenti personalizzati per il benessere e la salute. Prenota la tua visita.`}
        path="/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          {/* Real therapy/massage video from Pixabay */}
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
            onError={(e) => {
              // If video fails, fallback to animated background
              const video = e.target as HTMLVideoElement;
              video.style.display = 'none';
              const fallback = video.parentElement?.querySelector('.hero-fallback');
              if (fallback) (fallback as HTMLElement).style.display = 'block';
            }}
          >
            {/* High-quality massage/therapy videos from Pixabay */}
            <source 
              src="https://cdn.pixabay.com/video/2022/10/16/135154-761273535_large.mp4"
              type="video/mp4" 
            />
            <source 
              src="https://cdn.pixabay.com/video/2022/10/16/135155-761273541_large.mp4"
              type="video/mp4"
            />
            <source 
              src="https://cdn.pixabay.com/video/2022/10/16/135150-761273517_large.mp4"
              type="video/mp4"
            />
            <source 
              src="https://cdn.pixabay.com/video/2015/09/06/701-138504820_medium.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Fallback animated background (hidden by default) */}
          <div className="hero-fallback absolute inset-0 hero-animated-bg" style={{ display: 'none' }}>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
              alt="Studio osteopatico moderno e professionale - sala trattamenti" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ritrova il benessere con trattamenti osteopatici su misura a{" "}
            <span className="text-accent">{STUDIO_CONFIG.city}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Approccio personalizzato e tecniche all'avanguardia per il tuo benessere fisico e mentale
          </p>
          <Link href="/prenotazioni">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 smooth-transition text-lg px-8 py-4 font-semibold"
              data-testid="button-prenota-visita"
            >
              Prenota una visita
            </Button>
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8 opacity-70" />
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">I nostri trattamenti</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri i nostri servizi specializzati per il tuo benessere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Osteopatia Strutturale</h3>
              <p className="text-muted-foreground mb-4">
                Trattamento specializzato per dolori articolari e problemi posturali
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Terapia Cranio-Sacrale</h3>
              <p className="text-muted-foreground mb-4">
                Tecnica delicata per stress, mal di testa e disturbi del sonno
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Osteopatia Sportiva</h3>
              <p className="text-muted-foreground mb-4">
                Prevenzione infortuni e ottimizzazione delle performance atletiche
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/servizi">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-testid="button-vedi-tutti-servizi"
              >
                Vedi tutti i servizi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inizia il tuo percorso verso il benessere
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Prenota la tua prima visita e scopri come l'osteopatia può migliorare la tua qualità di vita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prenotazioni">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                data-testid="button-prenota-ora"
              >
                Prenota ora
              </Button>
            </Link>
            <Link href="/contatti">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                data-testid="button-contattaci"
              >
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
