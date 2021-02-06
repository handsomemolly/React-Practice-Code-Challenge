import React, { Fragment } from "react";

const Sushi = (props) => {
  const handleEatSushi = () => {
    props.onEatSushi(props.sushi);
  };

  const sushiStatus = () => {
    return props.isSushiEaten(props.sushi);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {
          /* Tell me if this sushi has been eaten! */
          sushiStatus() ? null : <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
