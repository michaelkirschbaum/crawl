# crawlr

Crawlr is a design tool that generates user interfaces given wireframes and illustrations using artificial intelligence.

## build

    docker-compose up --build

## deploy

Run build command, push images to docker registry, and then run

    ecs-cli compose --file docker-compose-ec2.yml up
