import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { ICONS, IMAGES } from "../../../../public/assets";
import { footerLinks } from "./footerLinks";
import Heading from "@/components/Reusable/Heading/Heading";

const Footer = () => {
    return (
        <div className="bg-neutral-45 pt-[180px] pb-[64px]">

            <Container>
                <div className="py-[100px] flex items-center justify-center bg-neutral-30 rounded-4xl shadow-custom-joinus relative">
                    <Image src={IMAGES.joinUsBg} alt="" className="absolute top-0 bottom-0 right-0 left-0 w-full h-full rounded-4xl" />
                    <div>
                        <h1 className="font-bold text-[48px] leading-[56px] text-white text-center mt-2">
                            Join 1,600+ high performing clients
                        </h1>

                        <p className="text-gray-20 text-2xl leading-7 mt-2 text-center max-w-[762px] mx-auto">You’ll be in great company. Chosen by the most demanding influencer marketing experts at top brands and agencies,</p>
                        <button className="bg-gradient-primary px-8 py-4 rounded-xl flex items-center gap-[10px] font-medium text-xl leading-6 w-fit mx-auto cursor-pointer 
                                                                    transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 text-white mt-8">
                            Get Started
                            <Image src={ICONS.rightArrow} alt="right-arrow" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>



                <div className="flex justify-between">
                    <div>
                        <Link href={"/"} className="font-extrabold text-white text-2xl">
                            Inpluto
                        </Link>
                        <p className="text-gray-20 leading-5 max-w-[267px] my-5">
                            123, XYZ Street, PQR Area
                            Maharastra, India.
                        </p>
                        <a href="callto:+91 12345 67890" className="text-gray-20 leading-5 hover:underline">+91 12345 67890</a>
                    </div>

                    {/* Links */}
                    <div className="flex gap-[50px]">
                        {
                            footerLinks?.map(item =>
                                <div key={item.title} className="flex flex-col gap-[10px]">
                                    <h1 className="text-white  font-medium leading-5">Product</h1>
                                    {
                                        item.links?.map(link =>
                                            <Link href={link.path} key={link.label} className="text-gray-20 leading-5 hover:underline">
                                                {link.label}
                                            </Link>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                <hr className="border border-neutral-40 w-full my-8" />

                {/* Copyright & Social Media Icons */}
                <div className="flex items-center justify-between">
                    <p className="text-gray-35 leading-5">©2025 In Pluto. All rights reserved</p>
                    <div className="flex items-center gap-4">
                        <a href="" target="_blank">
                            <Image src={ICONS.linkedin} alt="linkedin" className="size-5" />
                        </a>
                        <a href="" target="_blank">
                            <Image src={ICONS.instagram2} alt="instagram" className="size-5" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;