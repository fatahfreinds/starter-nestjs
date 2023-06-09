// user.dto.ts

import { Field, ObjectType } from '@nestjs/graphql';
import { Roles } from './roles.enum';

@ObjectType()
export class UserDTO {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => [Roles])
  roles: Roles[];

  @Field(() => [String], { nullable: true })
  categories?: string[];
}
