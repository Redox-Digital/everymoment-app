import React from 'react';

interface ContactBlockProps {
  title: string;
  desc: string;
  icon: string;
}

export default function ContactBlock(props: ContactBlockProps) {
  return (
    <div className="contactBlock">
      <div className="contactBlock__icon">
        <i className={`fa-solid ${props.icon}`} />
      </div>
      <div className="contactBlock__texts">
        <h4>{props.title}</h4>
        <small>{props.desc}</small>
      </div>
    </div>
  );
}
