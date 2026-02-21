import { Link } from "wouter";
import { ShieldCheck, CheckCircle2, FileText, Download, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Calidad() {
  return (
    <div className="flex flex-col w-full bg-background">
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Compromiso con la Calidad</h1>
          <p className="text-xl text-background/80 font-light">
            Protocolos rigurosos y certificaciones internacionales que garantizan la excelencia en cada lote.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nuestro Protocolo de Control</h2>
            <div className="space-y-6">
              {[
                { title: "Origen Controlado", desc: "Selección exhaustiva de proveedores y auditorías en origen." },
                { title: "Análisis de Laboratorio", desc: "Pruebas físico-químicas y microbiológicas por cada lote recibido." },
                { title: "Trazabilidad Total", desc: "Seguimiento digital desde la siembra hasta la entrega final." },
                { title: "Seguridad Alimentaria", desc: "Cumplimiento estricto de normativas APPCC y estándares globales." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted rounded-2xl overflow-hidden aspect-video relative">
            <img src="/src/assets/images/quality.jpg" alt="Laboratorio de calidad" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificaciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["IFS Food", "BRCGS", "ISO 9001", "BIO / Organic"].map((cert) => (
              <div key={cert} className="bg-card p-8 rounded-xl border border-border text-center flex flex-col items-center">
                <Award className="w-12 h-12 text-secondary mb-4" />
                <span className="font-bold text-lg">{cert}</span>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">Certificado vigente</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Documentación Técnica</h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Ponemos a disposición de nuestros clientes las fichas técnicas y certificados de calidad de cada producto.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="flex gap-2">
            <FileText className="w-5 h-5" /> Ver Ficha Técnica Tipo
          </Button>
          <Button size="lg" variant="outline" className="flex gap-2">
            <Download className="w-5 h-5" /> Política de Calidad (PDF)
          </Button>
        </div>
      </section>
    </div>
  );
}
