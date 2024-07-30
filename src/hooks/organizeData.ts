import { format } from 'date-fns'

// Tipos de dados utilizados
type CNPJCard = {
  id?: string
  razaoSocial: string
  nomeFantasia: string
  dataAbertura: string
  situacaoCadastral: number | string
  email: string | null
  telefone: string
}

type Address = {
  id?: string
  nameCard?: string
  logradouro: string
  numero: string
  bairro: string
  municipio: string
  uf: string
  cep: string
}

type CNAE = {
  id?: string
  atividadePrincipal: string | number
}

export type Partner = {
  id: string
  nameCard?: string
  nome: string
  dataEntrada: string
  qualificacao: string
}

export interface InputPartner {
  id?: string
  nameCard?: string
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

// Função para organizar os dados conforme regras de negócio específicas
export function organizeDataByBusinessRule(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
): OrganizeDataByBusinessRuleProps {
  // Obter a data atual
  const currentDate = new Date()
  // Gerar um ID único baseado no timestamp atual
  const id = `${currentDate.getTime()}`
  // Formatar a data atual para exibição
  const formattedDate = format(currentDate, "dd/MM/yyyy 'às' HH:mm")

  // Variável para controlar o próximo ID de sócio
  let nextPartnerId = 1
  // Função para gerar IDs únicos para sócios
  const generatePartnerId = () => {
    const partnerId = `partner-${nextPartnerId}`
    nextPartnerId++
    return partnerId
  }

  // Função para formatar CNPJ para exibição
  const formatarCNPJ = (cnpj: string): string => {
    cnpj = cnpj.replace(/\D/g, '')
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
    return cnpj
  }

  // Retornar o objeto organizado conforme as regras de negócio
  return {
    id,
    dateAndTimeCreated: formattedDate,
    updatedDateAndTime: null,
    // Formatar o CNPJ usando a função auxiliar
    cnpj: formatarCNPJ(data.cnpj),
    // Preencher dados do cartão CNPJ
    cnpjCard: {
      razaoSocial: data.razao_social,
      nomeFantasia: data.nome_fantasia,
      // Converter a data de abertura para formato local
      dataAbertura: new Date(data.data_inicio_atividade).toLocaleDateString(
        'pt-BR',
      ),
      // Determinar a situação cadastral com base nos dados fornecidos
      situacaoCadastral: data.situacao_cadastral !== 2 ? 'INATIVA' : 'ATIVA',
      email: data.email.toLowerCase(),
      telefone: data.ddd_telefone_1,
    },
    // Preencher dados do endereço
    address: {
      logradouro: data.logradouro,
      numero: data.numero,
      bairro: data.bairro,
      municipio: data.municipio,
      uf: data.uf,
      cep: data.cep,
    },
    // Preencher dados do CNAE
    cnae: {
      atividadePrincipal: `${data.cnae_fiscal} - ${data.cnae_fiscal_descricao}`,
    },
    // Mapear e preencher dados dos sócios
    partner: data.qsa.map((partner: InputPartner) => ({
      id: generatePartnerId(),
      nome: partner.nome_socio,
      // Converter a data de entrada do sócio para formato local
      dataEntrada: new Date(partner.data_entrada_sociedade).toLocaleDateString(
        'pt-BR',
      ),
      qualificacao: partner.qualificacao_socio,
    })),
  }
}
