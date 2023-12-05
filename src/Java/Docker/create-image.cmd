docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hr-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t hr-java/app ../../..
