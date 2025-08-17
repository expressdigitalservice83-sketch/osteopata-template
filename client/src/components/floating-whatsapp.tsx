import { MessageCircle } from "lucide-react";
import { STUDIO_CONFIG } from "@/lib/config";

export function FloatingWhatsApp() {
  return (
    <a
      href={STUDIO_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg smooth-transition"
      title="Scrivici su WhatsApp"
      data-testid="floating-whatsapp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
