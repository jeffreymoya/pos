import React, { useEffect } from 'react'
import { Header } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../shared/slices'
import ProductList from './ProductList'
import { fetch } from '../../shared/slices/items'

const HomeScreen: React.FC = () => {
  const items = useSelector((state: RootState) => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetch())
  }, [dispatch])

  return (
    <Header>
      <ProductList items={items} />
    </Header>
  )
}

export default HomeScreen
