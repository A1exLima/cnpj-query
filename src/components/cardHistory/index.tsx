import { CardContainer } from './style'
import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { useNavigate } from 'react-router-dom'

// Interface para definir as props esperadas pelo componente
interface CardHistoryProps {
  data: OrganizeDataByBusinessRuleProps
}
// Componente funcional CardHistory que recebe 'data' como prop
export function CardHistory({ data }: CardHistoryProps) {
  const navigate = useNavigate()

  // Função para lidar com o clique no Card
  const handleClickCard = () => {
    // Navega para a rota específica com base no ID de 'data'
    navigate(`/query-cnpj/${data.id}`)
  }

  return (
    <CardContainer onClick={handleClickCard}>
      <div>
        <h3>EMPRESA CONSULTADA:</h3>
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
