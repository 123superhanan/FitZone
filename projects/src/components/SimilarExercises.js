import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "40px" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      fontWeight={700}
      mb="33px"
    >
      Similar Target Muscle exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Typography>No similar exercises</Typography>
      )}
    </Stack>

    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      mb="33px"
    >
      Similar Equipment exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Typography>No similar exercises</Typography>
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
