import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  /*   background-color: ${(props) => buttonVariants[props.variant]}; */
  background-color: ${(props) =>
    props.theme[
      'green-500'
    ]}; /* Bom para trocar de temas light/dark somente seria necessario ter os 2 arquivos */
`
