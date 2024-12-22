import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComp({ accordionTrigger, accordionContent }) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{accordionTrigger}</AccordionTrigger>
          <AccordionContent>{accordionContent}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
