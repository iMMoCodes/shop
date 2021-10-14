import styled from 'styled-components'

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`
export const Title = styled.h1``
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
export const Item = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`
export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(150, 150, 150);
`
export const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
  height: 40px;
  color: rgb(117, 117, 117);
  border: 1px solid rgb(150, 150, 150);
  border-radius: 7px;
  cursor: pointer;
`
export const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`
export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`
export const Option = styled.option``
export const Button = styled.button`
  width: 200px;
  max-height: 40px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;
`
