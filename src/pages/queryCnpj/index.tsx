import { useEffect, useState } from 'react'
import { Content, QueryCnpjContainer } from './style'
import { useParams } from 'react-router-dom'

import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { CompanyData } from '../../components/companyData'
import { getLocalStorage } from '../../hooks/getOrSetLocalStorage'

// Componente responsável por carregar dados de CNPJ da base local e exibir detalhes filtrados pelo ID da rota.
export function QueryCnpj() {
  // Obtém o parâmetro de ID da rota usando o hook useParams do React Router
  const { id } = useParams<string>()

  // Estado para armazenar os detalhes do CNPJ filtrado pelo ID
  const [dataCnpj, setDataCnpj] =
    useState<OrganizeDataByBusinessRuleProps | null>(null)

  // Efeito para carregar dados da base local e filtrar dados do CNPJ ao mudar a base de dados ou o ID
  useEffect(() => {
    const storedData = getLocalStorage('cnpjQuery-database')

    const filteredCnpjData =
      storedData.find((company) => company.id === id) || null
    setDataCnpj(filteredCnpjData)
  }, [id])

  // Renderiza o componente
  return (
    <QueryCnpjContainer>
      <Content>
        {/* Renderiza o componente CompanyData se existir dataCnpj */}
        {dataCnpj && <CompanyData data={dataCnpj} />}
      </Content>
    </QueryCnpjContainer>
  )
}
