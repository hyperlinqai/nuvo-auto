import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import sipImage from "@/assets/images/calculators/sip.png";

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    // ... (omitting unchanged lines for brevity in thought, but tool needs exact context)
    // Wait, I can't skip lines in replacement content unless I match them.
    // Better to do 2 separate edits or use multi_replace.
    // Let's use multi_replace for cleaner distinct edits (import + prop).
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const results = useMemo(() => {
        const monthlyRate = expectedReturn / 12 / 100;
        const months = timePeriod * 12;

        // SIP Formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
        const investedAmount = monthlyInvestment * months;
        const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        const estimatedReturns = futureValue - investedAmount;

        return {
            investedAmount: Math.round(investedAmount),
            estimatedReturns: Math.round(estimatedReturns),
            totalValue: Math.round(futureValue)
        };
    }, [monthlyInvestment, expectedReturn, timePeriod]);

    const chartData = [
        { name: "Invested Amount", value: results.investedAmount, color: "#94a3b8" }, // slate-400
        { name: "Est. Returns", value: results.estimatedReturns, color: "#16a34a" } // primary/green-600
    ];

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <CalculatorLayout
            title="SIP Calculator"
            description="Estimate the future value of your Systematic Investment Plan (SIP) investments."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                {/* Inputs */}
                <div className="space-y-8">
                    {/* Monthly Investment */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Monthly Investment</Label>
                            <div className="relative w-32">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input
                                    type="number"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                    className="pl-7 text-right bg-slate-50 border-slate-200"
                                />
                            </div>
                        </div>
                        <Slider
                            value={[monthlyInvestment]}
                            min={500}
                            max={100000}
                            step={500}
                            onValueChange={(val) => setMonthlyInvestment(val[0])}
                        />
                    </div>

                    {/* Expected Return */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Expected Return (p.a)</Label>
                            <div className="relative w-24">
                                <Input
                                    type="number"
                                    value={expectedReturn}
                                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                                    className="pr-8 text-right bg-slate-50 border-slate-200"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">%</span>
                            </div>
                        </div>
                        <Slider
                            value={[expectedReturn]}
                            min={1}
                            max={30}
                            step={0.5}
                            onValueChange={(val) => setExpectedReturn(val[0])}
                        />
                    </div>

                    {/* Time Period */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Time Period</Label>
                            <div className="relative w-24">
                                <Input
                                    type="number"
                                    value={timePeriod}
                                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                                    className="pr-10 text-right bg-slate-50 border-slate-200"
                                />
                                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 text-xs text-nowrap">Yr</span>
                            </div>
                        </div>
                        <Slider
                            value={[timePeriod]}
                            min={1}
                            max={40}
                            step={1}
                            onValueChange={(val) => setTimePeriod(val[0])}
                        />
                    </div>
                </div>

                {/* Results & Chart */}
                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center">
                    <div className="w-full h-64 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <span className="text-slate-500 text-xs uppercase tracking-wider font-medium">Total Value</span>
                            <span className="text-xl font-bold text-slate-900">{formatCurrency(results.totalValue)}</span>
                        </div>
                    </div>

                    <div className="w-full space-y-4 mt-4">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-white shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                                <span className="text-sm text-slate-600">Invested Amount</span>
                            </div>
                            <span className="font-semibold text-slate-900">{formatCurrency(results.investedAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-white shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                <span className="text-sm text-slate-600">Est. Returns</span>
                            </div>
                            <span className="font-semibold text-green-600">{formatCurrency(results.estimatedReturns)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default SIPCalculator;
