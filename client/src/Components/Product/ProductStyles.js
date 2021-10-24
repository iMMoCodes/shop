import styled from 'styled-components';

export const Info = styled.div`
  opacity: 0;
  width: 300px;
  height: 300px;
  position: absolute;
  top: -18px;
  left: -7px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  /* flex: 1; */
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    border-radius: 20px;
  }
`;
export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
