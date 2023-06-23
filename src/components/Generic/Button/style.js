import { styled } from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "thinBlue":
      return {
        width: "115px",
        height: "19px",
        background: "#1804FD",
        border: "2px solid #2678F3",
        borderRadius: "8px",
      };
    case "thinGreen":
      return {
        width: "92.8px",
        height: "16.47px",
        background: "#03DE0C",
        borderRadius: "8px",
        border: "none",
      };
    case "wideBlue":
      return {
        width: "80px",
        height: "44px",
        padding: "8px 16px",
        background: "#2678F3",
        borderRadius: "8px",
      };
    case "wideGreen":
      return {
        width: "83px",
        height: "44px",
        padding: "8px 16px",
        background: "#04C12D",
        borderRadius: "8px",
      };
    case "ordersBlue":
      return {
        width: "145px",
        height: "20px",
        background: "#0375DE",
        borderRadius: "8px",
      };
    case "ordersGreen":
      return {
        width: "107.95px",
        height: "35px",
        background: "#03DE0C",
        borderRadius: "8px",
      };
    case "unusualButton":
      return {
        width: "95px",
        height: "40px",
        background: "#4A909A",
        borderRadius: "8px",
      };
    default:
      break;
  }
};

const getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  min-width: 80px;
  color: white;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${getType}
  :active {
    opacity: 0.7;
  }
`;

export { Container };
