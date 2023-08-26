import React, { useEffect } from 'react'
import { Header } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/redux/slices'
import ProductList from './ProductList'
import { fetch } from '../../state/redux/slices/items'

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
