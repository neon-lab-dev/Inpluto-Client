import OurFeatures from "@/components/HomePage/OurFeatures/OurFeatures";
import OurInfluencers from "@/components/HomePage/OurInfluencers/OurInfluencers";
import TrackingMetrics from "@/components/HomePage/TrackingMetrics/TrackingMetrics";



export default function Home() {
  return (
    <div className="">
      <TrackingMetrics />
      <OurInfluencers/>
      <OurFeatures/>
    </div>
  );
}
