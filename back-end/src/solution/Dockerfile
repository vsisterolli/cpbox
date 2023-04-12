FROM alpine:3.14

WORKDIR /usr/src/

COPY . .

RUN apk add g++
RUN apk add valgrind

RUN g++ testcode.cpp

CMD sh -c 'time valgrind ./a.out < 1.in > 1.out'
