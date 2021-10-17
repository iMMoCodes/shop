import styled from 'styled-components'
export const Container = styled.div`
  padding: 20px;
  display: flex;
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
`
export const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: #c2c2c2;
`
export const List = styled.ul`
  list-style: none;
  margin-top: 50px;
`
export const ListItem = styled.li`
  margin-top: 20px;
  display: flex;
  transform: translateX(-22%);
  cursor: pointer;
  color: #c2c2c2;
`
