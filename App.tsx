import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import Home from "@/pages/home";
import ChiSono from "@/pages/chi-sono";
import Servizi from "@/pages/servizi";
import Prenotazioni from "@/pages/prenotazioni";
import Contatti from "@/pages/contatti";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/chi-sono" component={ChiSono} />
          <Route path="/servizi" component={Servizi} />
          <Route path="/prenotazioni" component={Prenotazioni} />
          <Route path="/contatti" component={Contatti} />
          <Route path="/privacy" component={Privacy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
