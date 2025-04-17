import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Globe, Landmark } from "lucide-react";
import { useEffect, useRef } from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  className?: string;
  delay?: number;
}

const InfoCard = ({ icon, title, content, className = "", delay = 0 }: InfoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className={`animate-on-scroll ${className}`}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow border-none glass-card">
        <div className="h-1 bg-gradient-to-r from-tatarstan-green to-tatarstan-accent1"></div>
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-full bg-tatarstan-green/10 flex items-center justify-center mb-4">
            <span className="text-tatarstan-green">{icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const RepublicInfo = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-tatarstan-green/5 blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-tatarstan-accent2/5 blur-3xl transform -translate-x-1/3 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-tatarstan-green/10 text-tatarstan-green text-sm font-medium mb-3">
            Открой для себя
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tatarstan-green to-tatarstan-accent3">
            Республика Татарстан
          </h2>
          <p className="text-muted-foreground">
            Татарстан — уникальный регион России, где гармонично сочетаются восточные и западные традиции, 
            богатая история и современное развитие
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard 
            icon={<MapPin size={24} />}
            title="География"
            content="Республика расположена в самом центре России, на стыке Европы и Азии, в месте слияния двух крупнейших рек — Волги и Камы. Территория края разнообразна и включает равнины, возвышенности и живописные водные пространства."
            delay={100}
          />
          
          <InfoCard 
            icon={<Building size={24} />}
            title="Казань"
            content="Столица республики — «третья столица России», современный мегаполис с тысячелетней историей. Город сочетает инновации и древние традиции, где мечети соседствуют с православными храмами, а хайтек-небоскребы — с исторической застройкой."
            delay={200}
            className="lg:transform lg:translateY(20px)"
          />
          
          <InfoCard 
            icon={<Landmark size={24} />}
            title="Культура"
            content="Богатейшее культурное наследие татарского и русского народов создает уникальную атмосферу. Национальная кухня, музыка, искусство, ремесла и красочные праздники, такие как Сабантуй, привлекают гостей со всего мира."
            delay={300}
          />
          
          <InfoCard 
            icon={<Globe size={24} />}
            title="Экономика"
            content="Один из самых развитых регионов России с мощной нефтяной промышленностью, машиностроением, химическим производством и IT-сектором. Здесь расположены такие гиганты как «Татнефть», «КАМАЗ» и особая экономическая зона «Иннополис»."
            delay={400}
            className="lg:transform lg:translateY(20px)"
          />
          
          <InfoCard 
            icon={<Building size={24} />}
            title="Города"
            content="Помимо Казани, республика может похвастаться такими развитыми городами как Набережные Челны (здесь производят знаменитые КАМАЗы), Нижнекамск (центр нефтехимии), Альметьевск (нефтяная столица) и древний Болгар с богатой историей."
            delay={500}
          />
          
          <InfoCard 
            icon={<Landmark size={24} />}
            title="Достопримечательности"
            content="Казанский Кремль, остров-град Свияжск, древний город Болгар, мечеть Кул-Шариф, храм всех религий, Раифский монастырь, музеи и театры — каждый найдет здесь что-то интересное для себя независимо от вкусов и предпочтений."
            delay={600}
            className="lg:transform lg:translateY(20px)"
          />
        </div>
      </div>
    </section>
  );
};

export default RepublicInfo;