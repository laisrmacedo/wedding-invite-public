import styled from 'styled-components'

const Content = styled.main`
`

export const Container = (props) => {
  return(
    <Content>
      {props.children}
    </Content>
  )
}