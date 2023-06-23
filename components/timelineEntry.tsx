"use client";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import EntryCategory from "./entryCategory";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import FormatDate, { DateBetween } from "./date";
import SkillIcon from "./skills";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function TimelineEntry(props: {
  entry: any;
  setSelectedEntry: any;
}) {
  const [depth, setDepth] = useState(1);
  return (
    <TimelineItem onClick={() => props.setSelectedEntry(props.entry)}>
      <TimelineOppositeContent sx={{ display: { xs: "none", sm: "block" } }}>
        <FormatDate date={props.entry.date} />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <EntryCategory type={props.entry.type} dot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          pb: "16px",
          pl: 1.5,
          pr: 0,
          maxWidth: "800px",
          "&:hover": {
            cursor: "pointer"
          }
        }}
        onMouseOver={() => setDepth(10)}
        onMouseOut={() => setDepth(1)}
      >
        <Typography
          variant="body1"
          component="h3"
          sx={{
            display: { xs: "block", sm: "none" },
            fontSize: "18px",
            color: "#000",
            pb: "8px",
            mt: -0.2,
            pt: 0
          }}
        >
          <FormatDate date={props.entry.date} />
        </Typography>
        <Paper sx={{ p: "8px 16px" }} elevation={depth}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {props.entry.logo ? (
              <Image
                src={`/companies/${props.entry.logo}`}
                alt={`${props.entry.organisation}'s Logo`}
                height={35}
                width={35}
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            ) : null}
            <Box
              sx={{
                ml: "15px",
                display: "flex",
                flexDirection: "column",
                width: "100%"
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "500" }}
              >
                {props.entry.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: { xs: "20px", md: "18px", lg: "20px" },
                    fontWeight: "400",
                    color: "#3d3d3d",
                    mr: "16px"
                  }}
                >
                  {props.entry.organisation}
                </Typography>
                {props.entry.dateFrom && props.entry.dateTo !== undefined ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "none", md: "flex-end" },
                      flexWrap: "wrap"
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontSize: { xs: "18px", md: "16px", lg: "18px" },
                        fontWeight: "300",
                        color: "#666",
                        mr: "12px"
                      }}
                    >
                      <FormatDate date={props.entry.dateFrom} /> -{" "}
                      <FormatDate date={props.entry.dateTo} />
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        display: { xs: "block", sm: "inline" },
                        fontWeight: "400",
                        color: "#666"
                      }}
                    >
                      <Typography component="span">· &nbsp;</Typography>
                      <DateBetween
                        dateFrom={props.entry.dateFrom}
                        dateTo={props.entry.dateTo}
                      />
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: { xs: "18px", md: "16px", lg: "18px" },
                      fontWeight: "300",
                      color: "#666"
                    }}
                  >
                    <FormatDate date={props.entry.date} />
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              "&:after": {
                content: '" "',
                position: "absolute",
                right: 0,
                bottom: 0,
                left: 0,
                height: "40px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,255) 100%)"
              }
            }}
          >
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical"
              }}
            >
              <ReactMarkdown linkTarget={"_blank"}>
                {props.entry.description}
              </ReactMarkdown>
            </Typography>
          </Box>
          {props.entry.skills && (
            <Box
              sx={{
                pt: 0.5,
                ml: -0.5,
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              {props.entry.skills.map((skill: string) => (
                <>
                  <Box
                    key={skill}
                    sx={{
                      display: { xs: "none", sm: "inline" },
                      m: 0.5
                    }}
                  >
                    <SkillIcon lang={skill} pill />
                  </Box>
                  <Box
                    key={skill}
                    sx={{
                      display: { xs: "inline", sm: "none" },
                      m: 0.5
                    }}
                  >
                    <SkillIcon lang={skill} />
                  </Box>
                </>
              ))}
            </Box>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}
