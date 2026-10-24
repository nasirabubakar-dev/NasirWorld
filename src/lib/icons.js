import { createElement } from 'react';
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
  Facebook,
  Instagram,
  Link,
} from 'lucide-react';

// Custom SVG for the X brand logo; Lucide's X icon is a generic close symbol.
function XBrand({ size = 24, ...props }) {
  return createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      'aria-hidden': true,
      ...props,
    },
    createElement('path', {
      d: 'M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.29 19.494h2.039L6.486 3.238H4.298z',
    }),
  );
}

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
  Facebook,
  Instagram,
  X: XBrand,
  Link,
};

export function getIcon(name) {
  return iconMap[name] ?? Box;
}
