import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGE } from '../../../utils';
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import TableManageUser from './TableManageUser';

class UserRedux extends Component {


    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: '',
            isOpen: false,

            // isUserCreated: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',
            position: '',
            role: '',
            avatar: ''
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    //run after render then compare present props (affect by redux) with previous props (when render)
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if(prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }
        if(prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }

        if(prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                position: '',
                role: '',
                avatar: ''
            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objectUrl,
                avatar: file
            })        
        }


        // console.log('check file 0', objectUrl)
    }

    openPreviewImage = () => {
        if(!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === false) return;
        // this.setState({
        //     ...this.state,
        //     isUserCreated: false
        // })
        //if false -> fire redux actions
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position
        })
        // setTimeout(() => {
        //     this.props.fetchUserRedux();
        // }, 1000)
        
    }

    checkValidateInput = () => {
        let isValid = true
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
        for(let i = 0; i<arrCheck.length ; i++) {
            if (!this.state[arrCheck[i]]){
                isValid = false;
                alert('Missing ' + arrCheck[i])
                break;
            }
        }

        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = {...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender;

        let {email, password, firstName, lastName, address, 
            phoneNumber, gender, position, role, avatar} = this.state;

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    <div className="text-center" ><FormattedMessage id="manage-user.add"/></div>            
                </div>
                <div>{isGetGenders === true ? 'Loading gender' : ''}</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row1'>
                        <form>
                            <div class="form-row mt-3">
                                <div class="form-group col-md-6">
                                <label for="inputEmail"><FormattedMessage id="manage-user.email"/></label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email"
                                value={email} onChange={(event) => {this.onChangeInput(event, 'email')}}
                                />
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword"><FormattedMessage id="manage-user.password"/></label>
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password"
                                value={password} onChange={(event) => {this.onChangeInput(event, 'password')}}
                                />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputFirstName"><FormattedMessage id="manage-user.firstname"/></label>
                                <input type="text" class="form-control" id="inputFirstName" placeholder="First name"
                                value={firstName} onChange={(event) => {this.onChangeInput(event, 'firstName')}}
                                />
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputLastName"><FormattedMessage id="manage-user.lastname"/></label>
                                <input type="text" class="form-control" id="inputLastName" placeholder="Last name"
                                value={lastName} onChange={(event) => {this.onChangeInput(event, 'lastName')}}
                                />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-9">
                                <label for="inputAddress"><FormattedMessage id="manage-user.address"/></label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Address"
                                value={address} onChange={(event) => {this.onChangeInput(event, 'address')}}
                                />
                                </div>
                                <div class="form-group col-md-3">
                                <label for="inputPhoneNumber"><FormattedMessage id="manage-user.phone"/></label>
                                <input type="text" class="form-control" id="inputPhoneNumber" placeholder="Phone number"
                                value={phoneNumber} onChange={(event) => {this.onChangeInput(event, 'phoneNumber')}}
                                />
                                </div>
                            </div>                            
                            <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="gender"><FormattedMessage id="manage-user.gender"/></label>
                                <select id="gender" class="form-control" onChange={(event) => {this.onChangeInput(event, 'gender')}}>
                                    {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}>
                                                {language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>                                           
                                        )})}
                                </select>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="position"><FormattedMessage id="manage-user.position"/></label>
                                <select id="position" class="form-control" onChange={(event) => {this.onChangeInput(event, 'position')}}>
                                    {positions && positions.length >0
                                    && positions.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}>
                                                {language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )})}
                                </select>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="role"><FormattedMessage id="manage-user.roleid"/></label>
                                <select id="role" class="form-control" onChange={(event) => {this.onChangeInput(event, 'role')}}>
                                {roles && roles.length >0
                                    && roles.map((item, index) => {
                                        return (
                                            <option key={index} value={item.key}>
                                                {language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )})}
                                </select>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.image"/></label>
                                <div className='preview-img-container'>
                                    <input id="previewImg" type="file" hidden
                                    onChange={(event) => this.handleOnChangeImage(event)}
                                    />
                                    <label className='label-upload' htmlFor='previewImg'>Tải ảnh<i className='fas fa-upload'></i></label>
                                    <div className='preview-image' 
                                    style={{backgroundImage: `url(${this.state.previewImgUrl})`}}
                                    onClick={() => this.openPreviewImage()}
                                    >
                                    </div>                                    
                                </div>

                                </div>
                            </div>
                            <button type="button" 
                            class="btn btn-primary mt-3"
                            onClick={() => this.handleSaveUser()}
                            ><FormattedMessage id="manage-user.save"/></button>
                            </form>
                        
                            <div className='col-12 mb-5'>
                                <TableManageUser/>                            
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.isOpen === true &&
                    <Lightbox
                    mainSrc={this.state.previewImgUrl}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />            
                }
            </div>
        )
    }

}

// map state(redux) to props(react)
const mapStateToProps = state => {
    return {
        language: state.app.language,
        //get state gender from redux to react through 'state.admin(adminReducer - defined at rootReducer)'
        genderRedux: state.admin.genders, 
        isLoadingGender: state.admin.isLoadingGender,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
