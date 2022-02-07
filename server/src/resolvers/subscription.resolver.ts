import { Resolver, Mutation } from "type-graphql";

@Resolver()
export class SubscriptionResolver {
  @Mutation()
  async createSubscription() {}
}
