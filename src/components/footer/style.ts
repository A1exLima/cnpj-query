import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme['Midnight-Blue']};
  box-shadow: rgba(0, 0, 0, 0.35) 0px -1px 10px;
`

export const Content = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 1.8rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  > p {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: var(--font-Roboto);
    color: ${({ theme }) => theme['Pale-Silver']};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > p {
      font-size: 1.6rem;
      font-weight: 400;
      font-family: var(--font-Roboto);
      color: ${({ theme }) => theme['Pale-Silver']};
    }

    > svg {
      font-size: 2.2rem;
      margin-top: 0.4rem;
      color: ${({ theme }) => theme['Pale-Silver']};
    }
  }
`
