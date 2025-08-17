# Studio Osteopatico - Sito Web Professionale

Un sito web multi-pagina moderno e professionale per studi osteopatici, costruito con React, Express e TypeScript.

## 🚀 Caratteristiche

- **Design moderno e responsive** - Ottimizzato per dispositivi desktop, tablet e mobile
- **6 pagine complete** - Home, Chi sono, Servizi, Prenotazioni, Contatti, Privacy
- **Sistema di prenotazioni** - Form completo con validazione e notifiche
- **Hero con animazione dinamica** - Background animato che simula video per massimo impatto visivo (pronto per video personalizzato)
- **SEO ottimizzato** - Meta tag, Open Graph, JSON-LD per motori di ricerca
- **Integrazione WhatsApp** - Bottone floating e link diretti
- **Mappa Google Maps** - Integrata nella pagina contatti
- **Privacy Policy GDPR** - Completa e conforme alla normativa europea

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React 18, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Express.js, TypeScript, Zod (validazione)
- **UI Components**: shadcn/ui, Radix UI
- **Database**: Drizzle ORM (pronto per PostgreSQL)
- **Deployment**: Vercel ready

## ⚙️ Configurazione

### 1. Variabili d'Ambiente

Prima di deployare su Vercel, configura le seguenti variabili d'ambiente nel dashboard di Vercel:

```
VITE_STUDIO_NAME=Il tuo Studio Osteopatico
VITE_STUDIO_CITY=La tua Città
VITE_STUDIO_ADDRESS=Via Esempio, 123
VITE_STUDIO_PHONE=+39 123 456 7890
VITE_STUDIO_EMAIL=info@studio-osteopatico.it
VITE_WHATSAPP_LINK=https://wa.me/393123456789?text=Ciao%2C%20vorrei%20prenotare%20una%20visita
VITE_MAPS_LINK=Via+Esempio+123+Roma
VITE_WEBSITE_URL=https://tuo-dominio.vercel.app
RESEND_API_KEY=tu_api_key_resend
```

### 2. Configurazione Email (Opzionale)

Per abilitare l'invio automatico di email quando vengono ricevute prenotazioni:

1. Registrati su [Resend.com](https://resend.com)
2. Ottieni la tua API key
3. Aggiungi `RESEND_API_KEY` alle variabili d'ambiente
4. Il codice per l'invio email è già presente in `server/routes.ts` (commentato)

### 3. WhatsApp Link

Per configurare il link WhatsApp, usa questo formato:
```
https://wa.me/[NUMERO_TELEFONO]?text=Ciao%2C%20vorrei%20prenotare%20una%20visita
```

Dove `[NUMERO_TELEFONO]` include il prefisso internazionale (es: 393123456789 per l'Italia).

### 4. Google Maps

Per la mappa nella pagina contatti, usa l'indirizzo formattato per URL:
```
Via+Esempio+123+Roma
```

### 5. Video Hero Integrato

Il sito include già **video reali** di trattamenti osteopatici e massaggi terapeutici:

- **Video source**: Pixabay (gratuiti, uso commerciale)
- **Contenuto**: Massaggi terapeutici, trattamenti corpo, cure professionali
- **Qualità**: 4K e HD con autoplay silenzioso
- **Fallback**: Background animato se i video non caricano

**Per sostituire con video personalizzati:**
1. Carica il tuo video in `public/` (es: `public/studio-video.mp4`)
2. Sostituisci l'URL nella prima `<source>` in `client/src/pages/home.tsx`:
   ```javascript
   <source 
     src="/studio-video.mp4"
     type="video/mp4" 
   />
   ```

**Requisiti video consigliati:**
- Formato: MP4, durata 8-30 secondi, max 10MB
- Risoluzione: 1920x1080 o superiore
- Contenuto: osteopata al lavoro, trattamenti in corso, ambiente professionale

## 🚀 Deploy su Vercel

### 1. Preparazione
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Connessione a Vercel
1. Vai su [vercel.com](https://vercel.com) e accedi
2. Clicca "New Project"
3. Importa il tuo repository GitHub
4. Configura le variabili d'ambiente (vedi sopra)
5. Clicca "Deploy"

### 3. Configurazione Build
Vercel dovrebbe rilevare automaticamente la configurazione. Se necessario:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 💻 Sviluppo Locale

### Requisiti
- Node.js 18+ 
- npm o yarn

### Installazione
```bash
npm install
```

### Avvio del server di sviluppo
```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5000`

## 📁 Struttura del Progetto

```
.
├── client/
│   ├── src/
│   │   ├── components/     # Componenti React riutilizzabili
│   │   ├── pages/          # Pagine dell'applicazione
│   │   ├── lib/           # Utilities e configurazioni
│   │   └── hooks/         # Custom React hooks
├── server/
│   ├── index.ts          # Server Express principale
│   ├── routes.ts         # API routes
│   └── storage.ts        # Sistema di storage
├── shared/
│   └── schema.ts         # Schema dati condivisi
└── README.md
```

## 🎨 Personalizzazione

### Colori
I colori del tema si possono modificare in `client/src/index.css`:
- Blu principale: `--primary: hsl(217 91% 60%)`  
- Verde secondario: `--secondary: hsl(160 84% 39%)`
- Azzurro accent: `--accent: hsl(189 85% 31%)`

### Contenuti
I contenuti si possono personalizzare in:
- `client/src/lib/config.ts` - Configurazioni e servizi
- Singole pagine in `client/src/pages/`

## 📧 Gestione Prenotazioni

Le prenotazioni vengono:
1. Validate lato client e server
2. Salvate in memoria (pronte per database)  
3. Inviate via email (se configurato Resend)
4. Loggate nella console del server

### Formato dati prenotazione:
```typescript
{
  nome: string;
  email: string;
  telefono: string;
  data: string;
  ora?: string;
  servizio?: string;
  messaggio?: string;
}
```

## 🔒 Privacy e GDPR

Il sito include una Privacy Policy completa che copre:
- Finalità del trattamento
- Base giuridica
- Diritti dell'interessato
- Sicurezza dei dati
- Periodo di conservazione

## 📱 Responsive Design

Il sito è completamente responsive con:
- Mobile-first approach
- Menu hamburger su mobile
- Layout adattivi per tablet
- Ottimizzazione immagini per tutti i device

## 🔍 SEO Features

- Meta title e description personalizzate per ogni pagina
- Open Graph tags per social media
- JSON-LD structured data per i motori di ricerca
- URL canonici
- Alt text per tutte le immagini

## 🆘 Supporto

Per assistenza tecnica o modifiche al sito, contatta lo sviluppatore che ha creato questo progetto.

---

**Sviluppato con ❤️ per il tuo successo professionale**