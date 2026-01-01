import GoalCalculator from "@/components/calculators/GoalCalculator";

const MarriagePlanning = () => {
    return (
        <GoalCalculator
            title="Marriage Planning Calculator"
            description="Plan for your dream wedding. Estimate the future cost and how much you need to save monthly."
            defaultCost={2000000}
            defaultYears={5}
        />
    );
};

export default MarriagePlanning;
