import { useEffect, useState } from 'react'
import { Content, HistoryContainer } from './style'
import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { CardHistory } from '../../components/cardHistory'

// Componente que exibe o histórico de consultas de CNPJ.
export function History() {
  // Estado para armazenar os dados do histórico
  const [dataBase, setDataBase] = useState<OrganizeDataByBusinessRuleProps[]>(
    [],
  )

  // Efeito para carregar os dados do localStorage ao montar o componente
  useEffect(() => {
    // Verifica se há dados salvos no localStorage
    const storedData = localStorage.getItem('cnpjQuery-database')
    if (storedData) {
      // Converte os dados salvos de volta para o formato de array de objetos
      const parsedData = JSON.parse(storedData)
      setDataBase(parsedData.reverse())
    }
  }, [])

  return (
    <HistoryContainer>
      <Content>
        <h2>Histórico de consultas</h2>
        <div>
          {/* Mapeia os dados do histórico e renderiza cada CardHistory */}
          {dataBase &&
            dataBase.map((card) => <CardHistory key={card.id} data={card} />)}
        </div>
      </Content>
    </HistoryContainer>
  )
}
