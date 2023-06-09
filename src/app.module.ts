import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { CategoryResolver } from './category.resolver';
import { BookResolver } from './book.resolver';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    // autoSchemaFile: 'schema.gql'
    // ,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile : join(process.cwd(), 'src/schema.gql')
    }),
  ],
  controllers: [AppController],
  providers: [AppService,AppResolver,CategoryResolver, BookResolver, RolesGuard],
})
export class AppModule { }
