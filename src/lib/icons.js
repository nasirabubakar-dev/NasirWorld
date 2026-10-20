import {
  Monitor,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Box,
  Layout,
  Building2,
  Code2,
  Github,
  Linkedin,
  Link,
} from 'lucide-react';

export const iconMap = {
  Monitor,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Box,
  Layout,
  Building2,
  Code2,
  Github,
  Linkedin,
  Link,
};

export function getIcon(name) {
  return iconMap[name] ?? Box;
}
