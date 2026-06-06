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

/**
 * Master Google Drive folder — all product files live here.
 * Used as a fallback for products that don't yet have an individual file link.
 * When Jasmine shares individual file links (right-click a file in Drive → Share → Copy Link),
 * replace the FOLDER_URL entries below with those specific links so each buyer
 * only sees the product they paid for.
 */
const FOLDER_URL =
  "https://drive.google.com/drive/folders/1mzfxt06OqZLyD7VvQnQHiseZOIrujk2Q?usp=sharing";

export const PRODUCT_DOWNLOADS: Record<number, ProductDownload> = {
  // Products with individual file links (buyer sees only this file):
  1: {
    label: "Executive Resume Suite",
    viewUrl:
      "https://drive.google.com/file/d/1RW3abeRObU_BxFbVhHuUgoCPv9fnu_fX/view?usp=sharing",
  },

  // Products using the shared folder link (buyer lands in the full folder).
  // Replace viewUrl with the individual file link when Jasmine adds each product to Drive.
  2: { label: "Lumina Brand Kit", viewUrl: FOLDER_URL },
  3: { label: "Aesthetic Daily Planner", viewUrl: FOLDER_URL },
  4: { label: "Creative Portfolio Kit", viewUrl: FOLDER_URL },
  5: { label: "Minimal Resume Pack", viewUrl: FOLDER_URL },
  6: { label: "Year in Review Planner", viewUrl: FOLDER_URL },
};
