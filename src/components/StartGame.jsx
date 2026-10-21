import React from 'react'
import styled from 'styled-components'

const StartGame = () => {
  return (
    <Container>
      <div>
       <img src='/images/dices.png'/>
      </div>
      <div>
        <h1 className="content">
          Dice Game
        </h1>
        <Button>Play now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  border: 1px solid transparent;

  .content {
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
`

const Button=styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color:black;
    transition:0.3s background ease-in;

}
`;
