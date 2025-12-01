import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";

import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await fetch("/exercises.json"); // fetch from public folder
      const data = await res.json();

      let filteredExercises = data;

      if (bodyPart && bodyPart !== "all") {
        filteredExercises = data.filter(
          (ex) => ex.bodyPart.toLowerCase() === bodyPart.toLowerCase()
        );
      }

      setExercises(filteredExercises);
      setCurrentPage(1); // reset pagination
    };

    fetchExercises();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" }, p: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={exercise.id || idx} exercise={exercise} />
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
