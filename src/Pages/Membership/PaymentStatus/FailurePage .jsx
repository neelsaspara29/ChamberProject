import React from "react";

const FailurePage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <div className="card border-danger">
            <div className="card-body text-center">
              <h2 className="card-title text-danger">Payment Unsuccessful</h2>
              <p className="card-text">
                We're sorry, but there was an error processing your payment.
              </p>
              <p className="card-text">Please try again later.</p>
              <a href="/membership" className="btn btn-primary  text-white">
                Go to Paymentpage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailurePage;
