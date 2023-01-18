import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2 ">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://res.cloudinary.com/nightcode/image/upload/v1674052718/NightCode/104495140_4221166977895288_4958381441344414260_n_vcsyuk.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
