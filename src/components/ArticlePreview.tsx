import React from 'react';

interface ArticlePreviewProps {
  date: Date;
  title: string;
  img: string;
  link: string;
}

export default function ArticlePreview(props: ArticlePreviewProps) {
  return (
    <article className="articlePreview">
      <div className="articlePreview__top" style={{ backgroundImage: `url(${props.img})` }} />
      <div className="articlePreview__bottom">
        <small>{props.date.toLocaleDateString()}</small>
        <h4>{props.title}</h4>
        <a href={props.link}>Lire l&lsquo;article</a> <i className="fa-solid fa-arrow-right" />
      </div>
    </article>
  );
}
