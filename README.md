# Crawlr

Design tool that generates user interfaces given wireframes and illustrations using artificial intelligence.

## Configure

Set AWS credentials in .env

## Build

    docker-compose up --build

## Deploy

Push images to docker registry or use register_images script

    docker login
    docker tag <container id> <username>/image
    docker push <username>/image

Create cluster

    ecs-cli compose up --capability-iam --size <number of instances> --instance-type <type>

Run service

    ecs-cli compose --file docker-compose-ec2.yml up
