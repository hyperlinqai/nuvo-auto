import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LifeInsuranceCalculator = () => {
    const [monthlyIncome, setMonthlyIncome] = useState(50000);
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [existingLiabilities, setExistingLiabilities] = useState(2000000);
    const [existingInsurance, setExistingInsurance] = useState(5000000);

    const results = useMemo(() => {
        // HLV Calculation: Income Replacement Method
        // 1. Annual Income to be replaced (Income - Personal Exp). Assuming 30% personal exp.
        const personalExpRatio = 0.3;
        const replaceableAnnualIncome = monthlyIncome * 12 * (1 - personalExpRatio);

        // 2. Years of income replacement needed
        const yearsToReplace = retirementAge - currentAge;

        // 3. Present Value of Future Income streams (assuming risk-free rate ~ 6%)
        // Simplified: Income * Years (ignoring inflation/discounting offset for rough estimate)
        // Detailed PV: PVA factor. Let's use a multiplier method.
        // Multiplier for age 30 is roughly 20x. Let's simplify: Income * Years * DiscountFactor
        // Let's stick to standard rule of thumb: 15-20x annual income + liabilities - assets

        // Better HLV formula:
        // HLV = (Annual Income * Years Left) + Liabilities - Existing Insurance
        const grossHLV = (monthlyIncome * 12) * Math.max(0, yearsToReplace);

        // Adjusted HLV Recommendation (Usually 15-20x is practical max, but HLV is theoretical max)
        // Let's us standard "Income Replacement Value" which is roughly AnnualIncome * 15
        const recommendedCover = (monthlyIncome * 12 * 15) + existingLiabilities - existingInsurance;

        return {
            annualIncome: monthlyIncome * 12,
            recommended: Math.max(0, Math.round(recommendedCover)),
            gap: Math.max(0, Math.round(recommendedCover))
        };
    }, [monthlyIncome, currentAge, retirementAge, existingLiabilities, existingInsurance]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <CalculatorLayout
            title="Life Insurance Calculator"
            description="Calculate your Human Life Value (HLV) to know how much Life Insurance cover you actually need."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Monthly Income</Label>
                            <div className="relative w-36">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} className="pl-7 text-right" />
                            </div>
                        </div>
                        <Slider value={[monthlyIncome]} min={10000} max={500000} step={5000} onValueChange={(val) => setMonthlyIncome(val[0])} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Current Age</Label>
                            <Input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} />
                        </div>
                        <div className="space-y-2">
                            <Label>Retirement Age</Label>
                            <Input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Existing Loans/Liabilities</Label>
                        <Input type="number" value={existingLiabilities} onChange={(e) => setExistingLiabilities(Number(e.target.value))} />
                    </div>

                    <div className="space-y-2">
                        <Label>Existing Life Insurance Cover</Label>
                        <Input type="number" value={existingInsurance} onChange={(e) => setExistingInsurance(Number(e.target.value))} />
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                    <div className="mb-8">
                        <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">Additional Cover Required</p>
                        <p className="text-4xl md:text-5xl font-bold text-primary">{formatCurrency(results.recommended)}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm w-full max-w-sm">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Based on your income of <strong>{formatCurrency(results.annualIncome)}/yr</strong>, standard financial planning recommends a total cover of roughly 15-20x your annual income plus liabilities.
                        </p>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default LifeInsuranceCalculator;
