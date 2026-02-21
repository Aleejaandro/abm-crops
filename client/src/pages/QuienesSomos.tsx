import { Users, History, Target, Award, CheckCircle2 } from "lucide-react";

export default function QuienesSomos() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Hero */}
      <section className="bg-foreground text-background py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Historia y Valores</h1>
          <p className="text-xl text-background/80 font-light">
            Más de 40 años de experiencia transformando el sector agrícola con innovación y compromiso B2B.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Tradición en Evolución</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ABM Crops nació como una empresa familiar dedicada a la selección de las mejores legumbres y arroces. Con el paso de las décadas, nos hemos convertido en un holding internacional que suministra materias primas críticas a las principales industrias alimentarias del mundo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nuestra sede central coordina operaciones en más de 25 países, asegurando que la esencia de lo "bien hecho" llegue a cada cliente industrial, sin importar su escala.
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-1 relative overflow-hidden shadow-2xl">
            <img src="/src/assets/images/hero-bg.jpg" alt="Instalaciones ABM Crops" className="rounded-xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl border border-border">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p className="text-muted-foreground">Proveer soluciones integrales en materias primas agrícolas garantizando la máxima seguridad alimentaria y eficiencia logística.</p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border">
            <Users className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p className="text-muted-foreground">Ser el socio estratégico preferente de la industria alimentaria global, liderando la transición hacia suministros más sostenibles.</p>
          </div>
          <div className="bg-card p-8 rounded-xl border border-border">
            <Award className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Transparencia radical</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Calidad sin compromisos</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Innovación en procesos</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Respeto por el origen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Línea del tiempo simplificada */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Recorrido</h2>
        <div className="space-y-8">
          {[
            { year: "1984", event: "Fundación de la empresa familiar de legumbres." },
            { year: "1998", event: "Apertura de la primera línea de envasado industrial." },
            { year: "2010", event: "Expansión internacional y creación del holding ABM Crops." },
            { year: "2018", event: "Lanzamiento de la división de productos Ecológicos y Sin Gluten." },
            { year: "2024", event: "Líderes en exportación B2B a más de 25 mercados." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="font-heading font-black text-2xl text-primary shrink-0 w-20">{item.year}</span>
              <div className="pt-1 border-l-2 border-primary/20 pl-6 pb-4">
                <p className="text-lg text-foreground/80">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
