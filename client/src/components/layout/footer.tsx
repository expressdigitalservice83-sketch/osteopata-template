import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { STUDIO_CONFIG } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{STUDIO_CONFIG.name}</h3>
            <p className="text-gray-300 mb-4">
              Studio osteopatico professionale dedicato al tuo benessere e alla tua salute.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>{STUDIO_CONFIG.address}, {STUDIO_CONFIG.city}</p>
              <p>
                Tel: <a 
                  href={`tel:${STUDIO_CONFIG.phone}`} 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-phone"
                >
                  {STUDIO_CONFIG.phone}
                </a>
              </p>
              <p>
                Email: <a 
                  href={`mailto:${STUDIO_CONFIG.email}`} 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-email"
                >
                  {STUDIO_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link rapidi</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-link-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/chi-sono" 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-link-chi-sono"
                >
                  Chi sono
                </Link>
              </li>
              <li>
                <Link 
                  href="/servizi" 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-link-servizi"
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link 
                  href="/contatti" 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-link-contatti"
                >
                  Contatti
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="hover:text-white smooth-transition"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Prenota ora</h4>
            <p className="text-gray-300 mb-4">Inizia il tuo percorso verso il benessere</p>
            <Link href="/prenotazioni">
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 smooth-transition"
                data-testid="footer-button-prenota"
              >
                Prenota una visita
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {STUDIO_CONFIG.name}. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
