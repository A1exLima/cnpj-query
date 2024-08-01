// Importações de estilos, hooks e componentes
import { Content, QueryCnpjContainer } from './style'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { format } from 'date-fns'

import {
  FormData,
  OrganizeDataByBusinessRuleProps,
  Partner,
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

    // Formatação da data atual
    const currentDate = new Date()
    const formattedDate = format(currentDate, "dd/MM/yyyy 'às' HH:mm")

    let newFormData

    // Verifica se o nome do cartão é 'partner' para tratar os dados específicos de sócios
    if (nameCard === 'partner') {
      // Atualiza o array de sócios no estado com os novos dados do formulário
      const newArrayPartner = dataCnpj.partner.map((partner) =>
        partner.id === formData.id ? (formData as Partner) : partner,
      )

      // Cria um novo objeto de dados com os dados atualizados
      newFormData = {
        ...dataCnpj,
        updatedDateAndTime: formattedDate,
        [nameCard]: newArrayPartner,
      }
    } else {
      // Atualiza o estado com os novos dados do formulário para outros tipos de cartão
      newFormData = {
        ...dataCnpj,
        updatedDateAndTime: formattedDate,
        [nameCard]: formData,
      }
    }

    // Obtém os dados armazenados no localStorage
    const storedData = getLocalStorage('cnpjQuery-database')

    // Atualiza os dados correspondentes no localStorage com os novos dados
    const newStoredData = storedData.map((company) =>
      company.id === dataCnpj.id ? newFormData : company,
    )

    // Salva os novos dados no localStorage
    setLocalStorage('cnpjQuery-database', newStoredData)

    // Atualiza o estado com os novos dados do CNPJ
    setDataCnpj(newFormData)
  }

  // Efeito para carregar os dados do CNPJ da base local ao montar o componente ou quando o ID da rota muda
  useEffect(() => {
    // Obtém os dados armazenados no localStorage
    const storedData = getLocalStorage('cnpjQuery-database')

    // Filtra os dados do CNPJ com base no ID da rota atual
    const filteredCnpjData =
      storedData.find((company) => company.id === id) || null

    // Atualiza o estado com os dados filtrados do CNPJ
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
