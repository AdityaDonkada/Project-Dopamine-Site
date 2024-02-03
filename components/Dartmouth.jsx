import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import bgPattern from "@/public/images/bg-pattern.webp";
import LayoutEffect from "@/components/LayoutEffect";
import Link from "next/link";
const Dartmouth = () => (
  <section id = "dartmouth">
    <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
      <div className="custom-screen py-28 relative">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6",
          }}
        >
          <div className="relative z-10">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                Scholarly-Endorsed Expansion: Project Dopamine's New Chapter
              </h2>
              <p className="mt-5 text-gray-300">
                With Dartmouth's scholarly insight, Project Dopamine broadens to
                new platforms, enriching mindful connectivity.
              </p>
              <Image
                src="/images/Feature-1.svg"
                width={200}
                height={200}
                alt="Picture of the author"
                className="ml-[11.7rem] mt-[2rem]"
              />
            </div>
          </div>
        </LayoutEffect>
      </div>
    </GradientWrapper>
  </section>
);

export default Dartmouth;
