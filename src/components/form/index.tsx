import { FormContainer } from './style'
import { useState, useRef, useEffect } from 'react'
import { FormData } from '../../hooks/organizeData'
import { editTitleKey } from '../../hooks/stringFormatting'
import { detectType } from '../../hooks/checkInputType'
import { RiEdit2Fill } from 'react-icons/ri'
import { BiSolidSave } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'

interface FormProps {
  data: FormData
  nameCard: string
  title: string
  displayGrid?: boolean
  saveFormDataToLocalStorage: (nameCard: string, data: FormData) => void
  isEditing: boolean
  onEditButtonClick: () => void
}

export function Form({
  data,
  nameCard,
  title,
  displayGrid = true,
  saveFormDataToLocalStorage,
  isEditing,
  onEditButtonClick,
}: FormProps) {
  const [formData, setFormData] = useState<FormData>(data)
  const firstInputRef = useRef<HTMLInputElement | null>(null)
  const [confirmSave, setConfirmSave] = useState(false)

  const handleEditButton = () => {
    onEditButtonClick()
  }

  const handleInputChange = (key: string, value: string) => {
    if (formData) {
      setFormData({
        ...formData,
        [key]: value,
      })
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveFormDataToLocalStorage(nameCard, formData)
    handleEditButton()
    setConfirmSave(true)
  }

  useEffect(() => {
    if (isEditing && firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [isEditing])

  return (
    <FormContainer $displayGrid={displayGrid} $buttonColorEdit={isEditing}>
      {formData && (
        <form onSubmit={handleSubmit}>
          <div className="title-and-buttons">
            <div>
              <h2>{title}</h2>
              <span>{confirmSave ? <FaCheck /> : ''}</span>
            </div>

            <div>
              <button
                type="submit"
                title="Salvar formulário"
                disabled={!isEditing}
              >
                <BiSolidSave />
              </button>
              <button
                type="button"
                title="Editar formulário"
                onClick={handleEditButton}
                disabled={isEditing}
              >
                <RiEdit2Fill />
              </button>
            </div>
          </div>

          <div className="container-inputs">
            {Object.entries(formData).map(([key, item], index) => (
              <div key={key}>
                <label htmlFor={key}>{`${editTitleKey(key)}:`}</label>
                <input
                  type={detectType(item)}
                  id={key}
                  value={item}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  disabled={!isEditing}
                  ref={index === 0 ? firstInputRef : null}
                />
              </div>
            ))}
          </div>
        </form>
      )}
    </FormContainer>
  )
}
