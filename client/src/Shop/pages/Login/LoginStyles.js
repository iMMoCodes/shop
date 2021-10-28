import styled from 'styled-components';
import { tablet } from '../../../responsive';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    url('https://images.pexels.com/photos/4598196/pexels-photo-4598196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${tablet({ width: '75%' })}
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: rgb(150, 150, 150);
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: black;
  cursor: pointer;
  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;
export const LoginLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Error = styled.div`
  margin: 10px 0px;
  color: #a30021;
  font-size: 18px;
  font-weight: 600;
`;
