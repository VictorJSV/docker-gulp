## How to build docker image?
```shell
docker-compose -f docker-compose.build.yml build [name-service]
```

## How to push to docker registry?
```shell
docker push [name-service]
```

## How to run the test?
```shell
cd [name-service]/test
docker run -it --rm --user $(id -u):$(id -g) -v $(pwd)/:/usr/local/app -w /usr/local/app/frontend/tasks [name-service] gulp
```
---
## Micro-sprites
### Build image
```shell
docker-compose -f docker-compose.build.yml build micro-sprites
```
### Run test
```shell
docker run -it --rm --user $(id -u):$(id -g) -v $(pwd)/micro-sprites/test/:/usr/local/app -w /usr/local/app/frontend/tasks micro-sprites gulp
```

### Micro-css test
```shell
cd micro-sprites/test
docker run -it --rm --user $(id -u):$(id -g) -v $(pwd)/:/usr/local/app -w /usr/local/app/frontend/tasks micro-css gulp
```
### Micro-html test
```shell
cd micro-sprites/test
docker run -it --rm --user $(id -u):$(id -g) -v $(pwd)/:/usr/local/app -w /usr/local/app/frontend/tasks micro-html gulp
```
### Micro-js test
```shell
cd micro-sprites/test
docker run -it --rm --user $(id -u):$(id -g) -v $(pwd)/:/usr/local/app -w /usr/local/app/frontend/tasks micro-js gulp
```
