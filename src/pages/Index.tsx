import Header from "@/components/Header";
import RepublicInfo from "@/components/RepublicInfo";
import WeatherInfo from "@/components/WeatherInfo";
import SeasonalClothing from "@/components/SeasonalClothing";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ArrowDown, Camera, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Фоновое изображение/градиент */}
          <div className="absolute inset-0 bg-gradient-to-r from-tatarstan-dark/80 to-tatarstan-dark/60 z-0"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-[-1]" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1542053266393-36f3c8367cbc?q=80&w=1824&auto=format&fit=crop')", 
              backgroundPosition: "center"
            }}
          ></div>
          
          {/* Контент героя */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-12 bg-tatarstan-green"></div>
                <span className="text-white/80 uppercase tracking-wider text-sm font-medium">
                  Республика Татарстан
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Место, где 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tatarstan-green to-tatarstan-accent1">
                  {" "}сливаются{" "}
                </span>
                культуры
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Откройте для себя регион, где Восток встречается с Западом, 
                исламские традиции сочетаются с православными, 
                а история тысячелетий встречается с технологиями будущего
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-tatarstan-green hover:bg-tatarstan-green/90 text-white rounded-full px-7 py-6 h-auto text-lg font-medium">
                  <Globe className="mr-2 h-5 w-5" />
                  Исследовать
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-7 py-6 h-auto text-lg font-medium">
                  <Camera className="mr-2 h-5 w-5" />
                  Галерея
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                      style={{ 
                        backgroundImage: `url('/placeholder.svg')`,
                        backgroundSize: "cover"
                      }}
                    ></div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-medium">
                    1200+ путешественников
                  </p>
                  <p className="text-white/60 text-sm">
                    уже открыли для себя Татарстан
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Индикатор прокрутки */}
          <button 
            onClick={scrollToContent}
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-white mb-2">Узнать больше</span>
            <ArrowDown className="text-tatarstan-green animate-bounce h-6 w-6" />
          </button>
          
          {/* Декоративные элементы */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>
        
        {/* Секция с быстрыми фактами */}
        <section className="py-12 relative z-10 -mt-10">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-tatarstan-dark rounded-xl shadow-xl py-8 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FactCard 
                icon={<MapPin className="h-5 w-5 text-tatarstan-red" />}
                title="67 847 км²"
                description="Площадь республики"
              />
              <FactCard 
                icon={<Globe className="h-5 w-5 text-tatarstan-green" />}
                title="4+ миллиона"
                description="Население республики"
              />
              <FactCard 
                icon={<Building className="h-5 w-5 text-tatarstan-accent3" />}
                title="1000+ лет"
                description="Возраст Казани"
              />
              <FactCard 
                icon={<Camera className="h-5 w-5 text-tatarstan-accent2" />}
                title="3 объекта"
                description="Всемирного наследия ЮНЕСКО"
              />
            </div>
          </div>
        </section>
        
        {/* Основные информационные секции */}
        <RepublicInfo />
        <WeatherInfo />
        <SeasonalClothing />
      </main>
      
      <Footer />
    </div>
  );
};

interface FactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FactCard = ({ icon, title, description }: FactCardProps) => (
  <div className="flex items-center gap-4 p-2">
    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Index;