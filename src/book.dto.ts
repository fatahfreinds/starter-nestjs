// book.dto.ts

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CategoryDTO } from './category.dto';

@ObjectType()
export class BookDTO {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => CategoryDTO)
  category: CategoryDTO;
}
