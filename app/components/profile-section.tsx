import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2 items-start">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">AMAN KHANNA</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-md">
          I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD. FULL STACK DEVELOPER, VIDEO EDITOR & 3D
          ANIMATOR.
        </p>
        <div className="mt-4 text-sm text-muted-foreground">DESIGNER EST.2000</div>
      </div>
      <div className="relative aspect-[4/5] md:aspect-[3/4]">
        <Image src="/placeholder.svg" alt="Profile Image" fill className="object-cover" priority />
      </div>
    </div>
  )
}

