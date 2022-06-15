module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              lineHeight: "2em",
              marginBottom: "0"
            },
            h2: {
              marginBottom: "0.3em"
            },
            p: {
              marginTop: "0.8em",
              marginBottom: 0
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
