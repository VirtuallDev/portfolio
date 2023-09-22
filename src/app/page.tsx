import Typewriter from "@/components/Typewriter"

export default function Home() {
  return (
    <div>
      <section className="h-96 flex animate-up flex-col items-center text-7xl gap-4">
        <p className="text-text dark:text-dark-text font-mono font-bold">Hey, I&apos;m <Typewriter/></p>
      </section>
    </div>
  )
}
