import { data } from "@/constants/data";
import { useNavigate } from 'react-router-dom';

  const ServiceItem = () => {
    const navigate = useNavigate();

    const handleClick = (serviceName: string) => {
        console.log(serviceName);
        navigate(`/services/${serviceName.toUpperCase()}`);
    };

    return (
        <div className="flex items-baseline justify-around service-items">
            {data.map((service, index) => (
                <div key={index} className="mb-6 service-category">
                    <h3 className="text-2xl font-semibold">{service.category}</h3>
                    <ul className="mt-2 ml-6 list-none">
                        {service.items.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-lg cursor-pointer"
                                onClick={() => handleClick(service.category)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};


  export default ServiceItem;
