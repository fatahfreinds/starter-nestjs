// category.resolver.ts

import { Resolver, Query } from '@nestjs/graphql';
import { CategoryDTO } from './category.dto';
import { Roles } from './roles.enum';
import { UseGuards } from '@nestjs/common';
import { RolesGuard, HasRoles } from './roles.guard';

@Resolver('Category')
export class CategoryResolver {
  @Query(() => [CategoryDTO])
  @HasRoles(Roles.Controller)
  @UseGuards(RolesGuard)
  async categories(): Promise<CategoryDTO[]> {
    // Logic to fetch categories accessible by the controller
    // Replace with your implementation
    const categories: CategoryDTO[] = [
      { id: '1', name: 'Poem' },
      { id: '2', name: 'Essay' },
      { id: '3', name: 'Story' },
    ];
    return categories;
  }
}
