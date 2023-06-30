import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGE } from '../../../utils';
import * as actions from '../../../store/actions'

class UserRedux extends Component {


    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        // this.props.dispatch(actions.fetchGenderStart())
        // try {
        //     let res = await getAllCodeService('gender');
        //     if(res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
    }


    render() {
        console.log('check state', this.state)
        let genders = this.state.genderArr;
        let language = this.props.language;
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    <div className="text-center" ><FormattedMessage id="manage-user.add"/></div>            
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row1'>
                        <form>
                            <div class="form-row mt-3">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4"><FormattedMessage id="manage-user.email"/></label>
                                <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.password"/></label>
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4"><FormattedMessage id="manage-user.firstname"/></label>
                                <input type="text" class="form-control" id="inputFirstName" placeholder="First name"/>
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.lastname"/></label>
                                <input type="text" class="form-control" id="inputLastName" placeholder="Last name"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-9">
                                <label for="inputEmail4"><FormattedMessage id="manage-user.address"/></label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Address"/>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.phone"/></label>
                                <input type="text" class="form-control" id="inputPhoneNumber" placeholder="Phone number"/>
                                </div>
                            </div>                            
                            <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="gender"><FormattedMessage id="manage-user.gender"/></label>
                                <select id="gender" class="form-control">
                                    {genders && genders.length > 0 &&
                                    genders.map((item, index) => {
                                        return (
                                            <option key={index}>{language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                                            </option>                                           
                                        )
                                    })
                                    }

                                </select>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id="manage-user.position"/></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="inputState"><FormattedMessage id="manage-user.roleid"/></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="form-group col-md-3">
                                <label for="inputPassword4"><FormattedMessage id="manage-user.image"/></label>
                                <input type="text" class="form-control" id="inputImage" placeholder="Image"/>
                                </div>
                            </div>
                            {/* <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div> */}
                            <button type="submit" class="btn btn-primary mt-3"><FormattedMessage id="manage-user.save"/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
