import { styled } from 'styled-components'

interface CnpjEntryProps {
  $colorCheck: boolean
  $checkIfCnpjExists: boolean
}

export const BannerAndCnpEntryContainer = styled.section`
  width: 100%;
  border-radius: 2rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme['Midnight-Blue']};
  margin-top: 4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px;

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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 15px;

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

  > span {
    margin-top: -0.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    font-family: var(--font-Roboto);
    color: ${({ theme, $checkIfCnpjExists }) =>
      $checkIfCnpjExists ? theme['Charcoal-Blue'] : theme['check-red']};

    animation: blink 1s 2;

    @keyframes blink {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
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

      .recharge-icon {
        transition: 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      .icon-color {
        cursor: default;
        color: ${({ $colorCheck, theme }) =>
          $colorCheck ? theme['check-red'] : theme['check-green']};
      }
    }
  }

  > button {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme['consult-button']};
    border: none;
    margin-top: 1.5rem;
    width: 15rem;
    padding: 1.4rem 2.2rem;
    border-radius: 1rem;

    font-size: 1.8rem;
    font-weight: 500;
    font-family: var(--font-Roboto);
    color: ${({ theme }) => theme['Chinese-White']};
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 5px;
    cursor: pointer;
    filter: brightness(130%);
    outline: 1px solid transparent;

    transition: filter 0.4s ease-in-out;

    &:hover:not(:disabled) {
      filter: brightness(160%);
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme['white-color']};
    }

    &:disabled {
      cursor: not-allowed;
      filter: brightness(100%);
    }

    > svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme['Chinese-White']};

      animation: spin 0.4s infinite linear;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`
