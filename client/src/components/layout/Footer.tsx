import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-background mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-background text-foreground flex items-center justify-center text-xs">ABM</span>
              Crops
            </h3>
            <p className="text-sm text-background/60 mb-4">
              Soluciones integrales B2B en materias primas para la industria alimentaria a nivel global.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Secciones</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="hover:text-white transition-colors">Inicio</a></Link></li>
              <li><Link href="/quienes-somos"><a className="hover:text-white transition-colors">Quiénes somos</a></Link></li>
              <li><Link href="/que-ofrecemos"><a className="hover:text-white transition-colors">Qué ofrecemos</a></Link></li>
              <li><Link href="/contacto"><a className="hover:text-white transition-colors">Contacto</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Áreas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/que-ofrecemos/granel-b2b"><a className="hover:text-white transition-colors">Granel / B2B</a></Link></li>
              <li><Link href="/que-ofrecemos/marca-blanca"><a className="hover:text-white transition-colors">Marca blanca</a></Link></li>
              <li><Link href="/que-ofrecemos/ecologico"><a className="hover:text-white transition-colors">Ecológico</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad (RGPD)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Condiciones Generales</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
          <p>© {new Date().getFullYear()} ABM Crops. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Desarrollo B2B Web</p>
        </div>
      </div>
    </footer>
  );
}
