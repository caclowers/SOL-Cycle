CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR(255),
"password" VARCHAR(255)
);

CREATE TABLE "uv_data" (
"id" SERIAL PRIMARY KEY,
"date" DATE,
"local_uv_index" INT,
"reported_uv_index" INT,
"location_id" INT REFERENCES "locations")
;

CREATE TABLE "locations" (
"id" SERIAL PRIMARY KEY,
"city" VARCHAR(255),
"state" VARCHAR(255),
"latitude" VARCHAR(255),
"longitude" VARCHAR(255),
"user_id" INT REFERENCES "user"
);