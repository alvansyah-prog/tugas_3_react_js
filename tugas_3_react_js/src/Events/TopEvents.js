import React from "react";

const TopEvents =() => {
  const handleFooter = (value, pd)=>{
    pd.preventDefault();
    alert(value);
  }
  return(
    <a href="/" onClick={(pd) => handleFooter("Back To Home", pd)}>Back To Home</a>
  );

}
export default TopEvents;
