import { Cloud, Sun, CloudRain, Snowflake } from "lucide-react";
import { useEffect, useState } from "react";

// Имитация компонента motion для анимации
interface MotionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const MotionDiv = ({ children, className, style }: MotionProps) => (
  <div className={className} style={style}>{children}</div>
);

const WeatherInfo = () => {
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
    
    const section = document.getElementById('weather');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="weather" className="py-16 relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-tatarstan-accent3/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tatarstan-green/10 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-tatarstan-accent3/10 text-tatarstan-accent3 text-sm font-medium mb-3">
            Климат и погода
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-tatarstan-accent3 to-season-spring">
            Времена года в Татарстане
          </h2>
          <p className="text-muted-foreground">
            Республика Татарстан имеет умеренно-континентальный климат со всеми четырьмя ярко выраженными сезонами. 
            Каждое время года здесь по-своему прекрасно и неповторимо.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MotionDiv 
            className={`transform ${visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <SeasonCard 
              icon={<Sun size={36} className="text-yellow-400" />}
              title="Весна"
              months="Март — Май"
              temp="+5° до +20°C"
              color="from-blue-200 to-season-spring"
              description="Весна наступает в середине марта и быстро преображает природу. Снег тает, реки освобождаются ото льда, появляется первая зелень. В апреле зацветают сады, а май радует теплом и яркими красками."
            />
          </MotionDiv>
          
          <MotionDiv 
            className={`transform ${visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <SeasonCard 
              icon={<Sun size={36} className="text-yellow-500" />}
              title="Лето"
              months="Июнь — Август"
              temp="+18° до +32°C"
              color="from-green-300 to-season-summer"
              description="Лето теплое и солнечное. Июль — самый жаркий месяц, когда температура может достигать +32°C. Идеальное время для отдыха на природе, купания в реках и озерах, а также для знакомства с достопримечательностями республики."
            />
          </MotionDiv>
          
          <MotionDiv 
            className={`transform ${visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <SeasonCard 
              icon={<CloudRain size={36} className="text-amber-600" />}
              title="Осень"
              months="Сентябрь — Ноябрь"
              temp="+15° до -5°C"
              color="from-yellow-300 to-season-autumn"
              description="Осень в Татарстане начинается с бархатного сезона в сентябре («бабье лето»), когда ещё тепло и солнечно. Октябрь раскрашивает леса в золотые краски, а к ноябрю становится прохладно и возможны первые заморозки."
            />
          </MotionDiv>
          
          <MotionDiv 
            className={`transform ${visible ? 'animate-on-scroll visible' : 'animate-on-scroll'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <SeasonCard 
              icon={<Snowflake size={36} className="text-blue-400" />}
              title="Зима"
              months="Декабрь — Февраль"
              temp="-5° до -25°C"
              color="from-blue-300 to-season-winter"
              description="Зима снежная и достаточно холодная. Устойчивый снежный покров образуется в декабре и держится до марта. Январь и февраль — самые холодные месяцы. Это время для зимних видов спорта и новогодних праздников."
            />
          </MotionDiv>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-tatarstan-green/10 to-tatarstan-accent3/10 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-tatarstan-green">Лучшее время для посещения</h3>
              <p className="text-muted-foreground mb-4">
                Татарстан прекрасен в любое время года, но для первого знакомства с республикой 
                рекомендуем выбирать период с мая по сентябрь, когда погода наиболее комфортна для 
                осмотра достопримечательностей и прогулок.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tatarstan-green"></span>
                  <span>Май-июнь: комфортная температура, цветущие сады</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tatarstan-green"></span>
                  <span>Июль-август: пляжный отдых, купальный сезон</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tatarstan-green"></span>
                  <span>Сентябрь: бархатный сезон, меньше туристов</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-tatarstan-green/20 to-tatarstan-accent3/20 backdrop-blur flex items-center justify-center">
                  <div className="text-center p-6">
                    <h4 className="text-xl font-bold mb-2">Сейчас в Казани</h4>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sun className="text-yellow-500 animate-pulse-slow" size={32} />
                      <span className="text-4xl font-bold">+23°C</span>
                    </div>
                    <p className="text-sm opacity-75">Данные обновлены сегодня</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SeasonCardProps {
  icon: React.ReactNode;
  title: string;
  months: string;
  temp: string;
  color: string;
  description: string;
}

const SeasonCard = ({ icon, title, months, temp, color, description }: SeasonCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
      <div className={`h-3 bg-gradient-to-r ${color}`}></div>
      <div className="p-6 bg-white dark:bg-tatarstan-dark border border-t-0 rounded-b-xl h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{months}</p>
          </div>
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm font-medium text-muted-foreground">Температура</div>
          <div className="text-lg font-bold">{temp}</div>
        </div>
        
        <p className="text-muted-foreground text-sm mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WeatherInfo;