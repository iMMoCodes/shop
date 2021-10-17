import styled from 'styled-components'

export const Container = styled.div`
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
export const Title = styled.h3`
  margin: 30px 0px;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
`
export const Table = styled.table`
  width: 80%;
  border-spacing: 20px;
  margin: 0 auto;
`
export const Tr = styled.tr``
export const Th = styled.th`
  text-align: left;
`

export const Product = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`
export const Name = styled.span``
export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
export const Price = styled.td``
export const Stock = styled.td``
export const Buttons = styled.td`
  display: flex;
  align-items: center;
`
export const Add = styled.div`
  margin-right: 10px;
  cursor: pointer;
`
export const Delete = styled.div`
  cursor: pointer;
`
