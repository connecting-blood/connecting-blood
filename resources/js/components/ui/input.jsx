import * as React from "react"

import { cn } from "@/lib/utils"

const Input = ({ className, type, onChange = () => null, ref, ...props }) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border-2 border-primaryP300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:ring-0 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      onChange={onChange}
      ref={ref}
      {...props} />)
  );
}
Input.displayName = "Input"

export { Input }
