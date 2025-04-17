import { Building } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-republic to-tatarstan-red text-white py-6 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Республика Татарстан</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">О республике</li>
            <li className="hover:underline">Погода</li>
            <li className="hover:underline">Сезоны</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;