import GoalCalculator from "@/components/calculators/GoalCalculator";

const CarPlanning = () => {
    return (
        <GoalCalculator
            title="Car Planning Calculator"
            description="Planning to buy a dream car? Estimate the future cost and savings plan."
            defaultCost={1500000}
            defaultYears={3}
        />
    );
};

export default CarPlanning;
