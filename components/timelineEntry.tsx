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
import React, { useState, useEffect, useRef } from "react";
import FormatDate, { DateBetween } from "./date";
import SkillIcon from "./skills";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Button from "@mui/material/Button";

export default function TimelineEntry(props: {
  entry: any;
  setSelectedEntry: any;
}) {
  const [depth, setDepth] = useState(1);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.clientHeight);
  }, [height]);

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
        <Paper sx={{ p: "8px 14px" }} elevation={depth}>
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
                sx={{
                  fontSize: { xs: "16px", sm: "20px", md: "24px" },
                  fontWeight: "500"
                }}
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
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px"
                    },
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
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px"
                        },
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
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px"
                        },
                        display: "flex",
                        alignItems: "center",
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
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px",
                        lg: "18px"
                      },
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
              overflow: "hidden",
              maxHeight: { xs: "94px", sm: "101px", md: "106px", lg: "123px" }
            }}
          >
            <Box ref={ref}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  mt: { xs: "-15px", md: "-10px", lg: "0" },
                  fontSize: { xs: "16px", sm: "17px", lg: "18px" }
                }}
              >
                <ReactMarkdown linkTarget={"_blank"}>
                  {props.entry.description}
                </ReactMarkdown>
              </Typography>
            </Box>
          </Box>
          {height > 112 && (
            <Box
              sx={{
                width: "100%",
                textAlign: "right",
                position: "relative",
                mt: "-24px",
                "&:before": {
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
              <Button
                variant="text"
                sx={{
                  fontSize: { xs: "15px", sm: "16px", lg: "17px" },
                  p: { xs: "0 0 0 5px", sm: "0 0 0 7px" },
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(250,250,255,0.9)"
                  }
                }}
              >
                Show more
              </Button>
            </Box>
          )}

          {props.entry.skills && (
            <Box
              sx={{
                pt: 0.5,
                ml: -0.5,
                display: "flex",
                flexWrap: "wrap",
                width: "100%"
              }}
            >
              {props.entry.skills.map((skill: string) => (
                <>
                  <Box
                    key={`${skill} pill`}
                    sx={{
                      display: { xs: "none", md: "inline" },
                      m: 0.5
                    }}
                  >
                    <SkillIcon lang={skill} pill />
                  </Box>
                  <Box
                    key={skill}
                    sx={{
                      display: { xs: "inline", md: "none" },
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
