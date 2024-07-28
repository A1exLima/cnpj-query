import { useEffect, useState } from 'react'
import { Content, QueryCnpjContainer } from './style'
import { useParams } from 'react-router-dom'

import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { CompanyData } from '../../components/companyData'

// Carrega dados de uma base local e exibe detalhes do CNPJ filtrado pelo ID da rota.
export function QueryCnpj() {
  // Obtém o parâmetro de ID da rota usando useParams
  const { id } = useParams<string>()

  // Estado para armazenar a base de dados local de CNPJs organizados
  const [dataBase, setDataBase] = useState<OrganizeDataByBusinessRuleProps[]>(
    [],
  )

  // Estado para armazenar os detalhes do CNPJ filtrado pelo ID
  const [dataCnpj, setDataCnpj] =
    useState<OrganizeDataByBusinessRuleProps | null>(null)

  // Efeito para carregar dados da base local ao montar o componente
  useEffect(() => {
    const storedData = localStorage.getItem('cnpjQuery-database')
    if (storedData) {
      setDataBase(JSON.parse(storedData))
    }
  }, [])

  // Efeito para filtrar dados do CNPJ ao mudar a base de dados ou o ID
  useEffect(() => {
    const filteredCnpjData =
      dataBase.find((company) => company.id === id) || null
    setDataCnpj(filteredCnpjData)
  }, [dataBase, id])

  return (
    <QueryCnpjContainer>
      <Content>
        <h1>Consulta CNPJ</h1>
        {dataCnpj && <CompanyData data={dataCnpj} />}
      </Content>
    </QueryCnpjContainer>
  )
}
