-- comando para criar varios arquivos sql pelo terminal
-- for i in {1..27}; do touch "desafio${i}.sql"; done

select round(15 + (rand() * 5));

-- GERAR UM VALOR ALEATORIO ENTRE 50 E 100

select round(132 + (rand() * 13));

-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
select round(15.7515971)l;

-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa 
select floor(39.800);

-- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5);
-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);
