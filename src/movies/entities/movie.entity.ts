import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  genre: string;

  @Field(() => String)
  imdb: string;

  @Field(() => String)
  movieTrailerLink: string;

  @Field(() => String)
  description: string;
}
