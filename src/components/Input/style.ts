import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  background: white;
  align-items: center;

  & > input {
    padding-left: 16px;
    outline: none;
    border-width: 0;
    height: 36px;
    font-size: 16px;
    width: 100%;
    border-radius: 8px;
  }
`
