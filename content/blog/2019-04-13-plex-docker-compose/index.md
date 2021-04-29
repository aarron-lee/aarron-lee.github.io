---
path: "/plex-docker-compose"
date: "2019-04-13"
title: "Running a Plex Media Server with Docker Compose"
tags: ["docker", "plex"]
excerpt: "Because when Docker makes it so easy, why not?"
---

So recently I have been using docker extensively at work, primarily for setting up/improving a local dev environment, as well as running some containers on AWS ECS.

To be honest, I initially didn't quite understand what docker was used for. I mean, "containers"? Why not just use a VM? But once it really clicked in my head, whoa, containers. They're awesome.

If I had to distill what I discovered about docker into a few key points, it would be the following:

1. It lets you create isolated environments (aka containers), each with it's own set of dependencies (aka no more conflicting dependencies!)
2. You can configure these environments as a document, and then share these documents with others.
3. Given these documents, you can easily and reliably reproduce these environments
4. You don't need to manually install dependencies, etc. docker handles that for you!
5. Unlike a VM, docker containers are NOT using virtualized hardware, etc. Docker uses cgroups and namespaces to isolate the environments from each other, but they are still directly issuing calls to the host linux kernel. This means containers are more like programs; they spin up fast, are cheap to stop and start, and don't incur the performance overhead of running a virtual machine

This enables some pretty powerful behavior.

For example, I can spin up a vanilla linux server with a fresh OS install. Once you install docker on it, you can then feed docker some dockerfiles, it can then use those dockerfiles to spin up a bunch of isolated environments (such as Postgresql database, a rails web server, a plex server, pretty much anything with a [dockerfile](https://hub.docker.com/)).

Each environment will have their own isolated dependencies, and you can even set up networking, port forwarding, etc, between the host machine and these environments! And this is portable to any other linux machine, since all you need on other machines is docker and whatever dockerfiles you used before.

Since docker makes setting up an environment both extremely simple and reproduceable, it seemed like a perfect tool to setup a Plex server.

Lo and behold, plex already has an [official docker image](https://hub.docker.com/r/plexinc/pms-docker/), which should theoretically make it extremely easy to setup a plex server.

Unfortunately, Plex inc doesn't officially provide a `docker-compose.yml` config file, which would have made it even easier to setup the server. It would have been as simple as installing docker, downloading the repo, and running the command `docker-compose up` in terminal. Alas, some manual config is still needed.

The final docker-compose.yml file I came up with is:

```yaml
version: "3.7"

services:
  plex:
    image: plexinc/pms-docker
    container_name: plex
    restart: unless-stopped
    environment:
      - TZ=America/New_York
      - PLEX_CLAIM=(insert claim token here)
    network_mode: host
    volumes:
      - /path/on/host/to/save/to:/config
      - /path/on/host/to/save/transcodes/to:/transcode
      - /path/on/host/to/save/data/to:/data
```

Seems simple enough, let's explain each part:

```yaml
image: plexinc/pms-docker
container_name: plex
restart: unless-stopped
```

These should be fairly obvious, these specify where to get the docker image from, and to restart the container unless you manually issue it a stop command.

```yaml
environment:
  - TZ=America/New_York
  - PLEX_CLAIM=(insert claim token here)
```

These are environment variables that are passed into the plex server once you spin it up. The CLAIM token is provided on the plex website, which you'll need to setup the server.

```yaml
network_mode: host
```

This part is related to how docker handles networking. If you specify `host`, docker will use ports on the host machine, and map them to to the running container's ports.

Now you may be thinking that this can be pretty dangerous. I mean, naively mapping all ports that the container uses to the same ports on the host? Sounds like it can be trouble.

Docker actually provides a neat feature related to this, where you can essentially declare an isolated network that is independent of your local host machine. The docker container will expose it's ports to the local network, and are NOT mapped to the ports on the host machine unless you explicitly provide a mapping. So if the `docker-compose.yml` was configured to use a network that, in this example, we'll call `example_network`, it would look something like this:

```yaml
services:
  plex:
    image: plexinc/pms-docker
    networks:
      - example_network
    # these ports need to be accessible on the host,
    # otherwise plex won't work
    # the left number is the port on the host machine
    # the right number is the port on the container
    ports:
      - 32400:32400/tcp
      - 3005:3005/tcp
      - 8324:8324/tcp
      - 32469:32469/tcp
      - 1900:1900/udp
      - 32410:32410/udp
      - 32412:32412/udp
      - 32413:32413/udp
      - 32414:32414/udp
networks:
  - example_network:
```

And finally, the last part:

```yaml
volumes:
  - /path/on/host/to/save/to/:/config
  - /path/on/host/to/save/transcodes/to/:/transcode
  - /path/on/host/to/save/data/to/:/data
```

the `/path/on/host/` is exactly what it sounds like: the location where you want the container to save stuff to. To be more specific, this is something called a [bind mount](https://docs.docker.com/storage/bind-mounts/), where a directory on your local host machine is bound to the target directory inside the container. Since you want to be able to reliably add/remove media to your plex server, you need to decide on which directory you want to mount into the container.

if this looks confusing to you, think of it this way:

```yaml
volumes:
  - (file path on host):(file path in the container)
```

plex expects media to be saved in the `/data` directory in the container, so you need to map some directory on your own machine to that directory in the container.

So after all that, the end result is that you can run `docker-compose up` in terminal, and it'll do the following:

- download all dependencies needed for your plex server
- inject whatever environment variables you specified
- hook up the container ports to your host machine
- map file volumes between the host and container
- and spin up a fully working, live plex server!
