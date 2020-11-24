import logo from "../images/Logo.png";
import "../stylesheets/Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt={logo} className="img-logo"></img>
    </div>
  );
};
Header.propTypes = {};
export default Header;
