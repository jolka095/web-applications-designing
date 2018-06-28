FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD admin
ENV MYSQL_DATABASE virtual_library
ENV MYSQL_USER root
ENV MYSQL_PASSWORD admin
ENV MYSQL_ROOT_HOST 172.18.0.1

ADD virtual_library_script.sql /docker-entrypoint-initdb.d