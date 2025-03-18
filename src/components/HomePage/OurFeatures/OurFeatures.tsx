import Image from 'next/image';
import React from 'react';
import { ICONS, IMAGES } from '../../../../public/assets';
import Container from '@/components/Reusable/Container/Container';
import FeatureCard from './FeatureCard';

const OurFeatures = () => {
    const features = [
        { icon: ICONS.lightBulbIdea, title: "Strategy & Matchmaking", description: "Connect with the right influencers through AI-driven matchmaking, ensuring your brand reaches the perfect audience." },
        { icon: ICONS.bag, title: "Influence-Driven Purchases", description: "Tap into consumer trust—80% of buyers make a purchase based on an influencer’s recommendation." },
        { icon: ICONS.target, title: "Targeted Engagements", description: "Deliver hyper-focused content to the right audience, ensuring higher visibility and meaningful interactions." },
        { icon: ICONS.testTubeMinimalistic, title: "Creative Testing Like Never Before", description: "Run 100+ content variations at once to identify the top-performing creatives for better ROI." },
        { icon: ICONS.globe, title: "Multilingual & Multicultural Reach", description: "Expand your brand’s influence with localized content, reaching diverse audiences across cities and regions." },
        { icon: ICONS.chart2, title: "Analytics & Reporting", description: "Track, analyze, and optimize your campaigns with real-time insights to maximize ROI and engagement." },
        { icon: ICONS.megaphone, title: "Full-Service Campaign Management", description: "From strategy to execution, we handle everything—ensuring your influencer campaigns run seamlessly and successfully." },
        { icon: ICONS.write, title: "Content Creation & Support", description: "Empower influencers with high-quality, engaging content that resonates with their followers and amplifies your brand message." },
        { icon: ICONS.chessKing, title: "Affordable Creative Production", description: "Get high-quality, cost-effective influencer content that’s cheaper than traditional media, enabling quick iterations." },
    ];
    return (
        <div className="w-full font-Satoshi relative">
            {/* <Image src={IMAGES.ourFeaturesBg} alt="" className="absolute w-full bg-cover bg-center bg-no-repeat z-0" /> */}

            <Container>
                <div className="flex flex-col items-center z-50">
                    <div className='text-center mx-auto'>
                        <h1 className="font-bold text-[64px] leading-[72px] max-w-[808px] text-white">
                            Everything You Need for Effortless Campaigns
                        </h1>
                        <p className="text-gray-15 text-[28px] leading-8 max-w-[698px] mx-auto mt-4 font-normal">
                            We connect you with the right influencers, streamline content creation, and track performance.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurFeatures;