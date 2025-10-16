import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, TrendingUp, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import trilhaImg from "@/assets/trilha-ararunas.jpg";

const trails = [
  {
    id: "ararunas",
    name: "Caminho das Ararunas",
    subtitle: "A primeira trilha de longa distância da Paraíba",
    distance: "110 km",
    duration: "5 a 6 dias",
    difficulty: "Moderada a Difícil",
    modality: "Caminhada",
    start: "Araruna - PB",
    end: "Cuité - PB",
    description: "A trilha atravessa vales, cânions, montanhas de 550m de altura, interliga unidades de conservação bem preservadas, passa por vilas e povoados com vista para o Rio Grande do Norte. Há no percurso ruínas históricas, sítios arqueológicos e grandes blocos rochosos surpreendentes.",
    highlights: [
      "Pedra da Caveira",
      "Pedra da Boca",
      "Pedra do Forno do Coração",
      "Pedra do Chapéu",
      "Cânion do Macapá",
      "Serra Verde",
    ],
    image: trilhaImg,
  },
  {
    id: "serra-verde",
    name: "Trilha da Serra Verde",
    subtitle: "Natureza preservada e vistas panorâmicas",
    distance: "25 km",
    duration: "1 dia",
    difficulty: "Moderada",
    modality: "Caminhada / Ciclismo",
    start: "Cuité - PB",
    end: "Nova Floresta - PB",
    description: "Percurso que atravessa áreas de mata atlântica preservada com mirantes naturais e fauna diversificada. Ideal para observação de aves e fotografia de natureza.",
    highlights: [
      "Mirante da Serra",
      "Cachoeira Escondida",
      "Mata Atlântica preservada",
    ],
    image: trilhaImg,
  },
  {
    id: "rota-seridó",
    name: "Rota do Seridó",
    subtitle: "Cultura e tradição sertaneja",
    distance: "45 km",
    duration: "2 a 3 dias",
    difficulty: "Fácil a Moderada",
    modality: "Caminhada / Cavalo",
    start: "Picuí - PB",
    end: "Jaçanã - RN",
    description: "Rota cultural que passa por comunidades tradicionais, artesanato local e paisagens típicas do Seridó. Conhecimento da cultura popular e gastronomia regional.",
    highlights: [
      "Casas de farinha tradicionais",
      "Artesanato em couro",
      "Gastronomia regional",
    ],
    image: trilhaImg,
  },
];

const Trilhas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${trilhaImg})` }}
        >
          <div className="absolute inset-0 overlay-dark" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-shadow">
            Trilhas Regionais
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-shadow-sm">
            Roteiros de caminhada, ciclismo e a cavalo conectando os territórios do Curimataú e Seridó
          </p>
        </div>
      </section>

      {/* Trails Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-7xl mx-auto">
            {trails.map((trail, index) => (
              <Card 
                key={trail.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={trail.image}
                      alt={trail.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {trail.modality}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl font-bold text-foreground mb-2">
                        {trail.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        {trail.subtitle}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{trail.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{trail.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{trail.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Grupos</span>
                        </div>
                      </div>

                      {/* Route */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Rota:</span>
                        <span>{trail.start}</span>
                        <span>→</span>
                        <span>{trail.end}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground">
                        {trail.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <span className="font-semibold text-foreground text-sm">Destaques: </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {trail.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button className="hero-gradient text-white hover:opacity-90">
                          Ver detalhes completos
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao início
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trilhas;
