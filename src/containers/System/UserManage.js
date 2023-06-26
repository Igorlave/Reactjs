import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers, createNewUserService, deleteUserService, editUserService} from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          arrUsers: [],
          isOpenModalUser: false,
          isOpenModalEditUser: false,
          userEdit: {},
        }
    }

    async componentDidMount() {
      await this.getAllUsersFromReact();
    }

    //re-render component after action
    getAllUsersFromReact = async () => {
      let response = await getAllUsers('ALL')
      if(response && response.errCode ===0) {
        this.setState({
          arrUsers: response.users
        })
      }      
    }

    //click on add button (parent)
    handleAddNewUser = () => {
      this.setState({
        isOpenModalUser: true,
      })
    }

    //reset state of child component (child)
    toggleUserModal = () => {
      this.setState({
        isOpenModalUser: !this.state.isOpenModalUser,
      })
    }

    toggleUserEditModal = () => {
      this.setState({
        isOpenModalEditUser: !this.state.isOpenModalEditUser,
      })
    }

    //click on create button (child)
    createNewUser = async (data) => {
      try {
      let response = await createNewUserService(data);
      if(response && response.errCode !== 0) {
        alert(response.errMessage)
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        })

        //fire event to child (clear data after create)
        emitter.emit('EVENT_CLEAR_MODAL_DATA')
      }
      } catch(e) {
        console.log(e)
      }
    }

    //click on delete button (parent)
    handleDeleteUser = async (user) => {
      try{
        let res = await deleteUserService(user.id)
        if(res && res.errCode ===0) {
          await this.getAllUsersFromReact();
        } else {
          alert(res.errMessage)
        }
      } catch (e) {
        console.log (e);
      }
    }

    handleEditUser = (user) => {
      console.log('check edit user', user)
      this.setState({
        isOpenModalEditUser: true,
        userEdit: user // transfer var 'user' to array 'userEdit' then use in func 'currentUser'
      })
    }


    doEditUser = async (user) => {
      try{
        let res = await editUserService(user)
        if(res && res.errCode ===0) {
          this.setState({
            isOpenModalEditUser: false
          })
          await this.getAllUsersFromReact();
        } else {
          alert(res.errCode);
        }
      } catch (e ) {
        console.log(e);
      }
    }

    //** Life cycle of component: 1: run constructor (init state) -> 2: run didmount (set state) -> 3: render */

    render() {
      let arrUsers = this.state.arrUsers;
        return (
            <div className='users-container'>
              <ModalUser
                isOpen = {this.state.isOpenModalUser} // check modal state
                toggleFromParent={this.toggleUserModal} // turn off modal
                createNewUser={this.createNewUser} // get data input from child to run func create
              />
              {
                this.state.isOpenModalEditUser && //only mount this component when state is 'true'
                <ModalEditUser
                isOpen = {this.state.isOpenModalEditUser}
                toggleFromParent={this.toggleUserEditModal} //connect to modal state
                currentUser ={this.state.userEdit} // transfer data  from parent to child
                editUser={this.doEditUser}// transfer data edited to child to use func 'editUser'
                />
              }
                <div className=" title text-center">Manage users</div>
                <div className='mx-1'>
                  <button className='btn btn-primary px-3'
                  onClick={() => this.handleAddNewUser()}
                  >
                    <i className='fas fa-plus'></i> Add new user
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                <table id="customers">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                  
                    { arrUsers && arrUsers.map((item, index) => {
                      return(
                        <tr>
                          <td>{item.email}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.address}</td>
                          <td>
                            <button className='btn-edit' onClick={() => this.handleEditUser(item)}><i className='fas fa-pencil-alt'></i></button>
                            <button className='btn-delete' onClick={() => this.handleDeleteUser(item)}><i className='fas fa-trash'></i></button>
                          </td>
                        </tr>
                      )
                    })

                    }
                </tbody>
                </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
