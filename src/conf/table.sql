-- create database
CREATE DATABASE jaikox2;

-- uuid 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- test
SELECT uuid_generate_v4();

-- user
CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    username text NOT NULL UNIQUE,
    password text NOT NULL,
    name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    "isActived" boolean NOT NULL DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL DEFAULT NOW(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

-- product
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name character varying(255) NOT NULL UNIQUE,
    code character varying(20) NOT NULL,
    price numeric(10, 2) NOT NULL,
    detail text,
    "createdAt" timestamp with time zone NOT NULL DEFAULT NOW(),
    "updatedAt" timestamp with time zone NOT NULL DEFAULT NOW()
);