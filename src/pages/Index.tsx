import Header from "@/components/Header";
import RepublicInfo from "@/components/RepublicInfo";
import WeatherInfo from "@/components/WeatherInfo";
import SeasonalClothing from "@/components/SeasonalClothing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-republic/10 to-tatarstan-red/10 py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-republic-dark mb-4">Добро пожаловать в Татарстан</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте всё о прекрасной республике в центре России: климат, культура и советы путешественникам
          </p>
        </div>
        
        <RepublicInfo />
        <WeatherInfo />
        <SeasonalClothing />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;