---
path: "/ryzen-linux-laptop-search-2021"
date: "2021-02-24"
title: "My Search for an Ideal Linux Laptop"
tags: ["linux", "ryzen", "lenovo", "thinkbook"]
excerpt: "Is 1440p display too much to ask for?"
---

For the past few years, I've been using a Dell Latitude 7389 with ubuntu 20.04 installed as my primary personal/development laptop. This was initially to start transitioning away from Apple hardware due to it's extravagant price, but contrary to my expectations of a rough transition, linux on desktop has generally been a pretty great experience. I do think there are some rough edges that make desktop linux unsuitable for non-technical users (no hfp bluetooh audio support, thanks pulseaudio /s).

My Dell laptop has been fairly rock solid as a reliable laptop, but with the recent advances made in performance by AMD's Ryzen 2 and 3 chips, I've been itching to upgrade to a more capable machine. The Latitude has been great, but it's 2017 i7 chip has led to terrible battery life, and I found myself wanting both a performance boost, and a screen resolution that was better than 1080p.

Anyways, onto my desired spec sheet for a Linux laptop.

- Ryzen 4700u or better
- AMD GPU (integrated is OK) - primarily for to avoid having to deal with NVIDIA drivers
- IPS, 16:10, 2560 x 1600 resolution display (same resolution as a Macbook Pro)
- USB-C charging with displayport
- At least 1 USB-A port
- 16GB or more of RAM

At the time of my search, finding a laptop that matches these exact specs was basically impossible. Almost all laptops fulfilled a subset of these requirements, but were always missing at least one or two points. The biggest missing spec was always the display, which were almost always 16:9 1080p, or 16:9 4k.

After scouring the internet, a post on reddit led me to the Lenovo [ThinkBook 13s G2 ARE](https://www.provantage.com/lenovo-20wc0005us~7LEN9UV9.htm). It has:

- Ryzen 4800u w/ Vega 8 integrated graphics
- 16gb soldered RAM
- 13.3" IPS, 16:10, 2560 x 1600 resolution display
- Usb-C charging w/ display out
- HDMI
- 2x USB-A 3.0 ports

While the display might seem like overkill for a 13.3" Laptop, how I see it is that I could always reduce the resolution via software. Meanwhile, the reverse (buying a lower resolution laptop, and then use xrandr to increase resolution via software) is a solution I'd rather not deal with because there's more annoyances and friction.

After dual booting PopOS 20.10, the laptop has been running mostly well (I am getting 8+ hours of battery life a day). One nasty issue I had to deal with was the trackpad causing the laptop to crash on shutdown or reboot, and somehow persist across reboots.

If you see an error like the following when shutting down, the problem is the trackpad:

```
i2c_designware AMDI0010:00: controller timed out
i2c_designware AMDI0010:00: controller timed out
i2c_designware AMDI0010:00: controller timed out
```

The solution is to manually update the linux kernel, it's fixed in newer versions. I personally updated to 5.10.17 with ubuntu [mainline](https://github.com/bkw777/mainline).

Also, for those that don't know, pulseaudio doesn't support HFP bluetooth yet, so many true wireless earbuds (airpods, etc) do not have microphone support. So if you take a lot of video calls, this can prove to be problematic.

One thing I should note for the laptop is that the keyboard is pretty mushy. It takes a while to get used too, so I'd say go with the newer 16:10 thinkpads if you need a good keyboard.

Overall, I think the laptop works well for my intended usage (development work, casual browsing, light gaming).