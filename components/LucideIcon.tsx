import {
  Globe,
  Smartphone,
  Laptop,
  Cpu,
  CodeXml,
  BrainCircuit,
  Cloud,
  Link,
  Palette,
  Zap,
  ShieldCheck,
  Timer,
  Binary,
  HeartHandshake,
  Mail,
  Phone,
  Menu,
  X,
  ArrowRight,
  Check,
  Quote,
  type LucideProps
} from "lucide-react";

export const iconMap = {
  Globe,
  Smartphone,
  Laptop,
  Cpu,
  CodeXml,
  BrainCircuit,
  Cloud,
  Link,
  Palette,
  Zap,
  ShieldCheck,
  Timer,
  Binary,
  HeartHandshake,
  Mail,
  Phone,
  Menu,
  X,
  ArrowRight,
  Check,
  Quote,
};

export type IconName = keyof typeof iconMap;

interface LucideIconProps extends Omit<LucideProps, "name"> {
  name: IconName | string;
}

export default function LucideIcon({ name, ...props }: LucideIconProps) {
  const IconComponent = iconMap[name as IconName] || Globe;
  return <IconComponent {...props} />;
}
