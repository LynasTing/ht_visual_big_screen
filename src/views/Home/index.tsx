import type { FC, ReactNode } from 'react';
import { useShallow } from 'zustand/react/shallow';
import userStore from '@/store';
import { Button } from 'antd';
import listStore from '@/store/list';
import Token from '@/views/Token';

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const { userInfo, putUserInfo, putAge } = userStore(
    // 在这里使用useShallow是为了防止修改userInfo时，整个userStore状态更新，影响其它无需更新状态的数据
    useShallow((state) => ({
      userInfo: state.userInfo,
      putAge: state.putAge,
      putUserInfo: state.putUserInfo
    }))
  );

  // 只从store中取数据的简化写法
  const _token = userStore((state) => state.token);

  const { list, putList } = listStore((state) => ({
    list: state.list,
    putList: state.putList
  }));

  return (
    <div className="bg-gray-400 w-96 px-4 py-4">
      <h3>I am Home page get token： {_token}</h3>
      <div className="flex items-center justify-between mb-4">
        <div>姓名： {userInfo.name}</div>
        <Button type="dashed" danger onClick={() => putUserInfo({ name: 'Ting', age: 28 })}>
          Update userInfo
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div>年龄： {userInfo.age}</div>
        <Button type="primary" onClick={() => putAge(userInfo.age + 1)}>
          Update age
        </Button>
      </div>
      <hr />
      <Token />
      <hr />
      <div className="bg-blue-300">
        <p>Here is List</p>
        <p>list: {list}</p>
        <Button onClick={() => putList()}>Click me put number list</Button>
      </div>
    </div>
  );
};

export default Home;
