import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './HomeFooter.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

 
class HomeFooter extends Component {

    
    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2023 Nguyen Anh Duc DS20V7X105 <a href='#'>&#8594; For more info, visit my social &#8592;</a></p>
            </div>
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
    };
};

//connect redux with react
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
