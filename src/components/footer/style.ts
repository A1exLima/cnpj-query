import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme['Midnight-Blue']};
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
      filter: brightness(150%);
    }

    > svg {
      font-size: 2.2rem;
      color: ${({ theme }) => theme['Pale-Silver']};
      filter: brightness(150%);

      @media (max-width: 768px) {
        margin-top: 0.4rem;
      }
    }
  }
`
