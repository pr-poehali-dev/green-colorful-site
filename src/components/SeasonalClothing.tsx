import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shirt, Sun, Snowflake, Cloud, CloudRain } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ClothingItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ClothingItem = ({ icon, title, items }: ClothingItemProps) => (
  <div className="bg-white dark:bg-tatarstan-dark rounded-xl p-5 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-tatarstan-green/10 flex items-center justify-center">
        {icon}
      </div>
      <h4 className="font-medium">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-tatarstan-accent2"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SeasonalClothing = () => {
  const [activeTab, setActiveTab] = useState("spring");
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="clothing" className="py-16 relative">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-tatarstan-accent2/5 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-tatarstan-green/5 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-tatarstan-accent2/10 text-tatarstan-accent2 text-sm font-medium mb-3">
            Стиль и комфорт
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tatarstan-accent2 to-tatarstan-red">
            Что носить в Татарстане
          </h2>
          <p className="text-muted-foreground">
            Резко континентальный климат Татарстана требует разнообразного гардероба. 
            Вот наши рекомендации для каждого сезона, чтобы вы всегда чувствовали себя комфортно.
          </p>
        </div>
        
        <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Tabs defaultValue="spring" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 max-w-2xl w-full">
                <TabsTrigger 
                  value="spring" 
                  className="data-[state=active]:bg-season-spring data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
                    <Sun size={18} />
                    <span>Весна</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="summer" 
                  className="data-[state=active]:bg-season-summer data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
                    <Sun size={18} />
                    <span>Лето</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="autumn" 
                  className="data-[state=active]:bg-season-autumn data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
                    <CloudRain size={18} />
                    <span>Осень</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="winter" 
                  className="data-[state=active]:bg-season-winter data-[state=active]:text-foreground"
                >
                  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
                    <Snowflake size={18} />
                    <span>Зима</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="spring" className="space-y-8">
              <div className="bg-season-spring/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-season-spring flex items-center justify-center">
                    <Sun size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Весенний гардероб</h3>
                    <p className="text-muted-foreground">Март — Май • +5° до +20°C</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Весна в Татарстане переменчива: в марте ещё может быть снег и морозы, 
                  а к концу мая уже довольно жарко. Поэтому ваш гардероб должен быть гибким и многослойным.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-spring" />}
                    title="Верхняя одежда"
                    items={[
                      "Легкая куртка или плащ",
                      "Ветровка с капюшоном",
                      "Джинсовая куртка для теплых дней в мае"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-spring" />}
                    title="Средний слой"
                    items={[
                      "Кардиганы и свитеры средней плотности",
                      "Толстовки и худи",
                      "Рубашки с длинным рукавом"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-spring" />}
                    title="Низ"
                    items={[
                      "Джинсы или брюки средней плотности",
                      "Юбки с колготками",
                      "Легкие брюки для конца мая"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-spring" />}
                    title="Обувь"
                    items={[
                      "Демисезонные ботинки для марта-апреля",
                      "Кроссовки или кеды",
                      "Легкие туфли для теплых дней"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-spring" />}
                    title="Аксессуары"
                    items={[
                      "Легкий шарф или платок",
                      "Головной убор (шапка для марта, кепка для мая)",
                      "Зонт или дождевик"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-spring" />}
                    title="Другое"
                    items={[
                      "Солнцезащитные очки",
                      "Легкие перчатки для марта-апреля",
                      "Небольшой рюкзак для прогулок"
                    ]}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="summer" className="space-y-8">
              <div className="bg-season-summer/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-season-summer flex items-center justify-center">
                    <Sun size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Летний гардероб</h3>
                    <p className="text-muted-foreground">Июнь — Август • +18° до +32°C</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Лето в Татарстане тёплое и иногда жаркое. Температура может подниматься выше +30°C, 
                  особенно в июле. Возможны кратковременные грозы и ливни, поэтому не забудьте о защите от дождя.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-summer" />}
                    title="Верхняя одежда"
                    items={[
                      "Легкая ветровка на случай дождя",
                      "Тонкая джинсовка для вечерних прогулок",
                      "Рубашка навыпуск как альтернатива куртке"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-summer" />}
                    title="Верх"
                    items={[
                      "Футболки и майки из натуральных тканей",
                      "Легкие рубашки с коротким рукавом",
                      "Топы и блузы из хлопка или льна"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-summer" />}
                    title="Низ"
                    items={[
                      "Шорты и бермуды",
                      "Легкие брюки и джинсы",
                      "Летние платья и сарафаны"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-summer" />}
                    title="Обувь"
                    items={[
                      "Сандалии и шлепанцы",
                      "Легкие кроссовки и кеды",
                      "Открытая обувь для жарких дней"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-summer" />}
                    title="Аксессуары"
                    items={[
                      "Солнцезащитные очки (обязательно!)",
                      "Головной убор для защиты от солнца",
                      "Маленький зонт или дождевик"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-summer" />}
                    title="Для отдыха"
                    items={[
                      "Купальные принадлежности",
                      "Пляжное полотенце",
                      "Средства от насекомых для природы"
                    ]}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="autumn" className="space-y-8">
              <div className="bg-season-autumn/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-season-autumn flex items-center justify-center">
                    <CloudRain size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Осенний гардероб</h3>
                    <p className="text-muted-foreground">Сентябрь — Ноябрь • +15° до -5°C</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Осень начинается с теплого и сухого сентября («бабье лето»), 
                  но к ноябрю уже может быть довольно холодно с первым снегом. Многослойность — ключ к комфорту.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-autumn" />}
                    title="Верхняя одежда"
                    items={[
                      "Легкая куртка или тренч для сентября",
                      "Кожаная или джинсовая куртка с утеплителем",
                      "Пальто или пуховик для поздней осени"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-autumn" />}
                    title="Средний слой"
                    items={[
                      "Кардиганы и свитеры разной плотности",
                      "Флисовые кофты и толстовки с капюшоном",
                      "Шерстяные джемперы для ноября"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-autumn" />}
                    title="Низ"
                    items={[
                      "Джинсы и плотные брюки",
                      "Юбки с плотными колготками",
                      "Шерстяные брюки для ноября"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-autumn" />}
                    title="Обувь"
                    items={[
                      "Кроссовки или кеды для сентября",
                      "Ботинки или полусапоги для октября",
                      "Утепленная обувь для ноября"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-autumn" />}
                    title="Аксессуары"
                    items={[
                      "Шарфы разной плотности",
                      "Шапка (обязательно для ноября)",
                      "Перчатки (для октября-ноября)"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-autumn" />}
                    title="Другое"
                    items={[
                      "Зонт (особенно важен осенью)",
                      "Солнцезащитные очки для сентября",
                      "Термос для горячих напитков в холода"
                    ]}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="winter" className="space-y-8">
              <div className="bg-season-winter/5 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-season-winter flex items-center justify-center">
                    <Snowflake size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Зимний гардероб</h3>
                    <p className="text-muted-foreground">Декабрь — Февраль • -5° до -25°C</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Зима в Татарстане холодная и снежная. Температура регулярно опускается ниже -15°C, 
                  а в отдельные дни может быть до -30°C. Ветер усиливает ощущение холода, поэтому выбирайте одежду с ветрозащитой.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-winter" />}
                    title="Верхняя одежда"
                    items={[
                      "Теплый пуховик (желательно до колен)",
                      "Зимнее пальто с подкладкой",
                      "Куртка с хорошим утеплителем и ветрозащитой"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-winter" />}
                    title="Средний слой"
                    items={[
                      "Свитеры из шерсти или флиса",
                      "Теплые худи и толстовки",
                      "Кофты для многослойности"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-winter" />}
                    title="Нижний слой"
                    items={[
                      "Термобелье (обязательно!)",
                      "Теплые рубашки и водолазки",
                      "Утепленные лосины под джинсы/брюки"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-winter" />}
                    title="Низ"
                    items={[
                      "Утепленные джинсы или брюки",
                      "Теплые спортивные штаны для активного отдыха",
                      "Шерстяные брюки для сильных морозов"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-winter" />}
                    title="Обувь"
                    items={[
                      "Зимние сапоги с хорошим утеплителем",
                      "Ботинки с мембраной для сухости",
                      "Обувь с нескользящей подошвой"
                    ]}
                  />
                  <ClothingItem 
                    icon={<Shirt size={20} className="text-season-winter" />}
                    title="Аксессуары"
                    items={[
                      "Теплая шапка, закрывающая уши",
                      "Шарф, снуд или бафф",
                      "Теплые перчатки или варежки"
                    ]}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const seasons = ["spring", "summer", "autumn", "winter"];
              const currentIndex = seasons.indexOf(activeTab);
              const nextIndex = (currentIndex + 1) % seasons.length;
              setActiveTab(seasons[nextIndex]);
            }}
            className="bg-gradient-to-r from-tatarstan-green to-tatarstan-accent3 text-white px-6 py-3 rounded-full hover:shadow-lg transition-shadow font-medium"
          >
            Следующий сезон →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeasonalClothing;