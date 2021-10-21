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
export const Subtitle = styled.h3`
  margin-top: 30px;
  line-height: 40px;
  border-bottom: 1px solid #acacac;
`
export const Info = styled.div`
  display: flex;
  padding: 20px;
  ${tablet({ flexDirection: 'column' })}
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
  ${mobile({ marginLeft: '-42px' })}
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
  ${mobile({ maxWidth: '235px', marginLeft: '-45px' })}
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
  margin-bottom: ${(props) => (props.extraMargin ? '80px' : '20px')};
  font-weight: 600;
  cursor: pointer;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px 0px 10px 20px;
`
export const ErrorMessage = styled.div`
  color: #a30021;
  display: flex;
  align-items: center;
  font-size: 16px;
`

export const Divider = styled.div`
  width: 95vw;
  margin: 0 auto;
  border-bottom: 1px solid #acacac;
`
