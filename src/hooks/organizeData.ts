import { format } from 'date-fns'

// Definição dos tipos de dados utilizados
type CNPJCard = {
  razaoSocial: string
  nomeFantasia: string
  situacaoCadastral: number
  dataAbertura: string
  naturezaJuridica: string
  capitalSocial: number | string
  optanteMei: boolean | string
  optanteSimplesNacional: boolean | string
  email: string | null
  telefone: string
}

type Address = {
  logradouro: string
  numero: string
  bairro: string
  municipio: string
  uf: string
  cep: string
}

type CNAE = {
  principal: number
  descricaoPrincipal: string
}

type Partner = {
  nome: string
  dataEntrada: string
  qualificacao: string
}

interface InputPartner {
  nome_socio: string
  data_entrada_sociedade: string
  qualificacao_socio: string
}

export type FormData = CNPJCard | Address | CNAE | Partner | InputPartner

export interface OrganizeDataByBusinessRuleProps {
  id: string
  dateAndTimeCreated: string
  updatedDateAndTime: string | null
  cnpj: string
  cnpjCard: CNPJCard
  address: Address
  cnae: CNAE
  partner: Partner[]
}

// Função que organiza os dados conforme regras de negócio específicas.
export function organizeDataByBusinessRule(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any, // Dados de entrada recebidos da APIBRASIL para consulta de cnpj
): OrganizeDataByBusinessRuleProps {
  // Obtém a data e hora atuais para uso na criação do ID e na formatação da data de criação
  const currentDate = new Date()

  // Cria um ID único baseado na data e hora atuais
  const id = `${currentDate.getTime()}`

  // Formata a data atual no formato "dd/MM/yyyy 'às' HH:mm" (formato pt-BR)
  const formattedDate = format(currentDate, "dd/MM/yyyy 'às' HH:mm")

  // Dados organizados conforme a regra de negócio solicitada
  return {
    id,
    dateAndTimeCreated: formattedDate,
    updatedDateAndTime: null,
    cnpj: data.cnpj,
    cnpjCard: {
      razaoSocial: data.razao_social,
      nomeFantasia: data.nome_fantasia,
      situacaoCadastral: data.situacao_cadastral,
      dataAbertura: new Date(data.data_inicio_atividade).toLocaleDateString(
        'pt-BR',
      ),
      naturezaJuridica: data.natureza_juridica,
      capitalSocial: `R$${data.capital_social},00`,
      optanteMei: data.opcao_pelo_mei ? 'Sim' : 'Não',
      optanteSimplesNacional: data.opcao_pelo_simples ? 'Sim' : 'Não',
      email: data.email.toLowerCase(),
      telefone: data.ddd_telefone_1,
    },
    address: {
      logradouro: data.logradouro,
      numero: data.numero,
      bairro: data.bairro,
      municipio: data.municipio,
      uf: data.uf,
      cep: data.cep,
    },
    cnae: {
      principal: data.cnae_fiscal,
      descricaoPrincipal: data.cnae_fiscal_descricao,
    },
    partner: data.qsa.map((partner: InputPartner) => ({
      nome: partner.nome_socio,
      dataEntrada: new Date(partner.data_entrada_sociedade).toLocaleDateString(
        'pt-BR',
      ),
      qualificacao: partner.qualificacao_socio,
    })),
  }
}
