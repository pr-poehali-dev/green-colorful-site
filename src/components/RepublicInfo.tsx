import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Trees, Mountain, Building } from "lucide-react";

const RepublicInfo = () => {
  return (
    <section className="py-12 bg-republic-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-republic-dark mb-8">
          Республика Карелия
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-republic" />
                  География
                </CardTitle>
                <CardDescription>
                  Расположение и природные особенности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Республика Карелия расположена на северо-западе России. Она граничит с Финляндией, 
                  Ленинградской, Вологодской, Мурманской и Архангельской областями. 
                  Карелия известна своими многочисленными озерами (более 60 000), 
                  реками и живописными лесами, которые занимают около 85% ее территории.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-republic" />
                  Столица
                </CardTitle>
                <CardDescription>
                  Главный город республики
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Столица Карелии - Петрозаводск, город, расположенный на берегу Онежского озера. 
                  Основан в 1703 году. Население составляет около 280 тысяч человек. 
                  Город является культурным и экономическим центром региона с богатым историческим наследием.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trees className="h-5 w-5 text-republic" />
                  Природа
                </CardTitle>
                <CardDescription>
                  Природные достопримечательности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Карелия славится своей нетронутой природой. Крупнейшие озера - Ладожское и Онежское. 
                  Национальные парки "Паанаярви" и "Водлозерский" охраняют уникальные экосистемы. 
                  В республике можно увидеть северное сияние, насладиться белыми ночами и посетить знаменитый водопад Кивач.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-republic" />
                  Культура
                </CardTitle>
                <CardDescription>
                  Культурное наследие
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Карелия имеет богатую культуру с финно-угорскими корнями. Здесь сохранились уникальные 
                  памятники деревянного зодчества, включая всемирно известный музей-заповедник "Кижи". 
                  Карельский эпос "Калевала" является важной частью культурного наследия региона.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepublicInfo;