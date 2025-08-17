import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nome: text("nome").notNull(),
  email: text("email").notNull(),
  telefono: text("telefono").notNull(),
  data: text("data").notNull(),
  ora: text("ora"),
  servizio: text("servizio"),
  messaggio: text("messaggio"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
}).extend({
  nome: z.string().min(1, "Il nome è obbligatorio"),
  email: z.string().email("Inserisci un'email valida"),
  telefono: z.string().min(8, "Inserisci un numero di telefono valido"),
  data: z.string().min(1, "La data è obbligatoria"),
  ora: z.string().optional(),
  servizio: z.string().optional(),
  messaggio: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
