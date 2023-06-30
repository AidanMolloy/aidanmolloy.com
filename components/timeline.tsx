"use client";

import { useState } from "react";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import Timeline from "@mui/lab/Timeline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import EntryCategory from "./entryCategory";
import Entries from "./entries";
import { useScrollPosition } from "../hooks/useScrollPosition";
import ViewEntry from "./viewEntry";

const styles = (theme: any) => ({
  [theme.breakpoints.down("sm")]: {
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0
    }
  },
  [theme.breakpoints.up("sm")]: {
    [`& .${timelineOppositeContentClasses.root}`]: {
      flex: 0.1
    }
  }
});

export default function AidanTimeline() {
  const scrollPosition = useScrollPosition();
  const [type, setType] = useState("all");
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const handleClose = () => setSelectedEntry(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setType(newValue);
  };
  return (
    <Box>
      {selectedEntry !== null && (
        <ViewEntry entry={selectedEntry} handleClose={handleClose} />
      )}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          ml: { xs: "0", md: "20px" },
          width: {
            xs: "100%",
            md: scrollPosition > 260 ? "100%" : "calc(100% - 30px)"
          },
          maxWidth: 980,
          bgcolor: "background.paper",
          boxShadow:
            scrollPosition > 260 ? "0 10px 15px -20px rgba(0,0,0,0.3)" : 0,
          transition: "all 0.3s ease-in-out",
          position: scrollPosition > 260 ? "sticky" : "relative",
          top: 0,
          zIndex: 1
        }}
      >
        <Tabs
          value={type}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="tabs for timeline"
        >
          <Tab
            icon={<EntryCategory type="all" />}
            label="ALL"
            value="all"
            sx={{ fontSize: { xs: "14px", sm: "15.75px" } }}
          />
          <Tab
            icon={<EntryCategory type="experience" />}
            label="Experience"
            value="experience"
            sx={{ fontSize: { xs: "14px", sm: "15.75px" } }}
          />
          <Tab
            icon={<EntryCategory type="education" />}
            label="Education"
            value="education"
            sx={{ fontSize: { xs: "14px", sm: "15.75px" } }}
          />
          <Tab
            icon={<EntryCategory type="awards" />}
            label="Awards"
            value="awards"
            sx={{ fontSize: { xs: "14px", sm: "15.75px" } }}
          />
        </Tabs>
      </Box>

      <Timeline sx={styles}>
        <Entries setSelectedEntry={setSelectedEntry} type={type} />
      </Timeline>
    </Box>
  );
}
