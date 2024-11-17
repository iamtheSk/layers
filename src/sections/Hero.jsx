import Button from "../components/Button";

import designExample1 from "../assets/images/design-example-1.png";
import designExample2 from "../assets/images/design-example-2.png";
import Pointer from "../components/Pointer";

export default function Hero() {
  return (
    <section className="py-24  overflow-x-clip">
      <div className="container relative">
        <div>
          <img
            src={designExample1}
            alt="Design Example 1"
            className="absolute -left-32 top-16 hidden lg:block"
          />
        </div>
        <div>
          <img
            src={designExample2}
            alt="Design Example 2"
            className="absolute -right-64 -top-16 hidden lg:block"
          />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Salman" color="red" />
        </div>

        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="SF" />
        </div>

        <div className="flex justify-center ">
          <div className="inline-flex py-1 px-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5 seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design,
          <br />
          created effortlessly
        </h1>
        <p className="text-center text-xl max-w-2xl mx-auto text-white/50 mt-8">
          Design tools shouldn&apos;t slow you down. Layers combination powerful
          featuers with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="flex  border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-transparent px-4 focus:outline-none md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
