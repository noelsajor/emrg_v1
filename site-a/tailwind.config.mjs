/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#080a0f',
                'bg-2': '#0e1118',
                'bg-3': '#131720',
                'bg-card': '#111520',
                border: 'rgba(255, 255, 255, 0.07)',
                'border-hover': 'rgba(139, 92, 246, 0.4)',
                accent: '#7360f8',
                'accent-light': '#bc9bf2',
                'accent-2': '#bad341',
                'off-white': '#fff2ec',
                'gray-1': '#e2e4e9',
                'gray-2': '#9ca3af',
                'gray-3': '#4b5563',
                'gray-4': '#1f2533',
                text: '#d1d5db',
                'text-muted': '#6b7280',
            },
            fontFamily: {
                display: ['Funnel Display', 'sans-serif'],
                body: ['Funnel Sans', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '12px',
                lg: '20px',
            },
            boxShadow: {
                accent: '0 0 40px rgba(115, 96, 248, 0.2)',
                card: '0 4px 40px rgba(0, 0, 0, 0.4)',
            },
            spacing: {
                'nav': '72px',
                'section': '120px',
            },
            maxWidth: {
                'content': '1200px',
            },
            transitionDuration: {
                'DEFAULT': '300ms',
            },
            transitionTimingFunction: {
                'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
};
