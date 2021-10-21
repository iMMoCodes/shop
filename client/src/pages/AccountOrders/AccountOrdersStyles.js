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
export const SubTitle = styled.h3`
  margin-top: 50px;
`
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
  ${tablet({ borderSpacing: '10px' })};
`
export const Tr = styled.tr``
export const Th = styled.th`
  width: 25%;
  text-align: start;
`
export const OrderId = styled.td`
  ${mobile({ wordBreak: 'break-all' })}
`
export const Date = styled.td``
export const Amount = styled.td``
export const Status = styled.td``
export const Divider = styled.div`
  width: 95vw;
  margin: 0 auto;
  border-bottom: 1px solid #acacac;
`
export const Btn = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.txt === 'approved'
      ? '#89f1c9'
      : props.txt === 'declined'
      ? '#f1b3b7'
      : '#c4d3f5'};
  color: ${(props) =>
    props.txt === 'approved'
      ? '#3cb47a'
      : props.txt === 'declined'
      ? '#d95087'
      : '#2a7ade'};
`
