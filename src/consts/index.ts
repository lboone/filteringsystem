export const SUBCATEGORIES = [
  { name: "T-Shirts", selected: true, href: "#" },
  { name: "Hoodies", selected: false, href: "#" },
  { name: "Sweatshirts", selected: false, href: "#" },
  { name: "Accessories", selected: false, href: "#" },
];

export const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];
export const PRICE_FILTERS = {
  id: "price",
  name: "Price",
  options: [
    {
      label: "Any price",
      value: [0, 100],
    },
    {
      label: "Under $20",
      value: [0, 20],
    },
    {
      label: "Under $40",
      value: [0, 40],
    },
    // Custom option defined in JSX
  ] as const,
} as const;

export const SORT = ["none", "price-asc", "price-desc"] as const;
export const SORT_OPTIONS = [
  {
    name: "None",
    value: "none",
  },
  {
    name: "Price: Low to High",
    value: "price-asc",
  },
  {
    name: "Price: High to Low",
    value: "price-desc",
  },
] as const;

export const SIZES = ["S", "M", "L"] as const;
export const SIZE_FILTERS = {
  id: "size",
  name: "Size",
  options: [
    {
      label: "S",
      value: "S",
    },
    {
      label: "M",
      value: "M",
    },
    {
      label: "L",
      value: "L",
    },
  ] as const,
} as const;

export const COLORS = ["white", "beige", "blue", "green", "purple"] as const;
export const COLOR_FILTERS = {
  id: "color",
  name: "Color",
  options: [
    {
      label: "White",
      value: "white",
    },
    {
      label: "Beige",
      value: "beige",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Purple",
      value: "purple",
    },
  ] as const,
} as const;


