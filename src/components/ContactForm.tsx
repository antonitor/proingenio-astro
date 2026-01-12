import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Enviar a Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado!", {
          description: "Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      toast.error("Error al enviar", {
        description: "Por favor, inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contacto"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Campo oculto para Netlify Forms */}
      <input type="hidden" name="form-name" value="contacto" />

      {/* Honeypot anti-spam (oculto para usuarios reales) */}
      <div style={{ display: 'none' }}>
        <label>
          No llenar este campo: <input name="bot-field" />
        </label>
      </div>

      {/* Nombre */}
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          minLength={2}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="Tu nombre"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="tu@email.com"
        />
      </div>

      {/* Teléfono */}
      <div>
        <label
          htmlFor="telefono"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          pattern="[0-9\s\+\-\(\)]*"
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          placeholder="+34 123 456 789"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          minLength={10}
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
      </div>

      {/* Botón de envío */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Enviar Mensaje
          </>
        )}
      </Button>
    </form>
  );
}
