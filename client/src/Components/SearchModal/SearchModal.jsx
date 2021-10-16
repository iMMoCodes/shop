import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Search } from '@material-ui/icons'
import { NavLink } from '../../AppStyles'
import axios from 'axios'
import { Container, Image, Input, Item, Title } from './SearchModalStyles'

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

export const SearchModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/products`)
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [])

  return (
    <>
      <Search onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Input
            type='search'
            placeholder='search...'
            onChange={(e) => setSearch(e.target.value)}
          />
          {products
            .filter((item) => {
              if (search === '') {
                return item
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item
              }
              return null
            })
            .map((item, index) => {
              return (
                <Container key={index}>
                  <NavLink to={`/product/${item._id}`}>
                    <Item>
                      <Image src={item.image} alt='product' />
                      <Title>{item.title}</Title>
                    </Item>
                  </NavLink>
                </Container>
              )
            })}
        </Box>
      </Modal>
    </>
  )
}
