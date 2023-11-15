import { Project } from "../../types";
import "./index.scss";

interface List1Props extends Project {
  setTheme: (theme: string) => void;
}

const List1 = ({ title, demo, gh, gif, skills, setTheme }: List1Props) => (
  <div>
    <div className="item" onMouseOver={() => setTheme(gif)}>
      <div className="links">
        {demo && (
          <a className="link link--demo" href={demo} target="_blank"></a>
        )}
        {gh && <a className="link link--gh" href={gh} target="_blank"></a>}
      </div>
      {demo ? (
        <a className="item__title" href={demo} target="_blank">
          {title}
        </a>
      ) : (
        <div className="item__title">{title}</div>
      )}
    </div>
    <div className="skills">
      {skills.map((item: { id: number; color: string; title: string }) => (
        <div key={item.id} className={`skill skill--${item.color}`}>
          {item.title}
        </div>
      ))}
    </div>
  </div>
);

export default List1;
