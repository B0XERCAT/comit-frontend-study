import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface StudyCardProps {
  imageSrc: string;
  title: string;
  campus: string;
  stack: string[];
  level: string;
  index: number;
}

export default function StudyCard({
  imageSrc,
  title,
  campus,
  stack,
  level,
  index,
}: StudyCardProps) {
  const badges = [level, stack[0], campus];
  return (
    <Link to={`/${index}`}>
      <div className="relative flex w-44 transform cursor-pointer flex-col items-center justify-center overflow-hidden px-2 py-4 shadow-md transition-transform hover:scale-105 hover:shadow-2xl sm:w-60 sm:px-4 sm:py-8">
        <div className="mb-8 mt-4 h-24 w-24 overflow-hidden sm:h-36 sm:w-36">
          <img src={imageSrc} alt={title} width={144} height={144}></img>
        </div>
        <p className="text-center text-base font-bold sm:text-lg">{title}</p>
        <div className="mt-2 flex w-40 flex-wrap justify-around gap-y-2 sm:w-48">
          {badges.map((badge, index: number) => (
            <Badge key={index} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
