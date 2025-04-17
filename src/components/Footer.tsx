import { Building, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-tatarstan-dark text-white">
      <div className="container mx-auto">
        {/* Верхняя часть футера с призывом к действию */}
        <div className="py-12 px-4">
          <div className="rounded-2xl bg-gradient-to-r from-tatarstan-green to-tatarstan-accent3 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Откройте для себя Татарстан</h3>
              <p className="text-white/80 max-w-md">
                Насладитесь красотой, культурой и гостеприимством республики в любое время года
              </p>
            </div>
            <Button className="bg-white text-tatarstan-green hover:bg-white/90 rounded-full px-6 py-6 h-auto font-medium">
              Спланировать поездку
            </Button>
          </div>
        </div>
        
        {/* Основная часть футера */}
        <div className="py-10 px-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-tatarstan-red to-tatarstan-accent2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">TT</span>
              </div>
              <div>
                <h2 className="font-bold text-xl">Татарстан</h2>
                <p className="text-xs text-white/60">Республика возможностей</p>
              </div>
            </div>
            <p className="text-white/60 mb-4">
              Официальный туристический портал Республики Татарстан. 
              Информация о погоде, достопримечательностях и полезные советы путешественникам.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <FooterLink label="О республике" />
              <FooterLink label="Достопримечательности" />
              <FooterLink label="Туристические маршруты" />
              <FooterLink label="Традиции и культура" />
              <FooterLink label="Татарская кухня" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Города Татарстана</h3>
            <ul className="space-y-2">
              <FooterLink label="Казань" />
              <FooterLink label="Набережные Челны" />
              <FooterLink label="Нижнекамск" />
              <FooterLink label="Альметьевск" />
              <FooterLink label="Елабуга" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-tatarstan-accent2 mt-1" />
                <span className="text-white/70">420111, г. Казань, Кремль, проезд Шейнкмана, 47</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-tatarstan-accent2 mt-1" />
                <span className="text-white/70">+7 (843) 222-90-30</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-tatarstan-accent2 mt-1" />
                <span className="text-white/70">tatarstan@tourism.gov.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Нижняя часть футера с копирайтом */}
        <div className="py-6 px-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© 2023 Республика Татарстан. Все права защищены.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
    {icon}
  </a>
);

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="text-white/70 hover:text-white transition-colors">{label}</a>
  </li>
);

export default Footer;