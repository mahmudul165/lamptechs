import React from "react";
function Footer() {
  return (
    <div className="mt-5 bg-dark text-white">
      <div className="container">
        <div className="row gx-4 my-5 p-3">
          <div className="col-4  ">
            <h2>Company</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
          <div className="col-8   card bg-dark">
            <div className="d-flex align-items-center justify-content-around">
              <div className="p-2 m-2">
                <h5>-Subscribe Our Newsletters</h5>
                <p>Enter Your Email</p>
                <div className="fs-1 fw-bolder bg-warning  ">
                  <hr />
                </div>
              </div>

              <div>
                <button className="btn btn-lg button-custom btn-color-bg text-white   rounded-pill p-2 m-1  ">
                  <div className=" inner-button bg-dark fw-bold"></div>
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-3">
            <h5>Quick Links</h5>
            <small>Company History</small>
            <br />
            <small>Latest News & Blog</small>
            <br />
            <small>Popular Services</small>
            <br />
            <small> Business & Consulting</small>
            <br />
            <small>Financial Planning </small>
          </div>
          <div className="col-2">
            <h5>Quick Links</h5>
            <small>Company</small>
            <br />
            <small> About Company</small>
            <br />
            <small> Word Wide Clients</small>
            <br />
            <small> Happy People’s</small>
            <br />
            <small> Winning Awards </small>
            <small> Company Statics </small>
          </div>
          <div className="col-3">
            <h5> Contact Us</h5>
            <small>Call: +8801917 009887</small>
            <br />
            <small> Email: support@gmail.com</small>
            <br />
            <small> Word Wide Clients</small>
            <br />
            <address>Address: 123/A Broklyn Stree, New York, USA</address>
            <br />
          </div>
          <div className="col-4">
            {" "}
            <h5>Follow Instagram</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
