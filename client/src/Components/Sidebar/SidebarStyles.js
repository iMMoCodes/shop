import styled from 'styled-components'
import { tablet, mobile } from '../../responsive'
export const Container = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ padding: '5px' })}
`
export const Side = styled.div`
  display: flex;
  flex: 1;
  /* width: 500px; */
  height: 400px;
  flex-direction: column;
  background-color: darkblue;
  border-radius: 20px;
  padding: 50px;
  ${tablet({ padding: '20px' })}
  ${mobile({ width: '280px', height: '170px', padding: '5px' })}
`
export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: #c2c2c2;
  ${mobile({ marginTop: '0px' })}
`
export const List = styled.ul`
  list-style: none;
  margin-top: 50px;
  ${mobile({ marginTop: '0px' })}
`
export const ListItem = styled.li`
  margin-top: 20px;
  display: flex;
  transform: translateX(-22%);
  cursor: pointer;
  color: #c2c2c2;
  ${mobile({ marginTop: '5px', transform: 'none' })}
`
