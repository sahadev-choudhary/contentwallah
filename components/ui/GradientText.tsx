interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'warm' | 'cool';
}

export default function GradientText({ children, className = '', variant = 'default' }: GradientTextProps) {
  const classes = {
    default: 'gradient-text',
    warm: 'gradient-text-warm',
    cool: 'gradient-text',
  };
  return <span className={`${classes[variant]} ${className}`}>{children}</span>;
}
