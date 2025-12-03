import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        mt: "80px",
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 4, md: 0 }}
        flexWrap="wrap"
        mb={4}
      >
        {/* Logo */}
        <Box>
          <img
            src={Logo}
            alt="FitZone Logo"
            style={{ width: "180px", height: "auto" }}
          />
        </Box>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Link
            href="/"
            underline="none"
            sx={{ color: "#fff", "&:hover": { color: "#ff1c1c" } }}
          >
            Home
          </Link>
          <Link
            href="/about"
            underline="none"
            sx={{ color: "#fff", "&:hover": { color: "#ff1c1c" } }}
          >
            About
          </Link>
          <Link
            href="/contact"
            underline="none"
            sx={{ color: "#fff", "&:hover": { color: "#ff1c1c" } }}
          >
            Contact
          </Link>
        </Stack>
      </Stack>

      <Divider sx={{ borderColor: "#333", mb: 3 }} />

      <Typography
        variant="body2"
        textAlign="center"
        sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#ccc" }}
      >
        &copy; {new Date().getFullYear()} FitZone. Made with ❤️ by Hanan &
        Sameer Team
      </Typography>
    </Box>
  );
};

export default Footer;
