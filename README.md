![Screenshot 2024-03-31 194027](https://github.com/PrakashFilemon/24001085-km6-pra-bcr-challenge-ch4/assets/137614814/056fbd2a-f3b8-490e-bfca-ca7bbade349f)

CREATE TABLE "carsize" (
  "size" varchar PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "cars" (
  "id" bigint PRIMARY KEY,
  "plate" varchar NOT NULL,
  "manufacture" varchar,
  "model" varchar,
  "image" text,
  "rentPerDay" int,
  "capacity" int,
  "carsize_id" int,
  "description" varchar,
  "availableAt" date,
  "transmission" varchar,
  "available" boolean,
  "type" varchar,
  "year" int,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "spec" (
  "id" bigint PRIMARY KEY,
  "car_id" int,
  "spec" varchar,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "option" (
  "id" bigint PRIMARY KEY,
  "car_id" int,
  "option" varchar,
  "created_at" timestamp DEFAULT 'now()',
  "updated_at" timestamp DEFAULT 'now()'
);

ALTER TABLE "cars" ADD FOREIGN KEY ("carsize_id") REFERENCES "carsize" ("size");

ALTER TABLE "option" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "spec" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");
