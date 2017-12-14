// @flow
import React from "react"
import styled from "styled-components"

type Props = {
  number: number
}

class Square extends React.Component<Props, {}> {
  render() {
    return <Container number={this.props.number}>{this.props.number}</Container>
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.number % 2 ? "#eee" : "#ccc")};
  color: #666;
  font-family: Helvetica;
`

export default Square
