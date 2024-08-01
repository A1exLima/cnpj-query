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
    <CardContainer
      onClick={handleClickCard}
      title="Clique para visualizar ou editar a consulta"
    >
      <div>
        <h3>EMPRESA CONSULTADA:</h3>
        <div>
          <p>
            <strong>Criado: </strong>
            {`${data.dateAndTimeCreated}h`}
          </p>
          {data.updatedDateAndTime ? (
            <p>
              <strong>Editado:</strong> {`${data.updatedDateAndTime}h`}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>

      <div>
        <div>
          <p>
            <span>CNPJ: </span>
            {data.cnpj}
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
