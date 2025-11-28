import { Accordion } from "radix-ui";

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Item>) => {
  return (
    <Accordion.Item
      data-slot="accordion-item"
      className={`border-b-0 ${className}`}
      {...props}
    />
  );
}

export default AccordionItem;