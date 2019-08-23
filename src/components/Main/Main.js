import React from 'react';
import CardItem from '../../DumpComponents/card/card'


import {connect} from 'react-redux'

import { fetchItemsFromBackend } from '../../Store/actions'

import PropTypes from 'prop-types'

/**
 * class component for the home page
 * @class
 * @property {function} fetchItemsFromBackend - function used to get the data of the products from the backend, when this component is rendered
 * @property {array} products - array of all the products got from the backend
 */

class Main extends React.Component{

 componentWillMount()
 {
     this.props.fetchItemsFromBackend();
 }

render(){
   return(
    <div>
    <CardItem products={this.props.products} ></CardItem>
    </div>)
        }
}
Main.propTypes={
    fetchItemsFromBackend:PropTypes.func.isRequired,
    products:PropTypes.array.isRequired

}
const mapSateToProps=state=>({
    products:state.products.items
})

export default connect(mapSateToProps,{fetchItemsFromBackend})(Main);