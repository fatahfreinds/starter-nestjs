// book.resolver.ts

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BookDTO } from './book.dto';
import { Roles } from './roles.enum';
import { UseGuards } from '@nestjs/common';
import { RolesGuard, HasRoles } from './roles.guard';

@Resolver('Book')
export class BookResolver {
  @Query(() => [BookDTO])
  @HasRoles(Roles.Controller)
  @UseGuards(RolesGuard)
  async booksByCategory(@Args('categoryId') categoryId: string): Promise<BookDTO[]> {
    // Logic to fetch books by category accessible by the controller
    // Replace with your implementation
    const books: BookDTO[] = [
      { id: '1', title: 'Book 1', category: { id: '1', name: 'Poem' } },
      { id: '2', title: 'Book 2', category: { id: '2', name: 'Essay' } },
      { id: '3', title: 'Book 3', category: { id: '3', name: 'Story' } },
    ];
    return books.filter((book) => book.category.id === categoryId);
  }

  @Mutation(() => BookDTO)
  @HasRoles(Roles.Controller)
  @UseGuards(RolesGuard)
  async addBookToCategory(
    @Args('categoryId') categoryId: string,
    @Args('title') title: string,
  ): Promise<BookDTO> {
    // Logic to add a book to the specified category accessible by the controller
    // Replace with your implementation
    const book: BookDTO = {
      id: '4',
      title,
      category: { id: categoryId, name: 'Custom Category' },
    };
    return book;
  }
}
