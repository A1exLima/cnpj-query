import { useEffect, useState } from 'react'
import axios from 'axios'
import { BannerAndCnpjEntry } from '../../components/bannerAndCnpEntry'
import { useNavigate } from 'react-router-dom'
import { Content, HomeContainer, WarningMessage } from './style'

export function Home() {
  const [data, setData] = useState<object>({})
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const cnpjFetchDataApi = async (cnpjValue: string) => {
    setLoading(true)
    setAlertMessage('')
    try {
      const response = await axios.get(
        `https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`,
      )
      setData(response.data)
    } catch (error) {
      setAlertMessage('Verifique o CNPJ digitado!')
      setData({})
    } finally {
      setLoading(false)
    }
  }

  const handleConsultCnpj = (cnpj: string) => {
    cnpjFetchDataApi(cnpj)
  }

  useEffect(() => {
    if (Object.keys(data).length !== 0 && !loading) {
      // Irei chamar a função para organizar os dados, retornando os dados na estrutura solicitada para a regra de negócio.
      // Capturar ID da consulta do array de objeto
      // Salvar no localStorage
      // Passar para o navigate o ID da consulta
      navigate('/query-data')
    }
  }, [data, loading, navigate])

  return (
    <HomeContainer>
      <Content>
        <BannerAndCnpjEntry
          consultCnpj={handleConsultCnpj}
          alert={alertMessage}
          loading={loading}
        />
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
