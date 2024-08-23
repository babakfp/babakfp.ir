---
title: Fuck Linux
description: My experience with Linux. I hate it.
update: 2024/06/23
create: 2024/08/23
---

Whenever I tried using Linux, "Fuck Linux" was always how I ended up feeling. Despite giving it three tries over the years, I kept returning to Windows. This story is about my third experience, where I explored both Linux Mint and Ubuntu.

-   Ubuntu: `ubuntu-24.04-desktop-amd64.iso`
-   Linux Mint: `linuxmint-21.3-cinnamon-64bit.iso`

## From Linux Mint to Ubuntu

First off, I installed Linux Mint. However, some clueless individuals online recommended Ubuntu. Due to issues with [Display Scaling](#display-scaling) and an Nvidia driver error on startup, I decided to switch to Ubuntu.

## Display Scaling

On Windows, I can set display scaling to 100%, 125%, 150%, or 175%, and it works flawlessly. Currently, I use 150% scaling on my 15.6-inch laptop screen for easy readability.

With Linux Mint, I couldn't set the scaling to anything other than 100% and 200%, making everything either too small or too big.

Ubuntu had an option called fractional scaling, which allowed 125% scaling, but it messed up the mouse speed and made text in some software like Chrome and VSCode look blurry. Although I could fix Chrome by enabling a flag option, VSCode remained blurry.

I tried both Nvidia open-source and proprietary drivers available on Ubuntu and Linux Mint, but neither solved this issue.

### Ineffective Solutions

Suggestions like "Just make the font size bigger" don't solve the problem, as not all text scales properly. For example, the Chrome URL bar stays the same size.

### Importance of Display Scaling

Display scaling is crucial for clarity and precision, especially for design and development work.

### I Broke the System Trying to Fix Blurry Text

I installed Tweaks on Ubuntu to fix the blurry text issue, but a few minutes after changing some settings, I encountered a persistent full-screen error message.

Restarting the computer didn't fix it. The login screen was working fine, but after logging in, it showed me the same error message.

The fix involved removing all Nvidia drivers by using a command that I found on the internet, which likely caused [other problems](#external-hard-drive-issues).

The error message was:

> Oh no! Something has gone wrong.
>
> A problem has occurred and the system can't recover. Please log out and try again.

## Nvidia Drivers

The proprietary Nvidia driver was laggy and slower compared to the open-source driver (relatively speaking).

## Distribution Hell

Linux is flooded with countless distributions, each one more frustrating than the last. Every distro has its own package manager, forcing software to support an array of incompatible systems. The worst part? These distros aren't just different—they're all consistently awful in their own ways, making the experience a nightmare no matter which one you choose.

## Package Management Nightmares

On Windows, you can install a program by double-clicking a `.exe` or `.msi` file. Some programs also offer portable versions that run without installation. Alternatively, you can unzip certain files and run the executable directly.

On Ubuntu, I encountered various file types including `.deb`, `.AppImage`, `.tar.gz`, and `.tar.xz`. Although Ubuntu is based on Debian, I couldn't install `.deb` packages by simply double-clicking them; I kept running into missing dependency errors.

After wasting a lot of time troubleshooting, I discovered GDebi. Installing and using GDebi from the command line allowed me to install Debian packages successfully, but it didn't always work. I'm unsure whether the issue was with GDebi or something else.

I had issues with `.AppImage`, `.tar.gz`, and `.tar.xz` files too. I don't remember much, and I don't feel like remembering it. Just know that I wasted a lot of time, and it made me frustrated.

Linux Mint was much better than Ubuntu. I could just double-click on a `.deb` file and install it.

## Customization

Ubuntu has very little customization options. You need to install Tweaks to change basic things. It's nothing close to Windows.

## VSCode Shortcuts

I use VSCode, and on Linux/Ubuntu, the shortcuts were different. [Terminal shortcuts](#shell-differences) were different too. WTF!

## Shell Differences

The shortcuts and the behavior of keys and their features are different on Windows and Linux.

-   No (`ctrl` + `c`) to copy text.
-   No (`ctrl` + `v`) to paste text.
-   No (`ctrl` + `a`) to select input text. Only input text, not the whote output text.
-   No (`shift` + ArrowKeys) and (`ctrl` + `shift` + ArrowKeys) for text selection.

I modified some Terminal configuration options, but the changes only applied to the Terminal app, not to the Bash environment I use in VSCode.

I installed zsh and oh-my-zsh, which improved things slightly. I managed to make zsh look less cluttered and found a plugin that partially enabled text selection with (`Shift` + ArrowKeys), though it wasn't very good.

I was going to install PowerShell on Linux, but I just installed Windows instead.

## External Hard Drive Issues

Linux suddenly stopped mounting my external hard drive (WD - HDD - My Passport - Ultra). Although it appeared in the file manager, attempting to open it resulted in an error message. After wasting a lot of time troubleshooting with ChatGPT, I finally found a fix. The solution involved creating a folder and manually mounting the external hard drive to that folder, which worked—but I had to repeat the process every time I restarted my computer or reconnected the drive.

This issue hadn't occurred before, and I suspect it may have been caused by [deleting all Nvidia drivers](#i-broke-the-system-trying-to-fix-blurry-text) (an action I took due to the "Something went wrong" error I previously mentioned). Interestingly, connecting regular flash drives still worked without any problems.

## Software Installation Problems

BalenaEtcher didn't work for me with the `.AppImage` file. The `.deb` file also failed. I eventually used Ventoy instead, which worked fine.

## Restart and Refresh Reality

Despite the common belief, I found myself needing to restart Linux and refresh windows quite often.

This is just one example of how Linux users can be lying to you.

## Dislike for Flatpak

In my country, network speeds are slow and extremely expensive. Using over 1GB of bandwidth to download VSCode, instead of 100-200MB, is just ridiculous.

## My Experience with Other Linux Distributions

I tried other Linux distributions during this third experience:

-   Fedora: I couldn't even get it to boot. Something was wrong with the ISO file (`Fedora-Workstation-Live-x86_64-40-1.14.iso`).
-   NixOS: It wouldn't boot either (`nixos-gnome-24.05.1503.752c634c09ce-x86_64-linux.iso`).

## What Others Say About Linux? (Honest Reviews)

-   [Linux Is a Garbage/Joke Of a OS Windows Is KING](https://www.youtube.com/watch?v=GZUujOCPJKE)
-   [Why Linux Sucks](https://www.youtube.com/watch?v=oTiztqndGco)

## Last Words

This was my third attempt at using Linux, and I always ended up returning to Windows. While Linux has some advantages, like faster performance in some areas and less need for system debloating, the frustrations far outweighed the benefits for me.

When I was frustrated with Linux, I read this [message](https://devrant.com/rants/1903975/does-linux-suck-imho-yes-a-lot-of-the-people-bash-windows-regarding-automatic-re), and it cheered me up!
