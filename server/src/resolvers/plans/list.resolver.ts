import { Resolver, Query, Arg } from "type-graphql";
import { IPlan } from "../../utils/types/Plan";
import { data } from "../../utils/data/tmp-plans/data";

@Resolver()
export class PlansListResolver {
  @Query(() => [IPlan])
  async plans(): Promise<IPlan[]> {
    return data;
  }

  @Query(() => IPlan, { nullable: true })
  async planDetails(@Arg("id") id: string) {
    if (!id) return null;
    const item = data.find((x) => x.id === id);
    if (!item) return null;
    return item;
  }
}
