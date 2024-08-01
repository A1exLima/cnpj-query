// Função para formatar o título do campo
export const editTitleKey = (title: string) => {
  return (
    title.charAt(0).toUpperCase() +
    title
      .slice(1)
      .replace(/([A-Z])/g, ' $1')
      .trim()
  )
}

// Função para formatar CNPJ para exibição
export const formatCnpj = (cnpj: string): string => {
  cnpj = cnpj.replace(/\D/g, '')
  cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  return cnpj
}
