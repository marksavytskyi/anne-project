module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding for all breakpoints
          sm: '2rem',      // Padding for 'sm' breakpoint
          lg: '4rem',      // Padding for 'lg' breakpoint
          xl: '5rem',      // Padding for 'xl' breakpoint
        },
      },
    },
  },
  plugins: [],
}
