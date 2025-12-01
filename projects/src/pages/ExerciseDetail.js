import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      try {
        const res = await fetch("/exercises.json");
        const exercisesData = await res.json();

        // Find exercise by ID
        const exercise = exercisesData.find((ex) => ex.id === parseInt(id));
        setExerciseDetail(exercise);

        // Real YouTube videos from JSON
        setExerciseVideos(
          exercise.videos.map((v) => ({
            videoId: v.videoId,
            title: v.title,
            channelName: v.channelName,
            thumbnails: [{ url: v.thumbnail }],
          }))
        );

        // Similar exercises by target
        const targetExercises = exercisesData.filter(
          (ex) => ex.target === exercise.target && ex.id !== exercise.id
        );
        setTargetMuscleExercises(targetExercises);

        // Similar exercises by equipment
        const equipExercises = exercisesData.filter(
          (ex) => ex.equipment === exercise.equipment && ex.id !== exercise.id
        );
        setEquipmentExercises(equipExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <Box p={4}>Loading exercise...</Box>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
