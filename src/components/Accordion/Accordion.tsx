import { Accordion } from "radix-ui";

const AccordionWrapper = ({
  ...props
}: React.ComponentProps<typeof Accordion.Root>) => {
  return <Accordion.Root data-slot="accordion" {...props} />;
}


export default AccordionWrapper;
