import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Doctor.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

 

class Doctor extends Component {

    render() {
        return (
            <div className='section-share section-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-custom'>
                            <div className='custom-border'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-best-doctor'/>
                                </div>
                                <div className='position text-center'>
                                    <div>GS.TS Nguyễn Duy Hưng</div>
                                    <div>Bệnh viện Chợ Rẫy 1</div>                            
                                </div>
                            </div>
                        </div>
                        <div className='section-custom'>
                            <div className='custom-border'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-best-doctor'/>
                                </div>
                                <div className='position text-center'>
                                    <div>GS.TS Nguyễn Duy Hưng</div>
                                    <div>Bệnh viện Chợ Rẫy 1</div>                            
                                </div>
                            </div>
                        </div>
                        <div className='section-custom'>
                            <div className='custom-border'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-best-doctor'/>
                                </div>
                                <div className='position text-center'>
                                    <div>GS.TS Nguyễn Duy Hưng</div>
                                    <div>Bệnh viện Chợ Rẫy 1</div>                            
                                </div>
                            </div>
                        </div>
                        <div className='section-custom'>
                            <div className='custom-border'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-best-doctor'/>
                                </div>
                                <div className='position text-center'>
                                    <div>GS.TS Nguyễn Duy Hưng</div>
                                    <div>Bệnh viện Chợ Rẫy 1</div>                            
                                </div>
                            </div>
                        </div>
                        <div className='section-custom'>
                            <div className='custom-border'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-best-doctor'/>
                                </div>
                                <div className='position text-center'>
                                    <div>GS.TS Nguyễn Duy Hưng</div>
                                    <div>Bệnh viện Chợ Rẫy 1</div>                            
                                </div>
                            </div>
                        </div>
                        <div className='section-custom'>
                            <div className='custom-border'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-best-doctor'/>
                                </div>
                                <div className='position text-center'>
                                    <div>GS.TS Nguyễn Duy Hưng</div>
                                    <div>Bệnh viện Chợ Rẫy 1</div>                            
                                </div>
                            </div>
                        </div>
                    </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
