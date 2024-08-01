import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  margin-top: 8.5rem;
`

export const Content = styled.article`
  max-width: 114rem;
  margin: 0 auto;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const WarningMessage = styled.section`
  background-color: ${({ theme }) => theme['Midnight-Blue']};
  padding: 4rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px;

  > p {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: var(--font-Roboto);
    color: ${({ theme }) => theme['Pale-Silver']};
  }
`
