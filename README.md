# Crawlr

Design tool that generates user interfaces given wireframes and illustrations using artificial intelligence.

## Build

    docker-compose up --build

## Deploy

Run build command, push images to docker registry, and then run

    ecs-cli compose --file docker-compose-ec2.yml up
