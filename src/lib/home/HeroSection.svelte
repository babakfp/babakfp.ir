<script lang="ts">
    import { copyText } from "svelte-copy"
    import toast from "svelte-french-toast"
    import IconDribbble from "$lib/icons/IconDribbble.svelte"
    import IconEnvelope from "$lib/icons/IconEnvelope.svelte"
    import IconGithub from "$lib/icons/IconGithub.svelte"
    import IconLinkedin from "$lib/icons/IconLinkedin.svelte"
    import IconNpm from "$lib/icons/IconNpm.svelte"
    import IconTelegram from "$lib/icons/IconTelegram.svelte"
</script>

<section class="mx-auto grid max-w-prose gap-4">
    <h1 class="font-title text-5xl text-gray-50 sm:text-7xl">
        <span>
            Babak <small class="text-xs font-semibold">
                TypeScript Developer
            </small>
        </span> Farkhoopak
    </h1>
    <p class="text-justify leading-7">
        I'm a <strong>Front-end</strong> developer with some
        <strong>Back-end</strong>
        experience and strong <strong>UI/UX</strong>
        skills. My tech stack includes <strong>TypeScript</strong>,
        <strong>Svelte/Kit</strong>, <strong>TailwindCSS</strong>, and
        <strong>PocketBase</strong>. I contribute to
        <strong>open-source</strong>
        projects and am open to <strong>remote work</strong>. I'm seeking a
        position with <strong>relocation</strong> options.
    </p>
    <div class="mt-2 flex flex-wrap justify-between gap-4">
        <div class="flex gap-2">
            <a
                class="btn btn-primary"
                href="/resume"
                target="_blank"
                rel="noreferrer"
            >
                Online resume
            </a>
            <a class="btn" href="/portfolios">Portfolios</a>
        </div>
        <div class="flex gap-2">
            <a
                title="LinkedIn profile"
                class="btn btn-icon"
                href="https://www.linkedin.com/in/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconLinkedin />
            </a>
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
                title="NPM packages"
                class="btn btn-icon"
                href="https://www.npmjs.com/~babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconNpm />
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
            <a
                title="Telegram account"
                class="btn btn-icon"
                href="https://t.me/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconTelegram />
            </a>
            <button
                title="Email address"
                class="btn btn-icon"
                on:click={() => {
                    copyText("babak.bxf@gmail.com")
                    toast.success(
                        "The email address copied to your Clipboard!",
                        { position: "bottom-right" },
                    )
                }}
            >
                <IconEnvelope />

                <a
                    title="Email address"
                    class="absolute inset-0"
                    href="mailto:babak.bxf@gmail.com"
                    rel="noreferrer"
                    aria-label="Email address"
                />
            </button>
        </div>
    </div>
</section>
