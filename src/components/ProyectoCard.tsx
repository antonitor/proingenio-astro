import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Route } from "lucide-react";

interface ProyectoCardProps {
  title: string;
  description: string;
  fullDescription: string;
  iconName: "building" | "home" | "route";
  tags: string[];
  gradient: string;
  details?: {
    area?: string;
    duracion?: string;
    cliente?: string;
  };
}

const iconMap = {
  building: Building,
  home: Home,
  route: Route,
};

export function ProyectoCard({
  title,
  description,
  fullDescription,
  iconName,
  tags,
  gradient,
  details,
}: ProyectoCardProps) {
  const Icon = iconMap[iconName];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 animate-slide-up overflow-hidden">
          <div className={`relative h-48 ${gradient} flex items-center justify-center overflow-hidden`}>
            <Icon className="w-24 h-24 text-white/20 absolute" />
            <div className="relative z-10 text-center text-white">
              <Icon className="w-16 h-16 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">{tags[0]}</span>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {fullDescription}
          </DialogDescription>
        </DialogHeader>
        {details && (
          <div className="space-y-3 mt-4">
            {details.area && (
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="font-medium text-slate-700 dark:text-slate-300">Área:</span>
                <span className="text-slate-600 dark:text-slate-400">{details.area}</span>
              </div>
            )}
            {details.duracion && (
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="font-medium text-slate-700 dark:text-slate-300">Duración:</span>
                <span className="text-slate-600 dark:text-slate-400">{details.duracion}</span>
              </div>
            )}
            {details.cliente && (
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <span className="font-medium text-slate-700 dark:text-slate-300">Cliente:</span>
                <span className="text-slate-600 dark:text-slate-400">{details.cliente}</span>
              </div>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
