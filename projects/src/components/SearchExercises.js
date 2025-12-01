import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [allExercises, setAllExercises] = useState([]); // store exercises locally

  useEffect(() => {
    const fetchBodyParts = async () => {
      const data = await fetch("/bodyParts.json").then((res) => res.json());
      setBodyParts(data);
    };

    const fetchExercises = async () => {
      const data = await fetch("/exercises.json").then((res) => res.json());
      setAllExercises(data); // save locally
      setExercises(data); // pass to parent
    };

    fetchBodyParts();
    fetchExercises();
  }, [setExercises]);

  const handleSearch = () => {
    if (search) {
      const searchedExercises = allExercises.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.target.toLowerCase().includes(search.toLowerCase()) ||
          item.equipment.toLowerCase().includes(search.toLowerCase()) ||
          item.bodyPart.toLowerCase().includes(search.toLowerCase())
      );

      setSearch("");
      setExercises(searchedExercises);
    }
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

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: 700, border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "160px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
      {allExercises.length && search === "" && !bodyParts.length && (
        <Typography
          mt={4}
          textAlign="center"
          fontSize={{ lg: "20px", xs: "16px" }}
          color="#FF2625"
          fontWeight="bold"
        >
          No exercises found. Try a different keyword!
        </Typography>
      )}
    </Stack>
  );
};

export default SearchExercises;
