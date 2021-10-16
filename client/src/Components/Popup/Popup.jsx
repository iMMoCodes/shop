import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  Title,
} from './PopupStyles'
import { Add, Remove, ShoppingCartOutlined } from '@material-ui/icons'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  border: '1px solid #000',
  backgroundColor: '#e2e2e2',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
}

export const BasicModal = ({ item }) => {
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()

  const product = { ...item, quantity, color, size }

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct(product))
    setOpen(false)
  }

  return (
    <div>
      <ShoppingCartOutlined onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Title>{item.title}</Title>
          <Image src={item.image} alt='product' />
          <FilterContainer>
            {item.color.length >= 1 && (
              <Filter>
                <FilterTitle>Color:</FilterTitle>
                {item.color.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </Filter>
            )}
            {item.size.length >= 1 && (
              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {item.size.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            )}
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </Box>
      </Modal>
    </div>
  )
}
