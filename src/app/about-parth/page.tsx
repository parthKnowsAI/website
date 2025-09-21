import BlurFade from "@/components/magic-ui/blur-fade";
import BlurFadeText from "@/components/magic-ui/blur-fade-text";
import { NavDock } from "@/components/nav-dock";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Who is Parth Patel? | About Me",
  description:
    "Software Engineer turned AI Engineer helping people understand AI through simple, visual explanations.",
};

export default function AboutParth() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <main className="flex flex-col items-center min-h-[100dvh] py-20 pb-24">
        <div className="w-full max-w-2xl space-y-10">
          <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
              <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl text-white/70"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </div>
          </section>
          <section id="about" className="text-white/70 text-base">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-2xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-white/70 leading-relaxed whitespace-pre-wrap mt-1">
                During my time completing a double degree in Computer Science
                and Information Technology, I spent time teaching, tutoring, and
                working as a TA. ✨ That&apos;s where I discovered two things I
                love
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Helping people learn</li>
                <li>Exploring the world of AI</li>
              </ul>
              <p className="text-white/70 leading-relaxed whitespace-pre-wrap mt-3">
                I loved helping students understand complex ideas and discovered
                that AI was the field where my curiosity and creativity truly
                came alive.
              </p>

              <p className="text-white/70 leading-relaxed whitespace-pre-wrap mt-3">
                I began my career as an intern at Dropbox, gaining great
                experience in a large tech environment, and discovered that I
                thrive in roles where I can innovate and contribute directly.
                That realization led me to join a smaller startup in the
                pharmaceutical space, where I found my calling. Today, I&apos;m
                proud to contribute to the mission at the ACMA, helping shape
                the future of medical affairs through technology.
              </p>

              <p className="text-white/70 leading-relaxed whitespace-pre-wrap mt-3">
                Outside of work, I dedicate my time to educating others about
                AI. I break down cutting-edge research from preprints to
                peer-reviewed papers into clear, approachable insights so that
                anyone, even those outside of tech, can grasp the exciting
                possibilities of this rapidly evolving field.
              </p>
            </BlurFade>
          </section>
          <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-2xl font-bold text-white mb-1">
                  Experience
                </h2>
              </BlurFade>
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </section>
          <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="space-y-3 text-black">
                  <div className="bg-white text-black inline-block rounded-lg px-3 py-1 text-sm">
                    Contact
                  </div>
                  <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Want to chat? Just shoot me a dm{" "}
                    <Link
                      href={
                        "https://www.linkedin.com/in/parth-patel-093652181/"
                      }
                      className="text-blue-500 hover:underline"
                    >
                      with a direct question on linkedin
                    </Link>{" "}
                    or send an email to{" "}
                    <a
                      href="mailto:parthknowsai@gmail.com"
                      className="text-blue-500 hover:underline"
                    >
                      parthknowsai@gmail.com
                    </a>{" "}
                    and I&apos;ll respond whenever I can.
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>
        </div>

        {/* Sticky dock - now inside main */}
        <div className="fixed bottom-4  z-50">
          <NavDock />
        </div>
      </main>
    </div>
  );
}
