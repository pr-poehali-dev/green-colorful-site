import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Snowflake } from "lucide-react";

const WeatherInfo = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-republic-dark mb-8">
          Погода в Карелии
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Карелия имеет умеренно-континентальный климат с чертами морского. 
          Погода здесь отличается высокой влажностью, прохладным летом и относительно мягкой зимой.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-b from-season-spring/80 to-season-spring/20 border-season-spring">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Sun className="h-5 w-5" />
                Весна
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Поздняя весна (апрель-май). Температура: от +5°C до +15°C. 
                Частые осадки, таяние снега, возможны заморозки в апреле. 
                Ладожское озеро освобождается ото льда в мае.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-season-summer/80 to-season-summer/20 border-season-summer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Sun className="h-5 w-5" />
                Лето
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Короткое но теплое (июнь-август). Температура: от +15°C до +25°C. 
                Белые ночи в июне, умеренные осадки, возможны грозы. 
                Июль — самый теплый месяц. Вода в озерах прогревается до +18-22°C.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-season-autumn/80 to-season-autumn/20 border-season-autumn">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <CloudRain className="h-5 w-5" />
                Осень
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Дождливая (сентябрь-ноябрь). Температура: от +10°C до -5°C. 
                Частые затяжные дожди, туманы, первый снег обычно в октябре. 
                В ноябре устанавливается снежный покров.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-season-winter/80 to-season-winter/20 border-season-winter">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black">
                <Snowflake className="h-5 w-5" />
                Зима
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Довольно длинная (декабрь-март). Температура: от -5°C до -15°C. 
                Устойчивый снежный покров, короткий световой день. 
                Озера и реки покрываются льдом. В феврале могут быть сильные морозы до -30°C.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;