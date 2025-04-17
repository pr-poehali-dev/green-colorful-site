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
          Как одеваться в Карелии
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          В зависимости от сезона, в Карелии требуется разная одежда. 
          Здесь мы предлагаем рекомендации по гардеробу для комфортного пребывания в республике.
        </p>
        
        <Tabs defaultValue="spring" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 w-full mb-6">
            <TabsTrigger value="spring" className="bg-season-spring/20 data-[state=active]:bg-season-spring data-[state=active]:text-white">Весна</TabsTrigger>
            <TabsTrigger value="summer" className="bg-season-summer/20 data-[state=active]:bg-season-summer data-[state=active]:text-white">Лето</TabsTrigger>
            <TabsTrigger value="autumn" className="bg-season-autumn/20 data-[state=active]:bg-season-autumn data-[state=active]:text-white">Осень</TabsTrigger>
            <TabsTrigger value="winter" className="bg-season-winter/20 data-[state=active]:bg-season-winter data-[state=active]:text-white">Зима</TabsTrigger>
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
                    description="Водоотталкивающая куртка или ветровка, легкий пуховик для начала весны"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Флисовая кофта, свитер, кардиган для многослойности"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Футболки с длинным рукавом, тонкие водолазки, термобелье в прохладные дни"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Джинсы, брюки из плотной ткани, непромокаемые брюки для прогулок"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Водонепроницаемые ботинки, резиновые сапоги для распутицы"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Шапка, перчатки, шарф (особенно в начале весны), солнцезащитные очки"
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
                    description="Легкая ветровка или дождевик, джинсовая куртка для вечеров"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Рубашки с коротким и длинным рукавом, легкий свитер для прохладных вечеров"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Футболки, топы, майки из натуральных тканей"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Легкие брюки, шорты, летние платья и сарафаны"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Удобные кроссовки, сандалии, треккинговая обувь для походов"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Солнцезащитные очки, головной убор от солнца, средство от комаров"
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
                    description="Водонепроницаемая куртка, плащ, в ноябре - пуховик или теплая куртка"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Свитеры, кардиганы, флисовые кофты для многослойности"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Водолазки, футболки с длинным рукавом, термобелье к концу осени"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Плотные джинсы, брюки, теплые колготки под юбки"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Водонепроницаемые ботинки, в конце осени - зимняя обувь"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Шапка, перчатки, шарф, зонт, непромокаемый рюкзак"
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
                    description="Теплый пуховик или зимняя парка (до -30°C), желательно с капюшоном"
                  />
                  <ClothingItem 
                    title="Средний слой" 
                    description="Толстые свитеры, флисовые кофты, кардиганы из шерсти"
                  />
                  <ClothingItem 
                    title="Нижний слой" 
                    description="Термобелье, водолазки, футболки с длинным рукавом для многослойности"
                  />
                </div>
                <div>
                  <ClothingItem 
                    title="Брюки/юбки" 
                    description="Утепленные брюки, джинсы с флисовой подкладкой, зимние спортивные брюки"
                  />
                  <ClothingItem 
                    title="Обувь" 
                    description="Зимние ботинки с хорошим утеплителем, нескользящей подошвой и высоким голенищем"
                  />
                  <ClothingItem 
                    title="Аксессуары" 
                    description="Теплая шапка, варежки или перчатки, шарф или снуд, термоноски"
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