import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class ModalUser extends Component {

constructor(props) {
    super(props);
    this.state = {

    }
}

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }


    render() {
        console.log('check child props', this.props)
        console.log('check child open props', this.props.isOpen)
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={() => this.toggle()} 
            className={'modal-user-container'}
            size='lg'
            centered
            >
            <ModalHeader toggle={() => this.toggle()}>Create new user</ModalHeader>
            <ModalBody>
                <div className='modal-user-body'>
                    <div className='input-container'>
                            <label>Email</label>
                            <input type='text'></input>
                    </div>
                    <div className='input-container'>
                            <label>Password</label>
                            <input type='password'></input>
                    </div>
                    <div className='input-container'>
                            <label>First name</label>
                            <input type='text'></input>
                    </div>
                    <div className='input-container'>
                            <label>Last name</label>
                            <input type='text'></input>
                    </div>
                    <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text'></input>
                    </div>
                </div>
                        
            </ModalBody>
            <ModalFooter>
            <Button color="primary" className='px-3' onClick={() => this.toggle()}>
                Create
            </Button>{' '}
            <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                Cancel
            </Button>
            </ModalFooter>
            </Modal>        
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);






