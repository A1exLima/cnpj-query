import { styled } from 'styled-components'

export const HistoryContainer = styled.main`
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

  @media (max-width: 768px) {
    padding: 2rem;
  }

  margin-bottom: 4rem;

  > h2 {
    font-size: 2.4rem;
    font-weight: 600;
    font-family: var(--font-Inter);
    padding-bottom: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
