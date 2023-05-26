import React from 'react'

const PaymentCheckout = ({ verifySignature, data }) => {
    return (
      <div className="container text-center">
        <div className="shadow p-3 mb-5 bg-white rounded">
          {verifySignature === 'true' ? (
            <>
              <h4 className="text-success text-left">Checksum is verified. Transaction details are below:</h4>
              <table className="table table-bordered">
                {Object.keys(data).map((key) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{data[key]}</td>
                  </tr>
                ))}
              </table>
            </>
          ) : (
            <h3 className="text-danger">Checksum is not verified.</h3>
          )}
        </div>
      </div>
    );
  };
  
  export default PaymentCheckout;