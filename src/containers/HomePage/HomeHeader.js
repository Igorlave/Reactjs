import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/logo.svg'
import { FormattedMessage } from 'react-intl';
import { LANGUAGE } from "../../utils";
import { changeLanguageApp } from '../../store/actions/appActions';
// import { lang } from 'moment/moment';
import { withRouter } from 'react-router';


class HomeHeader extends Component {


    changeLanguage = (language) => {
        //fire redux event (action) changeLanguage in func 'mapDispatchToProps' 
        this.props.changeLanguageAppRedux(language)
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    render() {

        let language = this.props.language; //'props.language' get from redux
        return (
            <React.Fragment>
            <div className='home-header-container'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i className='fas fa-bars'></i>
                        <img className='header-logo' src={logo} onClick={() => this.returnToHome()}/>
                    </div>
                    <div className='center-content'>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.speciality"/></b></div>
                            <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor"/></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.health-facility"/></b></div>
                            <div className='subs-title'><FormattedMessage id="homeheader.select-facility"/></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.doctor"/></b></div>
                            <div className='subs-title'><FormattedMessage id="homeheader.chose-doc"/></div>
                        </div>
                        <div className='child-content'>
                            <div><b><FormattedMessage id="homeheader.fee"/></b></div>
                            <div className='subs-title'><FormattedMessage id="homeheader.check-health"/></div>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='support'><i className='fas fa-question-circle'></i> <FormattedMessage id="homeheader.support"/></div>
                        <div className={language === LANGUAGE.VI ? 'language-vi active': 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGE.VI)}>Vie</span></div>
                        <div className={language === LANGUAGE.EN ? 'language-en active': 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGE.EN)}>Eng</span></div>
                    </div>
                </div>
            </div>
            {this.props.isShowBanner === true &&
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1"/></div>
                        <div className='title2'><FormattedMessage id="banner.title2"/></div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type='search' placeholder='Tìm chuyên khoa khám bệnh'></input>
                        </div> 
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child1"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child2"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child3"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-flask'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child4"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child5"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-briefcase-medical'></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child6"/></div>
                            </div>
                        </div>
                    </div>

                </div>
            }
            </React.Fragment>
        );
    }

}

//get language value from redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

//fire event from redux to react
const mapDispatchToProps = dispatch => {
    return {
        //fire redux action 'changLanguageApp' using func 'changeLanguageAppRedux'
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))

    };
};

//connect redux with react
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
