import React, { useState, useEffect } from 'react'
import { BannerAndCnpEntryContainer, Banner, CnpjEntry } from './style'
import { TbReload } from 'react-icons/tb'
import { FaCheck } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'
import { LuLoader2 } from 'react-icons/lu'
import { formatCnpj } from '../../hooks/stringFormatting'

// Propriedades esperadas para o componente BannerAndCnpjEntry
interface BannerAndCnpjEntryProps {
  consultCnpj: (cnpj: string) => void // Função para consultar um CNPJ
  alert: string // Mensagem de alerta a ser exibida
  loading: boolean // Indicação de carregamento
}

// Componente principal
export function BannerAndCnpjEntry({
  consultCnpj,
  alert,
  loading,
}: BannerAndCnpjEntryProps) {
  const [num1, setNum1] = useState(0) // Estado para o primeiro número aleatório
  const [num2, setNum2] = useState(0) // Estado para o segundo número aleatório
  const [answer, setAnswer] = useState('') // Estado para a resposta digitada pelo usuário
  const [isButtonDisabled, setIsButtonDisabled] = useState(true) // Estado para controlar se o botão está desabilitado
  const [cnpjValue, setCnpjValue] = useState<string>('') // Estado para armazenar o valor do CNPJ digitado
  const [alertMessage, setAlertMessage] = useState<string>(alert) // Estado para exibir mensagens de alerta

  // Função para gerar números aleatórios e resetar valores
  const generateRandomNumbers = () => {
    setNum1(Math.floor(Math.random() * 10))
    setNum2(Math.floor(Math.random() * 10))
    setAnswer('')
    setIsButtonDisabled(true)
  }

  // Função para validar se a resposta está correta
  const validateAnswer = (value: string) => {
    const sum = num1 + num2
    setIsButtonDisabled(parseInt(value, 10) !== sum)
  }

  // Função para lidar com a mudança na resposta digitada pelo usuário
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAnswer(value)
    validateAnswer(value)
  }

  // Função para lidar com a mudança no valor do CNPJ digitado pelo usuário
  const handleCnpjValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCnpj = e.target.value

    // Remove todos os caracteres que não são dígitos e seta o estado cnpjValue
    setCnpjValue(inputCnpj.replace(/\D/g, ''))
  }

  // Função para iniciar a consulta do CNPJ
  const consultCnpjValue = () => {
    setIsButtonDisabled(true)
    setAnswer('')
    setCnpjValue('')
    consultCnpj(cnpjValue)
  }

  // Efeito para gerar números aleatórios ao montar o componente
  useEffect(() => {
    generateRandomNumbers()
  }, [])

  // Efeito para atualizar a mensagem de alerta quando ela mudar
  useEffect(() => {
    setAlertMessage(alert)
  }, [alert])

  // Renderização do componente
  return (
    <BannerAndCnpEntryContainer>
      <Banner>
        <h2>Consulta CNPJ</h2>
        <p>
          Consulte rapidamente o cartão CNPJ, comprovante de inscrição e
          situação cadastral de empresas de forma intuitiva. Edite e armazene
          suas consultas para fácil acesso futuro!
        </p>
      </Banner>

      <CnpjEntry $colorCheck={isButtonDisabled}>
        <label htmlFor="cnpjInput">Insira o número do CNPJ abaixo:</label>
        <input
          id="cnpjInput"
          type="text"
          placeholder="Digite o CNPJ"
          value={formatCnpj(cnpjValue)}
          onChange={handleCnpjValue}
          maxLength={18}
          onFocus={() => setAlertMessage('')}
        />
        {alertMessage ? <span>{alertMessage}</span> : ''}

        <div>
          <label htmlFor="validate">
            Qual é o resultado de {num1} + {num2}?
          </label>
          <div>
            <input
              id="validate"
              type="number"
              placeholder="Digite a resposta"
              value={answer}
              onChange={handleAnswerChange}
            />
            <TbReload
              className="recharge-icon"
              onClick={generateRandomNumbers}
              title="Recarregar pergunta"
            />

            {isButtonDisabled ? (
              <IoIosCloseCircle className="icon-color" title="Recusado" />
            ) : (
              <FaCheck className="icon-color" title="Aprovado" />
            )}
          </div>
        </div>

        <button
          type="button"
          disabled={isButtonDisabled}
          onClick={consultCnpjValue}
        >
          {loading ? <LuLoader2 /> : 'Consultar'}
        </button>
      </CnpjEntry>
    </BannerAndCnpEntryContainer>
  )
}
