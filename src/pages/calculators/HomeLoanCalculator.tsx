import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const HomeLoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const results = useMemo(() => {
        // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
        const r = interestRate / 12 / 100;
        const n = tenure * 12;

        const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - loanAmount;

        return {
            emi: Math.round(emi),
            totalInterest: Math.round(totalInterest),
            totalPayment: Math.round(totalPayment)
        };
    }, [loanAmount, interestRate, tenure]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    const chartData = [
        { name: "Principal", value: loanAmount, color: "#94a3b8" },
        { name: "Interest", value: results.totalInterest, color: "#e11d48" } // rose-600
    ];

    return (
        <CalculatorLayout
            title="Home Loan EMI Calculator"
            description="Calculate your monthly EMI and view the breakup of principal vs interest."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Loan Amount</Label>
                            <div className="relative w-36">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="pl-7 text-right" />
                            </div>
                        </div>
                        <Slider value={[loanAmount]} min={100000} max={100000000} step={100000} onValueChange={(val) => setLoanAmount(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Interest Rate (% p.a)</Label>
                            <Input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-24 text-right" />
                        </div>
                        <Slider value={[interestRate]} min={5} max={15} step={0.1} onValueChange={(val) => setInterestRate(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Loan Tenure (Years)</Label>
                            <Input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-24 text-right" />
                        </div>
                        <Slider value={[tenure]} min={1} max={30} step={1} onValueChange={(val) => setTenure(val[0])} />
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                        <p className="text-slate-500 mb-1 font-medium">Monthly EMI</p>
                        <p className="text-4xl font-bold text-slate-900">{formatCurrency(results.emi)}</p>
                    </div>

                    <div className="w-full h-48 relative mb-6">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={70}
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
                    </div>

                    <div className="w-full space-y-3">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                                <span className="text-sm text-slate-600">Principal Amount</span>
                            </div>
                            <span className="font-semibold text-slate-900">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-600"></div>
                                <span className="text-sm text-slate-600">Total Interest</span>
                            </div>
                            <span className="font-semibold text-rose-600">{formatCurrency(results.totalInterest)}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-200/50 rounded-lg">
                            <span className="text-sm font-semibold text-slate-700">Total Payable</span>
                            <span className="font-bold text-slate-900">{formatCurrency(results.totalPayment)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default HomeLoanCalculator;
