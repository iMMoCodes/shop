import styled from 'styled-components'

export const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
`
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`
export const Tr = styled.tr``
export const Th = styled.th`
  text-align: left;
`
export const User = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
export const Name = styled.span``
export const Date = styled.td`
  font-weight: 300;
`
export const Amount = styled.td`
  font-weight: 300;
`
export const Status = styled.td``
export const Btn = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.txt === 'approved'
      ? '#e5faf2'
      : props.txt === 'declined'
      ? '#fff0f1'
      : '#ebf1fe'};
  color: ${(props) =>
    props.txt === 'approved'
      ? '#3bb077'
      : props.txt === 'declined'
      ? '#d95087'
      : '#2a7ade'};
`
