import Link from "@mui/material/Link";

export default function SocialLink(props: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <Link
      href={props.href}
      target="_blank"
      sx={{
        display: "flex",
        alignItems: "center",
        my: { xs: "7px", md: "5px", lg: "7px" },
        fontSize: { xs: "14px", md: "15px", lg: "16px" },
        color: "#0070f3",
        textDecoration: "none",
        "&>:first-of-type": {
          marginRight: "3px",
          color: "black"
        },
        "&:hover": {
          textDecoration: "underline",
          "&>:first-of-type": {
            color: "#0070f3"
          }
        }
      }}
    >
      {props.icon}
      {props.text}
    </Link>
  );
}
