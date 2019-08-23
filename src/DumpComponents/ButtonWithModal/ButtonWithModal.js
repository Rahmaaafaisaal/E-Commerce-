import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import InputNum from '../InputNUm/InputNum'
class ButtonWithModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      
    };

    this.toggle = this.toggle.bind(this);
    
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

 
  
    render() {
      
      return (
        <div>
          <Form inline onSubmit={(e) => e.preventDefault()}>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          </Form>
         
          <Modal centered={true} backdrop="static"   isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
            <ModalBody>
           <img  style={{width:"100%"}}src={this.props.src}/>
           <p>This product is for mobiles and very good one </p>
           <p> please enter your quntity</p>
           
          </ModalBody>
          <ModalFooter>
          <InputNum product={this.props.product} closeModal={this.toggle}> </InputNum>
          </ModalFooter>
        </Modal>
     
      </div>
    );
  }
}

export default ButtonWithModal;