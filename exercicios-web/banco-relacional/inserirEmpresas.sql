alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 42112542000104),
    ('Vale', 94274711000106),
    ('Cielo', 65044827000142);

desc empresas;

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);