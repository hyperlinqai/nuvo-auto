import { useState } from "react";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FundPerformance = () => {
    const [initialValue, setInitialValue] = useState(10000);
    const [finalValue, setFinalValue] = useState(15000);
    const [years, setYears] = useState(3);
    const [cagr, setCagr] = useState<number | null>(null);

    const calculateCAGR = () => {
        if (initialValue > 0 && years > 0) {
            const res = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
            setCagr(res);
        }
    };

    return (
        <CalculatorLayout
            title="CAGR Calculator"
            description="Calculate the Compounded Annual Growth Rate (CAGR) of your investments."
        >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label>Initial Investment Value</Label>
                        <Input type="number" value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))} />
                    </div>
                    <div className="space-y-2">
                        <Label>Final Investment Value</Label>
                        <Input type="number" value={finalValue} onChange={(e) => setFinalValue(Number(e.target.value))} />
                    </div>
                    <div className="space-y-2">
                        <Label>Duration (Years)</Label>
                        <Input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
                    </div>
                    <Button onClick={calculateCAGR} className="w-full">Calculate CAGR</Button>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-medium text-slate-600 mb-2">CAGR Return</h3>
                    <p className="text-4xl font-bold text-primary">
                        {cagr !== null ? `${cagr.toFixed(2)}%` : "--%"}
                    </p>
                    <p className="text-sm text-slate-500 mt-4 text-center max-w-xs">
                        This represents the consistent annual growth rate required to go from initial to final value over the specified period.
                    </p>
                </div>
            </div>
        </CalculatorLayout>
    );
};

export default FundPerformance;
