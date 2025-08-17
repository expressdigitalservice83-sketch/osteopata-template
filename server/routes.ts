import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking endpoint
  app.post("/api/booking", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertBookingSchema.parse(req.body);
      
      // Create booking
      const booking = await storage.createBooking(validatedData);
      
      // Log the booking data (for development)
      console.log("New booking received:", {
        id: booking.id,
        nome: booking.nome,
        email: booking.email,
        telefono: booking.telefono,
        data: booking.data,
        ora: booking.ora,
        servizio: booking.servizio,
        createdAt: booking.createdAt
      });

      // TODO: Send email notification using Resend
      // Uncomment and configure when RESEND_API_KEY is available
      /*
      const resendApiKey = process.env.RESEND_API_KEY;
      const recipientEmail = process.env.STUDIO_EMAIL || "[EMAIL]";
      
      if (resendApiKey && recipientEmail) {
        try {
          const resend = new Resend(resendApiKey);
          
          await resend.emails.send({
            from: 'Studio Osteopatico <noreply@studio-osteopatico.com>',
            to: [recipientEmail],
            subject: `Nuova prenotazione da ${booking.nome}`,
            html: `
              <h2>Nuova prenotazione ricevuta</h2>
              <p><strong>Nome:</strong> ${booking.nome}</p>
              <p><strong>Email:</strong> ${booking.email}</p>
              <p><strong>Telefono:</strong> ${booking.telefono}</p>
              <p><strong>Data:</strong> ${booking.data}</p>
              <p><strong>Ora:</strong> ${booking.ora || 'Non specificata'}</p>
              <p><strong>Servizio:</strong> ${booking.servizio || 'Non specificato'}</p>
              <p><strong>Messaggio:</strong> ${booking.messaggio || 'Nessun messaggio'}</p>
              <p><strong>Ricevuta il:</strong> ${booking.createdAt.toLocaleString('it-IT')}</p>
            `
          });
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
          // Don't fail the booking if email fails
        }
      }
      */

      res.status(200).json({
        success: true,
        message: "Prenotazione ricevuta con successo",
        bookingId: booking.id
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Dati non validi",
          errors: validationError.details
        });
      } else {
        console.error("Booking error:", error);
        res.status(500).json({
          success: false,
          message: "Errore interno del server"
        });
      }
    }
  });

  // Get all bookings (admin endpoint)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({
        success: false,
        message: "Errore nel recupero delle prenotazioni"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
