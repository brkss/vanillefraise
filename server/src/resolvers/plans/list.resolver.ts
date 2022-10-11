import { Resolver, Query, Arg } from "type-graphql";
import { IPlan } from "../../utils/types/Plan";
import { data } from '../../utils/data/tmp-plans/data';

@Resolver()
export class PlansListResolver {
  @Query(() => [IPlan])
  async plans(): Promise<IPlan[]> {
     
    return data;
  }
}
