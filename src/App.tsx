import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Clean Setup</h1>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />

      <GlobalStyle />
    </ThemeProvider>
  )
}
