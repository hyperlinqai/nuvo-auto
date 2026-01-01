import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCw } from "lucide-react";

interface CaptchaProps {
    onValidate: (isValid: boolean) => void;
}

export const Captcha = ({ onValidate }: CaptchaProps) => {
    const [captchaText, setCaptchaText] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaResult, setCaptchaResult] = useState(0);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptchaText(`${num1} + ${num2} = ?`);
        setCaptchaResult(num1 + num2);
        setCaptchaInput("");
        onValidate(false);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCaptchaInput(value);

        // Validate immediately
        const isValid = parseInt(value) === captchaResult;
        onValidate(isValid);
    };

    return (
        <div className="space-y-2">
            <Label htmlFor="captcha">Security Question *</Label>
            <div className="flex items-center gap-4">
                <div className="bg-muted px-4 py-2 rounded-md font-mono text-lg font-semibold select-none flex items-center gap-2">
                    <span>{captchaText}</span>
                    <button
                        type="button"
                        onClick={generateCaptcha}
                        title="Refresh Captcha"
                        className="focus:outline-none"
                    >
                        <RefreshCw className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </button>
                </div>
                <Input
                    id="captcha"
                    value={captchaInput}
                    onChange={handleInputChange}
                    placeholder="Answer"
                    className="w-24 text-center"
                    required
                />
            </div>
        </div>
    );
};
