import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ mt: { lg: "40px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        videos
      </Typography>

      <Stack
        direction={{ lg: "row", xs: "column" }}
        gap={{ lg: "40px", xs: "20px" }}
        flexWrap="wrap"
      >
        {exerciseVideos.map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={item.thumbnails[0].url}
              alt={item.title}
              style={{
                borderRadius: "20px",
                width: "300px",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Typography fontWeight={600} mt={1}>
              {item.title}
            </Typography>
            <Typography fontSize="14px">{item.channelName}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
