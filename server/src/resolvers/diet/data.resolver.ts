import { Resolver, Query, UseMiddleware } from "type-graphql";
import { HealthLabelRefrence } from "../../entity/Nutrition/HealthLabelReference";

@Resolver()
export class DietDataResolver {
  @Query(() => String)
  helloDietData(): string {
    return "hello from diet data !";
  }

  @Query(() => [HealthLabelRefrence])
  async healthLabels(): Promise<HealthLabelRefrence[]> {
    const hl = await HealthLabelRefrence.find();
    return hl;
  }
}
