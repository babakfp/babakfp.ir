<script>
	import Video from "$lib/markdown/Video.svelte"
	import ShowMore from "$lib/markdown/ShowMore.svelte"
	import PlatformQuote from "$lib/markdown/PlatformQuote.svelte"
	import TheGithubComment from "./_lib/TheGithubComment.md"
	import TheDevtoArticle from "./_lib/TheDevtoArticle.md"
	import TheDevtoArticleReply from "./_lib/TheDevtoArticleReply.md"
</script>

Why I hate Svelte? What are the negatives of using Svelte? Should you learn Svelte? I'm going to answer them all.

## About me

First, let's learn a bit about me. I'm a web developer since 2019/2020. I have built open-source and paid Wordpress themes and plugins. I'm currently working as a front-end developer. I have done freelancing. I have built websites and open-source tools and packages. I have maintained multiple dev communities. I also have good knowledge of UI and UX design. I started using Svelte in 2020.

## I got banned from [the Discord group](https://svelte.dev/chat)

Svelte documentation UI sucks, right? In _2021_ I designed a logo a UI for SvelteKit documentation (before the official documentation existed). I share them in the Discord group. I and some community members discussed the design and the related stuff (in a **civil** manner). In the middle of the conversation, _suddenly_ I got removed from the group! Later when I joined (with an alternate account), I couldn't find any of my messages. They probably automatically cleaned up everything after removing me. You can download all UI and logo design source files I ever create for Svelte, [from here](https://bit.ly/3tf6mPL)

_This is the result of trying to contribute to Svelte:_

