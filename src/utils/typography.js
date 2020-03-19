import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Suisse Sign",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Suisse Sign", "sans-serif"],
  scaleRatio: 3,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    blockquote: {
      fontFamily: ['Suisse Intl Mono', 'sans-serif'].join(','),
      ...adjustFontSizeTo('22px'),
      paddingLeft: '32px',
      marginLeft: '48px',
      borderLeft: `2px solid black`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
  })
})

export default typography