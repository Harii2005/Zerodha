import React from "react";
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Grow from '@mui/material/Grow';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { watchlist } from "../data/data";
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock , index) =>{
          return(<WatchListItem stock={stock} key={index}/>)
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem =({stock})=>{
  const [showWatchList , setshowWatchListAction] = useState(false)

  const handleMouseEnter =(e)=>{
    setshowWatchListAction(true);
  }

  const handleMouseLeave = (e) =>{
    setshowWatchListAction(false);
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        {/* down means red color and up means green */}
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="precent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="up" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>


    </li>
  )
}
