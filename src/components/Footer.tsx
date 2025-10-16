import { Mountain, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="text-xl font-bold">Caminhos da Serra</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Portal integrado de turismo sustentável e educação ambiental da região do Curimataú e Seridó paraibano e Borborema Potiguar.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span>Cuité, Paraíba - Brasil</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/trilhas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Trilhas
                </Link>
              </li>
              <li>
                <a href="#municipios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Municípios
                </a>
              </li>
              <li>
                <a href="#ods" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Educação Ambiental
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contato@caminhodaserra.org.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Caminhos da Serra. Desenvolvido em parceria com Associação Turística de Cuité e IFPB.
          </p>
          <p className="mt-2">
            Todos os direitos reservados. Fotos meramente ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
