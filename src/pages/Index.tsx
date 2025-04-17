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
        <div className="bg-republic bg-opacity-10 py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-republic-dark mb-4">Добро пожаловать в Карелию</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте всё о прекрасной республике на северо-западе России: климат, природа и советы путешественникам
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