docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hr/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t hr/app ../..
