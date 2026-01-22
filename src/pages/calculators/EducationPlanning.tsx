import GoalCalculator from "@/components/calculators/GoalCalculator";
import educationImage from "@/assets/images/calculators/education.png";

const EducationPlanning = () => {
    return (
        <GoalCalculator
            title="Child Education Planning"
            description="Higher education costs are rising. Calculate the corpus needed for your child's future education."
            defaultCost={2500000}
            defaultYears={15}
            inflationInput={8}
            inflationInput={8}
        />
    );
};

export default EducationPlanning;
