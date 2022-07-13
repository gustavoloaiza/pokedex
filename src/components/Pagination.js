import React from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";

function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  const clicLeftPower = () => {
    onLeftClick(10);
  };

  const clicLeft = () => {
    onLeftClick(1);
  };

  const clicRightPower = () => {
    onRightClick(10);
  };

  const clicRight = () => {
    onRightClick(1);
  };

  return (
    <div className="pagination">
      <div className="pagination-button" onClick={clicLeftPower}>
        <AiOutlineDoubleLeft size={40} />
      </div>
      <div className="pagination-button" onClick={clicLeft}>
        <AiFillLeftCircle size={40} />
      </div>
      <div>
        {page} de {totalPages}
      </div>
      <div className="pagination-button" onClick={clicRight}>
        <AiFillRightCircle size={40} />
      </div>
      <div className="pagination-button" onClick={clicRightPower}>
        <AiOutlineDoubleRight size={40} />
      </div>
    </div>
  );
}

export default Pagination;
