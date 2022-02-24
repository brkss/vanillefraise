import { Resolver, Query, Mutation } from 'type-graphql';
import { SpecialCondition } from '../../entity/UserInfo';
import { specialconditions } from '../../utils/data/specialconditions.data';

@Resolver()
export class SpecialConditionResolver {

  @Mutation(() => Boolean)
  async seedSpecialConditions() : Promise<boolean>{
    const sc = await SpecialCondition.find();
    if(sc.length == 0){
      for(let s of specialconditions){
        const condition = new SpecialCondition();
        condition.name = s;
        await condition.save();
      }
      return true;
    }
    return false;
  }

  @Query(() => [SpecialCondition])
  async specialconditions() : Promise<SpecialCondition[]>{
    return await SpecialCondition.find();
  }

}
