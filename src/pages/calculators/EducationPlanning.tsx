import GoalCalculator from "@/components/calculators/GoalCalculator";

const EducationPlanning = () => {
    return (
        <GoalCalculator
            title="Child Education Planning"
            description="Higher education costs are rising. Calculate the corpus needed for your child's future education."
            defaultCost={2500000}
            defaultYears={15}
            inflationInput={8} // Education inflation is higher
        />
    );
};

export default EducationPlanning;
