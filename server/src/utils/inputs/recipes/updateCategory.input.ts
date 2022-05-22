import { Field, InputType } from 'type-graphql';


@InputType()
export class UpdateCategoryInput {

  @Field()
  id: string;

  @Field({nullable: true})
  name?: string;

  @Field({nullable: true})
  icon?: string;

  @Field()
  active: boolean;


} 
