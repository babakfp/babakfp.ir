---
title: Fuck Linux
description: My experience with Linux. I hate it.
update: 2024/06/23
create: 2024/06/20
---

"Fuck Linux", is how I felt when using Linux. I tried using Linux three times, and I always ended up returning to Windows. This story is about my third Linux experience: I tried Linux Mint and Ubuntu.

-   Ubuntu version: `ubuntu-24.04-desktop-amd64.iso`.
-   Linux Mint version: `linuxmint-21.3-cinnamon-64bit.iso`.

## My System Info

TODO: Add system info.

## Display Scaling

On Windows, I can set display scaling to 100%, 125%, 150%, or 175%, and it works flawlessly. Currently, I use 150% scaling on my 15.6-inch laptop screen for easy readability.

With Linux Mint, I couldn't set the scaling to anything other than 100% and 200%, making everything either too small or too big. Ubuntu had an option called fractional scaling, which allowed 125% scaling, but it messed up the mouse speed and made text in some software like Chrome and VSCode look blurry. Although I could fix Chrome by enabling a flag option, VSCode remained blurry.

I tried both Nvidia open-source and proprietary drivers available on Ubuntu and Linux Mint.

### Ineffective Solutions

Suggestions like "Just make the font size bigger" don't solve the problem, as not all text scales properly. For example, the Chrome URL bar stays the same size.

### I Broke the System Trying to Fix Blurry Text

I installed Tweaks on Ubuntu to fix the blurry text issue, but after changing some settings, I encountered a persistent full-screen error message. The fix involved removing all Nvidia drivers, which likely caused other problems.

I just changed a few options in Tweaks, and after a few minutes, the system broke. Restarting the computer didn't fix it. The login screen was working fine, but after logging in, it showed me the same error message. I solved it by googling, finding a keyboard shortcut to open a full-screen terminal app-like thing, copying and pasting a command to remove all Nvidia drivers.

The error message was:

> Oh no! Something has gone wrong.
>
> A problem has occurred and the system can't recover. Please log out and try again.

### Importance of Display Scaling

Display scaling is crucial for clarity and precision, especially for design and development work.

## Nvidia Drivers

The open-source Nvidia driver was faster. The proprietary driver was slower and laggy (relatively speaking).

## Distribution Hell

Linux has too many distributions and none of them are good. Distributions can have their own package managers, which means every software now has to support multiple package managers. LOL. This looks so much like how Front-end developers have too many runtimes, frameworks, and package managers to choose from. There can only be a single runtime, framework, and package manager, and it can solve all problems. Same with Linux distributions. Just build something that works for everyone. Windows is a good example of this.

## Package Management Nightmares

Linux has too many distributions and package managers. On Ubuntu, I dealt with `.deb`, `.AppImage`, `.tar.gz`, and `.tar.xz` files.

On Ubuntu, it's not possible to install a Debian package by double-clicking on the `.deb` file. You have to use the command line to install it.

Whenever Linux users talk about Ubuntu, they say that it's based on Debian. This tells me that I can easily install Debian packages. However, when I tried to install a package, I got an error message saying that some dependencies were missing. I wasted a lot of time on this. I found out there is a thing called GDebi. I installed it, and then I used it to install the package. It worked. However, it didn't always work. Not sure if this was an issue with GDebi or if it was something else.

I had issues with `.AppImage`, `.tar.gz`, and `.tar.xz` files too. I don't remember much, and I don't feel like explaining it. Just know that I wasted a lot of time, and it made me frustrated.

Linux Mint was much better than Ubuntu. I could just double-click on a `.deb` file and install it.

I installed Ubuntu because I thought it might fix the scaling issue.

## Customization

Ubuntu didn't have many customization options. You need to install a software called Tweaks to change basic settings.

## VSCode Shortcuts

I use VSCode, and on Linux/Ubuntu, the shortcuts were different.

## Shell Differences

I use PowerShell on Windows and Linux uses Bash. The shortcuts and the behavior of keys and their features were different.

-   I couldn't do `ctrl` + `c` to copy text, and `ctrl` + `v` to paste text.
-   I couldn't do `ctrl` + "a" to select all input text.
-   I couldn't select part of the input text with (`ctrl`) + `shift` + "arrow keys".

I used Terminal settings to change `ctrl` + `shift` + `c` to `ctrl` + `c` (and the same for `v`), and `ctrl` + `shift` + `c` for killing the process. This only worked for the Terminal app, not the Bash that I use inside VSCode.

I installed zsh and oh-my-zsh. It made things just a bit better. I made Bash look less bloated. I found a plugin that somewhat implemented the `shift` + "arrow keys" to select text (it wasn't good).

I was going to install PowerShell on Linux, but I just installed Windows itself instead.

## External Hard Drive Issues

Linux stopped mounting my external hard drive (WD - HDD - My Passport - Ultra). It was shown in the file manager, but when I was trying to open it, it was showing an error message. I used ChatGPT and after a bunch of time wasted, I could fix it. However, it suggested a way to create a folder and mount the external hard drive to that folder. I needed to do this every time I restarted my computer (or disconnected the hard drive).

This issue didn't exist before, but I think this may be caused by deleting all Nvidia drivers (I did this because of the "Something went wrong" error that I explained). Connecting normal flash devices worked fine.

## Software Installation Problems

BalenaEtcher didn't work for me with the `.AppImage` file. The `.deb` file also failed. I eventually used Ventoy instead, which worked fine.

## Restart and Refresh Reality

Contrary to popular belief, I had to restart Linux and refresh windows frequently.

## Dislike for Flatpak

In my country, the network speed is very slow and also extremely expensive. So, using more than 1GB bandwidth instead of 100/200MB for downloading VSCode is insane.

## My Experience with Other Linux Distributions

I tried other Linux distributions too in this third experience.

-   Fedora: I couldn't get it to even boot. Something about the ISO file (`Fedora-Workstation-Live-x86_64-40-1.14.iso`) was wrong.
-   NixOS: I couldn't get it to boot (`nixos-gnome-24.05.1503.752c634c09ce-x86_64-linux.iso`).

## Conclusion (Good Things About Linux)

This was my third attempt at using Linux, and I always ended up returning to Windows. While Linux has some advantages, like faster performance in some areas and less need for system debloating, the frustrations outweighed the benefits for me.

When I was frustrated with Linux, I read this [message](https://devrant.com/rants/1903975/does-linux-suck-imho-yes-a-lot-of-the-people-bash-windows-regarding-automatic-re), and it cheered me up!
