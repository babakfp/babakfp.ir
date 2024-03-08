export async function GET() {
    const result = import.meta.glob("/**/HelloWorld.svelte", { eager: true })
    console.log(Object.entries(result)[0][1].message)
    return new Response("Hello, World!")
}
