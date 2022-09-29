import { Models } from "@rematch/core";
import { shopping } from "./shopping";

export interface RootModel extends Models<RootModel> {
    shopping: typeof shopping;
}
export const models: RootModel = { shopping };