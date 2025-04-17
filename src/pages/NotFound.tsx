import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-accent p-4 text-center">
      <MapPin className="w-16 h-16 text-republic mb-4" />
      <h1 className="text-4xl font-bold text-republic-dark mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-republic mb-4">Страница не найдена</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Похоже, вы сбились с пути. Эта страница не существует или была перемещена.
      </p>
      <Button asChild className="bg-republic hover:bg-republic-dark">
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
};

export default NotFound;