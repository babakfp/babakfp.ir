<script lang="ts">
    import { copyText } from "svelte-copy"
    import toast from "svelte-hot-french-toast"
    import {
        IconDribbble,
        IconEnvelope,
        IconGithub,
        IconTelegram,
    } from "$lib/components/icons"
</script>

<section class="relative mx-auto grid max-w-prose gap-4">
    <h1 class="text-5xl font-black text-gray-50 sm:text-7xl">
        Babak Farkhoopak
    </h1>
    <p class="leading-8 font-light">
        I'm a <i>Front-end</i> Developer with strong <i>UI/UX</i> expertise,
        proficient in <i>TypeScript</i>, <i>Svelte</i>, <i>SvelteKit</i>,
        <i>Tailwind CSS</i>, and <i>PocketBase</i>. I am open to <i>remote</i>
        opportunities and seeking roles that offer <i>relocation</i> options.
    </p>
    <div class="mt-2 flex flex-wrap justify-between gap-4">
        <div class="flex gap-2">
            <a
                class="btn btn-primary"
                href="https://drive.google.com/file/d/1e1tNjEYYA0t2BtnTPyK2TMPSr7mNReMK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                Online resume
            </a>
            <a class="btn" href="/portfolios">Portfolios</a>
        </div>
        <div class="flex gap-2">
            <a
                title="GitHub repos"
                class="btn btn-icon"
                href="https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
                target="_blank"
                rel="noreferrer"
            >
                <IconGithub />
            </a>
            <a
                title="Email address"
                class="btn btn-icon"
                href="mailto:babak.bxf@gmail.com"
                rel="noreferrer"
                aria-label="Email address"
                onclick={async () => {
                    await copyText("babak.bxf@gmail.com")
                    toast.success(
                        "The email address copied to your Clipboard!",
                        { position: "bottom-end" },
                    )
                }}
            >
                <IconEnvelope />
            </a>
            <a
                title="Telegram account"
                class="btn btn-icon"
                href="https://t.me/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconTelegram />
            </a>
            <a
                title="UI designs"
                class="btn btn-icon"
                href="https://dribbble.com/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconDribbble />
            </a>
        </div>
    </div>
</section>
