import { Content, HomeContainer, WarningMessage } from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { organizeDataByBusinessRule } from '../../hooks/organizeData'

import { BannerAndCnpjEntry } from '../../components/bannerAndCnpEntry'

// Componente principal da página Home
export function Home() {
  // Estado para armazenar os dados do localStorage que está simulando um banco de dados
  const [dataBase] = useState(() => {
    const storedData = localStorage.getItem('cnpjQuery-database')
    return storedData ? JSON.parse(storedData) : []
  })
  // Estado para armazenar os dados da resposta da API
  const [dataApi, setDataApi] = useState<object>({})
  // Estado para armazenar a mensagem de alerta
  const [alertMessage, setAlertMessage] = useState<string>('')
  // Estado para indicar se a consulta está em andamento
  const [loading, setLoading] = useState<boolean>(false)
  // Hook de navegação do React Router
  const navigate = useNavigate()

  // Função para buscar os dados da API utilizando o valor do CNPJ
  const cnpjFetchDataApi = async (cnpjValue: string) => {
    setLoading(true)
    setAlertMessage('')
    try {
      // Requisição para a API utilizando axios
      const response = await axios.get(
        `https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`,
      )
      // Armazena os dados da resposta no estado
      setDataApi(response.data)
    } catch (error) {
      // Define uma mensagem de alerta em caso de erro
      setAlertMessage('Verifique o CNPJ digitado!')
      // Reseta o estado de dados
      setDataApi({})
    } finally {
      // Define o estado de carregamento como falso ao concluir o processo assíncrono de requisição http feita pelo Axios
      setLoading(false)
    }
  }

  // Função para iniciar a consulta do CNPJ
  const handleConsultCnpj = (cnpj: string) => {
    cnpjFetchDataApi(cnpj)
  }

  // Efeito para realizar ações quando os dados da consulta do cnpj na API for retornado
  useEffect(() => {
    // Condicional para verificar se foi recebido dados da API e se o retorno desses dados foi concluído por conta de ser uma função assíncrona
    if (Object.keys(dataApi).length !== 0 && !loading) {
      // Organiza os dados conforme a regra de negócio
      const organizedData = organizeDataByBusinessRule(dataApi)

      // Salva os dados organizados no localStorage em conjunto com os dados já armazenados
      localStorage.setItem(
        'cnpjQuery-database',
        JSON.stringify([...dataBase, organizedData]),
      )

      // Captura o ID da consulta de dados já organizada
      const id = organizedData.id

      // Navega para a rota com o ID da consulta organizada
      navigate(`/query-cnpj/${id}`)
    }
  }, [dataApi, loading, navigate, dataBase])

  // Renderização do componente
  return (
    <HomeContainer>
      <Content>
        {/* Componente para entrada do CNPJ e exibição de banner */}
        <BannerAndCnpjEntry
          consultCnpj={handleConsultCnpj}
          alert={alertMessage}
          loading={loading}
        />
        {/* Mensagem de aviso sobre o uso dos dados */}
        <WarningMessage>
          <p>
            As informações desta página são públicas e podem ser utilizadas por
            todos, sem necessidade de autorização. O compartilhamento destas
            informações está em conformidade com o Decreto nº 8.777/2016
            (Política de Dados Abertos do Poder Executivo Federal) e a Lei Geral
            de Proteção de Dados (LGPD).
          </p>
        </WarningMessage>
      </Content>
    </HomeContainer>
  )
}
