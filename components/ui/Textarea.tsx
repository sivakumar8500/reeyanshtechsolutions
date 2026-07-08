import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500
            transition-all duration-300 backdrop-blur-md outline-none min-h-[120px] resize-y
            focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/80 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)]
            disabled:cursor-not-allowed disabled:opacity-50
            ${error ? "border-red-500/80 focus:border-red-500/80 focus:ring-red-500/80 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-xs font-medium text-red-500/90 mt-0.5 animate-fadeIn">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
