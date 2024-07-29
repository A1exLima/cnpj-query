import { CardContainer } from './style' // Corrigido: importar o componente CardContainer do arquivo de estilo

import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'

import { useNavigate } from 'react-router-dom'

interface CardHistoryProps {
  data: OrganizeDataByBusinessRuleProps
}

export function CardHistory({ data }: CardHistoryProps) {
  const navigate = useNavigate()

  const handleClickCard = () => {
    navigate(`/query-cnpj/${data.id}`)
  }

  return (
    <CardContainer onClick={handleClickCard}>
      <div>
        <h3>EMPRESA CONSULTADA</h3>
        <div>
          <p>{`Criado: ${data.dateAndTimeCreated}h`}</p>
          {data.updatedDateAndTime ? (
            <p>{`Editado: ${data.updatedDateAndTime}`}</p>
          ) : (
            ''
          )}
        </div>
      </div>

      <div>
        <div>
          <p>
            <span>CNPJ: {data.cnpj}</span>
          </p>
          <p>
            <span>Razão social: </span>
            {data.cnpjCard.razaoSocial}
          </p>
          <p>
            <span>Nome fantasia:</span> {data.cnpjCard.nomeFantasia}
          </p>
        </div>
      </div>
    </CardContainer>
  )
}
