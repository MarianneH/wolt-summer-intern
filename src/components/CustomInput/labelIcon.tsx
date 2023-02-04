import { AiOutlineEuroCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { RiPinDistanceLine } from "react-icons/ri";
import { TbCalendarTime } from "react-icons/tb";

export const labelIcon = {
  distance: {
    label: "Delivery Distance in m",
    icon: <RiPinDistanceLine />,
  },
  amount: {
    label: "Number of Items",
    icon: <AiOutlineShoppingCart />,
  },
  time: {
    label: "Order Time",
    icon: <TbCalendarTime />,
  },
  cartValue: {
    label: "Cart Value in €",
    icon: <AiOutlineEuroCircle />,
  },
};
