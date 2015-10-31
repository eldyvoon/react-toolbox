import React from 'react';
import style from './style';

const Markdown = (props) => {
  let className = style.markdown;
  if (props.className) className += ` ${props.className}`;

  const html = {
    __html: props.markdown
  };

  return <article className={className} dangerouslySetInnerHTML={html} />;
};

Markdown.propTypes = {
  className: React.PropTypes.string,
  markdown: React.PropTypes.string.isRequired
};

Markdown.defaultProps = {
  className: ''
};


export default Markdown;
