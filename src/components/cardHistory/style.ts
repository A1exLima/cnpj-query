import { styled } from 'styled-components'

export const CardContainer = styled.section`
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(120%);
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;

    background-color: ${({ theme }) => theme['Slate-Blue']};
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 1.5rem 2rem 1rem 2rem;

    > h3 {
      font-size: 1.8rem;
      font-weight: 600;
      font-family: var(--font-Roboto);
      color: ${({ theme }) => theme['card-button']};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 2rem;

      > p {
        font-size: 1.3rem;
        font-weight: 400;
        font-family: var(--font-Roboto);
        color: ${({ theme }) => theme['card-button']};
      }
    }
  }

  > div:last-child {
    background-color: ${({ theme }) => theme['Chinese-White']};
    color: ${({ theme }) => theme['Charcoal-Blue']};
    padding: 1.5rem 2rem;
    border-radius: 0 0 1.5rem 1.5rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > p {
        font-size: 1.8rem;
        font-weight: 400;
        font-family: var(--font-Roboto);

        > span {
          font-weight: 500;
        }
      }
    }
  }
`
