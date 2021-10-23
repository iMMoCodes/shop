import styled from 'styled-components'
import { tablet, mobile } from '../../responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  ${mobile({ flexDirection: 'column' })}
`
export const Right = styled.div`
  flex: 5;
  margin: 150px 0px 0px 150px;
  ${tablet({ margin: '20px 0px 0px 20px' })}
`
export const Title = styled.h1``
export const NewsLetterOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`
export const NewsLetterOrderText = styled.span``
export const SwitchTextDiv = styled.div`
  display: flex;
  align-items: center;
`
export const SwitchText = styled.span``
export const Divider = styled.div`
  width: 95vw;
  margin: 0 auto;
  border-bottom: 1px solid #acacac;
`
