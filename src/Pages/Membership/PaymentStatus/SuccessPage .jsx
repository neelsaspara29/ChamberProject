import React from "react";

const SuccessPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 mt-5">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title ">Payment Successful</h2>
              <p className="card-text ">
                Thank you for your payment. Your transaction was successful.
              </p>
              <a href="/" className="btn btn-primary text-white">
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
