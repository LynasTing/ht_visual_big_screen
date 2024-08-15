import type { FC, ReactNode } from 'react';
import tokenStore from '@/store/token';
import { Button } from 'antd';

interface IProps {
  children?: ReactNode;
}

const Test: FC<IProps> = () => {
  const { user, putToken } = tokenStore((state) => ({
    user: state.user,
    putToken: state.putToken
  }));
  return (
    <div className="bg-slate-400">
      <h4>tokenStore token: {user.token}</h4>
      <Button type="text" onClick={() => putToken((Math.random() * 100).toFixed(2))}>
        put token
      </Button>
    </div>
  );
};

export default Test;
