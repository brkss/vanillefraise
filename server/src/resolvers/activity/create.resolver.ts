import { Resolver, Mutation } from "type-graphql";
//import { Activity, ActivityCategory } from "../../entity/Activity";

@Resolver()
export class CreateActivityResolver {
  @Mutation(() => Boolean)
  async createActivity() {}
}
