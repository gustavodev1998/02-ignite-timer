import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

/* Estou a importar o styled components e a declarar o modulo para acrescentar tipagem caso contrario estaria a criar de raiz */
declare module 'styled-components' {
  /* DefaultTheme interface interna do styled-components própria para receber os nossos tipos */
  export interface DefaultTheme extends ThemeType {}
}
