import { Link } from "wouter";
import { ArrowRight, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hub() {
  const areas = [
    { id: "granel-b2b", title: "Granel / B2B", tag: "Industrial", bullets: ["Formatos desde 25kg a Big Bags", "Suministro continuo garantizado", "Certificado de análisis por lote"] },
    { id: "marca-blanca", title: "Marca Blanca", tag: "Distribución", bullets: ["Diseño de packaging a medida", "Múltiples formatos de retail", "Asesoría legal de etiquetado"] },
    { id: "ecologico", title: "Ecológico", tag: "Especialidad", bullets: ["Certificación Euro Hoja", "Trazabilidad desde el campo", "Cultivo sostenible certificado"] },
    { id: "sin-alergenos-gluten", title: "Sin Alérgenos / Gluten", tag: "Especialidad", bullets: ["< 5ppm garantizados", "Líneas de procesado exclusivas", "Análisis PCR por cada lote"] },
    { id: "semiprocesados", title: "Semiprocesados", tag: "Industrial", bullets: ["Harinas, copos y texturizados", "Tostados y precocidos", "Adaptación a sus procesos"] },
    { id: "legumbres-arroces", title: "Legumbres y Arroces", tag: "Core Business", bullets: ["Origen nacional y de importación", "Limpieza óptica y por láser", "Homogeneidad garantizada"] },
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qué ofrecemos</h1>
          <p className="text-xl text-background/80 mb-10 font-light">
            Estructuramos nuestras capacidades en seis áreas especializadas para aportar valor exacto allí donde su negocio lo requiere.
          </p>
          {/* Tabs/Chips a anclas */}
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map(a => (
              <a href={`#${a.id}`} key={a.id} className="px-4 py-2 bg-background/10 hover:bg-background/20 rounded-full text-sm font-medium transition-colors border border-background/20">
                {a.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tarjetas de áreas */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {areas.map(area => (
            <div id={area.id} key={area.id} className="bg-card border border-border rounded-xl p-8 shadow-sm flex flex-col scroll-mt-24">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{area.title}</h2>
                <span className="text-xs font-semibold px-3 py-1 bg-muted text-muted-foreground rounded-full uppercase tracking-wider">{area.tag}</span>
              </div>
              <ul className="space-y-3 my-6 flex-grow">
                {area.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-auto pt-6 border-t border-border">
                <Button asChild className="flex-1">
                  <Link href={`/que-ofrecemos/${area.id}`}>Ver detalles</Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bloque “No sabes cuál elegir” */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <Info className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">¿No tiene claro qué solución encaja mejor?</h3>
          <p className="text-muted-foreground mb-8">
            Nuestro equipo de I+D y comercial puede estudiar su proceso productivo y proponerle el formato o desarrollo a medida más eficiente.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Solicitar asesoramiento gratuito</Link>
          </Button>
        </div>
      </section>

      {/* FAQ HUB */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-4xl">
         <h3 className="text-2xl font-bold mb-8 text-center">Dudas comunes sobre servicios</h3>
         <div className="space-y-4">
            <div className="border border-border p-5 rounded-lg bg-card">
              <h4 className="font-bold mb-2">¿Puedo combinar varias áreas en un mismo pedido?</h4>
              <p className="text-muted-foreground">Sí, actuamos como hub integral. Puede consolidar pedidos de granel y marca blanca en una misma expedición.</p>
            </div>
            <div className="border border-border p-5 rounded-lg bg-card">
              <h4 className="font-bold mb-2">¿Qué tiempos de desarrollo requiere una marca blanca?</h4>
              <p className="text-muted-foreground">Generalmente entre 6 y 12 semanas, dependiendo de si el diseño de envases ya existe o debe crearse desde cero.</p>
            </div>
         </div>
      </section>

      {/* Formulario final */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Cuéntenos su necesidad</h2>
          <form className="bg-card p-8 rounded-xl shadow-sm border border-border">
             <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Área de interés principal</label>
              <select className="w-full p-3 rounded-md border border-input bg-background">
                {areas.map(a => <option key={a.id} value={a.id}>{a.title}</option>)}
                <option value="otros">Otra consulta</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email profesional</label>
              <input type="email" className="w-full p-3 rounded-md border border-input bg-background" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Detalles</label>
              <textarea className="w-full p-3 rounded-md border border-input bg-background h-32"></textarea>
            </div>
            <div className="mb-6 flex items-start gap-3">
              <input type="checkbox" id="rgpd-hub" className="mt-1" required />
              <label htmlFor="rgpd-hub" className="text-xs text-muted-foreground">
                Consiento el tratamiento de mis datos para resolver esta consulta, según la Política de Privacidad.
              </label>
            </div>
            <Button className="w-full">Enviar solicitud</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
