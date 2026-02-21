import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";

export default function Contacto() {
  const { toast } = useToast();
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      company: "",
      email: "",
      area: "Consultas Ventas / Presupuestos",
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
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto con usted lo antes posible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo.",
      });
    },
  });

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Header */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto Comercial</h1>
          <p className="text-xl text-background/80 font-light">
            Estamos aquí para resolver sus dudas técnicas y comerciales sobre suministros agrícolas.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info de contacto */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Canales Directos</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Comercial</h4>
                  <p className="text-muted-foreground">ventas@abmcrops.example.com</p>
                  <p className="text-sm text-primary mt-1">Respuesta en menos de 24h laborables.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Atención Telefónica</h4>
                  <p className="text-muted-foreground">+34 900 000 000</p>
                  <p className="text-sm text-muted-foreground">Lunes a Viernes: 08:00 - 18:00 (GMT+1)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Oficinas Centrales</h4>
                  <p className="text-muted-foreground">Parque Industrial Agrícola, Nave 12<br />41000 Sevilla, España</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Logística / Almacén</h4>
                  <p className="text-muted-foreground">Recepción de mercancías: 07:00 - 15:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-xl border border-border">
              <h4 className="font-bold mb-2">¿Busca el catálogo Don José?</h4>
              <p className="text-sm text-muted-foreground mb-4">Si es un consumidor final o tienda pequeña, puede visitar directamente el sitio de nuestra marca retail.</p>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://donjose.example.com">Ir a Productos Don José</a>
              </Button>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Envíenos su consulta</h3>
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
                      <FormLabel>Departamento / Motivo</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un motivo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Consultas Ventas / Presupuestos">Consultas Ventas / Presupuestos</SelectItem>
                          <SelectItem value="Calidad / Fichas Técnicas">Calidad / Fichas Técnicas</SelectItem>
                          <SelectItem value="Logística / Seguimiento">Logística / Seguimiento</SelectItem>
                          <SelectItem value="I+D / Marca Blanca">I+D / Marca Blanca</SelectItem>
                          <SelectItem value="Otros">Otros</SelectItem>
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
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="¿Cómo podemos ayudarle?" 
                          className="h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="rgpd-contacto" className="mt-1" required />
                  <label htmlFor="rgpd-contacto" className="text-xs text-muted-foreground">
                    Acepto la Política de Privacidad y el tratamiento de mis datos para la gestión de esta consulta comercial (RGPD).
                  </label>
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={mutation.isPending}>
                  {mutation.isPending ? "Enviando..." : <><Send className="w-4 h-4 mr-2" /> Enviar mensaje</>}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* Mapa Placeholder */}
      <section className="h-[400px] w-full bg-muted flex items-center justify-center border-t border-border">
         <div className="text-center text-muted-foreground">
           <MapPin className="w-10 h-10 mx-auto mb-2 opacity-20" />
           <p className="font-medium italic">Mapa de ubicación (Google Maps Placeholder)</p>
         </div>
      </section>
    </div>
  );
}
