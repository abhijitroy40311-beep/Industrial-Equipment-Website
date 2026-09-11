import { Factory, Construction, Package, Settings, Truck, Wheat, Wrench, Box } from 'lucide-react';

export const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Equipment for general production and manufacturing environments.",
    icon: Factory,
    image: "/images/industry-manufacturing.webp",
    requirements: "Continuous operation, high reliability, easy maintenance.",
    categories: ["Fabrication", "Automation", "Material Handling"]
  },
  {
    id: "construction",
    name: "Construction",
    description: "Machines and equipment supporting construction operations.",
    icon: Construction,
    image: "/images/industry-construction.webp",
    requirements: "Heavy duty build, durability in tough environments.",
    categories: ["Material Handling", "Custom Machinery"]
  },
  {
    id: "food-processing",
    name: "Food Processing",
    description: "Equipment for processing and food production facilities.",
    icon: Package,
    image: "/images/industry-food.webp",
    requirements: "Stainless steel construction, hygiene standard compliance, easy cleaning.",
    categories: ["Processing", "Packaging", "Conveyors"]
  },
  {
    id: "packaging",
    name: "Packaging",
    description: "Equipment for final packaging and material handling.",
    icon: Box,
    image: "/images/industry-packaging.webp",
    requirements: "Speed, consistency, adjustability for different sizes.",
    categories: ["Packaging", "Automation"]
  },
  {
    id: "engineering",
    name: "Engineering",
    description: "Machinery for heavy engineering and fabrication businesses.",
    icon: Settings,
    image: "/images/industry-engineering.webp",
    requirements: "Accuracy, strong build quality, powerful performance.",
    categories: ["Fabrication", "Custom Machinery"]
  },
  {
    id: "metal-fabrication",
    name: "Metal Fabrication",
    description: "Solutions for sheet metal and structural fabrication.",
    icon: Wrench,
    image: "/images/industry-metal.webp",
    requirements: "High strength, exact measurements, reliability.",
    categories: ["Fabrication", "Material Handling"]
  },
  {
    id: "warehousing",
    name: "Warehousing",
    description: "Material handling and movement equipment for logistics.",
    icon: Truck,
    image: "/images/industry-warehousing.webp",
    requirements: "Safety, load capacity, smooth movement.",
    categories: ["Material Handling", "Automation"]
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Equipment for agricultural processing and handling operations.",
    icon: Wheat,
    image: "/images/industry-agriculture.webp",
    requirements: "Simple operation, robust construction, cost-effectiveness.",
    categories: ["Processing", "Material Handling"]
  }
];
