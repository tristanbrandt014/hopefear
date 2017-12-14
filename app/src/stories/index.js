// @flow

import React from "react"
import styled from "styled-components"

import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import {linkTo} from "@storybook/addon-links"

import {Button, Welcome} from "@storybook/react/demo"

import Board from "./../components/Board/Board"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span aria-label="emojis" role="img">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf("Board", module)
  .add("default", () => (
    <BoardContainer>
      <Board rows={8} cols={8} />
    </BoardContainer>
  ))
  .add("bigger", () => (
    <BoardContainer>
      <Board rows={9} cols={10} />
    </BoardContainer>
  ))

const BoardContainer = styled.div`
  width: 400px;
  height: 400px;
`
