import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// replace with your image

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <Box
      sx={{
        mt: { lg: "80px", xs: "40px" },
        p: "20px",
        display: "flex",
        flexDirection: { lg: "row", xs: "column" },
        gap: "40px",
        alignItems: "center",
      }}
    >
      {/* Form */}
      <Box flex={1}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: "20px", color: "#FF2625" }}
        >
          Contact Us
        </Typography>
        <Typography fontSize="18px" mb="30px" lineHeight={1.6}>
          Have questions, feedback, or need assistance with your workout
          routine? Fill out the form below and our team will reach out to you as
          soon as possible.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: "600px" }}
        >
          <Stack spacing={3}>
            <TextField
              required
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              type="email"
              label="Email Address"
              variant="outlined"
              fullWidth
            />
            <TextField required label="Subject" variant="outlined" fullWidth />
            <TextField
              required
              label="Message"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#FF2625", color: "#fff" }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Image */}
      <Box flex={1} sx={{ display: { xs: "none", lg: "block" } }}>
        <img
          src="https://media.istockphoto.com/id/528437150/photo/morning-workout-at-the-beach.jpg?s=612x612&w=0&k=20&c=gbUTuO4GSL94W3Mj3f7NGrHgFC8AXqXR3fvqTpQ6ogQ="
          alt="Contact Us"
          style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
