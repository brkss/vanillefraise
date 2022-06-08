import { Resolver, Mutation, UseMiddleware } from "type-graphql";
import { isUserAuth } from "../../utils/middlewares/auth.mw";
import { DefaultResponse } from "../../utils/responses/default.response";

@Resolver()
export class DietConfigResolver {
  @UseMiddleware(isUserAuth)
  @Mutation(() => DefaultResponse)
  async createDietConfig(
    @Arg("data") data: DietConfigInput
  ): Promise<DefaultResponse> {}
}
