import React, { useState, useEffect } from 'react'
import { Banner, BannerAndCnpEntryContainer, CnpjEntry } from './style'
import { TbReload } from 'react-icons/tb'
import { FaCheck } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'

export function BannerAndCnpEntry() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [answer, setAnswer] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [cnpjValue, setCnpjValue] = useState('')

  const generateRandomNumbers = () => {
    setNum1(Math.floor(Math.random() * 10))
    setNum2(Math.floor(Math.random() * 10))
    setAnswer('')
    setIsButtonDisabled(true)
  }

  const validateAnswer = (value: string) => {
    const sum = num1 + num2
    setIsButtonDisabled(parseInt(value, 10) !== sum)
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAnswer(value)
    validateAnswer(value)
  }

  const handleCnpjValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpjValue(e.target.value)
  }

  const consultCnpjValue = () => {
    setIsButtonDisabled(true)
    setAnswer('')
    setCnpjValue('')
    console.log(cnpjValue)
  }

  useEffect(() => {
    generateRandomNumbers()
  }, [])

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
        <label htmlFor="cnpj-entry">Insira o número do CNPJ abaixo:</label>
        <input
          id="cnpj-entry"
          type="number"
          placeholder="Digite o CNPJ"
          value={cnpjValue}
          onChange={handleCnpjValue}
        />

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
            <TbReload onClick={generateRandomNumbers} />

            {isButtonDisabled ? (
              <IoIosCloseCircle className="icon-color" />
            ) : (
              <FaCheck className="icon-color" />
            )}
          </div>
        </div>
        <button
          type="button"
          disabled={isButtonDisabled}
          onClick={consultCnpjValue}
        >
          Consultar
        </button>
      </CnpjEntry>
    </BannerAndCnpEntryContainer>
  )
}
