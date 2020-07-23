import { Header } from 'layout/Header/style'
import Input from 'components/Input'
export default function Home() {
  return (
    <Header>
      <div className="header__container">
        <Input className="header__input" />
      </div>
    </Header>
  )
}
