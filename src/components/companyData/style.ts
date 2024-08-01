import { styled } from 'styled-components'

export const CompanyDataContainer = styled.section`
  > div:first-child {
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    margin-bottom: 2rem;

    > p {
      margin-left: 0.1rem;
      font-size: 1.3rem;
      font-weight: 400;
      font-family: var(--font-Inter);
      color: ${({ theme }) => theme['Pale-Silver']};
    }
  }

  .query-cnpj {
    margin-bottom: 4rem;

    > h2 {
      font-size: 2.2rem;
      font-weight: 600;
      font-family: var(--font-Inter);
      color: ${({ theme }) => theme['card-button']};
      background-color: ${({ theme }) => theme['Slate-Blue']};
      padding: 1.5rem 2rem;
      border-radius: 1.5rem 1.5rem 0 0;
    }

    > div {
      border-radius: 0 0 1.5rem 1.5rem;
      background-color: ${({ theme }) => theme['Chinese-White']};
      padding: 1.5rem 2rem;

      > span:first-child {
        white-space: nowrap;
        font-size: 2rem;
        font-weight: 600;
        font-family: var(--font-Roboto);
        color: ${({ theme }) => theme['Charcoal-Blue']};
      }

      > span:last-child {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: var(--font-Roboto);
        color: ${({ theme }) => theme['Charcoal-Blue']};
      }
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .container-partner {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`
