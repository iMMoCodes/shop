import styled from 'styled-components'
import { mobile, tablet } from '../../responsive'

export const Container = styled.div`
  height: 60px;
  ${tablet({ height: '100%' })}
`

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet({ flexDirection: 'column' })}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${tablet({ width: '100%', justifyContent: 'space-between' })}
`
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

export const Input = styled.input`
  border: none;
  outline: none;
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`
export const Logo = styled.h1`
  font-weight: bold;
  ${tablet({ fontSize: '34px' })}
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ width: '100%', justifyContent: 'center' })}
  ${mobile({ justifyContent: 'space-between' })}
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: '0px' })}
`
