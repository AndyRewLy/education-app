import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
const Tab = ({ children, onClick, selected, value }) => {
  const className = cn("tabs-tab", { "tabs-tab-selected": selected });
  return (
    <div className={className} onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

Tab.propTypes = {
  /**
   * Children of the tab
   */
  children: PropTypes.node,
  /**
   * Callback fired when the tab is clicked
   */
  onClick: PropTypes.func,
  /**
   * The tab is selected
   */
  selected: PropTypes.bool,
};
export default Tab;
