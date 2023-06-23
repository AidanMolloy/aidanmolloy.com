import path from "path";
import fs from "fs";
import matter from "gray-matter";

const entriesDirectory = path.join(process.cwd(), "entries");

export default async function handler(req: any, res: any) {
  const entryDirectories = fs.readdirSync(entriesDirectory);
  let entries: any[] = [];
  entryDirectories.map((entryDirectory) => {
    if (entryDirectory === ".DS_Store") {
      return;
    }
    const filenames = fs.readdirSync(
      path.join(entriesDirectory, entryDirectory)
    );
    entries = entries.concat(
      filenames.map((filename) => {
        const id = filename.replace(/\.md$/, "");
        const fullPath = path.join(entriesDirectory, entryDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
          id,
          dateTo: matterResult.data.dateTo ? matterResult.data.dateTo : null,
          dateFrom: matterResult.data.dateFrom
            ? matterResult.data.dateFrom
            : null,
          date: matterResult.data.date
            ? matterResult.data.date
            : matterResult.data.dateTo && matterResult.data.dateTo !== "Present"
            ? matterResult.data.dateTo
            : matterResult.data.dateFrom,
          title: matterResult.data.title,
          organisation: matterResult.data.organisation,
          logo: matterResult.data.logo ? matterResult.data.logo : null,
          type: entryDirectory,
          description: matterResult.data.description,
          skills: matterResult.data.skills ? matterResult.data.skills : null
        };
      })
    );
  });

  entries.sort(({ date: a }, { date: b }) => {
    if (a === "") {
      return -1;
    } else if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
  res.status(200).json({
    entries
  });
}
