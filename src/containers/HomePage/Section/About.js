import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Truyền thông BookingCare</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="70%"
              height="300px"
              src="https://www.youtube.com/embed/FyDQljKtWnI"
              title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            Chúng tôi, Công ty CP Công nghệ BookingCare, đơn vị sở hữu và vận
            hành “Nền tảng Y tế Chăm sóc sức khỏe toàn diện BookingCare” bao gồm
            hệ thống website và các ứng dụng di động. BookingCare cung cấp nền
            tảng công nghệ để bệnh nhân thuận tiện trong việc đặt lịch dịch vụ y
            tế với bác sĩ và cơ sở y tế. Bằng việc truy cập hoặc sử dụng dịch vụ
            của BookingCare, bạn hoàn toàn đồng ý theo các điều khoản, điều kiện
            dưới đây.
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
