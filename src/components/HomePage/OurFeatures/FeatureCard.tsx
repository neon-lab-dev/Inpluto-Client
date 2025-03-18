import Image from "next/image";
import { ICONS } from "../../../../public/assets";

const FeatureCard = ({icon, title, description}) => {

      
    return (
        <div className="font-Satoshi p-6 rounded-2xl bg-white border border-gray-30 max-h-[214px]">
            <Image src={icon} alt="" className="size-12" />
            <h1 className="text-neutral-55 text-xl leading-5 font-bold mt-7">{title}</h1>
            <p className="text-gray-40 text-[15px] leading-[18px] mt-[6px]">{description}
            </p>
        </div>
    );
};

export default FeatureCard;