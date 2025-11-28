import AccordionWrapper from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";

const BuyerFAQ = () => {
    return ( 
        (
              <AccordionWrapper type="single" collapsible className="space-y-4">
                <AccordionItem value="buyer-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger>
                    Is it free to use Findr?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! Findr is completely free for shoppers. Simply search for products, compare prices, and pay online with no extra fees. You only pay for the products you purchase.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How does pickup work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    After placing your order online, you'll receive a notification when it's ready for pickup (typically 15-30 minutes). Head to the store, show your order confirmation code, and collect your items without waiting in line.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We accept all major credit cards, debit cards, PayPal, and digital wallets like Apple Pay and Google Pay. All payments are securely processed with encryption.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Can I return or exchange items?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Return policies vary by store. You can view each store's return policy on their product pages. Most stores accept returns within 14-30 days with proof of purchase. Contact the store directly through the app for returns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What if an item is out of stock after I order?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    In the rare case an item becomes unavailable after your order, we'll notify you immediately and refund that item. You can choose to proceed with the rest of your order or cancel entirely for a full refund.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="buyer-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How accurate are the store locations and hours?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Store information is updated in real-time by store owners. We recommend checking the store's current hours before heading out. You'll also receive notifications if a store updates their hours or temporarily closes.
                  </AccordionContent>
                </AccordionItem>
              </AccordionWrapper>
            )
    );
}

export default BuyerFAQ;