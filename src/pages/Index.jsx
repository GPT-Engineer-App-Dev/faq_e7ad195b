import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box maxWidth="800px" mx="auto" mt={8} p={4}>
      <Box as="h2" fontSize="3xl" fontWeight="bold" mb={4}>
        Frequently Asked Questions
      </Box>

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I place an order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>To place an order, browse our product catalog and add items to your cart. When ready, proceed to checkout, enter your shipping and payment details, and submit your order. You will receive an order confirmation via email.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What payment methods do you accept?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept Visa, Mastercard, American Express, Discover, and PayPal. All transactions are securely processed.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How long does shipping take?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Shipping times vary based on your location and selected shipping method. Generally, standard shipping within the US takes 3-5 business days, while expedited options are available for faster delivery. International shipping times are longer and depend on the destination.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>We accept returns within 30 days of purchase for most items. The product must be unused and in its original packaging. Some exclusions apply. Please see our full return policy for details or contact customer service for assistance.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
