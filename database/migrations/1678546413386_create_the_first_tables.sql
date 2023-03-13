# my sql
# all ids are auto increment

# create migrations table
create table migrations (
    id int not null auto_increment,
    name varchar(255) not null,
    created_at timestamp not null default current_timestamp,
    primary key (id)
);

# create roles table
create table roles (
    id int not null auto_increment,
    name varchar(255) not null,
    primary key (id)
);

# create users table
create table users (
    id int not null auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    role_id int not null,
    primary key (id)
);


# create clients
create table clients (
    id int not null auto_increment,
    name varchar(255) not null,
    primary key (id)
);

# create developers
create table developers (
    id int not null auto_increment,
    name varchar(255) not null,
    primary key (id)
);

# create client requests table
create table client_requests (
    id int not null auto_increment,
    client_id int not null,
    description text not null,
    created_at timestamp not null default current_timestamp,
    primary key (id)
);

# create conversation table
create table conversations (
    id int not null auto_increment,
    sender_id int not null,
    receiver_id int not null,   
    message text not null,
    type varchar(255) not null, # needs, chat, offer, project, etc
    created_at timestamp not null default current_timestamp,
    primary key (id)
);

# create projects table
create table projects (
    id int not null auto_increment,
    client_id int not null,
    developer_id int not null,
    description text not null,
    created_at timestamp not null default current_timestamp,
    primary key (id)
);

# create needs catalog table
create table needs_catalog (
    id int not null auto_increment,
    name varchar(255) not null,
    question text not null,
    type varchar(255) not null,
    primary key (id)
);

# some default values
insert into roles (name) values ('admin');
insert into roles (name) values ('client');
insert into roles (name) values ('developer');

# create variables and get roles ads
set @admin_role_id = (select id from roles where name = 'admin' limit 1);
set @client_role_id = (select id from roles where name = 'client' limit 1);
set @developer_role_id = (select id from roles where name = 'developer' limit 1);

insert into users (name, email, password, role_id) 
values (
    'admin', 
    'admin@email.com',
    'admin@password',
    @admin_role_id
);

insert into users (name, email, password, role_id)
values (
    'client',
    'client@email.com',
    'client@password',
    @client_role_id
);

insert into users (name, email, password, role_id)
values (
    'developer',
    'developer@email.com',
    'email@password',
    @developer_role_id
);


# insert some needs_catalog
insert into needs_catalog (name, question, type) values ('goal', 'What is the main goal of your project?', 'test');
insert into needs_catalog (name, question, type) values ('type', 'What type of website do you need (e.g. business website, personal website, e-commerce website, etc.)?', 'test');
insert into needs_catalog (name, question, type) values ('features', 'What features do you require on your website (e.g. user login, payment processing, search functionality, etc.)?', 'test');
insert into needs_catalog (name, question, type) values ('audience', 'Who is your target audience?', 'test');
insert into needs_catalog (name, question, type) values ('budget', 'What is your budget for this project?', 'test');
insert into needs_catalog (name, question, type) values ('design', 'Do you have any design preferences or examples of websites you like?', 'test');
insert into needs_catalog (name, question, type) values ('timeline', 'What is your timeline for completing the project?', 'test');
insert into needs_catalog (name, question, type) values ('content', 'Will you be providing content for the website, or do you need help with that as well?', 'test');
insert into needs_catalog (name, question, type) values ('domain', 'Have you already registered a domain name and purchased web hosting?', 'test');
insert into needs_catalog (name, question, type) values ('technical', 'Do you have any specific technical requirements for the website (e.g. integration with other systems, custom development, etc.)?', 'test');
