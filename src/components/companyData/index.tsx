import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { Form } from '../form'
import { CompanyDataContainer } from './style'

// Interface para definir as propriedades que o componente CompanyData espera receber
interface CompanyDataProps {
  data: OrganizeDataByBusinessRuleProps
}

// Componente responsável por exibir os dados detalhados de uma empresa
export function CompanyData({ data }: CompanyDataProps) {
  return (
    <CompanyDataContainer>
      <div>
        {/* Exibe a data de criação do registro */}
        <p>{`Criado: ${data.dateAndTimeCreated}h`}</p>

        {/* Exibe a data de atualização do registro, se disponível */}
        {data.updatedDateAndTime ? (
          <p>{`Editado: ${data.updatedDateAndTime}`}</p>
        ) : (
          ''
        )}
      </div>

      <div className="query-cnpj">
        <h2>Consulta</h2>
        <div>
          <span>CNPJ: </span>
          {/* Exibe o CNPJ da empresa */}
          <span>{data.cnpj}</span>
        </div>
      </div>

      <div>
        {/* Renderiza o formulário com os dados do Cartão CNPJ */}
        <Form
          data={data.cnpjCard}
          id={data.id}
          title="Cartão CNPJ"
          nameCard="cnpjCard"
        />

        {/* Renderiza o formulário com os dados do Endereço */}
        <Form
          data={data.address}
          id={data.id}
          title="Endereço"
          nameCard="address"
        />

        {/* Renderiza o formulário com os dados do CNAE */}
        <Form
          data={data.cnae}
          id={data.id}
          title="CNAE - Classificação Nacional de Atividades Econômicas"
          displayGrid={false}
          nameCard="cnae"
        />

        <div className="container-partner">
          {/* Mapeia e renderiza formulários para cada sócio da empresa */}
          {data.partner.map((partner) => (
            <Form
              key={partner.id}
              partnerData={data.partner}
              data={partner}
              nameCard="partner"
              id={data.id}
              title="Sócio"
              displayGrid={false}
            />
          ))}
        </div>
      </div>
    </CompanyDataContainer>
  )
}
