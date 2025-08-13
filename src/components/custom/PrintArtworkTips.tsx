import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PrintArtworkTips = () => {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate('/contact');
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row">
      <Card className="w-full bg-white shadow-lg md:w-1/3 h-[300px] border border-yellow-300">
        <CardHeader>
          <CardTitle className="text-2xl text-black font-Patrick">Print Artwork Tips</CardTitle>
          <CardDescription className="font-Itim text-black">
            To make ordering as easy as possible, we accept the following file types:
          </CardDescription>
        </CardHeader>
        <CardContent className="font-Itim text-black">
          <p className="mb-2">
            <strong>File Types Accepted:</strong> PDF, DOC, DOCX, PPT, PPTX, JPEG, PNG.
          </p>
          <p>
            <strong>Recommendation:</strong> Upload a PDF for perfect print quality!
          </p>
        </CardContent>
      </Card>

      <Card className="w-full bg-white shadow-lg md:w-1/3 h-[300px] border border-yellow-300">
        <CardHeader>
          <CardTitle className="text-2xl text-black font-Patrick">Bulk Orders Contact</CardTitle>
          <CardDescription className="font-Itim text-black">
            We accept corporate bulk orders. Feel free to contact us:
          </CardDescription>
        </CardHeader>
        <CardContent className="font-Itim text-black">
          <p className="mb-2">
            <strong>Email:</strong> shivamenterprises105@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 8685959696, +91 9314765585
          </p>
        </CardContent>
        <CardFooter>
          <Button className="mt-8 bg-yellow-300 text-black rounded-xl font-Itim" onClick={handleNavigation}>
            Contact Us
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PrintArtworkTips;
