import styled from 'styled-components'
import { tablet } from '../../responsive'

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${tablet({ padding: '0px', flexDirection: 'column' })}
`
