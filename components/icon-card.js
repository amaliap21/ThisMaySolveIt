import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconCard = ({
  linkText,
  linkUrl,
  imageUrl,
  imageAlt,
  width = 200,
  height = 200,
}) => {
  return (
    <div
      className="flex flex-col bg-[#D4D4D5] w-full sm:w-fit sm:max-w-[300px] lg:min-h-[300px] text-black px-9 pt-[30px] pb-12 lg:pt-[35px] lg:pb-5 font-sans items-center rounded-lg gap-2"
    >
      <div className="flex flex-col flex-1 justify-start gap-2">
        <div className="flex items-start justify-center gap-2">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={width}
            height={height}
            className={`w-[200px] h-[200px] lg:w-[${width}px] lg:h-[${height}px]`}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <Link href={`${linkUrl}`} className="text-decoration-line: underline lg:text-2xl">{linkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default IconCard;