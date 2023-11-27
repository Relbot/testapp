
async function testFetch() {
  await new Promise(resolve => setTimeout(resolve, 3000))
}


export default async function Home() {

  const test = await testFetch()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      dies tet hat länger gedauert zu laden
    </main>
  )
}

export const dynamic = "force-dynamic"
