import { styled } from 'styled-components'

interface FormContainerProps {
  $displayGrid: boolean
  $buttonColorEdit: boolean
}

export const FormContainer = styled.div<FormContainerProps>`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;

  .title-and-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 2rem;

    background-color: ${({ theme }) => theme['Slate-Blue']};

    > h2 {
      font-size: 2rem;
      font-weight: 600;
      font-family: var(--font-Inter);
      color: ${({ theme }) => theme['Pale-Silver']};
    }

    > div {
      display: flex;
      gap: 1.5rem;

      > button {
        border: none;
        background: none;
        cursor: pointer;

        transition: transform 0.2s ease-out;

        &:hover {
          transform: scale(1.1);
        }

        > svg {
          display: flex;
          font-size: 2.7rem;
          color: ${({ theme }) => theme['Pale-Silver']};
        }
      }

      > button:first-child > svg {
        color: ${({ theme, $buttonColorEdit }) =>
          $buttonColorEdit ? theme['check-green'] : theme['Pale-Silver']};

        transition: color 0.2 ease-in-out;

        &:hover {
          color: ${({ theme }) => theme['check-green']};
        }
      }

      > button:last-child > svg {
        color: ${({ theme, $buttonColorEdit }) =>
          $buttonColorEdit ? theme['button-edit'] : theme['Pale-Silver']};

        transition: color 0.2 ease-in-out;

        &:hover {
          color: ${({ theme }) => theme['button-edit']};
        }
      }
    }
  }

  .container-inputs {
    background-color: ${({ theme }) => theme['Chinese-White']};

    display: grid;
    grid-template-columns: ${({ $displayGrid }) =>
      $displayGrid ? '1fr 1fr' : '1fr'};

    > div {
      max-width: ${({ $displayGrid }) => ($displayGrid ? '53rem' : 'none')};
      width: 100%;
      padding: 1.5rem 2rem;
      display: flex;
      gap: 1rem;

      border-bottom: 1px solid ${({ theme }) => theme['Slate-Blue']};
      border-right: 1px solid ${({ theme }) => theme['Slate-Blue']};

      > label {
        white-space: nowrap;
        font-size: 2rem;
        font-weight: 600;
        font-family: var(--font-Roboto);
        color: ${({ theme }) => theme['Charcoal-Blue']};
      }

      > input {
        width: 100%;
        margin-top: 0.2rem;
        background: transparent;
        border: none;

        font-size: 1.6rem;
        font-weight: 400;
        font-family: var(--font-Roboto);
        color: ${({ theme }) => theme['steel-blue']};
        font-style: italic;

        &:disabled {
          font-style: normal;
          color: ${({ theme }) => theme['Charcoal-Blue']};
        }
      }
    }

    @media (max-width: 1020px) {
      grid-template-columns: 1fr;

      > div {
        max-width: none;
      }
    }
  }
`
