import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [allExercises, setAllExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastSearch, setLastSearch] = useState("");

  // Fetch body parts and exercises
  useEffect(() => {
    const fetchBodyParts = async () => {
      const data = await fetch("/bodyParts.json").then((res) => res.json());
      setBodyParts(data);
    };

    const fetchExercises = async () => {
      const data = await fetch("/exercises.json").then((res) => res.json());
      setAllExercises(data);
      setExercises(data);
    };

    fetchBodyParts();
    fetchExercises();
  }, [setExercises]);

  // Handle search
  const handleSearch = () => {
    if (!search) return;

    setLoading(true);
    setLastSearch(search);

    setTimeout(() => {
      const searchedExercises = allExercises.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.target.toLowerCase().includes(search.toLowerCase()) ||
          item.equipment.toLowerCase().includes(search.toLowerCase()) ||
          item.bodyPart.toLowerCase().includes(search.toLowerCase())
      );

      setExercises(searchedExercises);
      setSearch("");
      setLoading(false);
    }, 500);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" }, mb: "50px" }}
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      {/* Search input + button */}
      <Box position="relative" mb="50px">
        <TextField
          sx={{
            input: { fontWeight: 700, border: "none", borderRadius: "40px" },
            width: { lg: "800px", xs: "300px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            px: 2,
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "160px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
            borderRadius: "0 40px 40px 0",
            "&:hover": { bgcolor: "#FF3B3B" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Body part horizontal scroll */}
      {bodyParts.length > 0 && (
        <Box sx={{ position: "relative", width: "100%", p: "20px 0" }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      )}

      {/* Loader */}
      {loading && <Loader />}

      {/* Results or explanatory message */}
      {!loading && allExercises.length === 0 && lastSearch && (
        <Typography
          mt={4}
          textAlign="center"
          fontSize={{ lg: "20px", xs: "16px" }}
          color="#FF2625"
          fontWeight="bold"
        >
          No exercises found for <strong>{lastSearch}</strong> <br />
          Try searching another keyword or select a different category.
        </Typography>
      )}

      {/* Horizontal scroll with exercises */}
      {!loading && allExercises.length > 0 && (
        <Box sx={{ width: "100%", py: 2 }}>
          <HorizontalScrollbar data={allExercises} />
        </Box>
      )}
    </Stack>
  );
};

export default SearchExercises;
