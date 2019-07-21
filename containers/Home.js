import React from 'react';
import { connect } from 'react-redux';
import HomeScreen from '../components/HomeScreen';

const mapStateToProps = ({ orders, products }) => {
  orders, products;
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
