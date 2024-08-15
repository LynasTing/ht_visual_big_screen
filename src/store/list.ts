import { produce } from 'immer';
import { create } from 'zustand';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve((Math.random() * 100).toFixed(2));
    }, 500);
  });
};

interface ListState {
  list: Array<number>;
  putList: () => void;
}

const listStore = create<ListState>((set) => ({
  list: [],
  // 通过 async 和 await 来直接处理异步函数
  putList: async () => {
    const data = await fetchData();
    set(
      produce((state) => {
        state.list.push(data);
      })
    );
  }
}));

export default listStore;
