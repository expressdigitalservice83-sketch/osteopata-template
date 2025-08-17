import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { SERVICES } from "@/lib/config";
import { z } from "zod";

const bookingFormSchema = insertBookingSchema.extend({
  privacy: z.boolean().refine(val => val === true, {
    message: "Devi accettare la privacy policy"
  })
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function Prenotazioni() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      data: "",
      ora: "",
      servizio: "",
      messaggio: "",
      privacy: false
    }
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: Omit<BookingFormData, 'privacy'>) => {
      return apiRequest("POST", "/api/booking", data);
    },
    onSuccess: () => {
      toast({
        title: "Prenotazione inviata!",
        description: "Ti ricontatteremo entro 24 ore per confermare l'appuntamento.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Errore",
        description: error.message || "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const { privacy, ...bookingData } = data;
      await bookingMutation.mutateAsync(bookingData);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  return (
    <>
      <SEOHead 
        title="Prenota la tua visita - Osteopata"
        description="Prenota la tua visita osteopatica online. Compila il form per richiedere un appuntamento e ti ricontatteremo entro 24 ore."
        path="/prenotazioni"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prenota la tua visita</h1>
            <p className="text-xl text-muted-foreground">
              Compila il form per prenotare il tuo appuntamento. Ti ricontatteremo entro 24 ore.
            </p>
          </div>
          
          <div className="bg-secondary rounded-2xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome e Cognome *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Il tuo nome completo" 
                            {...field}
                            data-testid="input-nome"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="la-tua-email@esempio.com" 
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Telefono */}
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefono *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+39 123 456 7890" 
                            {...field}
                            data-testid="input-telefono"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Data */}
                  <FormField
                    control={form.control}
                    name="data"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data preferita *</FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            min={today}
                            {...field}
                            data-testid="input-data"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Ora */}
                  <FormField
                    control={form.control}
                    name="ora"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Orario preferito</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-ora">
                              <SelectValue placeholder="Seleziona orario" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Servizio */}
                  <FormField
                    control={form.control}
                    name="servizio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo di trattamento</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-servizio">
                              <SelectValue placeholder="Seleziona servizio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SERVICES.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Messaggio */}
                <FormField
                  control={form.control}
                  name="messaggio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Messaggio aggiuntivo</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descrivi brevemente il motivo della visita o eventuali problemi specifici..."
                          rows={4}
                          {...field}
                          data-testid="textarea-messaggio"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Privacy Checkbox */}
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          data-testid="checkbox-privacy"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-muted-foreground">
                          Accetto la{" "}
                          <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
                            Privacy Policy
                          </Link>{" "}
                          e autorizzo il trattamento dei miei dati personali per la gestione della prenotazione. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 smooth-transition text-lg px-8 py-4 font-semibold"
                    data-testid="button-invia-prenotazione"
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia Prenotazione"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 bg-primary/5 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Cosa aspettarsi</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ti ricontatteremo entro 24 ore per confermare l'appuntamento</li>
              <li>• La prima visita dura circa 60 minuti</li>
              <li>• Porta con te eventuali esami precedenti (radiografie, risonanze, ecc.)</li>
              <li>• Indossa abiti comodi che permettano il movimento</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
