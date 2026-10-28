import { MountainSnow } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutText() {
  return (
    <section className="w-full max-w-[760px] text-body-text tracking-tight lg:tracking-normal ">
      {/* About title and paragraphs */}
      <div className="flex flex-col gap-8">
        {/* About title */}
        <div className="font-accent text-3xl sm:text-4xl lg:text-[40px] text-primary-text">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            About<span className="text-accent">.</span>
          </motion.h2>
        </div>

        {/* About paragraphs */}
        <div className="flex flex-col gap-8 border-b border-border pb-5">
          <p>
            I'm a software developer based in Chicago, currently working
            primarily with <span className="text-accent">React</span> and{" "}
            <span className="text-accent">TypeScript</span>.
          </p>

          <p>
            My path into software wasn't completely traditional. Before getting
            into software development, I studied and worked in{" "}
            <span className="text-accent">journalism</span>, where a big part of
            my job was researching unfamiliar topics, figuring out what
            mattered, and explaining things clearly. That experience helped me
            become a better communicator and taught me how to make complex
            topics easier to understand —{" "}
            <span className="text-accent">
              something I carry into my work as a developer
            </span>
            .
          </p>

          <p>
            Eventually, I realized I wanted to do more than publish content on
            the web — I wanted to understand how it worked and build things for
            it. Today, I focus mostly on the front-end, while also working with
            APIs and backend services and{" "}
            <span className="text-accent">
              collaborating with designers and developers
            </span>{" "}
            to turn ideas into working features.
          </p>
        </div>
      </div>

      {/* Outside of coding */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="flex w-full max-w-[450px] flex-col gap-5 pt-9"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border">
            <MountainSnow className="h-7 w-7 text-accent" />
          </div>

          <h3 className="text-[28px] font-medium">Outside of coding</h3>
        </div>

        <p>
          When I'm away from my laptop, I like traveling and learning about
          natural history. I've been lucky enough to visit some pretty unusual
          places —{" "}
          <span className="text-accent">Antarctica being one of them.</span>
        </p>
      </motion.article>
    </section>
  );
}
