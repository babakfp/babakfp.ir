<script lang="ts">
    import { copyText } from "svelte-copy"
    import toast from "svelte-french-toast"
    import { PUBLIC_GOOGLE_DRIVE_RESUME_URL } from "$env/static/public"
    import IconDribbble from "$lib/icons/IconDribbble.svelte"
    import IconEnvelope from "$lib/icons/IconEnvelope.svelte"
    import IconGithub from "$lib/icons/IconGithub.svelte"
    import IconLinkedin from "$lib/icons/IconLinkedin.svelte"
    import IconNpm from "$lib/icons/IconNpm.svelte"
    import IconTelegram from "$lib/icons/IconTelegram.svelte"
</script>

<section class="mx-auto max-w-prose">
    <h1 class="font-title text-5xl text-gray-50 sm:text-7xl">
        Babak Farkhoopak
    </h1>
    <code class="inline-code pointer-events-none mt-4 inline-block">
        JavaScript | FrontEnd Developer
    </code>
    <p class="mt-4 leading-7">
        All of my projects are built from the ground up, from planning and
        designing, all the way to building fully-functional solutions. I have
        built websites, open-source tools, WordPress themes and plugins, and
        more. I have contributed to communities and helped people in building
        their applications. I have an eye on design and user experience.
    </p>

    <div class="mt-4 flex flex-wrap items-center gap-4">
        <a
            class="group btn btn-primary"
            href={PUBLIC_GOOGLE_DRIVE_RESUME_URL}
            target="_blank"
            rel="noreferrer"
        >
            Online Resume
        </a>
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
