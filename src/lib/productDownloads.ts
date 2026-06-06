/**
 * ⚠️  SERVER-SIDE ONLY
 * This file must never be imported from a Client Component ("use client").
 * Google Drive view links are revealed here ONLY after Stripe confirms payment.
 *
 * Add a product's URL when its Google Drive link is ready.
 */

export type ProductDownload = {
  label: string;
  /** Google Drive "view only" link — customers can view but not download the original */
  viewUrl: string;
};

export const PRODUCT_DOWNLOADS: Record<number, ProductDownload> = {
  1: {
    label: "Executive Resume Suite",
    viewUrl:
      "https://drive.google.com/file/d/1RW3abeRObU_BxFbVhHuUgoCPv9fnu_fX/view?usp=sharing",
  },
  // Add each product's link as it becomes ready:
  // 2: { label: "Lumina Brand Kit", viewUrl: "https://drive.google.com/..." },
  // 3: { label: "Aesthetic Daily Planner", viewUrl: "https://drive.google.com/..." },
  // 4: { label: "Creative Portfolio Kit", viewUrl: "https://drive.google.com/..." },
  // 5: { label: "Minimal Resume Pack", viewUrl: "https://drive.google.com/..." },
  // 6: { label: "Year in Review Planner", viewUrl: "https://drive.google.com/..." },
};
