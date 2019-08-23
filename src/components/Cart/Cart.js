import React from 'react'
import store from '../../Store/Store'
import { removeItemFromOrder, submitOrderTobackend } from '../../Store/actions'
import { connect } from 'react-redux'
import Confrim from '../../DumpComponents/ConfirmModal'
/**
 * Represents a product cart.
 * @class
 */

class Cart extends React.Component {
  items = [];
  unsubscribe;
  constructor(props) {
    super(props)

    this.state = {
      orderItems: [],
      noOrder: true
    }

    this.deleteItemFromOrder = this.deleteItemFromOrder.bind(this)
    this.checkout = this.checkout.bind(this)
  }

  /**
 * lifecycle function.
 *@function
 */

  componentWillMount() {
    this.items = store.getState()
    this.items = this.items.manageOrder.orderItems
    console.log(this.items)
    if (this.items.length != 0) {
      this.setState({ noOrder: false })

    }
    this.setState({ orderItems: this.items })


  }


  componentDidMount() {

    this.unsubscribe = store.subscribe(() => {
      this.items = store.getState()
      this.items = this.items.manageOrder.orderItems
      console.log(this.items)
      this.setState({ orderItems: this.items })
      if (this.items.length == 0) {
        this.setState({ noOrder: true })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }



  deleteItemFromOrder(e) {
    this.props.removeItemFromOrder({ id: e.target.id })

  }

  checkout() {
    this.props.submitOrderTobackend(this.state.orderItems)
  }

  render() {

    return (

      <div>

        {
          this.state.noOrder ? <p>No ordered items</p> :

            this.state.orderItems.map(item => {

              return <div key={item.orderId} className="card" style={{ width: "400px", marginTop: "10px" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.product.name}</h5>
                  <p className="card-text">order ID:{item.orderId}</p>
                  <p className="card-text">Quntity:{item.itemNumber}</p>
                  <a onClick={this.deleteItemFromOrder} id={item.orderId} className="btn btn-danger">Delete</a>
                </div>
              </div>
            })

        }
        {
          this.state.noOrder ? <p></p> :
          <Confrim check={this.checkout}></Confrim>
        }
           
       

      </div>
    )
  }
}
// export default Cart;
export default connect(null, { removeItemFromOrder, submitOrderTobackend })(Cart);


