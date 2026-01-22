import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import performanceImage from "@/assets/images/calculators/performance.png";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const SIPPerformance = () => {
    const [initialAmount, setInitialAmount] = useState(5000);
    const [incrementAmount, setIncrementAmount] = useState(500);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const results = useMemo(() => {
        let currentMonthly = initialAmount;
        let totalInvested = 0;
        let currentCorpus = 0;
        const monthlyRate = expectedReturn / 12 / 100;
        const annualData = [];

        for (let year = 1; year <= timePeriod; year++) {
            let yearInvested = 0;
            for (let month = 1; month <= 12; month++) {
                totalInvested += currentMonthly;
                yearInvested += currentMonthly;
                currentCorpus = (currentCorpus + currentMonthly) * (1 + monthlyRate);
            }

            annualData.push({
                year: `Year ${year}`,
                invested: Math.round(totalInvested),
                value: Math.round(currentCorpus)
            });

            // Increase monthly investment for next year
            currentMonthly += incrementAmount;
        }

        return {
            totalInvested: Math.round(totalInvested),
            finalValue: Math.round(currentCorpus),
            chartData: annualData
        };
    }, [initialAmount, incrementAmount, expectedReturn, timePeriod]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <CalculatorLayout
            title="SIP Performance Calculator"
            description="Check the historical returns of SIPs in various mutual fund schemes."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-8">
                    {/* Initial Monthly Investment */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Initial Monthly SIP</Label>
                            <div className="relative w-32">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input
                                    type="number"
                                    value={initialAmount}
                                    onChange={(e) => setInitialAmount(Number(e.target.value))}
                                    className="pl-7 text-right bg-slate-50 border-slate-200"
                                />
                            </div>
                        </div>
                        <Slider value={[initialAmount]} min={1000} max={100000} step={500} onValueChange={(val) => setInitialAmount(val[0])} />
                    </div>

                    {/* Annual Step-up */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Annual Increase Amount</Label>
                            <div className="relative w-32">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input
                                    type="number"
                                    value={incrementAmount}
                                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                                    className="pl-7 text-right bg-slate-50 border-slate-200"
                                />
                            </div>
                        </div>
                        <Slider value={[incrementAmount]} min={0} max={10000} step={100} onValueChange={(val) => setIncrementAmount(val[0])} />
                        <p className="text-xs text-slate-500">Increase your SIP by this amount every year.</p>
                    </div>

                    {/* Expected Return */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Expected Return (p.a)</Label>
                            <Input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-24 text-right bg-slate-50" />
                        </div>
                        <Slider value={[expectedReturn]} min={1} max={30} step={0.5} onValueChange={(val) => setExpectedReturn(val[0])} />
                    </div>

                    {/* Time Period */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Time Period (Years)</Label>
                            <Input type="number" value={timePeriod} onChange={(e) => setTimePeriod(Number(e.target.value))} className="w-24 text-right bg-slate-50" />
                        </div>
                        <Slider value={[timePeriod]} min={1} max={30} step={1} onValueChange={(val) => setTimePeriod(val[0])} />
                    </div>
                </div>

                {/* Results */}
                <div className="bg-slate-50 rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                            <p className="text-sm text-slate-500 mb-1">Total Invested</p>
                            <p className="text-xl font-bold text-slate-900">{formatCurrency(results.totalInvested)}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                            <p className="text-sm text-slate-500 mb-1">Final Corpus</p>
                            <p className="text-xl font-bold text-green-600">{formatCurrency(results.finalValue)}</p>
                        </div>
                    </div>

                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={results.chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="year" hide />
                                <YAxis tickFormatter={(val) => `₹${val / 100000}L`} width={40} />
                                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                                <Legend />
                                <Bar dataKey="invested" name="Invested" stackId="a" fill="#94a3b8" />
                                <Bar dataKey="value" name="Value" stackId="b" fill="#16a34a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default SIPPerformance;
