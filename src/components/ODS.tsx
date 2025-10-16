import { Leaf, Building2, TreePine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const odsData = [
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    description: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    icon: Building2,
    color: "text-primary",
  },
  {
    number: 13,
    title: "Ação Contra a Mudança Global do Clima",
    description: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
    icon: Leaf,
    color: "text-accent",
  },
  {
    number: 15,
    title: "Vida Terrestre",
    description: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres.",
    icon: TreePine,
    color: "text-secondary",
  },
];

const ODS = () => {
  return (
    <section id="ods" className="py-20 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educação Ambiental
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprometidos com os Objetivos de Desenvolvimento Sustentável da ONU, 
            promovemos conscientização e ações práticas para um futuro mais sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {odsData.map((ods, index) => (
            <Card 
              key={ods.number}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${ods.color}`}>
                  <ods.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  ODS {ods.number}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground mt-2">
                  {ods.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {ods.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ODS;
