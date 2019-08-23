import React from 'react';

/**
 * Represents a navbar for the webpage
 * @class
 */

class navbar extends React.Component {

    constructor(props)
    {
        super(props)

         this.goToMain=this.goToMain.bind(this)
         this.goToCart=this.goToCart.bind(this)
    }

    goToMain() {
        this.props.history.push('/Main');
    }
    goToCart() {
         this.props.history.push('/Cart')
    }

    render() {
        return (

            <nav className="navbar sticky-top navbar-light bg-light">
                <a onClick={this.goToMain} className="navbar-brand" href="#">Home</a>

                <button onClick={this.goToCart} className="btn btn-outline-success my-2 my-sm-0" >My Cart</button>
            </nav>
        )

    }






}
export default navbar;