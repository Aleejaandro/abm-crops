import { useParams, Link } from "wouter";
import { ArrowLeft, CheckCircle, Factory, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Area() {
  const params = useParams();
  const id = params.id;

  // En un entorno real, estos datos vendrían de un CMS/API. 
  // Generamos un título basado en el ID para el prototipo.
  const formatTitle = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const title = id ? formatTitle(id) : "Área de negocio";

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Breadcrumb / Back */}
      <div className="bg-foreground text-background/60 py-4 border-b border-background/10">
        <div className="container mx-auto px-4 md:px-8">
           <Link href="/que-ofrecemos">
             <a className="text-sm flex items-center hover:text-white transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Qué ofrecemos
             </a>
           </Link>
        </div>
      </div>

      {/* 1) Hero Area */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-background/80 font-light mb-8">
            Solución integral diseñada específicamente para optimizar este segmento de su cadena de valor.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => {
            document.getElementById('form-area')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Solicitar presupuesto comercial
          </Button>
        </div>
      </section>

      {/* 2) Para quién es + Qué ofrecemos */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b border-border pb-4">¿Para quién es?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Esta área está concebida para fábricas de procesamiento, cadenas de distribución modernas, canal HORECA especializado y empresas que requieren materia prima altamente estandarizada y segura. Adaptamos nuestros lotes a las necesidades de su línea de producción.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary border-b border-border pb-4">¿Qué ofrecemos exactamente?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Un servicio B2B que va más allá de la materia prima. Incluye gestión logística, calidad certificada documentalmente por lote, opciones de envasado industrial y consultoría técnica de integración de ingredientes.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Formatos / Servicios (Cards) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Formatos y Capacidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-card p-8 border border-border rounded-xl">
                <h3 className="text-xl font-bold mb-4">Formato / Servicio {i}</h3>
                <p className="text-muted-foreground">Descripción detallada de la capacidad técnica, rango de pesos, tipo de envasado o servicio específico aplicado a esta área de negocio.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Ventajas / Cómo trabajamos */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Ventajas Competitivas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Seguridad Alimentaria</h4>
            <p className="text-muted-foreground text-sm">Garantías técnicas y certificaciones audibles en todo momento.</p>
          </div>
          <div className="flex flex-col items-center">
            <Factory className="w-12 h-12 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Escalabilidad Industrial</h4>
            <p className="text-muted-foreground text-sm">Capacidad de absorber picos de demanda sin romper stock.</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Rentabilidad</h4>
            <p className="text-muted-foreground text-sm">Optimización de costes logísticos y formatos eficientes.</p>
          </div>
        </div>
      </section>

      {/* 5) Formulario específico de área */}
      <section id="form-area" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Solicitar información de {title}</h2>
            <p className="text-background/70">Un gestor especializado se pondrá en contacto con usted en menos de 24 horas laborables.</p>
          </div>
          
          <form className="bg-background/5 p-8 rounded-xl border border-background/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Nombre</label>
                <input type="text" className="w-full p-3 rounded-md bg-background/10 border border-background/20 text-white placeholder:text-white/30" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">Empresa / CIF</label>
                <input type="text" className="w-full p-3 rounded-md bg-background/10 border border-background/20 text-white placeholder:text-white/30" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 opacity-80">Volumen estimado / Detalles técnicos</label>
              <textarea className="w-full p-3 rounded-md bg-background/10 border border-background/20 text-white placeholder:text-white/30 h-24"></textarea>
            </div>
            
            <div className="mb-6 bg-black/30 p-4 rounded text-sm text-center border border-background/10 text-white/50">
              [Placeholder ReCAPTCHA / hCaptcha Anti-spam]
            </div>

            <div className="mb-6 flex items-start gap-3">
              <input type="checkbox" id="rgpd-area" className="mt-1" required />
              <label htmlFor="rgpd-area" className="text-sm opacity-70">
                Acepto la Política de Privacidad y el tratamiento de mis datos con fines comerciales (RGPD).
              </label>
            </div>
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
              Enviar solicitud
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
