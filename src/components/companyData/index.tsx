import { OrganizeDataByBusinessRuleProps } from '../../hooks/organizeData'
import { Form } from '../form'
import { CompanyDataContainer } from './style'

interface CompanyDataProps {
  data: OrganizeDataByBusinessRuleProps
}

export function CompanyData({ data }: CompanyDataProps) {
  return (
    <CompanyDataContainer>
      <div>
        <p>{`Criado: ${data.dateAndTimeCreated}`}</p>
        {data.updatedDateAndTime ? (
          <p>{`Editado: ${data.updatedDateAndTime}`}</p>
        ) : (
          ''
        )}
      </div>

      <div>
        <Form data={data.cnpjCard} title="Cartão CNPJ" />
        <Form data={data.address} title="Endereço" />
        <Form
          data={data.cnae}
          title="CNAE - Classificação Nacional de Atividades Econômicas"
          displayGrid={false}
        />

        <div className="container-partner">
          {data.partner.map((partner) => (
            <Form
              key={partner.nome}
              data={partner}
              title="Quadro societário"
              displayGrid={false}
            />
          ))}
        </div>
      </div>
    </CompanyDataContainer>
  )
}
