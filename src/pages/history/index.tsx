import { Content, HistoryContainer } from './style'

import { useEffect, useState } from 'react'

import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'

import { CardHistory } from '../../components/cardHistory'

import { IoSearchSharp } from 'react-icons/io5'

// Componente History para exibir todas as empresas pesquisadas pelo cnpj
export function History() {
  // Estado para armazenar os dados do banco de dados
  const [dataBase, setDataBase] = useState<OrganizeDataByBusinessRuleProps[]>(
    [],
  )
  // Estado para armazenar os dados filtrados
  const [filteredData, setFilteredData] = useState<
    OrganizeDataByBusinessRuleProps[]
  >([])
  // Estado para armazenar o valor da busca do CNPJ
  const [searchCnpj, setSearchCnpj] = useState<string>('')

  // Função para atualizar o estado do CNPJ de busca conforme o usuário digita
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCnpj(event.target.value)
  }

  // useEffect para carregar os dados armazenados no localStorage quando o componente é montado
  useEffect(() => {
    const storedData = localStorage.getItem('cnpjQuery-database')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      setDataBase(parsedData.reverse())
    }
  }, [])

  // useEffect para filtrar os dados com base no valor do searchCnpj
  useEffect(() => {
    if (searchCnpj.trim() === '') {
      setFilteredData(dataBase)
    } else {
      const filtered = dataBase.filter((item) =>
        item.cnpj.toLowerCase().includes(searchCnpj.toLowerCase()),
      )
      setFilteredData(filtered)
    }
  }, [searchCnpj, dataBase])

  return (
    <HistoryContainer>
      <Content>
        <h2>Histórico de consultas</h2>
        <div className="container-search">
          <label htmlFor="search">
            <IoSearchSharp />
          </label>
          <input
            id="search"
            type="search"
            placeholder="Pesquisar por CNPJ"
            value={searchCnpj}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          {filteredData.map((card) => (
            <CardHistory key={card.id} data={card} />
          ))}
        </div>
      </Content>
    </HistoryContainer>
  )
}
