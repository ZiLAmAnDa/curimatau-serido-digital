import { Link } from "react-router-dom";
import { Home, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl animate-fade-in">
        <Mountain className="h-24 w-24 text-primary mx-auto mb-6" />
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Trilha não encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Parece que você se perdeu no caminho. Esta página não existe ou foi movida para outro lugar.
        </p>
        <Button size="lg" className="hero-gradient text-white hover:opacity-90" asChild>
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
