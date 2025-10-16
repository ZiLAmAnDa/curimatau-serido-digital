import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MunicipalityCardProps {
  name: string;
  description: string;
  image: string;
  state: string;
}

const MunicipalityCard = ({ name, description, image, state }: MunicipalityCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer border-border">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`Vista de ${name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white text-shadow">{name}</h3>
          <p className="text-white/80 text-sm text-shadow-sm">{state}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg text-foreground">Conheça {name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default MunicipalityCard;
