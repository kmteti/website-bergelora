import localFont from 'next/font/local'

export const montserrat = localFont({
  src: [
    {
      path: './fonts/montserrat/Montserrat.ttf',
      style: 'normal',
    },
    {
      path: './fonts/montserrat/Montserrat-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
})

export const sourceSerif4 = localFont({
  src: [
    {
      path: './fonts/sourceserif4/SourceSerif4.ttf',
      style: 'normal',
    },
    {
      path: './fonts/sourceserif4/SourceSerif4-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-source-serif-4',
  display: 'swap',
})
