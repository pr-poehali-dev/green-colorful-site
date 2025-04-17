import { Building } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-republic to-tatarstan-red text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Building className="h-6 w-6" />
            <h2 className="text-xl font-bold">Республика Татарстан</h2>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">© 2023 Все права защищены</p>
            <p className="text-sm opacity-80 mt-1">Информация о республике, погоде и рекомендации по одежде</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;