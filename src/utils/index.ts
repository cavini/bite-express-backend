import cloudinary from "cloudinary";
import { CheckoutSessionRequest } from "../controllers/OrderController";
import { MenuItemType } from "../models/restaurant";
import Stripe from "stripe";

export const uploadImage = async (file: Express.Multer.File) => {
  const image = file;
  const base64Image = Buffer.from(image.buffer).toString("base64");
  const dataURI = `data:${image.mimetype};base64,${base64Image}`;
  const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
  return uploadResponse.url;
};

export const createLineItems = (
  checkoutSessionRequest: CheckoutSessionRequest,
  menuItems: MenuItemType[],
) => {
  const lineItems = checkoutSessionRequest.cartItems.map((cartItem) => {
    const menuItem = menuItems.find(
      (item) => item._id.toString() === cartItem.menuItemId.toString(),
    );

    if (!menuItem) {
      throw new Error(
        `Menu item not found: ${cartItem.name} ${cartItem.menuItemId}`,
      );
    }

    const line_item: Stripe.Checkout.SessionCreateParams.LineItem = {
      price_data: {
        currency: "usd",
        unit_amount: menuItem.price,
        product_data: {
          name: menuItem.name,
        },
      },
      quantity: parseInt(cartItem.quantity),
    };

    return line_item;
  });

  return lineItems;
};
