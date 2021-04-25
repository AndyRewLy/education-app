import React from "react";
import marked from "marked";

const MarkdownWrapper = ({ content }) => {
  const rawMarkup = { __html: marked(content) };

  return (
    <div className="markdown-wrapper" dangerouslySetInnerHTML={rawMarkup} />
  );
};

export default MarkdownWrapper;
