import './Heading.scss';

export function Heading({ title, headingClassName }) {
  return <h2 className={headingClassName}>{title}</h2>;
}
;
