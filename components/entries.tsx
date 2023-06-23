import Box from "@mui/material/Box";
import TimelineEntry from "../components/timelineEntry";
import { Key } from "react";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Entries(props: {
  setSelectedEntry: any;
  type: string;
}) {
  const { data, error } = useSWR("/api/staticdata", fetcher);
  //Handle the error state
  if (error)
    return (
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Alert severity="error">Failed to load timeline</Alert>
      </Box>
    );
  //Handle the loading state
  if (!data)
    return (
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 1 }}
      >
        <CircularProgress />
      </Box>
    );
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      {data.entries.map(
        (entry: {
          id: string;
          type: string;
          title: string;
          organisation: string;
          logo: string;
          dateFrom: Date | null;
          dateTo: Date | null;
          date: Date | null;
          description: string;
        }) =>
          (props.type === "all" || props.type === entry.type) && (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              setSelectedEntry={props.setSelectedEntry}
            />
          )
      )}
    </div>
  );
}
