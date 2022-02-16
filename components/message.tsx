import { cls } from '../libs/client/utils';

interface MessageProps {
  message: string;
  reversed?: boolean;
  avatarUrl?: string;
}

const Message = ({ message, reversed, avatarUrl }: MessageProps) => {
  return (
    <div
      className={cls(
        'flex items-start',
        reversed ? 'flex-row-reverse space-x-reverse' : 'space-x-2'
      )}
    >
      <div className="h-8 w-8 rounded-full bg-slate-400" />
      <div className="w-1/2 text-gray-700 p-2 border rounded-md border-gray-300">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
