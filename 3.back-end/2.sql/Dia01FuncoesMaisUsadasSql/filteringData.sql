-- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING;
-- O GROUP BY basicamente divide o resulta da sua pesquisa em grupos e nao retorna os mesmos dados ; 
SELECT first_name FROM sakila.actor
GROUP BY first_name;
-- caso eu queira saber a quantidade de registros de cada nome registrado na minha tabela 
select first_name, count(*) from sakila.actor
group by first_name;

-- Agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas funções 
de agregação que foram estudadas até aqui, por meio de alguns exemplos 
feitos com o nosso banco de dados sakila.

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- 1 Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
select active, count(*) from sakila.film
group by active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de 
clientes ativos e inativos por loja. Os resultados devem conter 
o ID da loja, o `status` dos clientes (ativos ou inativos) e a 
quantidade de clientes por `status`
select store_id, active, count(*) from sakila.customer
group by store_id, active; 
--  3 Monte uma query para a tabela sakila.address que exiba o nome do 
distrito e a quantidade de endereços registrados nele. 
Os resultados devem ser ordenados da maior quantidade para a menor.
select district, count(district) from sakila.address
group by district;



