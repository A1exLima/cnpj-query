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

  margin-bottom: 4rem;

  > h2 {
    font-size: 2.4rem;
    font-weight: 600;
    font-family: var(--font-Inter);
    padding-bottom: 4rem;
  }

  .container-search {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    background: ${({ theme }) => theme['Chinese-White']};
    margin-bottom: 2rem;
    border-radius: 1.5rem;
    padding: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(120%);
    }

    > label {
      cursor: pointer;
      > svg {
        display: flex;
        font-size: 3rem;
        color: ${({ theme }) => theme['Slate-Blue']};
      }
    }

    > input {
      width: inherit;
      border: none;
      background-color: ${({ theme }) => theme['Chinese-White']};

      font-size: 1.6rem;
      font-weight: 400;
      font-family: var(--font-Roboto);
      color: ${({ theme }) => theme['Charcoal-Blue']};

      &::placeholder {
        color: ${({ theme }) => theme['Charcoal-Blue']};
        font-weight: 500;
        opacity: 75%;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`
