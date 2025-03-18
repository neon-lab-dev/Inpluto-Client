import Image from "next/image";
import { GIFS, IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";

const TrackingMetrics = () => {
    const trackingMetrics = [
        {
            icon: GIFS.engagementRates,
            label: "Engagement Rates",
        },
        {
            icon: GIFS.likeCommentRatio,
            label: "Like Comment Ratio",
        },
        {
            icon: GIFS.averageViewRates,
            label: "Average View Rates",
        },
        {
            icon: GIFS.postFrequency,
            label: "Post Frequency",
        },
        {
            icon: GIFS.videoQuality,
            label: "Video Quality",
        },
        {
            icon: GIFS.followerGrowth,
            label: "Follower Growth Rate",
        },
    ]
    return (
        <div className="w-full font-Satoshi mt-[330px] relative h-[541px] flex flex-col justify-center items-center">
            <Image src={IMAGES.gradientBg2} alt="" className="absolute w-full bg-cover bg-center bg-no-repeat z-0" />

            <Container>
                <div className="flex flex-col items-center h-full">
                    <h2 className="font-bold uppercase text-xl leading-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8C52FF] to-[#A276FA] text-center">TRACKING METRICS</h2>
                    <h1 className="font-bold text-[48px] leading-[56px] text-center text-white mt-2">
                        AI Enabled Influencer Selection System
                    </h1>

                    <div className="grid grid-cols-3 gap-[29px] mt-10">
                        {
                            trackingMetrics.map((metric, index) => (
                                <div key={index} className="flex items-center gap-4 rounded-2xl px-[18px] py-4 border border-gray-30 bg-white">
                                    <Image src={metric.icon} alt="" className="size-[64px]" />
                                    <p className="text-neutral-40 leading-7 text-[22px] font-medium">{metric.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrackingMetrics;