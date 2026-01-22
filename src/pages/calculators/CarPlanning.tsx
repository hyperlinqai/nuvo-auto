import GoalCalculator from "@/components/calculators/GoalCalculator";
import carImage from "@/assets/images/calculators/car.png";

const CarPlanning = () => {
    return (
        <GoalCalculator
            title="Car Planning"
            description="Plan your savings to buy your dream car."
            defaultCost={1500000}
            defaultYears={3}
            defaultYears={3}
        />
    );
};

export default CarPlanning;
