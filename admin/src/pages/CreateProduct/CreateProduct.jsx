import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Option,
  Select,
  Title,
} from './CreateProductStyles'
import { createProduct } from '../../redux/apiCalls'

const CreateProduct = () => {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const handleCategories = (e) => {
    setCategories(e.target.value.split(','))
  }

  const handleClick = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, image: downloadURL, categories }
          createProduct(product, dispatch)
        })
      }
    )
  }

  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <Input
            type='file'
            id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Item>
        <Item>
          <Label>Title</Label>
          <Input
            type='text'
            placeholder='Product Name'
            onChange={handleChange}
            name='title'
          />
        </Item>
        <Item>
          <Label>Description</Label>
          <Input
            type='text'
            placeholder='Description...'
            onChange={handleChange}
            name='desc'
          />
        </Item>
        <Item>
          <Label>Price</Label>
          <Input
            type='number'
            placeholder='100'
            onChange={handleChange}
            name='price'
          />
        </Item>
        <Item>
          <Label>Categories</Label>
          <Input
            type='text'
            placeholder='men,shirts,shoe'
            onChange={handleCategories}
          />
        </Item>
        <Item>
          <Label>Stock</Label>
          <Select onChange={handleChange} name='inStock'>
            <Option value='true'>Yes</Option>
            <Option value='false'>No</Option>
          </Select>
        </Item>
        <Button onClick={handleClick}>Create</Button>
      </Form>
    </Container>
  )
}

export default CreateProduct
