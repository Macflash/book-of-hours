import { Book, GetBookById } from "./book";
import { GetItemById, Item } from "./crafting";
import { GetSkillById, Skill } from "./skills";

export interface Idable {
  id: string;
}

export type Findable = string | Idable;

export function GetFindableId(findable: Findable): string {
  const id = (findable as Idable).id || (findable as string);
  return id;
}

interface FindableResult {
  item?: Item;
  book?: Book;
  skill?: Skill;
}

export function GetFindable(findable: Findable): FindableResult {
  const id = GetFindableId(findable);

  const item = GetItemById(id);
  if (item) return { item };

  const book = GetBookById(id);
  if (book) return { book };

  const skill = GetSkillById(id);
  if (skill) return { skill };

  return {};
}
