import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export const theme = {
  icons: {
    check: <FaRegCheckCircle className="exlamation" />,
    checkGreen: <FaRegCheckCircle className="success" />,
    checkFilled: <FaCheckCircle className="success" />,

    exclamation: <FaExclamationCircle className="exlamation" />,
    close: <FaTimesCircle className="fail" />,
    arrowDown: <FaChevronDown />,
    arrowUp: <FaChevronUp />,
  },
};
