import { SEOHead } from "@/components/seo-head";
import { STUDIO_CONFIG } from "@/lib/config";

export default function Privacy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Protezione dei Dati"
        description="Leggi la nostra Privacy Policy per scoprire come proteggiamo i tuoi dati personali in conformità al GDPR."
        path="/privacy"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Informazioni sul trattamento dei dati personali in conformità al GDPR
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Titolare del trattamento</h2>
              <p className="text-gray-600 mb-4">
                Il titolare del trattamento dei dati personali è <strong>{STUDIO_CONFIG.name}</strong>, 
                con sede in {STUDIO_CONFIG.address}, {STUDIO_CONFIG.city}.
              </p>
              <p className="text-gray-600">
                Per qualsiasi comunicazione relativa al trattamento dei dati personali è possibile 
                contattare il titolare ai seguenti recapiti:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Email: <a href={`mailto:${STUDIO_CONFIG.email}`} className="text-blue-600 hover:text-blue-700">{STUDIO_CONFIG.email}</a></li>
                <li>Telefono: <a href={`tel:${STUDIO_CONFIG.phone}`} className="text-blue-600 hover:text-blue-700">{STUDIO_CONFIG.phone}</a></li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalità del trattamento</h2>
              <p className="text-gray-600 mb-4">
                I dati personali vengono raccolti e trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Gestione delle prenotazioni e degli appuntamenti</li>
                <li>Erogazione dei servizi osteopatici richiesti</li>
                <li>Comunicazioni relative ai servizi offerti</li>
                <li>Adempimento degli obblighi legali e contabili</li>
                <li>Gestione di eventuali controversie</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Base giuridica del trattamento</h2>
              <p className="text-gray-600 mb-4">
                Il trattamento dei dati personali è basato su:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Consenso dell'interessato per le finalità di marketing e comunicazione</li>
                <li>Esecuzione di un contratto di cui l'interessato è parte</li>
                <li>Adempimento di un obbligo legale al quale è soggetto il titolare</li>
                <li>Interesse legittimo del titolare</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tipologie di dati raccolti</h2>
              <p className="text-gray-600 mb-4">
                Vengono raccolte le seguenti categorie di dati personali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Dati anagrafici (nome, cognome, data di nascita)</li>
                <li>Dati di contatto (indirizzo, telefono, email)</li>
                <li>Dati relativi alla salute (anamnesi, diagnosi, terapie)</li>
                <li>Dati relativi ai pagamenti</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Modalità del trattamento</h2>
              <p className="text-gray-600 mb-4">
                Il trattamento dei dati personali avviene mediante strumenti informatici e telematici, 
                con modalità organizzative e logiche strettamente correlate alle finalità indicate. 
                Oltre al titolare, potrebbero avere accesso ai dati personali dipendenti e collaboratori 
                del titolare, debitamente autorizzati e istruiti.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Comunicazione e diffusione</h2>
              <p className="text-gray-600 mb-4">
                I dati personali non vengono diffusi. Possono essere comunicati a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Professionisti sanitari per consulti</li>
                <li>Laboratori di analisi per esami diagnostici</li>
                <li>Compagnie assicurative per rimborsi</li>
                <li>Autorità competenti per adempimenti di legge</li>
                <li>Consulenti fiscali e legali</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Periodo di conservazione</h2>
              <p className="text-gray-600">
                I dati personali saranno conservati per il tempo necessario al raggiungimento delle finalità 
                per le quali sono stati raccolti e in conformità agli obblighi di legge. In particolare:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                <li>Dati anagrafici e di contatto: fino alla revoca del consenso</li>
                <li>Dati sanitari: almeno 10 anni dalla conclusione del trattamento</li>
                <li>Dati contabili: 10 anni come previsto dalla normativa fiscale</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Diritti dell'interessato</h2>
              <p className="text-gray-600 mb-4">
                L'interessato ha diritto di:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Accedere ai propri dati personali</li>
                <li>Ottenere la rettifica o la cancellazione degli stessi</li>
                <li>Limitare il trattamento dei propri dati</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo a un'autorità di controllo</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sicurezza dei dati</h2>
              <p className="text-gray-600">
                Il titolare adotta misure tecniche e organizzative adeguate per garantire un livello di 
                sicurezza adeguato al rischio, incluse la cifratura dei dati personali, la capacità di 
                assicurare la riservatezza, l'integrità, la disponibilità e la resilienza dei sistemi.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifiche alla Privacy Policy</h2>
              <p className="text-gray-600">
                La presente Privacy Policy può essere modificata. Le modifiche saranno comunicate 
                tramite pubblicazione sul sito web e, quando richiesto dalla legge, tramite comunicazione 
                diretta agli interessati.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contatti</h2>
              <p className="text-gray-600">
                Per esercitare i propri diritti o per maggiori informazioni sul trattamento dei dati personali, 
                è possibile contattare il titolare del trattamento ai seguenti recapiti:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600"><strong>Email:</strong> <a href={`mailto:${STUDIO_CONFIG.email}`} className="text-blue-600 hover:text-blue-700">{STUDIO_CONFIG.email}</a></p>
                <p className="text-gray-600"><strong>Telefono:</strong> <a href={`tel:${STUDIO_CONFIG.phone}`} className="text-blue-600 hover:text-blue-700">{STUDIO_CONFIG.phone}</a></p>
                <p className="text-gray-600"><strong>Indirizzo:</strong> {STUDIO_CONFIG.address}, {STUDIO_CONFIG.city}</p>
              </div>
            </section>
            
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Ultimo aggiornamento: Dicembre 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
