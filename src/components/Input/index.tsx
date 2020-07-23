import { Container } from 'components/Input/style'
import { InputProps } from 'components/Input/model'

export default function Input({ className, icon }: InputProps) {
  return (
    <Container className={className}>
      {icon && <i className={icon}></i>}
      <input placeholder="Inserir endereço para ver preço" />
    </Container>
  )
}
