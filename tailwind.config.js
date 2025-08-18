/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        // Ejemplo: Agregar un nuevo valor de espaciado
        spacing: {
          '128': '32rem', // Esto crea utilidades como p-128, m-128, w-128, h-128
          'custom-lg': '40rem',
        },
        // Ejemplo: Agregar un nuevo color
        colors: {
          'custom-gold': '#a27e26', // Este ya lo agregamos
          'brand-primary': 'red', // <-- NUEVO COLOR PERSONALIZADO
          'official': 'oklch(0.65 0.18 281.83)', // Asegúrate que el formato oklch sea una cadena
          'custom-purple': '#7e5bef',
        },
        // Ahora puedes usar 'official' para otras extensiones si es necesario,
        // o definir backgroundColor directamente con el valor.
        backgroundColor: {
          // Opción 1: Usar el valor directamente
          'custom-blue': 'oklch(0.65 0.18 281.83)',
          // Opción 2 (si 'official' ya está definido en colors y quieres referenciarlo conceptualmente):
          // Tailwind no "hereda" así directamente. Si quieres usar el color 'official'
          // para bg-custom-blue, simplemente asigna el mismo valor.
          // Si 'custom-blue' debe ser el color 'official', entonces la clase a usar sería bg-official.
          // Si quieres una clase ALIAS 'bg-custom-blue' que use el color 'official', hazlo así:
          // 'custom-alias-blue': 'oklch(0.65 0.18 281.83)', // y luego usarías bg-custom-alias-blue
        },
        // Ejemplo: Extender o agregar variantes de fuente
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Extiende la fuente sans-serif por defecto
          custom: ['"Mi Fuente Personalizada"', 'serif'], // Agrega una nueva familia de fuentes
        },
        // Ejemplo: Agregar una nueva utilidad de opacidad
        opacity: {
          '15': '0.15',
        }
      },
    },
    plugins: [],
  }