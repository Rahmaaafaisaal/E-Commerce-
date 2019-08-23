import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
        
        <Button color="success" onClick={this.toggle}>Check out</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
       
          <ModalBody>
            order is submited succesfully
          </ModalBody>
          <ModalFooter>
            
            <Button color="success" onClick={event=>{this.toggle();this.props.check()}}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Confirm;