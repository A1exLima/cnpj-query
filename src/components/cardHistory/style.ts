import { styled } from 'styled-components'

export const CardContainer = styled.section`
  cursor: pointer;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(120%);
  }

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme['Slate-Blue']};
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 1.5rem 2rem;

    > h3 {
      font-size: 2.2rem;
      font-weight: 600;
      font-family: var(--font-Inter);
      color: ${({ theme }) => theme['Pale-Silver']};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 2rem;

      > p {
        font-size: 1.4rem;
        font-weight: 400;
        font-family: var(--font-Inter);
      }
    }
  }

  > div:last-child {
    background-color: ${({ theme }) => theme['Pale-Silver']};
    color: ${({ theme }) => theme['Charcoal-Blue']};
    padding: 1.5rem 2rem;
    border-radius: 0 0 0.5rem 0.5rem;

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
