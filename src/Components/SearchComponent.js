import _ from 'lodash'
//import faker from 'faker'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, Grid, Header, Segment, Modal, Button } from 'semantic-ui-react'

const initialState = {
    id: '',
    loading: false,
    results: [],
    value: '',
    open: false,
    size: 'mini'
}

const source = [
    {   
       title: 'Hummus Original 275g',
       image: '/images/products/product1.jpeg',
       description: 'Sevan Hummus Original is Sweden\'s most purchased hummus..',
       price: '1',
    },
    {
        title: 'Bulgur Coarse Pivlalik Roasted Noodles 1kg',
        image: '/images/products/product2.jpeg',
        description: 'Bulgur has a central role in cooking in the Middle East..',
        price: '2',
    },
    {
        title: 'Corned Beef 340g',
        image: '/images/products/product3.jpeg',
        description: 'Corned beef is a classic preserved meat..',
        price: '3',
    },
    {
        title: 'Vine leaves in layer 620g',
        image: '/images/products/product4.jpeg',
        description: 'Our crisp vine leaves are hand-packed..',
        price: '4',
    },
    {
        title: 'Hummus Tahina Traditional 400g',
        image: '/images/products/product5.jpeg',
        description: 'Our crisp vine leaves are hand-packed, one at a time..',
        price: '5',
    },
    {
        title: 'Baba Ghannouge 380g',
        image: '/images/products/product6.jpeg',
        description: 'Our crisp vine leaves are hand-packed, one at a time..',
        price: '6',
    },
    {
        title: 'White Beans 560g',
        image: '/images/products/product7.jpeg',
        description: 'Our crisp vine leaves are hand-packed, one at a time..',
        price: '7',
    },
    {
        title: 'Bulgur Shishe Kitel Fine 1kg',
        image: '/images/products/product8.jpeg',
        description: 'Our crisp vine leaves are hand-packed, one at a time,..',
        price: '8',
    },
    {
        title: 'Red kidney beans 900g',
        image: '/images/products/product9.jpeg',
        description: 'The kidney bean is one of the most common beans and is..',
        price: '9',
    },
    {
        title: 'Sun-dried tomatoes in oil 290g',
        image: '/images/products/product10.jpeg',
        description: 'Our sun-dried tomatoes are plump and have a distinct..',
        price: '10',
     },
]

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection,  }
    case 'OPEN':
        return { ...state, open: true, value: action.selection, id: action.choose  }
    case 'CLOSE':
        return { ...state, open: false,  }
       
   
    default:
      throw new Error()
  }
}

function SearchComponent() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value, open, size, id } = state
  const navigate = useNavigate()

  const openProduct = () => {
    navigate("/products/" + value + "/" + id)
  }

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })

    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          placeholder='Search Product...'
          onResultSelect={(e, data) =>
                dispatch({ 
                    type: 'OPEN', 
                    selection: data.result.title ,
                    choose: data.result.price
              }) 
          }  
          
          onSearchChange={handleSearchChange}
          results={results}
          value={value}      
          
        />
      </Grid.Column> 
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE' })}
      >
        <Modal.Header>Select Product</Modal.Header>
        <Modal.Content>
          <p style={{fontSize: '1.3em'}}>You have chosen to view, {value}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE' })}>
            No
          </Button>
          <Button positive onClick={() => {openProduct(value, id); dispatch({ type: 'CLOSE' }) }}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
      
    </Grid>
  )
}

export default SearchComponent
