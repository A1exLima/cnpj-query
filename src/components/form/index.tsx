import { FormContainer } from './style'

import { useState, useRef, useEffect } from 'react'

import { FormData } from '../../hooks/organizeData'
import { editTitleKey } from '../../hooks/stringFormatting'
import { detectType } from '../../hooks/checkInputType'

import { RiEdit2Fill } from 'react-icons/ri'
import { BiSolidSave } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'

// Define a interface `FormProps` que especifica as propriedades que o componente `Form` deve receber.
interface FormProps {
  data: FormData
  nameCard: string
  title: string
  displayGrid?: boolean
  saveFormDataToLocalStorage: (nameCard: string, data: FormData) => void
  isEditing: boolean
  onEditButtonClick: () => void
}

// Define o componente `Form` que gerencia a exibição e edição de dados de formulário.
export function Form({
  data,
  nameCard,
  title,
  displayGrid = true,
  saveFormDataToLocalStorage,
  isEditing,
  onEditButtonClick,
}: FormProps) {
  // `formData` armazena o estado atual dos dados do formulário.
  const [formData, setFormData] = useState<FormData>(data)

  // `firstInputRef` é uma referência ao primeiro input do formulário,
  const firstInputRef = useRef<HTMLInputElement | null>(null)

  // `confirmSave` é um estado que controla a exibição de um ícone de confirmação após salvar.
  const [confirmSave, setConfirmSave] = useState(false)

  // Função chamada ao clicar no botão de edição. Alterna o modo de edição chamando `onEditButtonClick`.
  const handleEditButton = () => {
    onEditButtonClick()
  }

  // Função chamada quando há uma mudança em um input do formulário.
  const handleInputChange = (key: string, value: string) => {
    if (formData) {
      setFormData({
        ...formData,
        [key]: value,
      })
    }
  }

  // Função chamada ao submeter o formulário.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    saveFormDataToLocalStorage(nameCard, formData)

    handleEditButton()
    setConfirmSave(true)
  }

  // Hook de efeito que foca automaticamente no primeiro input quando o formulário entra no modo de edição.
  useEffect(() => {
    if (isEditing && firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [isEditing])
  // Renderiza o componente `Form`.
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
            {Object.entries(formData).map(([key, item], index) => {
              // Ignorar a renderização do input se a chave for "id"
              if (key === 'id') return null

              return (
                <div key={key}>
                  <label htmlFor={key}>{`${editTitleKey(key)}:`}</label>
                  <input
                    type={detectType(item)} // Detecta dinamicamente o tipo de input (texto, número, etc).
                    id={key}
                    value={item}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    disabled={!isEditing}
                    ref={
                      // Atribui a referência ao elemento com base nas condições abaixo
                      nameCard === 'partner'
                        ? index === 1
                          ? firstInputRef
                          : null
                        : index === 0
                          ? firstInputRef
                          : null
                    }
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
