import {
  Printer,
  Megaphone,
  Package,
  Gift,
  PenTool,
  Building2,
  Truck,
  Layers,
  ShieldCheck,
  Award,
  Users,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/types";

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  offset: Printer,
  visual: Megaphone,
  merch: Package,
  box: Gift,
  branding: PenTool,
  realestate: Building2,
};

/**
 * Íconos compartidos por diferenciales y motivos ("¿Por qué ASTCORP?").
 * Sin `globe`: se retiró junto con la comunicación de envíos internacionales.
 */
const featureIcons = {
  truck: Truck,
  layers: Layers,
  shield: ShieldCheck,
  award: Award,
  users: Users,
  boxes: Boxes,
} satisfies Record<string, LucideIcon>;

export type FeatureIconName = keyof typeof featureIcons;

export function ServiceIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: Service["icon"];
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export function FeatureIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: FeatureIconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = featureIcons[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
