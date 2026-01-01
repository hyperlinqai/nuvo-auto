import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TaxCalculator = () => {
    const [annualIncome, setAnnualIncome] = useState(1200000);

    const tax = useMemo(() => {
        // New Regime Tax Slabs (FY 2024-25)
        // 0 - 3L: Nil
        // 3L - 7L: 5%
        // 7L - 10L: 10%
        // 10L - 12L: 15%
        // 12L - 15L: 20%
        // > 15L: 30%

        // Rebate u/s 87A: Income up to 7L is tax free.

        let taxableIncome = annualIncome;
        let computedTax = 0;

        // Standard Deduction
        const standardDeduction = 75000;
        taxableIncome = Math.max(0, taxableIncome - standardDeduction);

        if (taxableIncome <= 700000) {
            return 0; // Rebate 87A applies effectively making 0 tax if net taxable income <= 7L
        }

        // Slab calculation
        const slabs = [
            { limit: 300000, rate: 0 },
            { limit: 700000, rate: 0.05 },
            { limit: 1000000, rate: 0.10 },
            { limit: 1200000, rate: 0.15 },
            { limit: 1500000, rate: 0.20 },
            { limit: Infinity, rate: 0.30 }
        ];

        let remainingIncome = taxableIncome;
        let previousLimit = 0;

        for (const slab of slabs) {
            const slabRange = slab.limit - previousLimit;
            const amountInSlab = Math.min(remainingIncome, slabRange);

            if (amountInSlab > 0) {
                computedTax += amountInSlab * slab.rate;
                remainingIncome -= amountInSlab;
                previousLimit = slab.limit;
            } else {
                break;
            }
        }

        // Add Cess 4%
        const cess = computedTax * 0.04;
        return Math.round(computedTax + cess);
    }, [annualIncome]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <CalculatorLayout
            title="Income Tax Calculator"
            description="Estimate your Income Tax liability under the New Tax Regime (FY 2024-25)."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Label className="text-base">Gross Annual Income</Label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                            <Input
                                type="number"
                                value={annualIncome}
                                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                                className="pl-7"
                            />
                        </div>
                        <p className="text-xs text-slate-500">Enter your total income from all sources before deductions.</p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <h4 className="font-semibold text-yellow-800 mb-2 text-sm">Notes:</h4>
                        <ul className="text-xs text-yellow-700 space-y-1 list-disc pl-4">
                            <li>Calculated based on <strong>New Tax Regime</strong> (default for FY 2024-25).</li>
                            <li>Includes Standard Deduction of ₹75,000.</li>
                            <li>Includes Health & Education Cess of 4%.</li>
                            <li>Income up to ₹7,75,000 (after SD) is practically tax-free due to 87A rebate.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-lg font-medium text-slate-600 mb-4">Estimated Tax Payable</h3>
                    <p className="text-5xl font-bold text-slate-900 mb-2">{formatCurrency(tax)}</p>
                    <p className="text-sm text-slate-500">Effective Tax Rate: {((tax / annualIncome) * 100).toFixed(2)}%</p>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default TaxCalculator;
