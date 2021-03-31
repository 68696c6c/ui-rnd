import _merge from 'lodash.merge'

export interface Colors {
  primary: string
  secondary: string
}

export interface Theme {
  name: string
  colors: Colors
}

const defaultColors: Colors = {
  primary: 'orange',
  secondary: 'blue',
}

export const makeTheme = (themeConfig?: Partial<Theme>): Theme => {
  const config = typeof themeConfig !== 'undefined' ? themeConfig : {}
  const colors = _merge(defaultColors, config.colors)
  return {
    name: typeof config.name === 'string' ? config.name : 'horns-theme',
    colors
  }
}
