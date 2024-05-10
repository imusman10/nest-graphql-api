import { Module } from '@nestjs/common';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
  ],
  controllers: [],
  providers: [UserResolver],
})
export class AppModule {}
