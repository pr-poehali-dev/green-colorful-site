import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Landmark, Globe } from "lucide-react";

const RepublicInfo = () => {
  return (
    <section className="py-12 bg-republic-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-republic-dark mb-8">
          Республика Татарстан
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
                  Республика Татарстан расположена в центре Европейской части России, 
                  на Восточно-Европейской равнине, в месте слияния рек Волги и Камы. 
                  Занимает площадь 67 847 кв. км. На территории республики находятся крупные реки, 
                  озера и Куйбышевское водохранилище — одно из крупнейших в мире.
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
                  Казань — столица Татарстана, один из крупнейших экономических, научных и культурных центров России. 
                  Город с тысячелетней историей, где гармонично сосуществуют традиции Востока и Запада. 
                  Казанский Кремль включен в список Всемирного наследия ЮНЕСКО.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-republic" />
                  Экономика
                </CardTitle>
                <CardDescription>
                  Экономический потенциал
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Татарстан — один из наиболее экономически развитых регионов России. 
                  Основу экономики составляют нефтегазовый комплекс, машиностроение, химическая промышленность 
                  и IT-сектор. В Республике расположены такие гиганты как "Татнефть", "КАМАЗ", "Нижнекамскнефтехим".
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-republic" />
                  Культура
                </CardTitle>
                <CardDescription>
                  Культурное наследие
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Татарстан — многонациональная республика с богатым культурным наследием. 
                  Здесь мирно сосуществуют ислам и православие, татарские и русские традиции. 
                  Республика известна своими праздниками (Сабантуй), национальной кухней, музыкой 
                  и уникальными архитектурными памятниками.
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