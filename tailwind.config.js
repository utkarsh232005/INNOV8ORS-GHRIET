/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            }, animation: {
                "meteor-effect": "meteor 5s linear infinite",
                "aurora": "aurora 8s ease-in-out infinite alternate",
            },
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(45deg) translateX(0)", opacity: 1 },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "rotate(45deg) translateX(-1000px)",
                        opacity: 0,
                    },
                },
                aurora: {
                    "0%": { backgroundPosition: "0% 50%", transform: "rotate(-5deg) scale(0.9)" },
                    "25%": { backgroundPosition: "50% 100%", transform: "rotate(5deg) scale(1.1)" },
                    "50%": { backgroundPosition: "100% 50%", transform: "rotate(-3deg) scale(0.95)" },
                    "75%": { backgroundPosition: "50% 0%", transform: "rotate(3deg) scale(1.05)" },
                    "100%": { backgroundPosition: "0% 50%", transform: "rotate(-5deg) scale(0.9)" },
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.border-border': {
                    'border-color': 'hsl(var(--border))',
                },
            });
        },
    ],
}