import { Idable } from "./find";

export interface TreeNode extends Idable {
  unlocked: boolean;
  skillLevel: number;
  type: string;
}
