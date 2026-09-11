export const products = [
  {
    id: "fab-01",
    category: "Fabrication",
    name: "Heavy Duty CNC Plasma Cutter",
    image: "/images/product-cnc-plasma.webp",
    summary: "Reliable plasma cutting machine for accurate metal fabrication.",
    description: "Designed for continuous industrial use, this CNC plasma cutter provides accurate and clean cuts across various metal thicknesses. Built with a heavy-duty frame to minimize vibration and ensure long-term reliability in fabrication shops.",
    applications: ["Metal Fabrication", "Heavy Engineering", "Automotive Parts"],
    features: ["Strong steel frame construction", "High-speed cutting capability", "Easy-to-use control panel", "Low maintenance requirements"],
    specifications: [
      { label: "Model", value: "PC-4000X" },
      { label: "Cutting Area", value: "1500mm x 3000mm" },
      { label: "Power Source", value: "120A Plasma" },
      { label: "Material", value: "Mild Steel, Stainless Steel, Aluminum" }
    ]
  },
  {
    id: "mh-01",
    category: "Material Handling",
    name: "Industrial Scissor Lift Table",
    image: "/images/product-scissor-lift.webp",
    summary: "Strong lifting equipment for material positioning and handling.",
    description: "Built for heavy lifting and material handling on the factory floor. Our scissor lift tables are manufactured using high-grade steel and reliable hydraulic systems to ensure safe and smooth operation during daily use.",
    applications: ["Warehousing", "Assembly Lines", "Loading Docks"],
    features: ["Heavy-duty hydraulic cylinders", "Reinforced steel platform", "Safety stop mechanism", "Floor mountable design"],
    specifications: [
      { label: "Model", value: "SL-2000" },
      { label: "Load Capacity", value: "2000 kg" },
      { label: "Max Height", value: "1500 mm" },
      { label: "Power", value: "3 Phase, 415V" }
    ]
  },
  {
    id: "pkg-01",
    category: "Packaging",
    name: "Automatic Carton Sealing Machine",
    image: "/images/product-carton-sealer.webp",
    summary: "Efficient and reliable carton sealing for packaging lines.",
    description: "Streamline your packaging process with our automatic carton sealer. Designed to handle various box sizes with quick adjustments, ensuring secure top and bottom sealing for safe transport of your goods.",
    applications: ["Food & Beverage", "E-commerce", "General Manufacturing"],
    features: ["Top and bottom drive belts", "Adjustable height and width", "Consistent tape application", "Durable caster wheels"],
    specifications: [
      { label: "Model", value: "CS-Auto50" },
      { label: "Sealing Speed", value: "20 meters/min" },
      { label: "Tape Width", value: "48mm / 72mm" },
      { label: "Power", value: "Single Phase, 220V" }
    ]
  },
  {
    id: "proc-01",
    category: "Processing",
    name: "Industrial Ribbon Blender",
    image: "/images/product-ribbon-blender.webp",
    summary: "Thorough mixing equipment for powders and granules.",
    description: "A robust mixing solution designed for homogeneous blending of dry powders and granules. Manufactured with high-quality stainless steel contact parts for durability and easy cleaning.",
    applications: ["Food Processing", "Chemical Mixing", "Agriculture Products"],
    features: ["Double helical ribbon agitator", "Center discharge valve", "Safety grill with limit switch", "Stainless steel construction"],
    specifications: [
      { label: "Model", value: "RB-500L" },
      { label: "Working Capacity", value: "500 Liters" },
      { label: "Material", value: "SS 304 / SS 316" },
      { label: "Drive Motor", value: "5 HP Gear Motor" }
    ]
  },
  {
    id: "auto-01",
    category: "Automation",
    name: "Custom Conveyor System",
    image: "/images/product-conveyor.webp",
    summary: "Reliable material movement systems designed for your layout.",
    description: "We design and manufacture custom conveyor systems to improve material flow in your facility. Built with strong frames and reliable drives to handle continuous operation in tough industrial environments.",
    applications: ["Assembly Plants", "Packaging Lines", "Warehouse Sorting"],
    features: ["Customizable length and width", "Variable speed control", "Heavy-duty rollers/belts", "Low maintenance design"],
    specifications: [
      { label: "Type", value: "Belt / Roller / Chain" },
      { label: "Dimensions", value: "Custom Built" },
      { label: "Load Capacity", value: "As per requirement" },
      { label: "Frame Material", value: "Powder Coated Steel / SS" }
    ]
  },
  {
    id: "fab-02",
    category: "Fabrication",
    name: "Hydraulic Press Brake",
    image: "/images/product-press-brake.webp",
    summary: "Strong machine for accurate metal sheet bending.",
    description: "Our hydraulic press brakes offer reliable and accurate sheet metal bending. Built with a rigid welded steel frame to ensure stability and uniform bending over years of operation.",
    applications: ["Metal Fabrication", "Panel Manufacturing", "Appliance Manufacturing"],
    features: ["Rigid welded frame", "Reliable hydraulic system", "Accurate back gauge", "Standard tooling included"],
    specifications: [
      { label: "Model", value: "HPB-100T" },
      { label: "Bending Force", value: "100 Tons" },
      { label: "Bending Length", value: "2500 mm" },
      { label: "Control", value: "NC Controller" }
    ]
  }
];

export const categories = ["All", "Fabrication", "Material Handling", "Packaging", "Processing", "Automation", "Custom Machinery"];
