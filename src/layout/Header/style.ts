import styled from 'styled-components'

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  .header__input {
    max-width: 320px;
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    padding: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: ${({ theme }) => theme.mediaQuery.lg}) {
    .header__container {
      max-width: ${({ theme }) => theme.mediaQuery.lg};
    }
  }
`
