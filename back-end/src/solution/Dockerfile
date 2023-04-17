FROM alpine:3.14

WORKDIR /usr/src/

COPY . .

RUN apk add g++
RUN apk add valgrind

RUN g++ testSolution.cpp

CMD sh -c './a.out'
