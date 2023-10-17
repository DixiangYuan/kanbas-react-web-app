import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faTachometer,
  faBook,
  faCalendar,
  faInbox,
  faClock,
  faSitemap,
  faArrowCircleRight,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

function KanbasNavigation() {
  const names = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const links = ["Account", "Dashboard", "Courses/RS101", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faUserCircle, faTachometer, faBook, faCalendar, faInbox, faClock, faSitemap, faArrowCircleRight, faQuestionCircle];
  const { pathname } = useLocation();
  return (

    <div className="wd-kanbas-navigation" style={{ background: 'black' }}>
      <Logo />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${
            pathname.includes(link) ? 'active' : 'inactive'
          }`}
        >
          <li><FontAwesomeIcon className="wd-main-nav-icon" icon={icons[index]} /><br />{names[index]}</li>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;