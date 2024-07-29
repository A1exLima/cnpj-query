import { useEffect, useState } from 'react'
import { Content, HistoryContainer } from './style'
import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { CardHistory } from '../../components/cardHistory'

export function History() {
  const [dataBase, setDataBase] = useState<OrganizeDataByBusinessRuleProps[]>(
    [],
  )

  useEffect(() => {
    const storedData = localStorage.getItem('cnpjQuery-database')
    if (storedData) {
      setDataBase(JSON.parse(storedData))
    }
  }, [])

  return (
    <HistoryContainer>
      <Content>
        <h2>Histórico de consultas</h2>

        <div>
          {dataBase &&
            dataBase.map((card) => <CardHistory key={card.id} data={card} />)}
        </div>
      </Content>
    </HistoryContainer>
  )
}
