<script lang="ts">
    import { copyText } from "svelte-copy"
    import toast from "svelte-hot-french-toast"

    const BANK_CARD_NUMBER = "6219861807445076"
</script>

<div class="border p-4">
    <table class="table-auto border-collapse">
        <tbody>
            <tr>
                <td class="px-4 py-2">Bank:</td>
                <td class="px-4 py-2"><b>Saman Bank</b></td>
            </tr>
            <tr>
                <td class="px-4 py-2">Name:</td>
                <td class="px-4 py-2"><b>Babak Farkhoopak</b></td>
            </tr>
            <tr>
                <td class="px-4 py-2">Card:</td>
                <td>
                    <button
                        class="px-4 py-2"
                        onclick={async () => {
                            await copyText(BANK_CARD_NUMBER)
                            toast.success("Copied to Clipboard!", {
                                position: "bottom-end",
                            })
                        }}
                    >
                        <b><code>{BANK_CARD_NUMBER}</code></b>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
