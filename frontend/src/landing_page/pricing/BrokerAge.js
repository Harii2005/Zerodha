import React from "react";

function BrokerAge() {
  return (
    <div className="container my-5 py-4">
      <h2 className="text-center mb-5 fw-bold">Simple, transparent pricing</h2>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <img
                src="/assets/pricing-eq-0.svg"
                alt="Free equity delivery"
                style={{ width: "120px", marginBottom: "20px" }}
              />
              <h3 className="mb-2 fw-bold">₹0</h3>
              <p className="text-muted mb-4">Equity delivery</p>
              <p>
                All equity delivery investments (BSE, NSE), IPOs, bonds, and
                government securities are absolutely free.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <img
                src="/assets/pricing0.svg"
                alt="Free mutual funds"
                style={{ width: "120px", marginBottom: "20px" }}
              />
              <h3 className="mb-2 fw-bold">₹0</h3>
              <p className="text-muted mb-4">Direct mutual funds</p>
              <p>
                All direct mutual funds, across all mutual fund companies.
                Absolutely free, no commission.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <img
                src="/assets/other-trades-20.svg"
                alt="Intraday and F&O"
                style={{ width: "120px", marginBottom: "20px" }}
              />
              <h3 className="mb-2 fw-bold">₹20</h3>
              <p className="text-muted mb-4">Intraday and F&O</p>
              <p>
                All intraday equity, F&O, currency, and commodity trades, across
                all exchanges. Flat per order, not per lot.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3">
        <h4 className="mb-4 fw-bold">Other charges</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-light">
              <tr>
                <th>Description</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account opening</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>AMC charges</td>
                <td>₹300 per year (₹0 for the first year)</td>
              </tr>
              <tr>
                <td>Call & trade fee</td>
                <td>₹50 per order</td>
              </tr>
              <tr>
                <td>Demat</td>
                <td>₹13.5 + GST per ISIN</td>
              </tr>
              <tr>
                <td>DP charges (Non-Pool)</td>
                <td>₹20 per scrip</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted mt-3 fs-6">
          <small>
            * Regulatory charges and statutory levies are applied as applicable.{" "}
            <a href="#" className="text-decoration-none">
              Learn more
            </a>
          </small>
        </p>
      </div>

      <div className="alert alert-light border mt-5 p-4">
        <h5 className="mb-3">Brokerage calculator</h5>
        <p className="mb-3">
          Want to compare and see how much you'll save with our pricing?
        </p>
        <a href="#" className="btn btn-outline-primary">
          Calculate now
        </a>
      </div>
    </div>
  );
}

export default BrokerAge;
