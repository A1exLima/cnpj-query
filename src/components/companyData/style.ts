import { styled } from 'styled-components'

export const CompanyDataContainer = styled.article`
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
