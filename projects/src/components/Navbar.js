import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0px 20px" }}
          />
        </Link>

        {/* Desktop Links */}
        <Stack
          direction="row"
          gap="40px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a href="about" style={{ textDecoration: "none", color: "#3A1212" }}>
            About
          </a>
          <a
            href="contact"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Contact
          </a>
          <a href="auth" style={{ textDecoration: "none", color: "#3A1212" }}>
            Register
          </a>
        </Stack>

        {/* Mobile Hamburger */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: 200 }}>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3A1212",
                width: "100%",
              }}
            >
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <a
              href="about"
              style={{
                textDecoration: "none",
                color: "#3A1212",
                width: "100%",
              }}
            >
              <ListItemText primary="about" />
            </a>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <a
              href="contact"
              style={{
                textDecoration: "none",
                color: "#3A1212",
                width: "100%",
              }}
            >
              <ListItemText primary="contact" />
            </a>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <a
              href="auth"
              style={{
                textDecoration: "none",
                color: "blue",
                width: "100%",
                fontStyle: "bold",
              }}
            >
              <ListItemText primary="Auty" />
            </a>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
