import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Snowflake } from "lucide-react";

const WeatherInfo = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-republic-dark mb-8">
          Погода в Татарстане
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Татарстан имеет умеренно-континентальный климат с теплым летом и умеренно-холодной зимой.
          Погода в республике отличается некоторой нестабильностью, особенно в межсезонье.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-b from-season-spring/80 to-season-spring/20 border-season-spring">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Sun className="h-5 w-5" />
                Весна
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Весна (апрель-май) приходит довольно быстро. Температура: от +5°C до +20°C. 
                Сначала возможны возвратные заморозки, но к концу апреля устанавливается теплая погода. 
                Май обычно теплый и солнечный с периодическими дождями.
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
                Лето (июнь-август) теплое и иногда жаркое. Температура: от +18°C до +30°C. 
                Июль — самый жаркий месяц, когда температура может превышать +30°C. 
                Летом бывают грозы и кратковременные ливни. Купальный сезон длится с июня по август.
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
                Осень (сентябрь-ноябрь) сначала теплая, потом дождливая и прохладная. Температура: от +15°C до -5°C. 
                Сентябрь часто бывает сухим и теплым ("бабье лето"). 
                В октябре начинаются дожди и похолодание, а к ноябрю возможны первые заморозки и снег.
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
                Зима (декабрь-март) снежная и умеренно холодная. Температура: от -5°C до -20°C. 
                Устойчивый снежный покров устанавливается в декабре. 
                Январь и февраль — самые холодные месяцы, когда морозы могут достигать -25°C, но таких дней обычно немного.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;