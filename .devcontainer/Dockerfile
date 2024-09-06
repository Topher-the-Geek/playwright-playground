FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive
ARG TARGETARCH

RUN apt-get update; \
    apt-get install -y curl git;

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash; \
    export NVM_DIR=/root/.nvm; \
    . /root/.nvm/nvm.sh; \
    nvm install 20.14.0; \
    echo "nvm use 20.14.0" >> /root/.bashrc; \
    npm install -g pnpm; \
    npm install -g npm-check-updates;

RUN curl -L https://github.com/bazelbuild/bazelisk/releases/download/v1.20.0/bazelisk-linux-$TARGETARCH -o /usr/local/bin/bazel; \
    chmod +x /usr/local/bin/bazel

RUN curl -L https://github.com/bazelbuild/buildtools/releases/download/v7.1.2/buildifier-linux-$TARGETARCH -o /usr/local/bin/buildifier; \
    chmod +x /usr/local/bin/buildifier;
