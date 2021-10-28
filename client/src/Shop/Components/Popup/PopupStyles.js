import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`
export const Image = styled.img`
  width: 200px;
  border-radius: 20px;
`
export const FilterContainer = styled.div``
export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
export const FilterSizeOption = styled.option``
export const AddContainer = styled.div`
  margin-top: 15px;
`
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
export const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 10px;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`
