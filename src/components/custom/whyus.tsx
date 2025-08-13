import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whyusdata } from "@/constants/data";


const WhyUs = () => {

  return (
    <section className="max-w-3xl p-8 mx-auto my-8 bg-gray-100 rounded-lg shadow-lg font-Itim">
      <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 font-Patrick">Why Choose Us?</h2>
      <p className="mb-4 text-lg text-center text-gray-700 ">
        At <strong>SHIVAM ENTERPRIESES</strong>, our unwavering focus on quality has secured us a leading position in the market.
        We take pride in offering products that cater to the unique needs of our customers, whether they require small quantities or bulk orders.
      </p>
      <p className="mb-4 text-lg text-center text-gray-700">
        Here's why we are the preferred choice for our customers:
      </p>

      <Accordion type="single" collapsible className="w-full">
        {whyusdata.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger >{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default WhyUs;
