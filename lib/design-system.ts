export const colors = {
  primary: '#154350',
  secondary: '#8FBEC3',
  accent: '#FAC833',
  background: '#231F20',
  neutral: '#939958',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)',
    muted: 'rgba(255, 255, 255, 0.5)'
  },
  border: {
    primary: 'rgba(143, 190, 195, 0.1)',
    highlight: 'rgba(250, 200, 51, 0.3)'
  }
} as const

export const gradients = {
  primary: 'linear-gradient(to right, #154350, #8FBEC3)',
  accent: 'linear-gradient(to right, #FAC833, #939958)',
  subtle: 'linear-gradient(to right, rgba(143, 190, 195, 0.1), rgba(21, 67, 80, 0.1))',
  glow: 'radial-gradient(circle at center, rgba(143, 190, 195, 0.15), transparent 70%)'
} as const

export const shadows = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)'
} as const

export const animations = {
  hover: 'transition-all duration-300',
  float: 'animate-float',
  pulse: 'animate-pulse',
  shimmer: 'animate-shimmer'
} as const

export const spacing = {
  section: {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24'
  },
  container: {
    sm: 'max-w-5xl',
    md: 'max-w-6xl',
    lg: 'max-w-7xl'
  }
} as const

export const typography = {
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-sora font-light leading-tight',
    h2: 'text-3xl md:text-4xl font-sora font-light leading-tight',
    h3: 'text-2xl md:text-3xl font-sora font-light leading-relaxed',
    h4: 'text-xl md:text-2xl font-sora font-medium leading-relaxed'
  },
  body: {
    large: 'text-lg leading-relaxed',
    base: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed'
  }
} as const 