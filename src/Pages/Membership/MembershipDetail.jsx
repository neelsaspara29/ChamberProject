import React, { useEffect, useState } from "react";
import { ApiGet, ApiPost } from "../../Helper/API/Apidata";
import Button from "react-bootstrap/Button";
import LoadingSpinner from "./LoadingSpinner";

const MembershipDetail = () => {
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPayNow, setShowPayNow] = useState(false);
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiGet(`/member/uniqueId/${id}`)
      .then((response) => {
        console.log("##", response?.data?.data?.pendingAmount);
        setUserId(response?.data?.data?.userId);
        setData(response?.data?.data?.pendingAmount);
        console.log("325555555", data);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
      });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment initiated");
    setIsLoading(true);

    const postData = {
      userId: userId,
      amount: data,
    };

    ApiPost("/payment", postData)
      .then((response) => {
        console.log("response", response);
        console.log("id", response?.data?.data?.txnData?.txntoken);
        openJsCheckoutPopup(
          response?.data?.data?.txnData?.orderid,
          response?.data?.data?.txnData?.amount,
          response?.data?.data?.txnData?.txntoken
        );
        setAmount(response);
        console.log("data", amount);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
      });
  };

  function openJsCheckoutPopup(orderId, amount, txnToken) {
    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: orderId,
        token: txnToken,
        tokenType: "TXN_TOKEN",
        amount: amount,
      },
      merchant: {
        redirect: true,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };
    if (window.Paytm && window.Paytm.CheckoutJS) {
      console.log("pop");
      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
          setIsLoading(false);

          console.log("first");
        })
        .catch(function onError(error) {
          console.log("error => ", error);
        });
    }
  }
  useEffect(() => {
    if (data > 0) {
      setShowPayNow(true);
    } else {
      setShowPayNow(false);
    }
  }, [data]);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div
          style={{
            background: "#fff",
            boxShadow: "0 0 5px #aaa",
            padding: "20px 30px",
          }}
        >
          <div className="form-group text-center d-flex align-items-center">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">ID</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="User Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary text-white"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-4"></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="amount">Amount: {data}</div>

            {showPayNow ? (
              <Button
                className="btn btn-primary text-white"
                onClick={handlePayment}
                disabled={isLoading}
              >
                {isLoading ? <LoadingSpinner /> : "Pay Now"}
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipDetail;
