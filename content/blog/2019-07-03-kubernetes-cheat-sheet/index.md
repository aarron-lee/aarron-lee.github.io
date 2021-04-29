---
path: "/kubernetes-concepts-cheat-sheet"
date: "2019-07-03"
title: "A Basic Cheat Sheet for Kubernetes terminology"
tags: ["docker", "kubernetes"]
excerpt: "Unsurprisingly, kubernetes makes sense once you delve into the details"
---

Recently, I've been learning more about infamously difficult to learn Kubernetes for container orchestration (primarily for work, though I will openly admit that I've been curious about it for a while). The first thing that became immediately obvious was that there was a lot of terminology being thrown around. Pods, Replica Sets, Damonsets, Deployments, etc al - there's just a boatload of terminology that comes with learning kubernetes. However, if you are familiar with docker, docker-compose, and docker-swarm, you'll notice that there's a surprisingly large amount of 1-to-1 correlations between kubernetes terminology and docker concepts. As it turns out, kubernetes (at a high level) intuitively makes sense, it's just confusing initially because of all the terminology.

So quick and dirty, here's a quick list of all the terminology I've learned so far:

- Cluster - a bunch of servers that run your application servers, etc.
  - the cluster is the available compute resources available, kubernetes will distribute containers across the cluster, and auto scale it, depending on how you've configured kube
- Node - a server in your cluster
  - each node has a container runtime
- Pod - One or more containers that run together
  - e.g. a pod of nginx, or a pod of a nginx container + node container
  - note, these pods are ephemeral, and can be thought of as a single base unit of functionality
  - each pod has a unique IP address, and containers in a pod can talk to each other via local networking (similar to how docker networking enables local containers to relay messages to each other)
- ReplicaSet - a set of identical pods
  - ReplicaSets strive to maintain a stable set of pods
  - the number of pods to maintain is usually determined via configuration
  - You can think of a ReplicaSet similarly to an Abstract Class. Deployments, DaemonSets, Cronjob Set, etc, are pretty much ReplicaSets that do something more specific
  - e.g. a DaemonSet strives to maintain X number of Pods on every node in a cluster.
- Deployment - manages ReplicaSets, runs continuously
  - kube will appropriately distribute pods in a deployment across a cluster
  - e.g. a Deployment of nginx could be a ReplicaSet of X number of application pods (such as a rails app, node, golang, etc al)
- DaemonSet - a ReplicaSet where each node a cluster must have a copy of the specified Pod
  - e.g. running a logs collection daemon on each node in the cluster
- Jobs ReplicaSet - a set of pods spun up and down for short-lived jobs
  - a CronJob ReplicaSet runs a Jobs ReplicaSet on some specified schedule
- Service - A way to expose a specific set of Pods
  - the service is accessible via it's service name, similar to how you can referring to running docker containers in a docker-compose file via it's container or service name)
- Cluster IP service - as the name suggests, enables addressing a service in the cluster via DNS (via Kubernetes DNS)
- Node port service - exposes a port on every single node in the cluster, and maps that port to pods in a specified cluster IP service
  - this is usually used for to expose pods to some external service that can't interface with kubernetes e.g. an external load balancer, etc
- Ingress and Ingress controller - An ingress is a declarative way to declare an interface between your kubernetes services and the internet/outside traffic
  - an Ingress controller is the actually underlying reverse proxy that directs traffic for the ingress you've declared
  - e.g. An Ingress controller can be an AWS ALB, or HAProxy, etc
