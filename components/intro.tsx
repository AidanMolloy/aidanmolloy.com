"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Intro() {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        px: { xs: "2rem", md: "0" },
        mt: { xs: "5px", sm: "12px", md: "0px" },
        maxWidth: 1180
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          fontWeight: "500",
          lineHeight: 1.15,
          letterSpacing: "2px",
          m: 0,
          p: 0
        }}
      >
        Aidan Molloy
      </Typography>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          fontWeight: "300",
          lineHeight: 1.15,
          letterSpacing: "2px",
          m: 0,
          p: 0
        }}
      >
        Software Engineer
      </Typography>
      <Box
        sx={{
          fontSize: { xs: "16px", sm: "17px", md: "18px" },
          marginTop: "20px"
        }}
      >
        <p>
          <b>Currently</b>: SRE at{" "}
          <a href="https://teamwork.com" target="_blank">
            Teamwork.com
          </a>{" "}
          | Founder of{" "}
          <a href="https://plugnexus.com" target="_blank">
            PlugNexus.com
          </a>
          .
          <br />
          <b>Previously</b>: SWE at{" "}
          <a href="https://get.clay.it/" target="_blank">
            Clay.it
          </a>{" "}
          (Acquired by{" "}
          <a href="https://wyblo.com" target="_blank">
            Wyblo.com
          </a>
          ) | 3x Intern at{" "}
          <a href="https://sre.google/" target="_blank">
            Google SRE
          </a>
          .
        </p>
      </Box>
    </Box>
  );
}
