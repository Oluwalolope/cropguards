import { Accordion } from "radix-ui";

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Content>)  =>  {
  return (
    <Accordion.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={`pt-0 pb-4 ${className}`}>{children}</div>
    </Accordion.Content>
  );
}

export default AccordionContent;