import { CheckIcon, ChevronsUpDown, Search } from "lucide-react";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Input, InputProps } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";

type PhoneInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
> &
    Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
        onChange?: (value: RPNInput.Value) => void;
    };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
    React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
        ({ className, onChange, ...props }, ref) => {
            return (
                <RPNInput.default
                    ref={ref}
                    className={cn("flex", className)}
                    flagComponent={FlagComponent}
                    countrySelectComponent={CountrySelect}
                    inputComponent={InputComponent}
                    onChange={(value) => onChange?.(value ?? ("" as RPNInput.Value))}
                    {...props}
                />
            );
        }
    );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => (
        <Input
            className={cn(
                "rounded-e-xl rounded-s-none h-12 border-l-0 focus:border-l focus:relative focus:z-10",
                className
            )}
            {...props}
            ref={ref}
        />
    )
);
InputComponent.displayName = "InputComponent";

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    onChange: (value: RPNInput.Country) => void;
    options: CountrySelectOption[];
};

const CountrySelect = ({
    disabled,
    value,
    onChange,
    options,
}: CountrySelectProps) => {
    const handleSelect = React.useCallback(
        (country: RPNInput.Country) => {
            onChange(country);
        },
        [onChange]
    );

    return (
        <Popover modal={false}>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant={"outline"}
                    className={cn(
                        "group flex items-center gap-2 rounded-e-none rounded-s-xl h-12 px-3.5",
                        "bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300",
                        "focus-visible:ring-2 focus-visible:ring-primary/10 focus-visible:border-primary focus-visible:bg-white",
                        "data-[state=open]:bg-white data-[state=open]:border-primary data-[state=open]:ring-2 data-[state=open]:ring-primary/10",
                        "transition-all duration-200"
                    )}
                    disabled={disabled}
                >
                    <FlagComponent country={value} countryName={value} />
                    <ChevronsUpDown
                        className={cn(
                            "-mr-1 h-3.5 w-3.5 text-slate-400 transition-all duration-200",
                            "group-hover:text-slate-600 group-data-[state=open]:text-primary group-data-[state=open]:rotate-180",
                            disabled ? "hidden" : "opacity-100"
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-[320px] p-0 z-[105] rounded-xl border-slate-200 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2)] overflow-hidden"
                align="start"
                sideOffset={8}
            >
                <Command className="rounded-xl">
                    <div className="relative border-b border-slate-100">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none z-10" />
                        <CommandInput
                            placeholder="Search country..."
                            className="pl-10 pr-3 h-11 border-0 focus:ring-0 text-sm placeholder:text-slate-400"
                        />
                    </div>
                    <CommandList>
                        <ScrollArea className="h-72">
                            <CommandEmpty className="py-8 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                                        <Search className="w-4 h-4 text-slate-300" />
                                    </div>
                                    <p className="text-sm text-slate-500">No country found</p>
                                </div>
                            </CommandEmpty>
                            <CommandGroup className="p-1.5">
                                {options
                                    .filter((x) => x.value)
                                    .map((option) => {
                                        const isSelected = option.value === value;
                                        return (
                                            <CommandItem
                                                className={cn(
                                                    "group gap-2.5 rounded-lg px-2.5 py-2 cursor-pointer",
                                                    "data-[selected=true]:bg-slate-50",
                                                    isSelected && "bg-primary/5 data-[selected=true]:bg-primary/8"
                                                )}
                                                key={option.value}
                                                onSelect={() => handleSelect(option.value)}
                                            >
                                                <div className="shrink-0">
                                                    <FlagComponent
                                                        country={option.value}
                                                        countryName={option.label}
                                                    />
                                                </div>
                                                <span
                                                    className={cn(
                                                        "flex-1 text-sm truncate",
                                                        isSelected ? "font-semibold text-slate-900" : "text-slate-700"
                                                    )}
                                                >
                                                    {option.label}
                                                </span>
                                                {option.value && (
                                                    <span
                                                        className={cn(
                                                            "text-xs tabular-nums shrink-0",
                                                            isSelected ? "text-primary font-semibold" : "text-slate-400"
                                                        )}
                                                    >
                                                        {`+${RPNInput.getCountryCallingCode(option.value)}`}
                                                    </span>
                                                )}
                                                <div
                                                    className={cn(
                                                        "ml-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-150",
                                                        isSelected
                                                            ? "bg-primary scale-100 opacity-100"
                                                            : "scale-75 opacity-0"
                                                    )}
                                                >
                                                    <CheckIcon className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                                </div>
                                            </CommandItem>
                                        );
                                    })}
                            </CommandGroup>
                        </ScrollArea>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    const Flag = flags[country];

    return (
        <span className="flex h-4 w-6 overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgba(15,23,42,0.08)] shrink-0">
            {Flag && <Flag title={countryName} />}
        </span>
    );
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };