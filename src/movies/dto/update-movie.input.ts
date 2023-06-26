import { CreateMovieInput } from './create-movie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {
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
