import Image from "next/image";
import Link from "next/link";

const Header = (props: any) => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            className="rounded-full"
            src="https://res.cloudinary.com/nightcode/image/upload/v1674052718/NightCode/104495140_4221166977895288_4958381441344414260_n_vcsyuk.jpg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>

        <h1 className="">Nightcode</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
