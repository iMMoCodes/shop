import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`
export const Right = styled.div`
  flex: 5;
  margin: 150px 0px 0px 150px;
`
export const Title = styled.h1``
export const Subtitle = styled.h3`
  margin-top: 30px;
  line-height: 40px;
  border-bottom: 1px solid #acacac;
`
export const Info = styled.div`
  display: flex;
  padding: 20px;
`
export const InfoText = styled.span`
  flex: 30%;
  margin-top: 20px;
`
export const Form = styled.form`
  flex: 70%;
  display: flex;
  flex-wrap: wrap;
`
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 20px;
  margin-top: 20px;
`
export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
`
export const Input = styled.input`
  height: 30px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid #acacac;
  padding: 10px;
  &:focus {
    outline: none;
  }
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #298bdb;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`
