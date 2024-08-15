import { create } from 'zustand'; // zustand 状态管理库
import { produce } from 'immer'; // immer 以更方便的方式处理不可变状态

interface UserInfo {
  name: string;
  age: number;
}

interface UserState {
  token: string;
  userInfo: UserInfo;
  putToken: (params: string) => void;
  putUserInfo: (params: UserInfo) => void;
  putAge: (params: number) => void;
}

const useStore = create<UserState>((set) => ({
  userInfo: {
    name: 'Lynas',
    age: 26
  },
  token: 'SSSS',
  // 更新属性
  putToken: (token) => set({ token }),
  // 更新整个对象
  putUserInfo: (userInfo) => set({ userInfo }),
  // 更新对象中的某个属性
  putAge: (age) =>
    set(
      produce((state) => {
        state.userInfo.age = age;
      })
    )
}));

export default useStore;
