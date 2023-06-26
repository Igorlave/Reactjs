import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { emitter } from '../../utils/emitter';


class ModalUser extends Component {

constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
    }

    this.listenToEmitter();
}

    //get event from parent
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state of child (clear data input after create)
            this.setState ({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }

    componentDidMount() {
        console.log('mouting modal')
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        //bad ver
        // this.state[id] = event.target.value
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad ver', this.state)
        // })
        //good ver
        let copyState = {...this.state};
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for(let i =0; i < arrInput.length; i++){
            // console.log('check valid', this.state[arrInput[i]], arrInput[i])
            if(!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing'+arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser =() => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            //call api create user
            this.props.createNewUser(this.state);

        }
    }

    render() {
        // console.log('check child props', this.props)
        // console.log('check child open props', this.props.isOpen)
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
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInput(event, "email")}}
                            value={this.state.email}
                            ></input>
                    </div>
                    <div className='input-container'>
                            <label>Password</label>
                            <input type='password' 
                            onChange={(event)=>{this.handleOnChangeInput(event, "password")}}
                            value={this.state.password}

                            ></input>
                    </div>
                    <div className='input-container'>
                            <label>First name</label>
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInput(event, "firstName")}}
                            value={this.state.firstName}

                            ></input>
                    </div>
                    <div className='input-container'>
                            <label>Last name</label>
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInput(event, "lastName")}}
                            value={this.state.lastName}
                            ></input>
                    </div>
                    <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text' 
                            onChange={(event)=>{this.handleOnChangeInput(event, "address")}}
                            value={this.state.address}
                            ></input>
                    </div>
                </div>
                        
            </ModalBody>
            <ModalFooter>
            <Button color="primary" className='px-3' onClick={() => this.handleAddNewUser()}>
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






