import styled from 'styled-components'
import { mobile } from '../../responsive'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    url('https://images.pexels.com/photos/4598196/pexels-photo-4598196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: '100%' })}
`
export const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%', margin: '10px' })}
`
export const Title = styled.h1``
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
export const Item = styled.div`
  width: 400px;
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
  display: block;
  max-width: 200px;
  max-height: 40px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin: 40px 0;
  cursor: pointer;
`
