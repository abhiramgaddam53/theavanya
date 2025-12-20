// Typography constants for consistent font sizing across the application

export const TYPOGRAPHY = {
  // Hero Headings - Large dramatic text
  heroXL: "text-9xl font-serif font-light", // 128px - For dramatic intros (e.g., wellness page)
  heroLarge: "text-7xl font-serif", // 72px - For page heroes
  hero: "text-5xl md:text-7xl font-serif", // 48px → 72px - Standard page hero

  // Section Headings
  h2: "text-4xl md:text-5xl font-serif", // 36px → 48px - Main section titles
  h2Small: "text-2xl md:text-4xl lg:text-5xl font-serif", // 24px → 36px → 48px - Smaller section titles
  h3: "text-2xl md:text-3xl font-serif", // 24px → 30px - Card titles, subsections
  h3Small: "text-xl font-serif", // 20px - Small subsection titles
  h4: "text-lg font-serif", // 18px - Small headings

  // Special Hero Variants
  heroSplit: "text-xl md:text-5xl lg:text-6xl font-serif", // For split hero layouts
  heroBig: "text-5xl md:text-6xl font-serif", // Medium-large hero
  
  // Body Copy
  body: "text-sm md:text-base font-poppins", // 14px → 16px - Standard body
  bodyLarge: "text-base md:text-lg font-poppins", // 16px → 18px - Larger body
  bodySmall: "text-xs md:text-sm font-poppins", // 12px → 14px - Small body

  // Special Body Styles
  bodyLight: "text-sm md:text-base font-poppins font-light", // Light weight body
  bodyMedium: "text-sm md:text-base font-poppins font-medium", // Medium weight body

  // UI Elements
  label: "text-xs font-poppins font-bold uppercase", // 12px - Labels, tags
  labelMedium: "text-sm font-poppins font-medium", // 14px - Medium labels
  button: "text-xs font-poppins font-bold uppercase tracking-widest", // 12px - Button text
  caption: "text-[10px] font-poppins uppercase tracking-widest", // 10px - Captions
  
  // Testimonials & Quotes
  quote: "text-3xl md:text-4xl font-serif leading-tight", // 30px → 36px - Quote text
  author: "text-sm font-poppins font-bold", // 14px - Author name
  authorRole: "text-xs font-poppins uppercase tracking-widest", // 12px - Role/title
};

// Responsive heading scales for consistency
export const HEADINGS = {
  // Page main headings (h1 - hero style)
  pageHero: "font-serif text-5xl md:text-7xl tracking-tighter",
  
  // Section headings (h2 style)
  section: "font-serif text-4xl md:text-5xl leading-tight",
  
  // Subsection headings (h3 style)
  subsection: "font-serif text-2xl md:text-3xl",
  
  // Card headings (h4 style)
  card: "font-serif text-2xl",
};

// Text weights for consistency
export const WEIGHTS = {
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
};

// Color + Typography combinations (commonly used patterns)
export const TEXT_STYLES = {
  // Headings
  headingDark: "text-[#1a1a1a] font-serif",
  headingLight: "text-white font-serif",
  
  // Body
  bodyDark: "text-[#4A4A4A] font-poppins",
  bodyLight: "text-white font-poppins opacity-90",
  bodyGray: "text-[#1a1a1a]/70 font-poppins",
  
  // Labels
  labelDark: "text-xs font-poppins font-bold uppercase text-neutral-500",
  labelLight: "text-xs font-poppins font-bold uppercase text-white/80",
};
