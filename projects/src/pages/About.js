import { Box, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "60px" },
        p: { lg: "40px", xs: "20px" },

        mx: { lg: "40px", xs: "10px" },
      }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        sx={{
          mb: "30px",
          color: "#FF2625",
          textAlign: "center",
          fontSize: { lg: "48px", xs: "36px" },
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        About FitZone
      </Typography>

      <Typography
        fontSize={{ lg: "20px", xs: "18px" }}
        mb="40px"
        lineHeight={1.7}
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          color: "#333",
          background: "white",
          p: "25px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
        }}
      >
        FitZone is your ultimate guide to a healthier, stronger, and more active
        life. Whether you're a beginner or a fitness enthusiast, we provide
        curated exercises, tutorials, and expert tips to help you achieve your
        goals. Our mission is to make fitness accessible and fun for everyone.
      </Typography>

      <Stack
        direction={{ lg: "row", xs: "column" }}
        spacing={6}
        alignItems="center"
        sx={{ mt: "40px" }}
      >
        <Box
          flex={1}
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-10px",
              left: "-10px",
              right: "10px",
              bottom: "10px",
              background: "linear-gradient(45deg, #FF2625, #ff6b6b)",
              borderRadius: "25px",
              zIndex: 0,
              opacity: 0.1,
            },
          }}
        >
          <img
            src="https://media.istockphoto.com/id/523036193/photo/exercise-equals-happy-healthy-lives.jpg?s=612x612&w=0&k=20&c=OMxgyoqDa1Ygqy4CpS-3nkoJe92wvEQo7zdG56rB23w="
            alt="Our Team"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </Box>

        <Box
          flex={2}
          sx={{
            background: "white",
            p: { lg: "35px", xs: "25px" },
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            fontSize={{ lg: "28px", xs: "22px" }}
            fontWeight={700}
            mb="20px"
            sx={{
              color: "#FF2625",
              display: "flex",
              alignItems: "center",
              "&::before": {
                content: '""',
                width: "40px",
                height: "4px",
                background: "#FF2625",
                marginRight: "15px",
                borderRadius: "2px",
              },
            }}
          >
            Our Philosophy
          </Typography>

          <Typography
            fontSize={{ lg: "18px", xs: "16px" }}
            mb="25px"
            lineHeight={1.6}
            sx={{ color: "#555" }}
          >
            We believe that fitness is not just a routine, it's a lifestyle.
            Every individual is unique, so we focus on personalized approaches
            that empower you to train smarter, prevent injuries, and build
            long-lasting habits.
          </Typography>

          <Typography
            fontSize={{ lg: "28px", xs: "22px" }}
            fontWeight={700}
            mb="20px"
            sx={{
              color: "#FF2625",
              display: "flex",
              alignItems: "center",
              "&::before": {
                content: '""',
                width: "40px",
                height: "4px",
                background: "#FF2625",
                marginRight: "15px",
                borderRadius: "2px",
              },
            }}
          >
            What We Offer
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: "20px",
              "& li": {
                fontSize: { lg: "18px", xs: "16px" },
                mb: "12px",
                color: "#555",
                lineHeight: 1.6,
                position: "relative",
                "&::marker": {
                  color: "#FF2625",
                  fontWeight: "bold",
                },
              },
            }}
          >
            <Typography component="li">
              Step-by-step exercise tutorials for every body part
            </Typography>
            <Typography component="li">Hand-picked workout routines</Typography>
            <Typography component="li">
              Nutrition and wellness guidance
            </Typography>
            <Typography component="li">
              Progress tracking tools and tips
            </Typography>
            <Typography component="li">Personalized fitness plans</Typography>
            <Typography component="li">
              Community support and motivation
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
