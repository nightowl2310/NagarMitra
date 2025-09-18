// form: email password address city state zip remeber
import { create } from "zustand";
function addData(datas, data) {
  [
    ...datas,
    {
      id: datas.length,
      data,
    },
  ];
}

const useStore = create((set) => ({
  datas: [],
  data: {},

  setNewData: (data) =>
    set((state) => ({
      ...state,
      data,
    })),
  addData: () =>
    set((state) => ({
      ...state,
      datas: addData(state.datas, state.data),
      data: "",
    })),
}));
export default useStore;
