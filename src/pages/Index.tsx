import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MunicipalityCard from "@/components/MunicipalityCard";
import RegionalMap from "@/components/RegionalMap";
import ODS from "@/components/ODS";
import Footer from "@/components/Footer";

import cuiteImg from "@/assets/cuite.jpg";
import novaFlorestaImg from "@/assets/nova-floresta.jpg";
import picuiImg from "@/assets/picui.jpg";
import jacanaImg from "@/assets/jacana.jpg";
import coronelEzequielImg from "@/assets/coronel-ezequiel.jpg";

const municipalities = [
  {
    name: "Cuité",
    state: "Paraíba",
    description: "Cidade serrana conhecida por seu clima agradável, rica história e proximidade com formações rochosas impressionantes. Centro cultural e turístico da região do Curimataú.",
    image: cuiteImg,
  },
  {
    name: "Nova Floresta",
    state: "Paraíba",
    description: "Município rodeado por vegetação exuberante e paisagens naturais preservadas. Destaque para suas trilhas ecológicas e turismo de aventura.",
    image: novaFlorestaImg,
  },
  {
    name: "Picuí",
    state: "Paraíba",
    description: "Terra de contrastes entre caatinga e áreas verdes, com rica cultura popular e importante papel na história regional do Seridó paraibano.",
    image: picuiImg,
  },
  {
    name: "Jaçanã",
    state: "Rio Grande do Norte",
    description: "Município potiguar de paisagens rurais preservadas, com forte tradição na agricultura familiar e cultura nordestina autêntica.",
    image: jacanaImg,
  },
  {
    name: "Coronel Ezequiel",
    state: "Rio Grande do Norte",
    description: "Cidade do interior potiguar com vastas áreas verdes, agricultura tradicional e hospitalidade característica do povo nordestino.",
    image: coronelEzequielImg,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Municipalities Section */}
      <section id="municipios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Os Cinco Municípios
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça os territórios que compõem esta rede de belezas naturais, 
              cultura e sustentabilidade no coração do Nordeste brasileiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {municipalities.map((municipality) => (
              <MunicipalityCard
                key={municipality.name}
                name={municipality.name}
                state={municipality.state}
                description={municipality.description}
                image={municipality.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 nature-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre o Projeto
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              O <strong>Caminhos da Serra</strong> é um portal digital integrado que promove o turismo sustentável 
              e a educação ambiental na região do Curimataú e Seridó paraibano e Borborema Potiguar.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Desenvolvido através de metodologia participativa em parceria entre a Associação Turística de Cuité 
              e o IFPB, o projeto visa valorizar as potencialidades turísticas locais, fortalecer a identidade 
              regional e subsidiar políticas públicas para o desenvolvimento sustentável.
            </p>
            <p className="text-lg text-muted-foreground">
              Aqui você encontra informações sobre trilhas ecológicas, roteiros turísticos, dados socioambientais 
              e conteúdos educativos alinhados aos Objetivos de Desenvolvimento Sustentável da ONU.
            </p>
          </div>
        </div>
      </section>

      {/* ODS Section */}
      <ODS />

      {/* Map Section */}
      <section id="mapa" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Localização Regional
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore a região dos cinco municípios interligados pelas trilhas e caminhos da serra
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <RegionalMap />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parceiros" className="py-20 nature-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Parceiros e Apoio
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Este projeto é resultado da colaboração entre instituições comprometidas com 
              o desenvolvimento sustentável e a valorização cultural da região.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Associação Turística de Cuité
                </h3>
                <p className="text-muted-foreground">
                  Organização local que promove e estrutura o turismo regional, 
                  oferecendo serviços e parcerias para visitantes e empreendedores do setor.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Instituto Federal da Paraíba (IFPB)
                </h3>
                <p className="text-muted-foreground">
                  Instituição de ensino que apoia o desenvolvimento tecnológico e social, 
                  contribuindo com pesquisa, extensão e inovação para a região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
