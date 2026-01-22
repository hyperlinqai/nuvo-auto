import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import retirementImage from "@/assets/images/calculators/retirement.png";

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyExpenses, setMonthlyExpenses] = useState(30000);
    const [inflation, setInflation] = useState(6);
    const [expectedReturn, setExpectedReturn] = useState(12);

    const results = useMemo(() => {
        const yearsToRetire = retirementAge - currentAge;
        const lifeExpectancy = 85;
        const yearsInRetirement = lifeExpectancy - retirementAge;

        // Future Monthly Expenses
        const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetire);

        // Corpus Required (Simplified: Assumes corpus earns inflation-adjusted return of 0% post retirement for safety, or just multiply annual expense by years)
        // Better Formula: PV of an Annuity Due. 
        // But for simple estimation: Annual Exp * Years in Retirement (at future value)
        const annualFutureExpense = futureMonthlyExpenses * 12;
        const corpusRequired = annualFutureExpense * yearsInRetirement;

        // Monthly SIP needed to build this corpus
        const months = yearsToRetire * 12;
        const rate = expectedReturn / 12 / 100;
        const sipFactor = ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
        const monthlySIP = corpusRequired / sipFactor;

        return {
            yearsToRetire,
            futureMonthlyExpenses: Math.round(futureMonthlyExpenses),
            corpusRequired: Math.round(corpusRequired),
            monthlySIP: Math.round(monthlySIP)
        };
    }, [currentAge, retirementAge, monthlyExpenses, inflation, expectedReturn]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    const chartData = [
        { name: "Corpus Goal", value: results.corpusRequired, color: "#16a34a" },
    ];

    return (
        <CalculatorLayout
            title="Retirement Calculator"
            description="Plan for your dream retirement. Calculate how much you need to save."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-6">
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

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label>Current Monthly Expenses</Label>
                            <div className="relative w-32">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} className="pl-7 text-right" />
                            </div>
                        </div>
                        <Slider value={[monthlyExpenses]} min={10000} max={200000} step={1000} onValueChange={(val) => setMonthlyExpenses(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label>Expected Inflation (%)</Label>
                            <Input type="number" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-20 text-right" />
                        </div>
                        <Slider value={[inflation]} min={4} max={10} step={0.5} onValueChange={(val) => setInflation(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label>Pre-Retirement Return (%)</Label>
                            <Input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-20 text-right" />
                        </div>
                        <Slider value={[expectedReturn]} min={6} max={15} step={0.5} onValueChange={(val) => setExpectedReturn(val[0])} />
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-center space-y-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-sm text-slate-500 mb-1">Expenses at Age {retirementAge}</p>
                        <p className="text-2xl font-bold text-slate-800">{formatCurrency(results.futureMonthlyExpenses)} / mo</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                        <p className="text-sm text-slate-500 mb-1">Total Corpus Required</p>
                        <p className="text-3xl font-bold text-primary">{formatCurrency(results.corpusRequired)}</p>
                    </div>

                    <div className="bg-sky-50 p-5 rounded-xl border border-sky-100">
                        <p className="text-sm text-sky-700 mb-1">SIP Required for Goal</p>
                        <p className="text-2xl font-bold text-sky-900">{formatCurrency(results.monthlySIP)} / mo</p>
                        <p className="text-xs text-sky-600 mt-2">Assuming {expectedReturn}% annual returns.</p>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default RetirementCalculator;
