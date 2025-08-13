import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "@/constants/data";
interface Data {
    category: string;
    items: { name: string; prices: number[] }[];
    description: string;
    backgroundImage?: string;
  }
const ServiceDetailsPage = () => {
  const { category } = useParams<{ category: string }>(); // Get the category from URL
  const [categoryData, setCategoryData] = useState<Data | null>(null);
  const [selectedService, setSelectedService] = useState<Data["items"][0] | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Fetch category data from URL param
  useEffect(() => {
    if (category) {
      const selectedCategory = data.find((item) => item.category === category);
      setCategoryData(selectedCategory || null);
      if (selectedCategory) {
        setSelectedService(selectedCategory.items[0]); // Set default service
      }
    }
  }, [category]);

  // Handle service change from dropdown
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedServiceName = e.target.value;
    const service = categoryData?.items.find(
      (item) => item.name === selectedServiceName
    );
    if (service) setSelectedService(service);
  };

  // Calculate total price based on quantity
  const calculateTotal = (prices: number[]) => {
    console.log(quantity);
    if(!quantity) return 0;
    const pricePerUnit = quantity < 100 ? prices[0] : prices[1]; // Use bulk pricing if 100+
    return (quantity * pricePerUnit).toFixed(2);
  };

  if (!categoryData || !selectedService) {
    return <div>Loading...</div>;
  }

  return (
    <section className="p-8 service-details max-w-6xl mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img
          src={categoryData.backgroundImage}
          alt={categoryData.category}
          className="w-full h-auto rounded-xl mb-4"
        />
      </div>
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold font-Itim">{categoryData.category}</h2>
          <p className="mt-4 font-Patrick">{categoryData.description}</p>

          {/* Dropdown for selecting a service */}
          <div className="mt-8">
            <label htmlFor="service-select" className="block font-bold mb-2 font-Itim">
              Select a Service:
            </label>
            <select
              id="service-select"
              value={selectedService.name}
              onChange={handleServiceChange}
              className="border p-2 rounded-xl w-full mb-4 font-Patrick"
            >
              {categoryData.items.map((service) => (
                <option key={service.name} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          {/* Display selected service details */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">{selectedService.name}</h3>
            <table className="w-full border-collapse rounded-xl overflow-hidden border border-gray-300">
              <thead className="bg-gray-100">
                <tr className="font-Itim">
                  <th className="p-2 border border-gray-300">Type</th>
                  <th className="p-2 border border-gray-300">Price</th>
                </tr>
              </thead>
              <tbody className="font-Patrick">
                <tr>
                  <td className="p-2 border border-gray-300">Price per Unit</td>
                  <td className="p-2 border border-gray-300">
                    ₹{selectedService.prices[0]}
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Bulk Price (100+)</td>
                  <td className="p-2 border border-gray-300">
                    ₹{selectedService.prices[1]}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Quantity input and total price */}
            <div className="mt-4 font-Itim">
              <label htmlFor="quantity" className="block font-bold mb-2">
                Enter Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border p-2 rounded-lg w-full"
              />
              <p className="mt-2 text-lg font-bold">
                Total Price for {selectedService.name}: ₹{calculateTotal(selectedService.prices)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
