import { Content, HomeContainer, WarningMessage } from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { BannerAndCnpjEntry } from '../../components/bannerAndCnpEntry'

// Componente principal da página Home
export function Home() {
  // Estado para armazenar os dados da resposta da API
  const [data, setData] = useState<object>({})
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
      setData(response.data)
    } catch (error) {
      // Define uma mensagem de alerta em caso de erro
      setAlertMessage('Verifique o CNPJ digitado!')
      // Reseta o estado de dados
      setData({})
    } finally {
      // Define o estado de carregamento como falso ao concluir o processo assíncrono de requisição http feita pelo Axios
      setLoading(false)
    }
  }

  // Função para iniciar a consulta do CNPJ
  const handleConsultCnpj = (cnpj: string) => {
    cnpjFetchDataApi(cnpj)
  }

  // Efeito para realizar ações quando os dados da consulta mudarem
  useEffect(() => {
    if (Object.keys(data).length !== 0 && !loading) {
      // Irá chamar a função para organizar os dados, retornando os dados na estrutura solicitada para a regra de negócio.
      // Captura o ID da consulta do array de objeto
      // Salva no localStorage
      // Passa o ID da consulta para o navigate
      navigate('/query-data')
    }
  }, [data, loading, navigate])

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
