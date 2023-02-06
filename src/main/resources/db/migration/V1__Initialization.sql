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
    "images"          json null,
    "order_date"      date                  not null,
    "order_date_time" timestamp(0) without time zone not null,
    "customer_id"     bigint                not null,
    "created_at"      timestamp(0) without time zone null,
    "updated_at"      timestamp(0) without time zone null
);

alter table "orders"
    add constraint "orders_customer_id_foreign" foreign key ("customer_id") references "orders" ("id") on delete cascade on update cascade;