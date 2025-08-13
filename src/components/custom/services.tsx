import { data } from "@/constants/data";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



const Services = () => {
  const navigate = useNavigate();

  // Handle redirection with selected category's data
  const handleExploreClick = (category: string) => {
    console.log(category);
    navigate(`/services/${category.toUpperCase()}`);
  };

  return (
    <section className="bg-black" id="services">
      <div className="flex flex-col items-center p-8 mx-auto">
        {data.map((categoryData) => (
          <Card
            key={categoryData.category}
            className="card relative max-w-[600px] p-4 transition-transform duration-300 hover:scale-105 mb-8 "
          >
            <div className="h-auto p-4 bg-black bg-opacity-50 rounded ">
              <CardHeader className="flex flex-col justify-center w-full gap-3">
                <CardTitle className="text-3xl font-Patrick text-yellow-300">
                  {categoryData.category}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-white font-Itim">
                  {categoryData.description}
                </CardDescription>
              </CardContent>

              {/* Carousel for Items */}
              <Carousel className="mx-auto mt-4 font-Itim max-w-[300px]">
                <CarouselContent>
                  {categoryData.items.map((item, index) => (
                    <CarouselItem key={index} className="px-2">
                      <div className="flex flex-col justify-center items-center gap-4 p-4 shadow-lg rounded-xl bg-white text-black">
                        {categoryData.backgroundImage && (
                          <img
                            src={categoryData.backgroundImage}
                            alt={categoryData.category}
                            className="mt-4 mb-4 rounded-md shadow-lg w-full h-40"
                          />
                        )}
                        <p className="text-xl font-Itim">{item.name}</p>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Esse incidunt molestiae assumenda nihil reprehenderit non
                          beatae voluptatum ipsam architecto delectus.
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-between">
                  <CarouselPrevious className="text-black sm:flex hidden" />
                  <CarouselNext className="text-black md:flex hidden" />
                </div>
              </Carousel>

              <CardFooter className="mt-4">
                <Button
                  onClick={() => handleExploreClick(categoryData.category)}
                  className="rounded-xl font-Itim bg-yellow-300 text-black hover:bg-yellow-400"
                >
                  Explore services
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
