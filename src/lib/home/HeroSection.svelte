<script lang="ts">
    import { env } from "$env/dynamic/public"
    import { copyText } from "svelte-copy"
    import toast from "svelte-french-toast"
    import IconGithub from "$icons/IconGithub.svelte"
    import IconDribbble from "$icons/IconDribbble.svelte"
    import IconLinkedin from "$icons/IconLinkedin.svelte"
    import IconEnvelope from "$icons/IconEnvelope.svelte"
    import IconTelegram from "$icons/IconTelegram.svelte"
</script>

<section class="mx-auto max-w-prose">
    <h1 class="font-mono text-3xl font-bold text-gray-50">Babak Farkhoopak</h1>
    <code
        class="inline-code pointer-events-none mt-4 inline-block !px-3 text-sm highlight-gray-50/10"
    >
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
            class="group btn-link"
            href={env.PUBLIC_GOOGLE_DRIVE_RESUME_URL}
            target="_blank"
            rel="noreferrer"
        >
            Online Resume
        </a>
        <div class="flex gap-2">
            <button
                title="My email address"
                class="btn btn-icon"
                on:click={() => {
                    copyText("babak.bxf@gmail.com")
                    toast.success(
                        "The email address copied to your Clipboard!",
                        { position: "bottom-right" }
                    )
                }}
            >
                <IconEnvelope />

                <a
                    title="My email address"
                    class="absolute inset-0"
                    href="mailto:babak.bxf@gmail.com"
                    rel="noreferrer"
                />
            </button>

            <a
                title="My GitHub repos"
                class="btn btn-icon"
                href="https://github.com/babakfp?tab=repositories&q=&type=public&language=&sort=stargazers"
                target="_blank"
                rel="noreferrer"
            >
                <IconGithub />
            </a>
            <a
                title="My UI designs"
                class="btn btn-icon"
                href="https://dribbble.com/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconDribbble />
            </a>
            <a
                title="My LinkedIn account"
                class="btn btn-icon"
                href="https://www.linkedin.com/in/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconLinkedin />
            </a>
            <a
                title="My Telegram account"
                class="btn btn-icon"
                href="https://t.me/babakfp"
                target="_blank"
                rel="noreferrer"
            >
                <IconTelegram />
            </a>
        </div>
    </div>
</section>
