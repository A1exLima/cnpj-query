import { FormContainer } from './style'
import { RiEdit2Fill } from 'react-icons/ri'
import { BiSolidSave } from 'react-icons/bi'
import { useState, useRef, useEffect } from 'react'

// Importando tipos necessários
import {
  FormData,
  OrganizeDataByBusinessRuleProps,
} from '../../hooks/organizeData'

interface FormProps {
  nameCard: string
  id: string
  data: FormData | null
  partnerData?: FormData[] | null | undefined
  title: string
  displayGrid?: boolean
}

export function Form({
  partnerData,
  nameCard,
  id,
  data,
  title,
  displayGrid = true,
}: FormProps) {
  // Estado para controle de edição
  const [enableEditing, setEnableEditing] = useState<boolean>(false)

  // Estado para armazenar dados do formulário
  const [formData, setFormData] = useState<FormData | null>(null)

  // Referência para o primeiro input para foco automático
  const firstInputRef = useRef<HTMLInputElement | null>(null)

  // Função para formatar o título do campo
  const editTitleKey = (title: string) => {
    return (
      title.charAt(0).toUpperCase() +
      title
        .slice(1)
        .replace(/([A-Z])/g, ' $1')
        .trim()
    )
  }

  // Função para alternar entre modo de edição e visualização
  const handleEditButton = () => {
    setEnableEditing((prevState) => !prevState)
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnableEditing(false)

    // Recuperando dados do localStorage
    const storedData = localStorage.getItem('cnpjQuery-database')
    const parsedData: OrganizeDataByBusinessRuleProps[] | null = storedData
      ? JSON.parse(storedData)
      : null

    let updatedPartnerData: FormData[] | undefined

    if (partnerData && formData) {
      updatedPartnerData = partnerData.map((partner) =>
        partner.id === formData.id ? formData : partner,
      )
    }

    if (parsedData && formData) {
      // Atualizando os dados relevantes no localStorage
      const updatedData: OrganizeDataByBusinessRuleProps[] = parsedData.map(
        (card) => {
          if (card.id === id) {
            const updatedCard = {
              ...card,
              [nameCard]:
                nameCard === 'partner' ? updatedPartnerData : formData,
            }
            return updatedCard
          }
          return card
        },
      )

      // Salvando os dados atualizados no localStorage
      localStorage.setItem('cnpjQuery-database', JSON.stringify(updatedData))
    }
  }

  // Função para lidar com mudanças nos inputs do formulário
  const handleInputChange = (key: string, value: string) => {
    if (formData) {
      setFormData({
        ...formData,
        [key]: value,
      })
    }
  }

  // Efeito para focar no primeiro input ao ativar a edição
  useEffect(() => {
    if (enableEditing && firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [enableEditing])

  // Efeito para inicializar o estado do formulário com os dados recebidos
  useEffect(() => {
    if (data) {
      setFormData({
        ...data,
      })
    }
  }, [data, id])

  return (
    <FormContainer $displayGrid={displayGrid} $buttonColorEdit={enableEditing}>
      {formData && (
        <form onSubmit={handleSubmit}>
          <div className="title-and-buttons">
            <h2>{title}</h2>
            <div>
              {/* Botão para salvar */}
              <button type="submit">
                <BiSolidSave />
              </button>
              {/* Botão para editar */}
              <button type="button" onClick={handleEditButton}>
                <RiEdit2Fill />
              </button>
            </div>
          </div>

          <div className="container-inputs">
            {/* Mapeando e renderizando os inputs do formulário */}
            {Object.entries(formData).map(([key, item], index) => {
              // Ignorar a renderização do input se a chave for "id"
              if (key === 'id') return null

              const titleKey = editTitleKey(key)

              return (
                <div key={key}>
                  <label htmlFor={key}>{`${titleKey}:`}</label>
                  <input
                    type="text"
                    id={key}
                    value={item !== null ? String(item) : ''}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    disabled={!enableEditing}
                    ref={index === 0 ? firstInputRef : null}
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
