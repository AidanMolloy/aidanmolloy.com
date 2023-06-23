import Image from "next/image";
import Chip from "@mui/material/Chip";

export default function SkillIcon(props: {
  lang: string;
  large?: boolean;
  pill?: boolean;
}) {
  let result = null;
  props.pill
    ? (result = (
        <Chip
          icon={
            <Image
              src={`/skills/${props.lang}.svg`}
              alt={`${props.lang} Icon`}
              width={props.large ? 24 : 20}
              height={props.large ? 24 : 20}
            />
          }
          label={
            props.lang === "csharp"
              ? "C#"
              : props.lang === "cpp"
              ? "C++"
              : props.lang === "javascript"
              ? "JavaScript"
              : props.lang === "typescript"
              ? "TypeScript"
              : props.lang === "html"
              ? "HTML"
              : props.lang === "css"
              ? "CSS"
              : props.lang === "mongodb"
              ? "MongoDB"
              : props.lang === "sql"
              ? "SQL"
              : props.lang === "aws"
              ? "AWS"
              : props.lang === "gcp"
              ? "GCP"
              : props.lang === "php"
              ? "PHP"
              : props.lang === "opsgenie"
              ? "OpsGenie"
              : props.lang.charAt(0).toUpperCase() + props.lang.slice(1)
          }
          variant="outlined"
          sx={{
            pl: props.large ? 0.8 : 0.6,
            py: props.large ? 2 : 0,
            fontSize: props.large ? { xs: "14px", md: "16px" } : "14px"
          }}
        />
      ))
    : (result = (
        <Image
          src={`/skills/${props.lang}.svg`}
          alt={`${props.lang} Icon`}
          width={props.large ? 24 : 20}
          height={props.large ? 24 : 20}
        />
      ));
  return result;
}
