import { Menu, X, MapPin, CloudSun, Shirt } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-tatarstan-dark/70 shadow-sm">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Логотип и название */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-tatarstan-green to-tatarstan-accent1 flex items-center justify-center shadow-neon">
              <span className="text-white font-bold text-xl">TT</span>
            </div>
            <div>
              <h1 className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-tatarstan-green to-tatarstan-accent3">
                Татарстан
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">
                Открой для себя республику
              </p>
            </div>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem icon={<MapPin size={18} />} label="О республике" href="#about" />
            <NavItem icon={<CloudSun size={18} />} label="Погода" href="#weather" />
            <NavItem icon={<Shirt size={18} />} label="Гардероб" href="#clothing" />
            <Button className="bg-gradient-to-r from-tatarstan-red to-tatarstan-accent2 hover:opacity-90 transition-opacity rounded-full shadow-neon-red text-white">
              Исследовать
            </Button>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden p-2 rounded-full bg-muted hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-tatarstan-dark border-t animate-slide-up shadow-md">
          <nav className="container mx-auto py-4 px-4 flex flex-col gap-4">
            <MobileNavItem icon={<MapPin size={18} />} label="О республике" />
            <MobileNavItem icon={<CloudSun size={18} />} label="Погода" />
            <MobileNavItem icon={<Shirt size={18} />} label="Гардероб" />
            <Button className="bg-gradient-to-r from-tatarstan-red to-tatarstan-accent2 hover:opacity-90 w-full rounded-full">
              Исследовать
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <a 
    href={href}
    className="flex items-center gap-2 font-medium hover:text-tatarstan-green transition-colors relative group"
  >
    <span className="text-tatarstan-green">{icon}</span>
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tatarstan-green group-hover:w-full transition-all duration-300"></span>
  </a>
);

const MobileNavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a 
    href="#"
    className="flex items-center gap-2 p-2 font-medium hover:bg-accent rounded-lg transition-colors"
  >
    <span className="text-tatarstan-green">{icon}</span>
    {label}
  </a>
);

export default Header;