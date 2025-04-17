import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ClothingItem = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-4">
    <h4 className="font-medium text-lg mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const SeasonalClothing = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-republic-dark mb-8">
          Как одеваться в Татарстане
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          В зависимости от сезона, в Татарстане требуется разная одежда. 
          Здесь мы предлагаем рекомендации по гардеробу для комфортного пребывания в республике.
        </p>
        
        <Tabs defaultValue="spring" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full mb-6">
            <TabsTrigger value="spring" className="bg-season-spring/20 data-[state=active]:bg-season-spring data-[state=active]:text-foreground">Весна</TabsTrigger>
            <TabsTrigger value="summer" className="bg-season-summer/20 data-[state=active]:bg-season-summer data-[state=active]:text-white">Лето</TabsTrigger>
            <TabsTrigger value="autumn" className="bg-season-autumn/20 data-[state=active]:bg-season-autumn data-[state=active]:text-white">Осень</TabsTrigger>
            <TabsTrigger value="winter" className="bg-season-winter/20 data-[state=active]:bg-season-winter data-[state=active]:text-foreground">Зима</TabsTrigger>
          </TabsList>
          
          <TabsContent value="spring">
            <Card>
              <CardHeader>
                <CardTitle className="text-season-spring">Весенний гардероб</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ClothingItem 
                    title="Верхняя одежда" 
                    description="Легкая куртка или плащ, ветровка для апреля, более легкая куртка для мая"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Кофты, джемперы, рубашки с длинным рукавом для многослойности"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Футболки, легкие водолазки, рубашки для теплых дней в мае"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Джинсы, брюки средней плотности, к концу мая — легкие брюки и юбки"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Демисезонные ботинки, кроссовки, к концу весны — легкая обувь"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Легкая шапка на начало весны, шарф, зонт на случай дождя"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="summer">
            <Card>
              <CardHeader>
                <CardTitle className="text-season-summer">Летний гардероб</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ClothingItem 
                    title="Верхняя одежда" 
                    description="Легкая ветровка или джинсовка для прохладных вечеров, дождевик на случай ливня"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Легкие рубашки, футболки, топы, майки из натуральных тканей"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Футболки, майки из хлопка или льна, дышащие ткани"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Легкие брюки, шорты, летние платья и сарафаны, юбки из натуральных тканей"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Сандалии, легкие кроссовки, открытая обувь"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Солнцезащитные очки, головные уборы от солнца, зонт для защиты от солнца и дождя"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="autumn">
            <Card>
              <CardHeader>
                <CardTitle className="text-season-autumn">Осенний гардероб</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ClothingItem 
                    title="Верхняя одежда" 
                    description="В сентябре — легкая куртка, в октябре-ноябре — демисезонное пальто или куртка с утеплителем"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Кофты, свитеры, джемперы разной плотности для многослойности"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Рубашки, водолазки, футболки с длинным рукавом"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Джинсы, плотные брюки, к ноябрю — более теплые варианты или термобелье под обычные брюки"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="В сентябре — кроссовки, в октябре-ноябре — демисезонные ботинки, к концу осени — утепленная обувь"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Шарф, перчатки (к ноябрю), шапка, зонт, солнцезащитные очки для ясных дней"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="winter">
            <Card>
              <CardHeader>
                <CardTitle className="text-season-winter">Зимний гардероб</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ClothingItem 
                    title="Верхняя одежда" 
                    description="Теплая зимняя куртка или пуховик (рассчитанный на -20°C), зимнее пальто с утеплителем"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Теплые свитеры, флисовые кофты, шерстяные джемперы"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Термобелье, водолазки, рубашки для дополнительного слоя"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Утепленные брюки, джинсы с флисовой подкладкой, термобелье под обычные брюки"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Зимние сапоги или ботинки с хорошим утеплителем, нескользящей подошвой"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Теплая шапка (желательно с защитой ушей), шарф или снуд, теплые перчатки или варежки"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SeasonalClothing;