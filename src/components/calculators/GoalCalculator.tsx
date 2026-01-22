import { useState, useMemo } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GoalCalculatorProps {
    title: string;
    description: string;
    defaultCost: number;
    defaultYears: number;
    inflationInput?: number;
    imageSrc?: string;
}

const GoalCalculator = ({ title, description, defaultCost, defaultYears, inflationInput = 6, imageSrc }: GoalCalculatorProps) => {
    const [currentCost, setCurrentCost] = useState(defaultCost);
    const [yearsInfo, setYearsInfo] = useState(defaultYears);
    const [inflation, setInflation] = useState(inflationInput);
    const [expectedReturn, setExpectedReturn] = useState(12);

    const results = useMemo(() => {
        // FV of goal cost
        const futureCost = currentCost * Math.pow(1 + inflation / 100, yearsInfo);

        // SIP Calculation
        const months = yearsInfo * 12;
        const rate = expectedReturn / 12 / 100;
        const factor = ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
        const sip = futureCost / factor;

        // Lumpsum Calculation
        const lumpsumRate = expectedReturn / 100;
        const lumpsum = futureCost / Math.pow(1 + lumpsumRate, yearsInfo);

        return {
            futureCost: Math.round(futureCost),
            monthlySIP: Math.round(sip),
            lumpsum: Math.round(lumpsum)
        };
    }, [currentCost, yearsInfo, inflation, expectedReturn]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <CalculatorLayout title={title} description={description} imageSrc={imageSrc}>
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Cost Today</Label>
                            <div className="relative w-36">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                <Input type="number" value={currentCost} onChange={(e) => setCurrentCost(Number(e.target.value))} className="pl-7 text-right" />
                            </div>
                        </div>
                        <Slider value={[currentCost]} min={100000} max={10000000} step={50000} onValueChange={(val) => setCurrentCost(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Years to Goal</Label>
                            <Input type="number" value={yearsInfo} onChange={(e) => setYearsInfo(Number(e.target.value))} className="w-24 text-right" />
                        </div>
                        <Slider value={[yearsInfo]} min={1} max={30} step={1} onValueChange={(val) => setYearsInfo(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Expected Inflation (%)</Label>
                            <Input type="number" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} className="w-24 text-right" />
                        </div>
                        <Slider value={[inflation]} min={4} max={15} step={0.5} onValueChange={(val) => setInflation(val[0])} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label className="text-base font-semibold text-slate-700">Expected Return (%)</Label>
                            <Input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(Number(e.target.value))} className="w-24 text-right" />
                        </div>
                        <Slider value={[expectedReturn]} min={6} max={18} step={0.5} onValueChange={(val) => setExpectedReturn(val[0])} />
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-center space-y-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm text-center">
                        <p className="text-sm text-slate-500 mb-2">Future Cost of Goal</p>
                        <p className="text-3xl font-bold text-slate-900">{formatCurrency(results.futureCost)}</p>
                        <p className="text-xs text-slate-400 mt-2">After {yearsInfo} years with {inflation}% inflation</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-sky-50 p-5 rounded-xl border border-sky-100 text-center">
                            <p className="text-sm text-sky-700 mb-1">Monthly SIP</p>
                            <p className="text-xl font-bold text-sky-900">{formatCurrency(results.monthlySIP)}</p>
                        </div>
                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 text-center">
                            <p className="text-sm text-emerald-700 mb-1">Lumpsum</p>
                            <p className="text-xl font-bold text-emerald-900">{formatCurrency(results.lumpsum)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default GoalCalculator;
