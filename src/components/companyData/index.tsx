import { CompanyDataContainer } from './style'

import { useState } from 'react'

import {
  FormData,
  OrganizeDataByBusinessRuleProps,
} from '../../hooks/organizeData'

import { Form } from '../form'

interface CompanyDataProps {
  data: OrganizeDataByBusinessRuleProps
  saveFormDataToLocalStorage: (nameCard: string, data: FormData) => void
}

// Define o componente `CompanyData` que recebe `data` e `saveFormDataToLocalStorage` como props.
export function CompanyData({
  data,
  saveFormDataToLocalStorage,
}: CompanyDataProps) {
  // `editingForm` é um estado que armazena o nome do formulário atualmente em edição.
  const [editingForm, setEditingForm] = useState<string | null>(null)

  // Função que é chamada ao clicar no botão de edição de um formulário.
  const handleEditButtonClick = (nameCard: string) => {
    setEditingForm((prev) => (prev === nameCard ? null : nameCard))
  }

  // Renderiza o componente `CompanyData`.
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
          title="CNAE"
          saveFormDataToLocalStorage={saveFormDataToLocalStorage}
          isEditing={editingForm === 'cnae'}
          onEditButtonClick={() => handleEditButtonClick('cnae')}
          displayGrid={false}
        />

        <div className="container-partner">
          {/* Mapeia e renderiza formulários para cada sócio da empresa */}
          {data.partner.map((partner) => (
            <Form
              key={partner.id}
              data={partner}
              nameCard="partner"
              title="Sócio"
              saveFormDataToLocalStorage={saveFormDataToLocalStorage}
              isEditing={editingForm === partner.id}
              onEditButtonClick={() => handleEditButtonClick(`${partner.id}`)}
              displayGrid={false}
            />
          ))}
        </div>
      </div>
    </CompanyDataContainer>
  )
}
