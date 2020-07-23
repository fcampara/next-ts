import { Header } from 'layout/Header/style'
import AutocompleteAddress from 'components/AutocompleteAddress'
export default function Home() {
  return (
    <Header>
      <div className="header__container">
        <AutocompleteAddress className="header__input" />
      </div>
    </Header>
  )
}
