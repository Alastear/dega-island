CREATE TABLE "island" (
  "is_id" SERIAL PRIMARY KEY,
  "is_name" varchar,
  "is_type" varchar,
  "is_point" varchar,
  "is_land" json,
  "is_popularity" varchar,
  "is_owner" varchar,
  "is_img" varchar,
  "is_wallet" varchar
);

CREATE TABLE "land" (
  "land_id" SERIAL PRIMARY KEY,
  "land_slot" varchar,
  "land_bonus" varchar,
  "land_status" boolean
);

CREATE TABLE "factory" (
  "fac_id" SERIAL PRIMARY KEY,
  "fac_type" varchar,
  "fac_name" varchar,
  "fac_tier" varchar,
  "fac_point" varchar,
  "fac_gs" varchar,
  "fac_time" varchar,
  "fac_effective" varchar,
  "fac_node" varchar,
  "fac_value" varchar
);

CREATE TABLE "factory_type" (
  "fac_type_id" SERIAL PRIMARY KEY
  "fac_type_name" varchar
);

