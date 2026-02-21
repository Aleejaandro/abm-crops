import { Link } from "wouter";
import { Leaf, Sprout, Globe, Recycle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sostenibilidad() {
  return (
    <div className="flex flex-col w-full bg-background">
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/src/assets/images/sustainability.jpg" alt="Naturaleza" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <Leaf className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sostenibilidad y Futuro</h1>
          <p className="text-xl text-primary-foreground/80 font-light">
            Nuestro compromiso es alimentar al mundo respetando el equilibrio del planeta.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Huella de Carbono</h3>
            <p className="text-muted-foreground">Optimizamos nuestras rutas logísticas y procesos de envasado para reducir las emisiones de CO2.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Gestión Hídrica</h3>
            <p className="text-muted-foreground">Fomentamos técnicas de riego eficiente en nuestras fincas colaboradoras para preservar el agua.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Recycle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Packaging Eco</h3>
            <p className="text-muted-foreground">Investigamos y aplicamos materiales 100% reciclables y compostables en nuestras líneas B2B.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img src="/src/assets/images/sustainability.jpg" alt="Campo sostenible" className="rounded-2xl shadow-xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Agricultura Consciente</h2>
            <p className="text-muted-foreground text-lg mb-6">
              En ABM Crops creemos que el éxito B2B no está reñido con la responsabilidad ambiental. Colaboramos estrechamente con agricultores que aplican técnicas de rotación de cultivos y minimización de fitosanitarios.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-medium">
                <Sprout className="text-primary w-5 h-5" /> Protección de la biodiversidad local
              </li>
              <li className="flex items-center gap-3 font-medium">
                <Sprout className="text-primary w-5 h-5" /> Apoyo a comunidades rurales
              </li>
              <li className="flex items-center gap-3 font-medium">
                <Sprout className="text-primary w-5 h-5" /> Transparencia en la cadena de suministro
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Memoria de Sostenibilidad</h2>
        <p className="text-muted-foreground mb-8">
          Descargue nuestro informe anual sobre el impacto ambiental y social de nuestras operaciones.
        </p>
        <Button size="lg" className="bg-primary text-white">Descargar Informe 2025 (PDF)</Button>
      </section>
    </div>
  );
}
