import { useState } from 'react'
import {
  FormData,
  OrganizeDataByBusinessRuleProps,
} from '../../hooks/organizeData'
import { Form } from '../form'
import { CompanyDataContainer } from './style'

interface CompanyDataProps {
  data: OrganizeDataByBusinessRuleProps
  saveFormDataToLocalStorage: (nameCard: string, data: FormData) => void
}

export function CompanyData({
  data,
  saveFormDataToLocalStorage,
}: CompanyDataProps) {
  const [editingForm, setEditingForm] = useState<string | null>(null)

  const handleEditButtonClick = (nameCard: string) => {
    setEditingForm((prev) => (prev === nameCard ? null : nameCard))
  }

  return (
    <CompanyDataContainer>
      <div>
        <p>{`Criado: ${data.dateAndTimeCreated}h`}</p>
        {data.updatedDateAndTime && (
          <p>{`Editado: ${data.updatedDateAndTime}`}</p>
        )}
      </div>

      <div className="query-cnpj">
        <h2>Consulta</h2>
        <div>
          <span>CNPJ: </span>
          <span>{data.cnpj}</span>
        </div>
      </div>

      <div>
        <Form
          data={data.cnpjCard}
          nameCard={'cnpjCard'}
          title="Cartão CNPJ"
          saveFormDataToLocalStorage={saveFormDataToLocalStorage}
          isEditing={editingForm === 'cnpjCard'}
          onEditButtonClick={() => handleEditButtonClick('cnpjCard')}
        />

        <Form
          data={data.address}
          nameCard={'address'}
          title="Endereço"
          saveFormDataToLocalStorage={saveFormDataToLocalStorage}
          isEditing={editingForm === 'address'}
          onEditButtonClick={() => handleEditButtonClick('address')}
        />

        <Form
          data={data.cnae}
          nameCard={'cnae'}
          title="CNAE - Classificação Nacional de Atividades Econômicas"
          saveFormDataToLocalStorage={saveFormDataToLocalStorage}
          isEditing={editingForm === 'cnae'}
          onEditButtonClick={() => handleEditButtonClick('cnae')}
          displayGrid={false}
        />
      </div>
    </CompanyDataContainer>
  )
}
