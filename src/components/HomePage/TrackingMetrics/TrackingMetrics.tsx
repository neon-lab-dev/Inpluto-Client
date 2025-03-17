import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import Container from "@/components/Reusable/Container/Container";

const TrackingMetrics = () => {
    return (
        <div className="w-full relative font-Satoshi">
            <Image src={IMAGES.gradientBg2} alt="" className="absolute w-full bg-cover bg-center bg-no-repeat z-0" />
            
            <Container>
                <div>
                    <h2 className="font-bold uppercase text-xl leading-6">TRACKING METRICS</h2>
                </div>
            </Container>
        </div>
    );
};

export default TrackingMetrics;