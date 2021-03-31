import React, { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { makeTheme, Theme } from '../config'

interface ThemeProviderProps {
  children: ReactNode
  // eslint-disable-next-line react/require-default-props
  theme?: Partial<Theme>
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => (
  <EmotionThemeProvider theme={makeTheme(theme)}>
    {children}
  </EmotionThemeProvider>
)

export default ThemeProvider
