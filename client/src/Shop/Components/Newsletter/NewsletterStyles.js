import styled from 'styled-components';
import { mobile, tablet } from '../../../responsive';

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${tablet({ height: '40vh' })}
  ${mobile({ height: '100%' })}
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center', fontSize: '55px' })}
`;
export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${tablet({ textAlign: 'center' })}
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  ${mobile({ border: 'none', width: '80%' })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  height: 100%;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 100%;
  cursor: pointer;
`;
