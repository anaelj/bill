import { EnumCategoryTypes } from "../mocks";
import {
  MdCarRepair,
  MdHouse,
  MdFastfood,
  MdHomeRepairService,
} from "react-icons/md";

export const getIcon = (type: any) => {
  switch (type) {
    case EnumCategoryTypes.car:
      return <MdCarRepair size={32} />;
    case EnumCategoryTypes.food:
      return <MdFastfood size={32} />;
    case EnumCategoryTypes.home:
      return <MdHouse size={32} />;
    case EnumCategoryTypes.maitence:
      return <MdHomeRepairService size={32} />;

    default:
      return <MdHouse size={32} />;
  }
};
