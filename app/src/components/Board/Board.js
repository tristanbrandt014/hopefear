// @flow

import React from "react"
import styled from "styled-components"
import Square from "./Square"

type Props = {
  rows: number,
  cols: number
}

class Board extends React.Component<Props, {}> {
  getSquares(col: number) {
    const Squares = []
    const width = 100 / this.props.rows
    for (let index = 0; index < this.props.rows; index++) {
      Squares.push(
        <SquareContainer width={width} key={index}>
          <Square number={(col * this.props.rows) + index + 1} />
        </SquareContainer>
      )
    }
    return Squares
  }

  getColumns() {
    const Columns = []
    const height = 100 / this.props.cols
    for (let index = 0; index < this.props.cols; index++) {
      Columns.push(
        <ColumnContainer height={height} key={index}>
          <Column reverse={!!(index % 2)}>{this.getSquares(index)}</Column>
        </ColumnContainer>
      )
    }
    return Columns
  }

  render() {
    return <Container>{this.getColumns()}</Container>
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column-reverse nowrap;
`

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row${props => (props.reverse ? "-reverse" : "")} nowrap;
`

const ColumnContainer = styled.div`
  width: 100%;
  height: ${props => props.height}%;
`

const SquareContainer = styled.div`
  width: ${props => props.width}%;
  height: 100%;
`

export default Board
