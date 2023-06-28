import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './About.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

 
class About extends Component {

    
    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nổi bật
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" 
                        height="400px" 
                        src="https://www.youtube.com/embed/FyDQljKtWnI" 
                        title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                        Trụ sở tại Hà Nội
                        Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam

                        </p>
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
