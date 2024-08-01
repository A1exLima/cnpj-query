import { getLocalStorage } from './getOrSetLocalStorage'

export function checkIfCnpjIsAlreadyInTheDatabase(cnpj: string): boolean {
  const storedData = getLocalStorage('cnpjQuery-database')

  if (!storedData) {
    return false
  }

  const cleanCnpj = cnpj.replace(/[^\d]+/g, '')

  // Verifica se o CNPJ existe no array, após remover caracteres especiais
  const isCnpjFound = storedData.some((company) => {
    const storedCnpj = company.cnpj.replace(/[^\d]+/g, '')
    return storedCnpj === cleanCnpj
  })

  return isCnpjFound
}