![A GIF that shows the button to join the Svelte Discord group doesn't work.](/blog/i-like-svelte-but-i-hate-it/2.gif)

## I got banned from [the Github repositories](https://github.com/sveltejs)

It was difficult for me to use this dropdown:

![A screenshot that shows the tutorial dropdown in the Svelte documentation](/blog/i-like-svelte-but-i-hate-it/4.png)

So, I opened a PR and this is how it went:

<ShowMore>

![A screenshot that shows my PR (#6851) on Github, containing comments and discussions](/blog/i-like-svelte-but-i-hate-it/5.png)

</ShowMore>

Here is the comment that got me banned (the comment got removed after I got banned, that's why it doesn't exist in the screenshot above). Before we continue forward, read the content of the screenshot above.

<ShowMore>
	<PlatformQuote title="GITHUB: COMMENT">
		<TheGithubComment />
	</PlatformQuote>
</ShowMore>

_This is the result of contributing to svelte:_

![A screenshot that shows the comments section in github, displaying a message saying that I can't perform the action of writing a comment](/blog/i-like-svelte-but-i-hate-it/1.png)

## I got banned from [Dev.to](https://devto) site

After I got banned from the Svelte repositories on Github, the same day, I write an article about what happened, and my account got restricted because! This is the article:

<ShowMore>
	<PlatformQuote title="DEVTO: ARTICLE">
		<TheDevtoArticle />
	</PlatformQuote>
</ShowMore>

I also replied to one of the comments under the article:

<ShowMore>
	<PlatformQuote title="DEVTO: ARTICLE REPLY">
		<TheDevtoArticleReply />
	</PlatformQuote>
</ShowMore>

## I talked to one of the maintainers of Svelte

This is the whole conversation:

<Video src="/blog/i-like-svelte-but-i-hate-it/3.mp4" captions="The full conversation between me and that maintainer (Kev#3238)" />

After that conversation, they banned me:

![A screenshot of the failed friend request (on Discord) to that Svelte maintainer (Kev#3238)](/blog/i-like-svelte-but-i-hate-it/7.png)

### I talked with another Svelte maintainer

Everything went great🤩, just kidding. My heart got broken! To be honest, I wasn't expecting much. I was expecting the same. Whatever, this is the whole conversation:

<Video src="/blog/i-like-svelte-but-i-hate-it/8.mp4" captions="A The full conversation between me and that maintainer (pngwn#8431)" />

## I open another PR and it got my alternate account banned from (Github and Discord) 🙂

Hm, so I had this alternate Github and Discord account (<img inline class="inline-block h-10" src="/blog/i-like-svelte-but-i-hate-it/9.png" alt="A screenshot of my alternate Discord account avatar(a kitty with a pink background) (Windy#4111)" />). I dont' know how, things got messed up, so as result you can see my main account as a contributer to a PR that I opened with my alternate account! So, I guess don't make silly mistakes [like this](https://github.com/sveltejs/svelte/pull/7290)😂.

![A screenshot of my silly mistake that got my alternate Discord account banned from the Svelte Discord group. It shows I created a PR with the alternate account and committed with the original account](/blog/i-like-svelte-but-i-hate-it/10.png)

## I open an issue to report a bug and I got banned

My other alternate account got banned from accessing Svelte Github repositories. Check this out: [SvelteKit #7260](https://github.com/sveltejs/kit/issues/7260)

## They don't know how to maintain and manage a community

Svelte maintainers don't know what the heck they are doing. Did anyone see the Svelte Summit live 🐕💩 video quality? They don't even try to do a good job. Svelte maintainers never managed a community before so they are doing dumb 💩 all the time. You can easily find toxic people in Svelte's Github and Discord community and the maintainers don't do anything about it (they are actualy a part of that toxic community), but for sure they will ban you for life for no reason.

For example if you are a back-end developer, and back-end is all you know, you don't get to make decisions about the UI! If you don't know how to maintain and manage a community, just step the fuck away.

## Rich Harris isn't active in the community

Since 2020, when I started using Svelte, I have never seen him sending any messages in the Discord _public_ community. I think they have a separate private server for the maintainer themselves, but I haven't seen him sending any messages to the public servers. He is the creator of Svelte and you can't find him anywhere in the Discord community, it's weird. It's less likely, but he may reply to one of your comments in the Svelte or SvelteKit repositories.

## They are just showing you what you want to see

They show themselves to be very supportive of accessibility, but their documentation website doesn't even follow the basics of accessibility! They have some simple linting features, but the problem is these features are opinionated:

- You can't turn these features off.
- When you use a standard feature of the web platform, it may yell at you saying what you are doing is bad/wrong, when it's actually not.
- They don't always work correctly, it may result in incorrect linting suggests.

You can achieve the same features with a linter, and you can even customize it however you like, but with Svelte, you need to suck it up and it doesn't matter how much and how many people complain about it. Svelte punished developers for not following their stupid broken accessibility warnings (DX = 💩).

Since there is no option to disable these warnings, you end up with something like this. Whenever you run the app, and navigate to a page, you are going to see a bunch of these warnings.

![A screenshot of Svelte A11Y warnings in vsCode terminal](/blog/i-like-svelte-but-i-hate-it/6.png)

Go to [Svelte repository: A11Y issues](https://github.com/sveltejs/svelte/issues?q=is%3Aissue+is%3Aopen+a11y) and read through all of the open and closed issues. Example: [Svelte #7626](https://github.com/sveltejs/svelte/issues/7626)

You can also go to [Svelte documentation](https://svelte.dev) and [SvelteKit documentation](https://kit.svelte.dev), you don't need to do anything complicated, just open up the lighthouse and do a little accessibility check, and see the disaster!

Since 2020 (as far as I know), Svelte documentation doesn't even have a dork mode. SvelteKit documentation didn't have a dark mode for more than a year. Why adding such a simple and easy thing that users asked for years is so hard for them to add?!

Svelte is opinionated, not community-oriented.

## Update 2023/04/06 :)

On 2023/04/06, I responded to a message in the Discord group using one of my alternate accounts. In my reply I said something along the lines of the problems that I had with Svelte, like how they removed me from the Discord group and banned me from the Github repositories, and how Svelte has poor and incomplete documentation and how it doesn't even follow the basic accessibility rules, like how there is no dark mode toggle for years, something so simple and easy to add, and how there has been a lot of open issues that a lot of people were asking for basic and necessary features for years and none of them is addressed yet! I also talked about the inconsistency in Svelte and SvelteKit, for example in some places we refer to words like "svelte" or "sveltejs", "kit", "sveltekit" etc. I also talked about road map for version 4 of Svelte and that it's not going to have anything interesting.

When a new major release is announced, developers expect many exciting new features and improvements. The reality is, there aren't going to be any new features or anything interesting in the latest version of Svelte, this can be disappointing for people who were excited about the release. Instead, it's a good idea to include a few important new features in the release to show that Svelte is still being developed and to create positive buzz around it. So, this was what I was talking about in my reply message.

So, what happened? As usual, I got removed from the Discord group, and all of my messages got deleted. They also started talking behind me:

![A screenshot of what some of the community members talked about behind me](/blog/i-like-svelte-but-i-hate-it/11.png)

So, I created a new account and sent the below message, and again, I got removed :)

![Hello everyone, I wanted to take a moment to address something that happened recently. My account, smithliam#5729, was removed from this group without any explanation or reason given. All of my messages also got removed. I was hurt by this and felt excluded. To make matters worse, I later discovered that some members of the group were talking about me and making fun of me behind my back. This behavior is disrespectful and hurtful, and it's not acceptable in any community. Furthermore, this is not the first time that something like this has happened. In the past, my main account got removed and banned from the community and the github repositories. Again, all of my messages go removed. I tried to contact some higher-up members but I wasn't very successful and some ignored e. my solution was to just create a new account and ignore what happened. it worked for a while but when the maintainers realized it was me, they kicked me out again. The short story is, I kept creating new accounts and DIscord and Github and they kept getting removed and banned. I once even got banned after opening a legit issue on Github related to Sveltekit https://github.com/sveltejs/kit/issues/7260. I wasn't disrespectful to anyone, and I didn't break any rules, but I still got treated with hateful behaviors. Back then I tried to design and build new documentation for Svelte and SvelteKit because I liked Svelte and I got removed while I was discussing the design with some members of the community (in the proper group). It felt really bad, but I tried to ignore it. Later I worked on the official Svelte documentation, I open a PR and I get banned. This is unacceptable behavior from anyone, especially within a community. I believe that everyone deserves to be treated with respect and kindness. You can contact me here: Babak#0011. Thanks for reading.](/blog/i-like-svelte-but-i-hate-it/12.png)

---

Thank you, [Telegram](https://telegram.org). You are the reason that I have a backup from these messages😂🙏.
