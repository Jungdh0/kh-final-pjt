import { atom } from "recoil";

const layoutState = atom({
  key: "layout",
  default: true,
});

export { layoutState };
