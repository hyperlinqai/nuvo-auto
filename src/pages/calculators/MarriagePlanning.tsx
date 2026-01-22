import GoalCalculator from "@/components/calculators/GoalCalculator";
import marriageImage from "@/assets/images/calculators/marriage.png";

const MarriagePlanning = () => {
    return (
        <GoalCalculator
            title="Marriage Planning"
            description="Calculate how much you need to save for your dream wedding."
            defaultCost={2000000}
            defaultYears={5}
            defaultYears={5}
        />
    );
};

export default MarriagePlanning;
