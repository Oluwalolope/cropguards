import AccordionWrapper from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionItem from "./AccordionItem";
import AccordionTrigger from "./AccordionTrigger";

const SellerFAQ = () => {
    return ( 
        (
              <AccordionWrapper type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How much does it cost to become a seller?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    It's completely free to sign up and list your products. You only pay a small commission when you make a sale. There are no monthly fees, setup costs, or hidden charges.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How do I get paid?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Payments are processed automatically and transferred to your bank account weekly. You'll receive detailed sales reports and can track all transactions through your seller dashboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    What types of products can I sell?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    You can sell a wide range of products including groceries, electronics, home goods, pet supplies, and more. We'll work with you during onboarding to ensure your products comply with our marketplace guidelines.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    How long does it take to set up my store?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Most sellers complete the setup process in under 30 minutes. You'll need to provide basic business information, upload your product catalog, and set up your payment details. Our support team is available to help you every step of the way.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Do you provide training and support?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes! We offer comprehensive onboarding training, video tutorials, and 24/7 customer support. You'll also have access to our seller community and regular webinars on best practices for growing your online sales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                  <AccordionTrigger className="hover:no-underline">
                    Can I manage inventory across multiple locations?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Absolutely. Our platform supports multiple store locations and provides real-time inventory management. You can update stock levels, prices, and product availability for each location from a single dashboard.
                  </AccordionContent>
                </AccordionItem>
              </AccordionWrapper>
            )
    );
}

export default SellerFAQ;