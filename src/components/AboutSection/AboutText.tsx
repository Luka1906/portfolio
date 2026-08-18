import { MountainSnow } from "lucide-react";
export default function AboutText() {
  return (
    <section className=" w-[760px] text-body-text ">
      <div className="flex text-[40px] text-primary-text space-y-10 ">
        <h2 className="font-accent">About</h2>
        <span className="font-accent text-accent">.</span>
      </div>
      {/* <h3 className="text-[28px] border-b w-fit border-accent text-primary-text">
            From writing to building
          </h3> */}

      <div className="border-b pb-5 border-border flex flex-col gap-8">
        <p className="">
          I'm a software developer based in Chicago, currently working primarily
          with <span className="text-accent">React</span> and{" "}
          <span className="text-accent ">TypeScript</span>.
        </p>
        <p className="">
          My path into software wasn't completely traditional. Before getting
          into software development, I studied and worked in{" "}
          <span className="text-accent">journalism</span>, where a big part of
          my job was researching unfamiliar topics, figuring out what mattered,
          and explaining things clearly. That experience helped me become a
          better communicator and taught me how to make complex topics easier to
          understand —{" "}
          <span className="text-accent">
            something I carry into my work as a developer
          </span>
          .
        </p>

        <p className="">
          Eventually, I realized I wanted to do more than publish content on the
          web — I wanted to understand how it worked and build things for it.
          Today, I focus mostly on the fron-end, while also working with APIs
          and backend services and{" "}
          <span className="text-accent">
            collaborating with designers and developer
          </span>{" "}
          to turn ideas into working features.
        </p>
      </div>

      <article className="flex flex-col pt-9 w-[450px] gap-5">
        <div className="flex items-center gap-3">
          <div className="border border-border h-11 w-11 flex items-center justify-center rounded-sm ">
            <MountainSnow className="text-accent h-7 w-7" />
          </div>
          <h3 className="text-[28px] font-medium">Outside of coding</h3>
        </div>
        <p>
          When I'm away from my laptop, I like traveling and learning about
          natural history. I've been lucky enough to visit some pretty unusual
          places — <span className="text-accent">Antarctica being one of them.</span> 
        </p>
      </article>
    </section>
  );
}
