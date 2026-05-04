const defaultValues = {
  DEFAULT: '1',
  0: '0%',
  1: '1%',
  2: '2%',
  3: '3%',
  4: '4%',
  5: '5%',
  10: '10%',
  15: '15%',
  20: '20%',
  25: '25%',
  30: '30%',
  35: '35%',
  40: '40%',
  45: '45%',
  50: '50%',
  55: '55%',
  60: '60%',
  65: '65%',
  70: '70%',
  75: '75%',
  80: '80%',
  85: '85%',
  90: '90%',
  95: '95%',
  100: '100%',
}

function createBatikBackground(name: string, filename: string) {
  return {
    [name]: (value: string) => ({
      backgroundImage: `url("/batik/${filename}.svg")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      backgroundSize: '180px',
      opacity: value,
    }),
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function bgBatik(api: any) {
  api.matchUtilities(
    {
      ...createBatikBackground('batik', 'batik-bg'),
    },
    {
      values: defaultValues,
    },
  )
}
