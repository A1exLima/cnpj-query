import { styled } from 'styled-components'

interface CnpjEntryProps {
  $colorCheck: boolean
}

export const BannerAndCnpEntryContainer = styled.article`
  width: 100%;
  border-radius: 2rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme['Midnight-Blue']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9rem;

  @media (max-width: 1020px) {
    flex-direction: column;
    gap: 4rem;
  }
`

export const Banner = styled.section`
  max-width: 40.1rem;

  > h2 {
    font-size: 3.5rem;
    font-weight: 500;
    font-family: var(--font-Archivo);
    color: ${({ theme }) => theme['Pale-Silver']};
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme['Pale-Silver-50']};
  }

  > p {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: var(--font-Roboto);
    color: ${({ theme }) => theme['Pale-Silver']};
    padding-top: 1.5rem;
  }

  @media (max-width: 1020px) {
    max-width: 100%;

    > h2,
    p {
      text-align: center;
    }

    > p {
      padding-top: 2.5rem;
    }
  }
`

export const CnpjEntry = styled.section<CnpjEntryProps>`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['Chinese-White']};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > label {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: var(--font-Archivo);
    color: ${({ theme }) => theme['Charcoal-Blue']};
  }

  > input {
    background: ${({ theme }) => theme['Light-Gray']};
    border: none;
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: var(--font-Roboto);
    color: ${({ theme }) => theme['Charcoal-Blue']};
    outline: 1px solid transparent;

    &::placeholder {
      opacity: 60%;
      font-size: 1.4rem;
    }

    transition: outline 0.4s ease-in-out;

    &:hover {
      outline: 1px solid ${({ theme }) => theme['Charcoal-Blue']};
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme['Charcoal-Blue']};
    }
  }

  /* Para navegadores Webkit (Chrome, Safari, Edge) */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Para garantir compatibilidade com o estilo do Edge (baseado no Chromium) */
  input[type='number']::-ms-outer-spin-button,
  input[type='number']::-ms-inner-spin-button {
    display: none;
  }

  > div {
    background: ${({ theme }) => theme['Light-Gray']};
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;

    > label {
      font-size: 1.5rem;
      font-weight: 500;
      font-family: var(--font-Roboto);
      color: ${({ theme }) => theme['Charcoal-Blue']};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      > input {
        width: 100%;
        background: ${({ theme }) => theme['Light-Gray']};
        border: none;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px;
        font-size: 1.6rem;
        font-weight: 500;
        font-family: var(--font-Roboto);
        color: ${({ theme }) => theme['Charcoal-Blue']};
        outline: 1px solid transparent;

        &::placeholder {
          opacity: 60%;
          font-size: 1.4rem;
        }

        transition: outline 0.4s ease-in-out;

        &:hover {
          outline: 1px solid ${({ theme }) => theme['Charcoal-Blue']};
        }

        &:focus {
          outline: 1px solid ${({ theme }) => theme['Charcoal-Blue']};
        }
      }

      > svg {
        cursor: pointer;
        margin-top: 1rem;
        font-size: 4rem;
        color: ${({ theme }) => theme['Slate-Blue']};
      }

      .icon-color {
        color: ${({ $colorCheck, theme }) =>
          $colorCheck ? theme['check-red'] : theme['check-green']};
      }
    }
  }

  > button {
    background-color: ${({ theme }) => theme['Midnight-Blue']};
    border: none;
    margin-top: 1.5rem;
    width: 15rem;
    padding: 1.4rem 2.2rem;
    border-radius: 1rem;

    font-size: 1.8rem;
    font-weight: 500;
    font-family: var(--font-Roboto);
    color: ${({ theme }) => theme['Chinese-White']};
    cursor: pointer;

    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px;

    transition: filter 0.4s ease-in-out;

    &:hover {
      filter: brightness(150%);
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
