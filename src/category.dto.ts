// category.dto.ts

import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CategoryDTO {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
