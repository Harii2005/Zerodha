import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    // Handle buy logic here
    console.log(`Buying ${stockQuantity} shares of ${uid} at ${stockPrice}`);
    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>
              <h4>Buy {uid}</h4>
            </legend>

            <div className="input-group">
              <label htmlFor="qty">Qty.</label>
              <input
                type="number"
                name="qty"
                id="qty"
                step="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </div>
          </fieldset>
        </div>

        <div className="buttons">
          <span>
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
          </span>
          <span>
            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
