import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { CiGlobe, CiMapPin, CiMedicalCross } from 'react-icons/ci';
import { FaRegCircle, FaGamepad } from 'react-icons/fa';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export const Layers = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </svg>
);

export const Send = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9 22 2Z" />
  </svg>
);

export const Linkedin = (props: React.ComponentProps<typeof AiFillLinkedin>) => (
  <AiFillLinkedin {...props} />
);

export const Github = (props: React.ComponentProps<typeof AiFillGithub>) => (
  <AiFillGithub {...props} />
);

export const Mail = (props: React.ComponentProps<typeof AiOutlineMail>) => (
  <AiOutlineMail {...props} />
);

export const Globe = (props: React.ComponentProps<typeof CiGlobe>) => (
    <CiGlobe {...props} />
);

export const Pin = (props: React.ComponentProps<typeof CiMapPin>) => (
    <CiMapPin {...props} />
);

export const Medical = ({ size = 20, ...props }: IconProps) => (
    <CiMedicalCross {...props} />
);

export const Orkut = ({ size = 20, ...props }: IconProps) => (
    <FaRegCircle />
);

export const Gamepad = (props: React.ComponentProps<typeof FaGamepad>) => (
    <FaGamepad {...props} />
);

export const ExternalLink = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 3h3v3" />
    <path d="M14 10L21 3" />
    <path d="M5 19h14V9" />
  </svg>
);

export const CheckCircle2 = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const AlertCircle = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

export const Sparkles = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l1.5 4 4 1.5-4 1.5L12 14l-1.5-4-4-1.5 4-1.5z" />
    <path d="M6 19l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
  </svg>
);

export const ArrowRight = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="M15 6l6 6-6 6" />
  </svg>
);

export const Menu = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </svg>
);

export const X = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
);

export const Database = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

export const Cpu = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M4 9h3" />
    <path d="M4 15h3" />
    <path d="M20 9h-3" />
    <path d="M20 15h-3" />
    <path d="M9 4v3" />
    <path d="M15 4v3" />
    <path d="M9 20v-3" />
    <path d="M15 20v-3" />
  </svg>
);

export const Monitor = ({ size = 20, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 18v2" />
  </svg>
);

export default {} as Record<string, any>;
