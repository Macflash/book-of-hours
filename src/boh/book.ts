import { BookData } from "../data/book_data";
import { AspectMap } from "./aspects";

interface Book extends AspectMap {
  id: string;
  label: string;

  spawnsOnMaster: string[];
  spawnsOnRead: string[];
}

function ParseBooks(): Book[] {
  return BookData.map((data) => {
    const spawnsOnMaster: string[] = [];
    const spawnsOnRead: string[] = [];
    for (const key in data.xtriggers) {
      if (key.startsWith("mastering.")) {
        const arr = (data.xtriggers as any)[key] as {
          id: string;
        }[];
        spawnsOnMaster.push(...arr.map((x) => x.id));
      } else if (key.startsWith("reading.")) {
        const arr = (data.xtriggers as any)[key] as {
          id: string;
        }[];
        spawnsOnRead.push(...arr.map((x) => x.id));
      }
    }

    return {
      ...data,
      id: data.ID,
      label: data.Label,
      spawnsOnMaster,
      spawnsOnRead,
    };
  });
}

export const Books = ParseBooks();

export function GetBookById(id: string) {
  return Books.find((b) => b.id == id);
}

export function FindBooksThatSpawnId(spawnId: string) {
  return Books.filter(
    (b) =>
      b.spawnsOnMaster.includes(spawnId) || b.spawnsOnRead.includes(spawnId)
  );
}
