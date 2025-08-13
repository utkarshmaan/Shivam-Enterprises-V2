import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import StarRatings from 'react-star-ratings';
  const data = [
    {
      id: 1,
      name: "Aditi Sharma",
      review: "The printing quality exceeded my expectations! Will definitely return for more.The printing quality exceeded my expectations! Will definitely return for more.",
      rating: 5
    },
    {
      id: 2,
      name: "Ravi Patel",
      review: "Quick service and the staff was very helpful. Highly recommended!",
      rating: 4
    },
    {
      id: 3,
      name: "Sneha Desai",
      review: "Great experience! The colors on my brochures were vibrant and true to my design.",
      rating: 5
    },
    {
      id: 4,
      name: "Arjun Mehta",
      review: "Decent printing services, but I faced a minor delay. Overall, satisfied with the quality.",
      rating: 3
    },
    {
      id: 5,
      name: "Priya Nair",
      review: "Fantastic customer service! They helped me choose the right paper for my business cards.",
      rating: 4
    },
    {
      id: 6,
      name: "Karan Singh",
      review: "The packaging was excellent and the prints were clear and professional.",
      rating: 5
    },
    {
      id: 7,
      name: "Anjali Kumar",
      review: "Good quality prints but a bit on the expensive side for small orders.",
      rating: 3
    },
    {
      id: 8,
      name: "Vikram Joshi",
      review: "Loved the design options available for flyers. Will recommend to friends!",
      rating: 4
    },
    {
      id: 9,
      name: "Neha Gupta",
      review: "Not the fastest service, but the end product was worth the wait. Very happy with my posters!",
      rating: 4
    },
    {
      id: 10,
      name: "Rohit Verma",
      review: "The best printing service I've used! They really know how to bring designs to life.",
      rating: 5
    }
  ];

const Testimonials = () => {
  return (
    <section className="p-5 testimonials2 h-[55vh] m-3 flex flex-col justify-center items-center gap-7 max-w-screen">
    <h2 className="text-3xl font-bold">Reviews and Testimonials</h2>
    <Carousel className="max-w-[1050px] w-full">
        <CarouselContent>
            {data.map((item) => {
                return (
                    <CarouselItem key={item.id} className="basis-1 md:basis-1/2 lg:basis-1/3 ">
                    <Card className="flex flex-col justify-center h-[30vh] max-w-[30vw] px-4">
                        <CardHeader>
                            <CardTitle className="text-2xl font-Itim">{item.name}</CardTitle>
                            <CardDescription className="text-black font-Patrick">{item.review}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <StarRatings
                                rating={item.rating}
                                numberOfStars={5}
                                starDimension="30px"
                                 starSpacing="5px"
                            />
                        </CardContent>
                    </Card>
                </CarouselItem>

                );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</section>

  );
};

export default Testimonials;
