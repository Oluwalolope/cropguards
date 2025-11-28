import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "radix-ui";

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Trigger>) => {
  return (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        data-slot="accordion-trigger"
        className={
          `focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer
          ${className}
        `}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}


export default AccordionTrigger;