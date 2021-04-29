---
path: "/zephyrus-linux-laptop-search-2021"
date: "2021-03-22"
title: "My Search for an Ideal Linux Laptop, Part 2"
tags: ["linux", "Zephyrus G14", "Asus", "PopOS"]
excerpt: "Surprisingly, a gaming laptop works fine"
---

As a followup to my previous post, since my first attempt didn't quite work out, I initially had told myself to wait for [System76's Pangolin laptop](https://system76.com/laptops/pangolin). It doesn't quite match up with my desired spec sheet, but I had resigned myself to making some compromises. In the case of the System76 laptop, I would've been compromising on display resolution and aspect ratio.

When it was finally announced 6 days ago, I was excited until I read the details. While the overall specs looked as-expected, the keyboard had a numpad, which means that I'd have to deal with wrist-pain-inducing off-center typing. Turns out, though, that this led to a different candidate for a replacement laptop: the Zephyrus G14.

The [hacker news](https://news.ycombinator.com/item?id=26477855) discussion of the System76 laptop led to a surprising revelation for me; the Zephyrus G14, a gaming laptop with some fairly high performance AMD hardware, runs Linux well. Considering how [miserable the experience seemed](https://arstechnica.com/gadgets/2020/04/linux-on-laptops-asus-zephyrus-g14-with-ryzen-9-4900hs/) back when arstechnica tried it out, I had written off the G14 as a non-starter. However, it turns out that the newer iterations of the linux kernel can handle the new hardware fairly well.

Considering that, suddenly the idea of replacing my personal and gaming laptop with one device seemed feasible.

Important specs for the G14

- Ryzen 4900HS - perfect as a replacement for my gaming laptop
- Integrated AMD GPU and NVIDIA 2060 max q - PopOS lets you run dual graphics, with easy-to use switching
- IPS, 16:9, FHD display - this was a disappointing downgrade, but I also can't justify the $500+ bump in price for the QHD version
- Small build - the laptop is almost as small as my Dell business laptop!
- Fairly quiet fans - not quite as silent as my Dell, but close enough for daily driving
- Decent battery life - I am getting 5-7 hours of battery life for day-to-day use. Fairly surprising for linux + gaming laptop specs
- only downside is no webcam, but since I already own an external webcam for work calls, using it for personal calls should be no problem.

After dual booting PopOS 20.10, the laptop has been running quite smoothly. And PopOS also makes it easy to run Steam with Proton, which let me run most of my games with surprisingly little tinkering. There are still visual artifacts and occasional bugs though, so I still maintain a dual boot windows for when I want to do some longer gaming sessions.

For to get the media shortcut keys to work, it turns out that the required changes were upstreamed to the linux kernel, specifically the 5.11 release. I personally updated to 5.11.7 with ubuntu [mainline](https://github.com/bkw777/mainline), and it works swimmingly.

For anyone that needs a guide to set this up, [this one](https://abskmj.github.io/notes/posts/rog-zephyrus-g14/popos/) covers all the basics. You can ignore the Asus Packages and Volume Control if you upgrade your kernel.

I'll be trial-running this laptop for the next 2 weeks, but so far, it's looking like it's going to stay.