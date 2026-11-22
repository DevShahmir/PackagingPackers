export type BoxCategory = "Cardboard" | "Rigid" | "Corrugated";

export type subBoxCategoryCardBoard =
  | "MagneticClosure"
  | "tukBoxes"
  | "autoLockBoxes"
  | "sleeveBoxes"
  | "twoPieceBoxes"
  | "drawerBoxes"
  | "cigaretteBoxes";

export type subBoxCategoryRigid =
  | "MagneticClosureBox"
  | "PreAssembledBoxes"
  | "TwoPieceBoxes"
  | "ShoulderNeckBoxes"
  | "drawerBoxes"
  | "giftBoxes"
  | "sleeveBoxes";

export type subBoxCategoryCorrugated =
  | "mailerBox"
  | "snapLockBox"
  | "twoPieceBox"
  | "shippingBox"
  | "displayBoxes";

export type AnySubCategory =
  | subBoxCategoryCardBoard
  | subBoxCategoryRigid
  | subBoxCategoryCorrugated;

export type BoxSubCategory = AnySubCategory;
export type BoxSubtype = AnySubCategory;

export interface BaseBoxProduct {
  name: string;
  id: number;
  image: string[];
  description: string;
  price: number;
  minqty: number;
  sizes: string | string[];
}

export interface CardboardBoxProduct extends BaseBoxProduct {
  category: "Cardboard";
  subCategory: subBoxCategoryCardBoard;
}

export interface RigidBoxProduct extends BaseBoxProduct {
  category: "Rigid";
  subCategory: subBoxCategoryRigid;
}

export interface CorrugatedBoxProduct extends BaseBoxProduct {
  category: "Corrugated";
  subCategory: subBoxCategoryCorrugated;
}


export type BoxProduct =
  | CardboardBoxProduct
  | RigidBoxProduct
  | CorrugatedBoxProduct;

export interface ColorOption {
  name: string;
  class: string;
}

export interface Customization {
  color: ColorOption;
  printing: string;
  quantity: number;
}

export interface QuoteRequest {
  productId: number;
  customization: Customization;
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export const BOX_CATEGORIES: BoxCategory[] = [
  "Cardboard",
  "Rigid",
  "Corrugated",
];

export const SUBCATEGORIES_BY_CATEGORY: Record<
  BoxCategory,
  AnySubCategory[]
> = {
  Cardboard: [
    "MagneticClosure",
    "tukBoxes",
    "autoLockBoxes",
    "sleeveBoxes",
    "twoPieceBoxes",
    "drawerBoxes",
    "cigaretteBoxes",
  ],
  Rigid: [
    "MagneticClosureBox",
    "PreAssembledBoxes",
    "TwoPieceBoxes",
    "ShoulderNeckBoxes",
    "drawerBoxes",
    "giftBoxes",
    "sleeveBoxes",
  ],
  Corrugated: [
    "mailerBox",
    "snapLockBox",
    "twoPieceBox",
    "shippingBox",
    "displayBoxes",
  ],
};
