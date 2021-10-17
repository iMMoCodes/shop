import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: -35px;
  top: -100px;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.type === 'success' ? '#00F593' : '#FF0033'};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`
export const Symbol = styled.div`
  flex: 20%;
  font-weight: 600;
`
export const Message = styled.span`
  flex: 80%;
  text-align: start;
  font-weight: 600;
`
