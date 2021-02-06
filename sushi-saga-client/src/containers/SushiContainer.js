import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "..//components/Sushi";

const SushiContainer = (props) => {
  const renderSushi = () => {
    return props.currentSushi.map((sushi) => {
      return (
        <Sushi
          sushi={sushi}
          onEatSushi={props.onEatSushi}
          isSushiEaten={props.isSushiEaten}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton onGetNextSushi={props.onGetNextSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
