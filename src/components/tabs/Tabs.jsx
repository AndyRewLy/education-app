import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Tab = ({ children, vertical = false }) => {
  const [selectedTab, setSelectedTab] = useState("");
  const onClick = (tabKey) => {
    setSelectedTab(tabKey);
  };

  // Effect is meant to run only on first render
  useEffect(() => {
    setSelectedTab(React.Children.toArray(children)[0].props.value);
  }, [setSelectedTab, children]);

  const className = cn("tabs", {
    "tabs-vertical": vertical,
    "tabs-horizontal": !vertical,
  });

  return (
    <div className={className}>
      <nav className="tabs-container">
        {React.Children.map(children, (child) => {
          const selected = child.props.value === selectedTab;
          return React.cloneElement(child, { onClick, selected });
        })}
      </nav>
      <div className="tabs-content">
        {
          React.cloneElement(
            React.Children.toArray(children).find(
              (child) => child.props.value === selectedTab
            )
          ).props.children
        }
      </div>
    </div>
  );
};

Tab.propTypes = {
  /**
   * children of the component
   */
  children: PropTypes.node,

  /**
   * True if the tab is displayed vertically
   */
  vertical: PropTypes.bool,
};
export default Tab;
