import { Content, QueryCnpjContainer } from './style'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  FormData,
  OrganizeDataByBusinessRuleProps,
} from '../../hooks/organizeData'

import {
  getLocalStorage,
  setLocalStorage,
} from '../../hooks/getOrSetLocalStorage'

import { CompanyData } from '../../components/companyData'

// Componente responsável por carregar dados de CNPJ da base local e exibir detalhes filtrados pelo ID da rota.
export function QueryCnpj() {
  // Obtém o parâmetro de ID da rota usando o hook useParams do React Router
  const { id } = useParams<string>()

  // Estado para armazenar os detalhes do CNPJ filtrado pelo ID
  const [dataCnpj, setDataCnpj] =
    useState<OrganizeDataByBusinessRuleProps | null>(null)

  // Função para salvar os dados do formulário no localStorage
  const saveFormDataToLocalStorage = (nameCard: string, formData: FormData) => {
    if (!dataCnpj) return

    const newFormData = {
      ...dataCnpj,
      [nameCard]: formData,
    }

    const storedData = getLocalStorage('cnpjQuery-database')

    const newStoredData = storedData.map((company) =>
      company.id === newFormData.id ? newFormData : company,
    )

    setLocalStorage('cnpjQuery-database', newStoredData)
  }

  // Efeito para carregar os dados do CNPJ da base local ao montar o componente ou quando o ID da rota muda
  useEffect(() => {
    const storedData = getLocalStorage('cnpjQuery-database')

    const filteredCnpjData =
      storedData.find((company) => company.id === id) || null

    setDataCnpj(filteredCnpjData)
  }, [id])

  // Renderiza o componente na tela
  return (
    <QueryCnpjContainer>
      <Content>
        {dataCnpj && (
          <CompanyData
            data={dataCnpj}
            saveFormDataToLocalStorage={saveFormDataToLocalStorage}
          />
        )}
      </Content>
    </QueryCnpjContainer>
  )
}
