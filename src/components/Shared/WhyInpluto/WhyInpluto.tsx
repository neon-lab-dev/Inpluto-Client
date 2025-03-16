import Container from "@/components/Reusable/Container/Container";
import { IMAGES } from "../../../../public/assets";
import Image from "next/image";

const WhyInpluto = () => {
    return (
        <div className="bg-white pt-8">
            <Container>
                <h1 className="text-[#364153] font-Satoshi font-medium text-xl leading-6 text-center">Why you must choose Inpluto</h1>
                <div className="flex items-center justify-between gap-[96px] mt-[60px] pb-7">
                    <Image src={IMAGES.dummyLogo} alt="" />
                    <Image src={IMAGES.dummyLogo} alt="" />
                    <Image src={IMAGES.dummyLogo} alt="" />
                    <Image src={IMAGES.dummyLogo} alt="" />
                    <Image src={IMAGES.dummyLogo} alt="" />
                    <Image src={IMAGES.dummyLogo} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default WhyInpluto;