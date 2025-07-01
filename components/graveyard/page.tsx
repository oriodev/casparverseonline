import Image from "next/image";
import { poppins } from "../../app/layout";

export default async function Home() {
  return (
    // WHOLE MAIN PAGE.
<section>
  {/* WHOLE TOP INTRODUCTION SECTION. */}
  <div>
    {/* WHOLE PHOTO/TITLE/DESCRIPTION SECTION. */}
    <div className="flex flex-col justify-center items-center sm:flex-row gap-8">
      {/* IMAGE. */}
      <div className="flex-shrink-0 mr-8 border-12 border-lightgreenblue rounded-full p-3">
        <Image
          src='/casparverseart.png'
          alt="circular image of caspar, luca and sebastian"
          width={350}
          height={350}
        />
      </div>
      {/* TEXT. */}
      <div className="flex flex-col gap-3 pt-5">
        <h1 className={`${poppins.className} text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-greenblue via-lightgreenblue to-greenblue bg-clip-text text-transparent`}>CASPARVERSE ONLINE.</h1>
        <p className="text-2xl">
          The Casparverse, at it&lsquo;s core, is about running away from your past and finding a home full of love and friendship and safety to catch you on the other side.
          Casparverse online lets you explore this world through novels, short stories, a full wiki, and so much more.
          I will fill this bit out more when I know what is going on.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
