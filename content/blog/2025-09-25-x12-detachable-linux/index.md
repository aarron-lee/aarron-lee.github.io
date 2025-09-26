---
path: "/x12-detachable-linux"
date: "2025-09-25"
title: "Long Term Review of the Lenovo Thinkpad x12 Detachable Gen 1 with Linux"
tags: ["linux", "x12 detachable", "lenovo", "thinkpad"]
excerpt: "The most compatible x86 tablet I've found so far"
---

I purchased a Thinkpad x12 detachable over 3 years ago now, and while Lenovo doesn't officially support Linux on the device, it has been a nearly flawless Linux experience straight from day 1.

Here's a quick overview of compatibility:

- sleep works with s2idle
- sound, pen, touchscreen, autorotate all work out of the box
- front webcam works
- wifi, bluetooth, all standard wireless hardware working without issues
- keyboard accessory controls work out of the box, including volume adjustment, brightness control, keyboard backlight control, trackpoint, etc
  - if you want to swap the fn with ctrl buttons, there's a simple systemd service you can install, found [here](github.com/aarron-lee/thinkpad_x12_fn_switcher)
- IR camera works for face unlock, [howdy](https://github.com/boltgolt/howdy) required
- fingerprint scanner works
- autorotate works
- sound works, and volume buttons work

The hardware on this device is essentially fully functional out of the box with an unmodified Linux kernel, with the only exceptions being:

- Rear camera doesn't work
- LTE modem doesn't work, albeit it does look like there's [ongoing work upstream](https://gitlab.freedesktop.org/mobile-broadband/ModemManager/-/merge_requests/1280) that could fix it in the future

Considering the nightmare that is [Surface Linux Compatibility](https://github.com/linux-surface/linux-surface/wiki/Supported-Devices-and-Features#feature-matrix), it's been great to have a device that "just works" without any additional tinkering required.

Interestingly enough, if you setup waydroid, you can also get it working like a semi-functional Android tablet too.

While I wouldn't say the experience is as good as an actual Android tablet, I'm able to use Waydroid and F-droid to install apps like Librera (awesome ePub reader), Anki (Android version supports whiteboarding with a pen), and more. The Lenovo pen is even recognized in Waydroid, which was a pleasant surprise. I can do erase actions in apps like Anki in Waydroid.

Unfortunately there's a very limited selection of x86 tablets, and even fewer that are compatible with Linux. But if you can get an x12 detachable for a good price, I'd say that even in 2025 this is a solid tablet option.
