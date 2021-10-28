import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.div``;
export const Span = styled.span`
  font-weight: 600;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  cursor: pointer;
  margin-right: 20px;
  color: #555;
`;
