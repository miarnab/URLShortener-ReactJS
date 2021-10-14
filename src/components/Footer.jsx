import React from 'react';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HeartFill } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <br/>
      <br/>
      <div className="row">
        <div className="col-md-4">
          <ul className="center">
            <li>Home</li>
            <li>About</li>
            <li>More Info...</li>
          </ul>
        </div>
        <div className="col-md-4">
          <p className="center">ABC Pvt. Ltd.</p>
        </div>
        <div className="col-md-4">
          <p className="center">Our Location: ABC Street, XYZ. GHI-123456.</p>
          <p className="center">Contact Us: </p>
          <p className="center">Email: abcd@gmail.com</p>
          <p className="center">Phone: 1234567890</p>
        </div>
      </div>
      <br/>
      <p className="center">Made with <HeartFill className="love"/> by Arnab Mitra.</p>
      <br/>
      <p className="center">Copyright &copy; of ABC Pvt. Ltd. 2021.</p>
      <br/>
      <br/>
    </footer>
  );
};

export default Footer;