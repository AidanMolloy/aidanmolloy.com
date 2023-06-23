"use client";

import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Description
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import SocialLink from "./socialLink";
import { useScrollPosition } from "../hooks/useScrollPosition";

export default function Socials() {
  const scrollPosition = useScrollPosition();
  return (
    <Box
      sx={{
        mb: { xs: "0", md: "20px" },
        width: { xs: "96%", md: "140px", lg: "200px" },
        borderBottom: { xs: 1, md: 0 },
        borderColor: { xs: "divider", md: "transparent" },
        backgroundColor: "background.paper",
        px: { xs: "2%", md: "0" },
        mt: { xs: "0", md: "10px" }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "space-around", md: "left" },
          flexWrap: "wrap",
          position: {
            xs: "relative",
            md: scrollPosition > 210 ? "sticky" : "relative"
          },
          top: { xs: "0", md: scrollPosition > 210 ? "80px" : "0" }
        }}
      >
        <SocialLink
          href="https://github.com/AidanMolloy"
          icon={
            <GitHub sx={{ fontSize: { xs: "20px", md: "24px", lg: "27px" } }} />
          }
          text="/AidanMolloy"
        />
        <SocialLink
          href="https://www.linkedin.com/in/aidan-r-molloy/"
          icon={
            <LinkedIn
              sx={{ fontSize: { xs: "20px", md: "24px", lg: "27px" } }}
            />
          }
          text="/aidan-r-molloy"
        />
        <SocialLink
          href="https://twitter.com/_aidan_molloy"
          icon={
            <Twitter
              sx={{ fontSize: { xs: "20px", md: "24px", lg: "27px" } }}
            />
          }
          text="/_aidan_molloy"
        />
        <SocialLink
          href="mailto:aidan@molloy.ie"
          icon={
            <Email sx={{ fontSize: { xs: "20px", md: "24px", lg: "27px" } }} />
          }
          text="aidan@molloy.ie"
        />
        <SocialLink
          href="/cv.pdf"
          icon={
            <Description
              sx={{ fontSize: { xs: "20px", md: "24px", lg: "27px" } }}
            />
          }
          text="View CV"
        />
      </Box>
    </Box>
  );
}
