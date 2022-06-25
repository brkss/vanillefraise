FROM mysql/mysql-server:8.0.23

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_USER eynak
ENV MYSQL_PASSWORD tsew
ENV MYSQL_DATABASE opencc

ADD ./opencc_2022.sql /docker-entrypoint-initdb.d
