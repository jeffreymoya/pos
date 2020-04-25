import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import HomeScreen from '../components/HomeScreen'
import { RootState } from '../redux'

const mapStateToProps = ({ items }: RootState) => ({
  items,
})
const mapDispatchToProps = {}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export type PropType = ConnectedProps<typeof connector>

export default connector(HomeScreen)
