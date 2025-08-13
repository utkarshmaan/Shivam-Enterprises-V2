import { linksData } from "@/constants/data";
const Footer = () => {
    return (
      <footer className="flex flex-col items-center justify-center gap-10 p-4 text-white bg-gray-800 footer font-Itim">
        <div className="flex flex-col items-center justify-center gap-5" >
        <div className="flex space-x-4">
            {linksData.map((link) => (
                <a href={link.url} key={link.name} className="flex items-center">
                <img src={link.iconUrl} alt={`${link.name} icon`} className="w-6 h-6 mr-2" />
                <span>{link.name}</span>
                </a>
            ))}
        </div>
        <div className=" flex flex-col justify-center items-center">
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3515.8123066769417!2d76.83553697548555!3d28.21301457589643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDEyJzQ2LjkiTiA3NsKwNTAnMTcuMiJF!5e0!3m2!1sen!2sin!4v1728118032064!5m2!1sen!2sin" width="300" height="200" style={{border:0}}
    //   allowfullscreen=
      loading="lazy"
    //   referrerpolicy="no-referrer-when-downgrade"
      aria-hidden="false"
    //   tabindex="0"
      >
    </iframe>
            <p>Address: 1/2 R.H.B Bhiwadi, Dist. Alwar, Rajasthan</p>
        </div>
        </div>

        <div className="container mx-auto mb-5 text-center">
          <p>&copy; 2024 shivam Enterprises. All rights reserved.</p>
        </div>
      </footer>
    );
  };

  export default Footer;
