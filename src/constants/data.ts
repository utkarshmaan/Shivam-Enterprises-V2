import books from "../media/booka-unsplash.jpg";
import print from "../media/print-unsplash.jpg";
import packing from "../media/zachary-keimig-6WVOYDIjYdo-unsplash.jpg";
import advertisting from "../media/andrew-neel-A9Msi-vUNKg-unsplash.jpg";

interface Data {
    category: string;
    items: { name: string; prices: number[] }[];
    description: string;
    backgroundImage?: string;
  }

  const data: Data[] = [
    {
      category: "Printing",
      items: [
        { name: "Book printing", prices: [2.0, 1.5] },
        { name: "Sticker Printing", prices: [0.1, 0.08] },
        { name: "Pad printing", prices: [1.0, 0.8] },
        { name: "Tags Printing", prices: [0.05, 0.04] },
        { name: "Register Printing", prices: [3.0, 2.5] },
        { name: "Digital Printing and Color Printing", prices: [0.15, 0.12] },
        { name: "Offset and Screen Printing Material", prices: [5.0, 4.5] },
      ],
      description:
        "From eye-catching booklets to elegant letterheads, we provide a complete range of premium print solutions to elevate your brand.",
      backgroundImage: print,
    },
    {
      category: "Paper",
      items: [
        { name: "18x22 Paper (white & color)", prices: [0.5, 0.4] },
        { name: "17x27 Paper", prices: [0.6, 0.5] },
        { name: "20x30 Paper", prices: [0.7, 0.6] },
        { name: "Chart Paper", prices: [0.8, 0.7] },
        { name: "Self Adhesive Paper", prices: [1.0, 0.9] },
        { name: "A4 Copier Paper", prices: [0.1, 0.08] },
        { name: "Envelopes", prices: [0.2, 0.15] },
        { name: "Hardboard", prices: [1.5, 1.2] },
      ],
      description:
        "Outdoor prints for displaying advertisements; Booklets- thin books with a small number of pages and a paper cover.",
      backgroundImage: books,
    },
    {
      category: "PACKING",
      items: [
        { name: "BOPP Tape", prices: [0.50, 0.40] },
        { name: "BOPP Bags", prices: [0.30, 0.25] },
        { name: "Stretch Film", prices: [0.70, 0.60] },
        { name: "POF Shrink Roll", prices: [1.20, 1.00] },
        { name: "Green Pet Strap", prices: [0.80, 0.70] },
        { name: "Cutting Blade", prices: [1.50, 1.30] },
        { name: "BarCode Labels", prices: [0.05, 0.04] },
        { name: "Packing Machine", prices: [200.00, 180.00] },
        { name: "Lamination Pouch", prices: [0.20, 0.15] },
        { name: "Packing Strap", prices: [0.10, 0.08] },
        { name: "SS/MS Clamp", prices: [2.00, 1.80] },
      ],
      description:
        "Explore our high-quality packaging solutions, including BOPP tapes, stretch films, and packing machines, designed for secure and efficient packaging for businesses of all sizes.",
      backgroundImage: packing,
    },
    {
      category: "ADVERTISING",
      items: [
        { name: "Certificates", prices: [1.00, 0.90] },
        { name: "Pen with Printing", prices: [1.50, 1.30] },
        { name: "Catalogue", prices: [2.00, 1.80] },
        { name: "Sun Board", prices: [3.00, 2.70] },
        { name: "Flex Board", prices: [2.50, 2.20] },
        { name: "Office Diary", prices: [5.00, 4.50] },
        { name: "Business Card", prices: [0.20, 0.15] },
        { name: "Acrylic Board", prices: [4.00, 3.50] },
        { name: "M.S/S.S Plate", prices: [2.00, 1.80] },
        { name: "Non Woven Bag", prices: [0.50, 0.40] },
        { name: "Vinyl/One Vision Retro/Night Glow", prices: [1.00, 0.90] },
      ],
      description:
        "Capture attention with vibrant outdoor prints and sleek booklets that showcase your message beautifully.",
      backgroundImage: advertisting,
    },
  ];
  interface whyUsData {
    id: string;
    title: string;
    content: string;
  }
    const whyusdata: whyUsData[] = [
      { id: "item-1", title: "Cost-Effective Solutions", content: "Competitive pricing without compromising on quality." },
      { id: "item-2", title: "Ethical Business Practices", content: "Committed to transparency and integrity in every transaction." },
      { id: "item-3", title: "Reliable and Safe Delivery", content: "We ensure timely and secure delivery for every order." },
      { id: "item-4", title: "Dedicated Team", content: "A team of hardworking professionals focused on excellence." },
      { id: "item-5", title: "Trusted Vendor Network", content: "Our products come from a reliable and authentic vendor base." },
      { id: "item-6", title: "Wide Range of Products", content: "Access multiple items on a single platform for ease of purchase." },
    ];

    interface Links{
        icons?:string
        name:string,
        url:string
    }
    const linksData = [
        {
          name: "whatsapp",
          url: "1234567890",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp icon URL
        },
        {
          name: "instagram",
          url: "https://www.instagram.com",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Instagram icon URL
        },
        {
          name: "facebook",
          url: "https://www.facebook.com",
          iconUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" // Facebook icon URL
        }
      ];
  export {data,whyusdata,linksData}
