---
title: Fuck Linux
description: My experience with Linux. I hate it.
updated: 2024/06/21
published: 2024/06/20
---

"Fuck Linux", is how I felt when using Linux.

Let me first talk about actual problems that I was experiencing with Linux.

On Windows I can set display scaling to (100%, 125%, 150% and 175%) and it just works. I can also set it to anything between 100% and 500% (however this is not recommended by Windows itself, noted in the settings).

Currently, I am using 150% scaling. It's easy to see things. I'm using a small (15.6 inch) sized laptop screen.

I tried both Linux Mint and Ubuntu recently. It was their latest version. I tried both open-source and proprietary versions of Nvidia drivers.

On Linux Mint I couldn't set the scaling to anything other than 100% and 200%. Which means things are too small or too big.

On Ubuntu, there was an option called fractional scaling. I enabled it, and It allowed me to set the scaling to 125% (which is what I wanted). It messed up the mouse speed though (it's fine). It also made some text in some software (Chrome and vsCode) look blurry. I fixed Chrome by enabling an option in the flags. However, the wasn't such an option for vsCode. Maybe, if I were to try harder, I could find a way to fix it (maybe?).

If you google about this, you will find some people saying things like "Just make the font size bigger". This is not a great solution. Not all text gets bigger. For example Chrome URL bar stays the same (small) size.

I installed a software called Tweaks. This is what people recommend when you google about customizing the Ubuntu. I changed the (Fonts > Hinting) option to (Full), and it made the text look better. I also changed (Fonts > Antialiasing) to something that I don't remember. I also changed the font-family options. After a few minutes, a full screen error message appeared, saying "Something went wrong". I restarted the computer and it didn't fix. The login screen was working fine, but after logging in, it showed me the same error message. The way that I solved this was by googling, finding a keyboard shortcut to open a full screen terminal app like thing, and removing all Nvidia drivers. This fixed the error, but I think it messed up something else, which I'll explain later.

Why display scale is important? I need to see things easily and clearly. I'm also a bit blind. I do design and development work. I need pixel perfect precision.

The open-source Nvidia driver was faster than the proprietary one. It was also not laggy.

---

Linux has many package managers. This is not a good thing.

On Ubuntu, I was dealing with `.deb`, `.AppImage`, `.tar.gz` and `.tar.xz`.

Whenever people talk about Ubuntu, they say that I'ts based on Debian. This tells me that I can easily install Debian packages. However, when I tried to install a package, I got an error message saying that some dependencies were missing. I wasted a lot of time trying to figure things out and fix this. I found out there is a thing called GDebi (if I remember correctly). I installed it, and then I used it to install the package. It worked. However, it didn't always work. Not sure if this was an issue with GDebi or if it was something else.

I had issues with `.AppImage`, `.tar.gz` and `.tar.xz` files too. I don't remember much, and I don't feel like explaining it. Just know that I wasted a lot of time, and it made me frustrated.

Linux Mint was much better than Ubuntu. I could just double-click on the `.deb` file and it would install it.

I installed Ubuntu because I thought it may fix the scaling issue.

Ubuntu didn't have much customization options.

---

I use vsCode and on Linux/Ubuntu, shortcuts were different.

---

I use PowerShell on Windows and Linux uses Bash. The shortcuts and the behavior of keys and their features were different.

-   I couldn't do `ctrl` + `c` to copy text, and `ctrl` + `v` to paste text.
-   I couldn't do `ctrl` + "a" to select all input text.
-   I couldn't select part of the input text with (`ctrl`) + `shift` + "arrow keys".

I used Terminal settings to change `ctrl` + `shift` + `c` to `ctrl` + `c` (and the same for `v`), and `ctrl` + `shift` + `c` for killing the process. This only worked for the Terminal app, not the Bash that I use inside vsCode.

I installed zsh and oh-my-zsh. It made things just a bit better. I made Bash look less bloated. I found a plugin that somewhat implemented the `shift` + "arrow keys" to select text (It wasn't good).

I was going to install PowerShell on Linux, but I just installed Windows itself instead.

---

Linux stopped mounting my external hard drive (WD - HDD - My Passport - Ultra). I was shown in the file manager but when I was trying to open it, it was showing an error message. I used ChatGPT and after a bunch of time waste, I could fix it. However, it suggested a way to create a folder and mount the external hard drive to that folder. I needed to do this every time I restarted my computer (or disconnected the hard drive).

This issue didn't exist before, but I think this may be caused by deleting all Nvidia drivers (I did this because of the "Something went wrong" error that I explained). Connecting normal flash devices worked fine.

---

BalenaEtcher software didn't work for me. I couldn't get it working with the `.AppImage` file. Later I found there is a `.deb` file that I could install. That didn't work either.

NOTE: I installed Ventoy instead and it worked.

---

People say that you don't need to restart Linux or refresh for example file manager window. Or at least they say you do it less often. This wasn't my experience.

---

I don't like Flatpak. In my country, the Network speed is very slow, also extremely expensive. So, using more than 1GB bandwidth instead of 100/200MB for downloading vsCode is insane.

---

This was my third Linux experience. Every time, I just went back to Windows.

I have good things to say about Linux.

-   I have realized that some things were very fast relative to Windows.
-   I didn't need to debloat my system or worry about telemetry, auto-updates, etc.
