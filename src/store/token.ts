// persist 持久化 默认存储在localStorage 默认会将store中所有字段进行缓存
import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand'; // zustand 状态管理库
import { produce } from 'immer';

interface TokenState {
  user: {
    name: string;
    token: string;
  };
  putToken: (params: string) => void;
}

const tokenStore = create<TokenState>()(
  persist(
    (set) => ({
      user: {
        name: '',
        token: ''
      },
      putToken: (token) =>
        set(
          produce((state) => {
            state.user.token = token;
          })
        )
    }),
    {
      name: 'token', // 存储在本地的键名，
      storage: createJSONStorage(() => sessionStorage), // 可以修改成存储在sessionStorage,
      partialize: (state) => ({ token: state.user.token }) // 指定持久化的字段
    }
  )
);

export default tokenStore;
