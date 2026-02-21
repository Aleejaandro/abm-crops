import { Link } from "wouter";
import { ArrowRight, ExternalLink, Leaf, ShieldCheck, Box, Package, Wheat, Sprout, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      company: "",
      email: "",
      area: "granel",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await apiRequest("POST", "/api/leads", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Solicitud enviada",
        description: "Nuestro equipo comercial se pondrá en contacto con usted.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar su solicitud.",
      });
    },
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1) Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero-bg.jpg" 
            alt="Campos agrícolas B2B" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Materias Primas y Soluciones Integrales para la Industria Alimentaria
            </h1>
            <p className="text-xl text-white/90 mb-10 font-light">
              Abastecemos al sector profesional con altos estándares de calidad, origen controlado y capacidad de adaptación a sus procesos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold" onClick={() => scrollTo("areas")}>
                Ver áreas de negocio <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20" onClick={() => scrollTo("marcas")}>
                Ver nuestras marcas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Selector rápido */}
      <section className="bg-background relative -mt-10 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-lg shadow-xl overflow-hidden bg-card border border-border/50">
            <Link href="/que-ofrecemos">
              <a className="flex flex-col p-8 items-center text-center hover:bg-muted/50 transition-colors border-b md:border-b-0 md:border-r border-border/50 group">
                <Box className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2 text-foreground">Soy distribuidor / B2B</h3>
                <p className="text-sm text-muted-foreground">Descubre nuestras soluciones a medida y formatos industriales.</p>
              </a>
            </Link>
            <a href="https://donjose.example.com" target="_blank" rel="noopener noreferrer" className="flex flex-col p-8 items-center text-center hover:bg-muted/50 transition-colors border-b md:border-b-0 md:border-r border-border/50 group">
              <Package className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2 text-foreground">Catálogo tradicional</h3>
              <p className="text-sm text-muted-foreground">Visita Productos Don José.</p>
              <ExternalLink className="w-4 h-4 mt-4 text-muted-foreground" />
            </a>
            <a href="https://dmondo.example.com" target="_blank" rel="noopener noreferrer" className="flex flex-col p-8 items-center text-center hover:bg-muted/50 transition-colors group">
              <Sprout className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2 text-foreground">Catálogo étnico</h3>
              <p className="text-sm text-muted-foreground">Visita DMondo (por cocinas del mundo).</p>
              <ExternalLink className="w-4 h-4 mt-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* 3) Áreas */}
      <section id="areas" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Áreas de Especialización</h2>
            <p className="text-muted-foreground">
              Desarrollamos soluciones específicas para diferentes demandas del sector industrial y distribución.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "granel-b2b", title: "Granel / B2B", desc: "Materias primas para la industria de procesamiento.", icon: Box },
              { id: "marca-blanca", title: "Marca Blanca", desc: "Envasado personalizado con altos estándares.", icon: Package },
              { id: "ecologico", title: "Ecológico", desc: "Líneas de productos con certificación BIO.", icon: Leaf },
              { id: "sin-alergenos-gluten", title: "Sin Alérgenos / Gluten", desc: "Procesos controlados sin trazas.", icon: ShieldCheck },
              { id: "semiprocesados", title: "Semiprocesados", desc: "Ingredientes listos para su integración final.", icon: Box },
              { id: "legumbres-arroces", title: "Legumbres y Arroces", desc: "Nuestra especialidad de origen seleccionado.", icon: Wheat },
            ].map((area) => (
              <div key={area.id} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow flex flex-col items-start text-left group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{area.desc}</p>
                <Link href={`/que-ofrecemos/${area.id}`}>
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80 font-semibold group-hover:underline">
                    Ver formatos y servicios <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Marcas */}
      <section id="marcas" className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Marcas Propias</h2>
              <p className="text-muted-foreground">
                Nuestras líneas de producto orientadas a la distribución y al canal HORECA, abarcando desde lo tradicional hasta lo más innovador.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-border p-10 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
              <div className="w-32 h-32 flex-shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="font-heading font-black text-2xl text-secondary">DON JOSÉ</span>
              </div>
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3">Productos Don José</h3>
                <p className="text-muted-foreground mb-6">El catálogo tradicional. Legumbres de máxima calidad, arroces y básicos de despensa con el sabor de siempre.</p>
                <Button asChild>
                  <a href="https://donjose.example.com" target="_blank" rel="noopener noreferrer">
                    Ir al catálogo <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-10 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
              <div className="w-32 h-32 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-heading font-black text-2xl text-primary">DMONDO</span>
              </div>
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3">DMondo</h3>
                <p className="text-muted-foreground mb-6">Catálogo étnico estructurado por cocinas del mundo. Sabores globales para el canal especialista y moderno.</p>
                <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                  <a href="https://dmondo.example.com" target="_blank" rel="noopener noreferrer">
                    Ir al catálogo <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) KPIs + Certificaciones */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">+40</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Años de experiencia</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">+25</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Países de exportación</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">10k</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Toneladas anuales</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">100%</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Trazabilidad garantizada</p>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-12">
            <p className="text-center text-sm font-medium opacity-60 mb-8 uppercase tracking-widest">Nuestras Certificaciones (Placeholders)</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
              <div className="flex items-center gap-2 font-bold"><CheckCircle2 /> IFS Food</div>
              <div className="flex items-center gap-2 font-bold"><CheckCircle2 /> BRCGS</div>
              <div className="flex items-center gap-2 font-bold"><CheckCircle2 /> ISO 9001</div>
              <div className="flex items-center gap-2 font-bold"><CheckCircle2 /> Euro Hoja BIO</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Split: Calidad / Sostenibilidad */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
        <div className="w-full md:w-1/2 relative bg-card p-12 md:p-24 flex items-center">
          <div className="absolute inset-0 z-0 opacity-10">
             <img src="/src/assets/images/quality.jpg" alt="Calidad" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-lg ml-auto">
            <ShieldCheck className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Garantía de Calidad</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Sometemos cada lote a estrictos controles de laboratorio. Aseguramos propiedades organolépticas, valores nutricionales y ausencia total de contaminantes cruzados en líneas específicas.
            </p>
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/calidad">Conocer protocolo de calidad</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative bg-primary text-primary-foreground p-12 md:p-24 flex items-center">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
             <img src="/src/assets/images/sustainability.jpg" alt="Sostenibilidad" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-lg mr-auto">
            <Leaf className="w-12 h-12 text-primary-foreground mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Compromiso Sostenible</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Fomentamos prácticas agrícolas responsables, reducimos nuestra huella hídrica y priorizamos envases reciclables y biodegradables en nuestros desarrollos a medida.
            </p>
            <Button variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/sostenibilidad">Ver memoria de sostenibilidad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7) FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground">Respuestas rápidas para nuestros clientes corporativos.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "¿Cuáles son los pedidos mínimos (MOQ) para granel?", a: "Dependiendo de la materia prima, los pedidos mínimos oscilan entre 500kg y 1000kg. Contáctenos para un presupuesto exacto." },
              { q: "¿Desarrollan marcas blancas desde cero?", a: "Sí, ofrecemos un servicio 'llave en mano' que incluye selección de producto, diseño de envase y certificación." },
              { q: "¿Tienen capacidad de exportación?", a: "Absolutamente. Exportamos a más de 25 países con toda la documentación aduanera y sanitaria requerida." },
              { q: "¿Cómo garantizan la ausencia de alérgenos?", a: "Disponemos de líneas de procesado y envasado exclusivas e independientes para productos sin gluten y sin alérgenos, auditadas constantemente." }
            ].map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-bold text-lg mb-2 text-foreground">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) Contacto rápido */}
      <section id="contacto" className="py-24 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">¿Hablamos de su próximo proyecto?</h2>
          <p className="text-muted-foreground mb-10">Nuestro equipo comercial le asesorará sobre la mejor solución para su industria.</p>
          
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm text-left">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de su empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Profesional</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>¿En qué área está interesado?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un área..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="granel">Granel / B2B</SelectItem>
                          <SelectItem value="marca-blanca">Marca Blanca</SelectItem>
                          <SelectItem value="ecologico">Ecológico</SelectItem>
                          <SelectItem value="semiprocesados">Semiprocesados</SelectItem>
                          <SelectItem value="otros">Otros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje breve</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Indíquenos volúmenes estimados o requerimientos especiales..." 
                          className="h-24"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="mb-6 bg-muted/50 p-4 rounded text-sm text-center border border-border/50 text-muted-foreground">
                  [Placeholder ReCAPTCHA / hCaptcha Anti-spam]
                </div>

                <div className="mb-6 flex items-start gap-3">
                  <input type="checkbox" id="rgpd" className="mt-1" required />
                  <label htmlFor="rgpd" className="text-sm text-muted-foreground">
                    He leído y acepto la Política de Privacidad. Consiento el tratamiento de mis datos para la gestión de esta consulta (RGPD).
                  </label>
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={mutation.isPending}>
                  {mutation.isPending ? "Enviando..." : "Solicitar información comercial"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
