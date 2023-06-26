-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "imdb" TEXT NOT NULL,
    "movieTrailerLink" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
