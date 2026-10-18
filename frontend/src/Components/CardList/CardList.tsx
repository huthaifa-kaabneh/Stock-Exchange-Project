import React from 'react'
import Card from '../Card'

interface Props {
  // Define any props here
}

const CardList = (props: Props) => {
  return (
    <div>
      <Card
        source="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        companyName="Apple"
        ticker="AAPL"
        price={237.49}
      />
      <Card
        source="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        companyName="Microsoft"
        ticker="MSFT"
        price={513.24}
      />
      <Card
        source="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg"
        companyName="NVIDIA"
        ticker="NVDA"
        price={181.62}
      />
    </div>
  )
}

export default CardList