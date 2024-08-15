import type { FC, ReactNode } from 'react';
import useStore from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { Button } from 'antd';

interface IProps {
  children?: ReactNode;
}

const Token: FC<IProps> = () => {
  const { token, putToken } = useStore(
    useShallow((state) => ({
      token: state.token,
      putToken: state.putToken
    }))
  );
  return (
    <div>
      <p>Here is Token component</p>
      <div className="flex justify-between items-center">
        <p>token: {token}</p>
        <Button type="primary" ghost onClick={() => putToken("I'm new token")}>
          Click me and Put token !
        </Button>
      </div>
    </div>
  );
};

export default Token;
