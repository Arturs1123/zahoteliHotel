import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    typography: {
      ellipsis: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-gray': '#919494',
        'black-blue': '#3C4EF21A',
        'accent': '#3C4EF2'
      },
      screens: {
        'middle': { 'raw': '(min-width: 1330px)' }
      }
    },
    fontSize: {
      sm: '0.75rem', //12px
      base: '1rem', //16px
      'lg': '1.125rem', //18px
      'xl': '1.25rem', //20px
      '2xl': '1.5rem', //24px
      '2.5xl': '1.75rem', //28px
      '5xl': '3.1875rem', //51px,
      'h1': [
        '3.875rem',
        {
          lineHeight: '4.65rem',
          fontWeight: '600'
        }
      ],
      'h2': [
        '3.188rem',
        {
          lineHeight: '3.825rem',
          fontWeight: '600'
        }
      ],
      'h3': [
        '2.75rem',
        {
          lineHeight: '3.3rem',
          fontWeight: '600'
        }
      ],
      'h4': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
          fontWeight: '600'
        }
      ],
      'h5': [
        '1.5rem',
        {
          lineHeight: '1.8rem',
          fontWeight: '600'
        }
      ],
      'h6': [
        '1.25rem',
        {
          lineHeight: '1.708rem',
          fontWeight: '800'
        }
      ],
      'p1': [
        '1.25rem',
        {
          lineHeight: '2rem',
          fontWeight: '500'
        }
      ],
      'p2': [
        '1.125rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '500'
        }
      ],
      'p3': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500'
        }
      ],
      'p4': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500'
        }
      ],
      'p5': [
        '0.75rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500'
        }
      ],
      'btn': [
        '1.125rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '600'
        }
      ],
    }
  },
  plugins: [],
};
export default config;
