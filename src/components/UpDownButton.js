import { Link } from "react-scroll";
import { RiArrowUpCircleLine, RiArrowDownCircleLine } from "react-icons/ri";

const UpDownButton = ({ isUpButton, to }) => {
  return (
    <>
      {isUpButton ? (
        <Link to={to} spy={true} smooth={true}>
          {
            <RiArrowUpCircleLine
              title="Back"
              className="up-button"
              size={"70px"}
            ></RiArrowUpCircleLine>
          }
        </Link>
      ) : (
        <Link to={to} spy={true} smooth={true}>
          {
            <RiArrowDownCircleLine
              title="Next"
              className="down-button"
              size={"70px"}
            ></RiArrowDownCircleLine>
          }
        </Link>
      )}
    </>
  );
};

export default UpDownButton;
