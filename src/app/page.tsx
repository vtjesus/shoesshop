
import Hero2 from "@/components/home/hero2";
import Featured from "@/components/home/featured";
import Catalog from "@/components/home/catalog";

//Components


export default function Home() {

  return (
    <>
      <section className="">
        <Hero2/>
        <section id='tagline'>
          <div className="flex flex-col text-center p-4">
            <h1 className="text-3xl font-extrabold">STEP INTO COMFORT</h1>
            <p className=" text-lg font-semibold">with our premium shoe selection!</p>
            <a href='/products' className="bg-black mx-auto text-white px-3 py-1 rounded-full hover:bg-gray-800 font-semibold my-2">
              Shop Now
            </a>
          </div>
        </section>
        <Featured image1='https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/nike_durant_KD15-xdQWGlm3oIkzzZIuDjkvG6EpKhVrP6.jpg' image2='https://sccy794tycp3utm5.public.blob.vercel-storage.com/home/VANS_SUEDE_CANVAS_OG_OLD_SKOOL_DUSTY_OLIVE_FEATURE-FrAlCx7pYu0EodRISrvsomH5rYbDHh.jpg'/>
        <Catalog/>
      </section>
    </>
  );
}
