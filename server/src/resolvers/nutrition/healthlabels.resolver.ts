import { Resolver, Mutation } from "type-graphql";
import { HealthLabelRefrence } from "../../entity/Nutrition";
import { get_data } from "../../utils/data/nutrition/healthlabels";

@Resolver()
export class HealthLabelsResolver {
  @Mutation(() => Boolean)
  async seedHealthLabelRefrence(): Promise<boolean> {
    const hlr = await HealthLabelRefrence.find();
    if (hlr.length > 0) return false;
    const data = get_data();
    for (let el of data) {
      const hr = new HealthLabelRefrence();
      hr.label = el.label.split("-").join(" ").toUpperCase();
      hr.description = el.def;
      hr.param = el.param;
      await hr.save();
    }
    return true;
  }
}
