import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
  height: 80vh;
  /* width: calc(100vw - 200px); */
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1``;
export const CreateButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
