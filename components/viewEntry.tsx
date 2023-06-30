"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EntryCategory from "./entryCategory";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import FormatDate, { DateBetween } from "./date";
import SkillIcon from "./skills";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";

export default function ViewEntry(props: { entry: any; handleClose: any }) {
  const { entry } = props;
  return (
    <>
      <Dialog
        fullScreen
        open={entry !== null}
        onClose={props.handleClose}
        sx={{
          display: { xs: "inherit", sm: "none" },
          "& .MuiDialog-paper": {
            backgroundColor:
              entry?.type === "experience"
                ? "info.main"
                : entry?.type === "education"
                ? "success.main"
                : entry?.type === "awards"
                ? "warning.main"
                : "black"
          }
        }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            width: "calc(100% - 10px)",
            height: "calc(100vh - 10px)",
            m: "5px",
            backgroundColor: "background.paper"
          }}
        >
          <Box
            sx={{
              width: "35px",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "10px",
              left: "10px",
              boxShadow: "0 10px 10px 0 rgba(0,0,0,0.3)",
              borderRadius: "50%",
              p: 0,
              m: 0
            }}
          >
            <EntryCategory type={entry?.type} dot size={"small"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 3px 6px -6px rgba(0,0,0,0.3)",
              p: "16px 8px"
            }}
          >
            {entry?.logo ? (
              <Image
                src={`/companies/${entry?.logo}`}
                alt={`${entry?.organisation}'s Logo`}
                height={64}
                width={64}
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
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontSize: { xs: "18px", sm: "21px", md: "26px" },
                  fontWeight: "500",
                  pr: "20px"
                }}
              >
                {entry?.title}
                <IconButton
                  aria-label="close"
                  onClick={props.handleClose}
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    color: (theme) => theme.palette.grey[500]
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "21px" },
                    fontWeight: "400",
                    color: "#3d3d3d",
                    mr: "16px"
                  }}
                >
                  {entry?.organisation}
                </Typography>

                {entry?.dateFrom && entry?.dateTo !== undefined ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "none", sm: "flex-end" },
                      flexWrap: "wrap"
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontSize: { xs: "14px", sm: "15px", md: "19px" },
                        fontWeight: "300",
                        color: "#666",
                        mr: "12px"
                      }}
                    >
                      <FormatDate date={entry?.dateFrom} /> -{" "}
                      <FormatDate date={entry?.dateTo} />
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: "14px", sm: "15px", md: "19px" },
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "400",
                        color: "#666"
                      }}
                    >
                      <Typography component="span">· &nbsp;</Typography>
                      <DateBetween
                        dateFrom={entry?.dateFrom}
                        dateTo={entry?.dateTo}
                      />
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: { xs: "14px", sm: "15px", md: "19px" },
                      fontWeight: "300",
                      color: "#666"
                    }}
                  >
                    <FormatDate date={entry?.date} />
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              p: "0px 8px",
              position: "relative",
              "&:after": {
                content: '" "',
                position: "absolute",
                right: 0,
                bottom: 0,
                left: 0,
                height: "30px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,255) 100%)"
              }
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "17px", md: "18px" },
                maxHeight: entry?.skills
                  ? "calc(100vh - 240px)"
                  : "calc(100vh - 200px)",
                overflowY: "auto"
              }}
              id="modal-modal-description"
            >
              <ReactMarkdown linkTarget={"_blank"}>
                {entry?.description}
              </ReactMarkdown>
            </Typography>
          </Box>

          {entry?.skills && (
            <Box
              sx={{
                pt: 0.5,
                ml: -0.5,
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              {entry?.skills.map((skill: string) => (
                <Box key={skill} sx={{ m: 0.5 }}>
                  <SkillIcon lang={skill} large pill />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Dialog>
      <Modal
        open={entry !== null}
        onClose={props.handleClose}
        sx={{ display: { xs: "none", sm: "inherit" } }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: 850,
            bgcolor: "background.paper",
            border: "3px solid",
            borderRadius: "3px",
            boxShadow: 24,
            p: { xs: 3, md: 4 },
            borderColor:
              entry?.type === "experience"
                ? "info.main"
                : entry?.type === "education"
                ? "success.main"
                : entry?.type === "awards"
                ? "warning.main"
                : "black"
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "10px",
              left: "10px",
              boxShadow: "0 10px 10px 0 rgba(0,0,0,0.3)",
              borderRadius: "50%",
              p: 0,
              m: 0
            }}
          >
            <EntryCategory type={entry?.type} dot size={"large"} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 3px 6px -6px rgba(0,0,0,0.3)",
              pb: { xs: 1, md: 2 }
            }}
          >
            {entry?.logo ? (
              <Image
                src={`/companies/${entry?.logo}`}
                alt={`${entry?.organisation}'s Logo`}
                height={64}
                width={64}
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
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontSize: { xs: "21px", md: "26px" }, fontWeight: "500" }}
              >
                {entry?.title}
                <IconButton
                  aria-label="close"
                  onClick={props.handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500]
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  width: "100%"
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: { xs: "18px", md: "21px" },
                    fontWeight: "400",
                    color: "#3d3d3d",
                    mr: "16px"
                  }}
                >
                  {entry?.organisation}
                </Typography>

                {entry?.dateFrom && entry?.dateTo !== undefined ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "none", sm: "flex-end" },
                      flexWrap: "wrap"
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontSize: { xs: "15px", md: "19px" },
                        fontWeight: "300",
                        color: "#666",
                        mr: "12px"
                      }}
                    >
                      <FormatDate date={entry?.dateFrom} /> -{" "}
                      <FormatDate date={entry?.dateTo} />
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: "15px", md: "19px" },
                        display: { xs: "block", sm: "inline" },
                        fontWeight: "400",
                        color: "#666"
                      }}
                    >
                      <Typography component="span">· &nbsp;</Typography>
                      <DateBetween
                        dateFrom={entry?.dateFrom}
                        dateTo={entry?.dateTo}
                      />
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: { xs: "15px", md: "19px" },
                      fontWeight: "300",
                      color: "#666"
                    }}
                  >
                    <FormatDate date={entry?.date} />
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
                height: "30px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,255) 100%)"
              }
            }}
          >
            <Typography
              sx={{
                maxHeight: { xs: "40vh", md: "50vh", lg: "60vh" },
                overflow: "-moz-scrollbars-vertical",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  WebkitAppearance: "none",
                  width: "7px"
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "4px",
                  backgroundColor: "rgba(0,0,0,.5)",
                  WebkitBoxShadow: "0 0 1px rgba(255,255,255,.5)"
                }
              }}
              id="modal-modal-description"
            >
              <ReactMarkdown linkTarget={"_blank"}>
                {entry?.description}
              </ReactMarkdown>
            </Typography>
          </Box>

          {entry?.skills && (
            <Box
              sx={{
                pt: 0.5,
                ml: -0.5,
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              {entry?.skills.map((skill: string) => (
                <Box key={skill} sx={{ m: 0.5 }}>
                  <SkillIcon lang={skill} large pill />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}
