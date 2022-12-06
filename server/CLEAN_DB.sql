

-- Remove keyword Recipe from recipes title !
UPDATE recipes SET name = REPLACE(name, 'Recipe', '') WHERE name LIKE '%recipe%';
UPDATE recipes SET name = REPLACE(name, "Easy ", "") WHERE name LIKE '%easy%';
