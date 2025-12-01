import { Box } from "@mui/material";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

// Arrow button component
const ArrowButton = ({ onClick, icon, left, right }) => (
  <Box
    onClick={onClick}
    sx={{
      width: "40px",
      height: "40px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: left,
      right: right,
      zIndex: 1000,
    }}
  >
    <img src={icon} alt="arrow" style={{ width: "20px", height: "20px" }} />
  </Box>
);

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <ArrowButton onClick={() => scrollPrev()} icon={LeftArrowIcon} left="0" />
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <ArrowButton onClick={() => scrollNext()} icon={RightArrowIcon} right="0" />
  );
};

const HorizontalScrollbar = ({
  data = [],
  bodyParts,
  setBodyPart,
  bodyPart,
}) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <Box sx={{ position: "relative", width: "100%", py: 2 }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} wheel={false}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item} // this will now be okay for ScrollMenu
            component="div" // prevent React from forwarding unknown props to DOM
            title={item.id || item}
            sx={{
              m: "0 12px",
              minWidth: bodyParts ? "180px" : "250px",
            }}
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyParts}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
