import React from 'react'
import { Button } from 'reactstrap';
import { addItemToOrder } from '../../Store/actions'
import { connect } from 'react-redux';

class InputNum extends React.Component {

    
    constructor(props) {
        super(props);
        this.state={
             itemQuntity:0,
             displayError:"none", 
             parentCloseModal:this.props.closeModal
        }
 this.addvalue=this.addvalue.bind(this)
 this.additemtoorder = this.additemtoorder.bind(this);
    }
 addvalue(e){
   
    this.setState({displayError:"none"})
   
    let quntity=e.target.value;
    const re = /^[0-9\b]+$/;
    
    if (e.target.value === '' || re.test(quntity)) {
        this.setState({itemQuntity:quntity})
        console.log(quntity)
     }
     else
     {
        this.setState({displayError:"block"})
     }
 }



 additemtoorder(e)
 {   
     
    if(this.state.itemQuntity!==0)
    { 
    this.props.addItemToOrder({itemNumber:this.state.itemQuntity,product:this.props.product})
    this.setState({itemQuntity:0}
    )
    }
    else
    this.setState({displayError:"block"})
    this.state.parentCloseModal();
    

 }



    render() {

        return (
            <div>
            <div  style={{ marginTop: "2%" }}>
                <input type="text" name="itemQuntity" onChange={this.addvalue} className="form-control" placeholder="10" autoFocus required />
            </div>
            <div>
                <p style={{display:this.state.displayError,color:"red"}}>please enter a valid number </p>
            </div>
            <Button color="primary" onClick={this.additemtoorder}>Buy</Button>
           </div>
)

    }




}


export default connect(null,{addItemToOrder})(InputNum);
