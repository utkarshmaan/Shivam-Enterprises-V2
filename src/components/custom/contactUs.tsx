import { z } from "zod"; // Importing zod for schema validation
import { zodResolver } from "@hookform/resolvers/zod"; // Importing resolver for integrating zod with react-hook-form
import { useForm } from "react-hook-form"; // Importing the useForm hook for form management
import { Button } from "@/components/ui/button"; // Importing a button component
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Importing form components
import { Input } from "@/components/ui/input"; // Importing input component

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters long"), // Name must be a string with at least 3 characters
  email: z.string().email("Please enter a valid email address"), // Email must be a valid email format
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits long") // Phone number must be at least 10 characters
    .regex(/^\d+$/, "Phone number must contain only digits"), // Phone number must contain only digits
  query: z.string().min(1, "Query cannot be empty"), // Query must be a non-empty string
});

const ContactUs = () => {
  // Initialize the form using react-hook-form with validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Use zod for validation
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      query: ""
    },
  });

  // Function to handle form submission
  const handleSubmit = async (data:z.infer<typeof formSchema>) => {
    // https://webjeda.com/blog/google-pre-filled-forms
    // Constructing the URL to submit data to Google Forms
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLScs3JTCr3cl3HgFpccVdS6BvzevRBmLAMiBjonQ0lupTWK3ng/formResponse?usp=pp_url&entry.711643040=${encodeURIComponent(data.name)}&entry.497436692=${encodeURIComponent(data.email)}&entry.697936310=${encodeURIComponent(data.phoneNumber)}&entry.1270450216=${encodeURIComponent(data.query)}&submit=Submit`;

    try {
      // Send form data using fetch API
      const response = await fetch(formUrl, {
        method: "POST", // Use POST method
        mode: "no-cors", // Google Forms requires no-cors mode
      });

      console.log("Form data submitted successfully:", data, response);
      alert("Thank you for contacting us!"); // Alert user of successful submission
      form.reset(); // Reset the form fields after submission
    } catch (error) {
      console.error("Form submission error:", error); // Log any error during submission
      alert("Please fix the errors in the form."); // Alert user of submission failure
    }
  };

  return (
    <section className='font-Patrick mb-4 rounded-lg shadow-lg max-w-3xl mx-auto p-4'>
      <h1 className='text-center text-3xl font-bold'>Contact Us</h1> {/* Contact Us heading */}
      <Form {...form}> {/* Form component passing form state */}
        <form
          className="space-y-8 max-w-3xl"
          onSubmit={form.handleSubmit(handleSubmit)}>{/* Handle form submission */}

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    name="entry.711643040" // Google Forms entry ID for Name
                    placeholder="John Doe" // Placeholder text for input
                    ref={field.ref} // Register ref for input
                    onChange={field.onChange} // Handle input change
                    value={field.value} // Set input value
                    className='rounded-xl h-12' // Custom styles for the input
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription> {/* Description for Name field */}
                <FormMessage /> {/* Display validation messages for Name field */}
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    name="entry.497436692" // Google Forms entry ID for Email
                    placeholder="johndoe@gmail.com" // Placeholder text for input
                    ref={field.ref} // Register ref for input
                    onChange={field.onChange} // Handle input change
                    value={field.value} // Set input value
                    className='rounded-xl h-12' // Custom styles for the input
                  />
                </FormControl>
                <FormMessage /> {/* Display validation messages for Email field */}
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    name="entry.697936310" // Google Forms entry ID for Phone Number
                    placeholder="1234567890" // Placeholder text for input
                    ref={field.ref} // Register ref for input
                    onChange={field.onChange} // Handle input change
                    value={field.value} // Set input value
                    className='rounded-xl h-12' // Custom styles for the input
                  />
                </FormControl>
                <FormMessage /> {/* Display validation messages for Phone Number field */}
              </FormItem>
            )}
          />

          {/* Query Field */}
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Query</FormLabel>
                <FormControl>
                  <Input
                    name="entry.1270450216" // Google Forms entry ID for Query
                    placeholder="What can we help you with?" // Placeholder text for input
                    ref={field.ref} // Register ref for input
                    onChange={field.onChange} // Handle input change
                    value={field.value} // Set input value
                    className='rounded-xl h-12' // Custom styles for the input
                  />
                </FormControl>
                <FormMessage /> {/* Display validation messages for Query field */}
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button className="mt-8 rounded-xl font-Itim bg-yellow-300 text-black hover:bg-yellow-400" type="submit">Submit</Button> {/* Submit button for the form */}
        </form>
      </Form>
    </section>
  );
};

export default ContactUs; // Exporting the ContactUs component
