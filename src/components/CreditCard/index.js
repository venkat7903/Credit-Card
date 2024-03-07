// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  SubContainer1,
  CardContainer,
  AppTitle,
  FormContainer,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNum, setCardNum] = useState('')

  const onChangeName = event => {
    const upperCaseName = event.target.value
    setName(upperCaseName)
  }

  return (
    <MainContainer>
      <SubContainer1>
        <AppTitle>CREDIT CARD</AppTitle>
        <CardContainer data-testid="creditCard">
          <p>{cardNum}</p>
          <p>CARDHOLDER NAME</p>
          <p>{name.toUpperCase()}</p>
        </CardContainer>
      </SubContainer1>
      <div>
        <FormContainer>
          <h1>Payment Method</h1>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNum}
            onChange={event => setCardNum(event.target.value)}
          />
          <input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
            value={name}
          />
        </FormContainer>
      </div>
    </MainContainer>
  )
}

export default CreditCard
