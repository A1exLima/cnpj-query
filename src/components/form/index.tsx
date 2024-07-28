import { FormContainer } from './style'

import { RiEdit2Fill } from 'react-icons/ri'
import { BiSolidSave } from 'react-icons/bi'

import { FormData } from '../../hooks/organizeData'

interface FormProps {
  data: FormData | null
  title: string
  displayGrid?: boolean
}

export function Form({ data, title, displayGrid = true }: FormProps) {
  return (
    <FormContainer $displayGrid={displayGrid}>
      {data && (
        <form action="">
          <div className="title-and-buttons">
            <h2>{title}</h2>
            <div>
              <button type="submit">
                <BiSolidSave />
              </button>
              <button type="button">
                <RiEdit2Fill />
              </button>
            </div>
          </div>

          <div className="container-inputs">
            {Object.entries(data).map(([key, item]) => {
              const title =
                key.charAt(0).toUpperCase() +
                key
                  .slice(1)
                  .replace(/([A-Z])/g, ' $1')
                  .trim()
              return (
                <div key={key} className="grid-item">
                  <label htmlFor={key}>{`${title}:`}</label>
                  <input
                    type="text"
                    id={key}
                    value={item !== null ? String(item) : ''}
                  />
                </div>
              )
            })}
          </div>
        </form>
      )}
    </FormContainer>
  )
}
