"use client";

import { School, Work, EmojiEvents, Apps } from "@mui/icons-material";
import TimelineDot from "@mui/lab/TimelineDot";

function DotDetail(props: {
  type: "all" | "experience" | "education" | "awards";
  size?: "small" | "medium" | "large";
  padding?: boolean;
  children: React.ReactNode;
}) {
  const { type, size } = props;
  let dotDetail = (
    <TimelineDot
      color="info"
      variant="filled"
      sx={{ m: props.padding ? "0" : "inherit" }}
    >
      {props.children ? props.children : null}
    </TimelineDot>
  );
  if (type === "experience") {
    dotDetail = (
      <TimelineDot
        color="info"
        variant="filled"
        sx={{ m: props.padding ? "0" : "inherit" }}
      >
        {props.children ? props.children : null}
      </TimelineDot>
    );
  } else if (type === "education") {
    dotDetail = (
      <TimelineDot
        color="success"
        variant="filled"
        sx={{ m: props.padding ? "0" : "inherit" }}
      >
        {props.children ? props.children : null}
      </TimelineDot>
    );
  } else if (type === "awards") {
    dotDetail = (
      <TimelineDot
        color="warning"
        variant="filled"
        sx={{ m: props.padding ? "0" : "inherit" }}
      >
        {props.children ? props.children : null}
      </TimelineDot>
    );
  }

  return dotDetail;
}

export default function EntryCategory(props: {
  type: "all" | "experience" | "education" | "awards";
  size?: "small" | "medium" | "large";
  dot?: boolean;
}) {
  const { type, size } = props;
  let icon = (
    <Apps
      color={!props.dot ? "primary" : "inherit"}
      fontSize={size ? size : "small"}
    />
  );
  if (type === "experience") {
    icon = (
      <Work
        color={!props.dot ? "info" : "inherit"}
        fontSize={size ? size : "small"}
      />
    );
  } else if (type === "education") {
    icon = (
      <School
        color={!props.dot ? "success" : "inherit"}
        fontSize={size ? size : "small"}
      />
    );
  } else if (type === "awards") {
    icon = (
      <EmojiEvents
        color={!props.dot ? "warning" : "inherit"}
        fontSize={size ? size : "small"}
      />
    );
  }

  return props.dot ? (
    <DotDetail type={type} size={size} padding={props.size !== null}>
      {icon}
    </DotDetail>
  ) : (
    icon
  );
}
