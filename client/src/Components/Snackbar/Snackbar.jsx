import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Container, Message, Symbol } from './SnackbarStyles'

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false)
  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true)
      setTimeout(() => {
        setShowSnackbar(false)
      }, 3000)
    },
  }))
  return (
    <Container type={props.type} show={showSnackbar}>
      <Symbol>
        {props.type === 'success' ? (
          <Message>&#x2713;</Message>
        ) : (
          <Message>&#x2613;</Message>
        )}
      </Symbol>
      <Message>{props.message}</Message>
    </Container>
  )
})

export default Snackbar
