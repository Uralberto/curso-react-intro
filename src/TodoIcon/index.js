import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

// Este objeto es una buena forma para trabajar condicionales
// Aquí la idea es que cada elemento del objeto sea una función

function TodoIcon({ type, color, onClick }) {
  return (
    <span 
    className={`Icon-container Icon-container-${type}`}
    onClick = {onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}
export { TodoIcon };


