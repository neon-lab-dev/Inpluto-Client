import Heading from "@/components/Reusable/Heading/Heading";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return (
        <div className=" ">
            <Heading heading="Our Testimonials" description="See how brands and creators are transforming their campaigns with INPLUTO." />
            <TestimonialCard/>
        </div>
    );
};

export default Testimonials;