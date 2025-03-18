"use client"
import Heading from "@/components/Reusable/Heading/Heading";
import { useState } from "react";
import InfluencerCard from "./InfluencerCard";
import Container from "@/components/Reusable/Container/Container";

const OurInfluencers = () => {
    const [activeTab, setActiveTab] = useState<string>("Lifestyle");
    const influencerCategoryButtons = [
        "Lifestyle",
        "Travel",
        "Food",
        "Beauty",
        "Tech"
    ];
    return (
        <div className="py-[220px]">
            <Container>
                <Heading subHeading="OUR INFLUENCERS" heading="Influencers that trust our platform" />

                <div className="flex items-center justify-center gap-3 mt-[56px]">
                    {
                        influencerCategoryButtons.map(btn =>
                            <button key={btn} onClick={() => setActiveTab(btn)} className={`cursor-pointer hover:bg-neutral-40 transition duration-500 rounded-[100px] px-6 py-[10px] font-Satoshi text-2xl leading-7 border-2 ${activeTab === btn ? "text-primary-15 border-primary-15" : "text-neutral-50 border-neutral-50 bg-neutral-35"}`}>{btn}</button>
                        )
                    }
                </div>

                <div className="mt-8">
                    <InfluencerCard />
                </div>
            </Container>
        </div>
    );
};

export default OurInfluencers;