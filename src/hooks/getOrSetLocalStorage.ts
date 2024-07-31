import { OrganizeDataByBusinessRuleProps } from './organizeData'

// Armazena um array de objetos no localStorage com uma chave especificada e verifica se o armazenamento foi bem-sucedido.
export function setLocalStorage(
  key: string,
  dataBase: OrganizeDataByBusinessRuleProps[],
): {
  status: boolean
} {
  const storedData = JSON.stringify(dataBase)
  localStorage.setItem(key, storedData)

  const retrievedData = localStorage.getItem(key)

  if (retrievedData === storedData) {
    return {
      status: true,
    }
  } else {
    return {
      status: false,
    }
  }
}

// Recupera um array de objetos do localStorage usando uma chave especificada.
// Retorna o array ou um array vazio se não houver dados.
export function getLocalStorage(
  key: string,
): OrganizeDataByBusinessRuleProps[] | [] {
  const storedDataString = localStorage.getItem(key)

  if (storedDataString) {
    return JSON.parse(storedDataString)
  } else {
    return []
  }
}
