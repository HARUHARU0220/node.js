FROM ubuntu:latest
LABEL authors="yk"

ENTRYPOINT ["top", "-b"]