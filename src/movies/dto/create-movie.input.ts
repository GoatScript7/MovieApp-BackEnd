import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {

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
