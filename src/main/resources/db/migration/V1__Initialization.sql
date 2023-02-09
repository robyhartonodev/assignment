create table "customers"
(
    "id"    bigserial primary key not null,
    "name"  varchar(255)          not null,
    "email" varchar(255) unique   not null
);

create table "orders"
(
    "id"              bigserial primary key not null,
    "subject"         varchar(255)          not null,
    "order_date"      date                  not null,
    "order_date_time" timestamp(0) without time zone not null,
    "status"          bigint                not null,
    "customer_id"     bigint                not null
);

alter table "orders"
    add constraint "orders_customer_id_foreign" foreign key ("customer_id") references "customers" ("id") on delete cascade on update cascade;

create table "order_files"
(
    "id"       bigserial primary key not null,
    "name"     varchar(255)          not null,
    "path"     varchar(255)          not null,
    "order_id" bigint                not null
);

alter table "order_files"
    add constraint "order_files_order_id_foreign" foreign key ("order_id") references "orders" ("id") on delete cascade on update cascade;