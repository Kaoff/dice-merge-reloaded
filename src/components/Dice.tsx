import clsx from 'clsx';
import { Color } from '../game/color';
import type { DiceObject } from '../game/types/Dice';

export interface DiceProps {
  dice: DiceObject;
}

type ColorToClassName = {
  [key in Color]: {
    dice: string;
    dot: string;
  };
};

export const diceFaces = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
];

const colorToClassName: ColorToClassName = {
  red: {
    dice: 'border-red-900 shadow-toy-red-900 bg-red-500',
    dot: 'bg-red-900',
  },
  blue: {
    dice: 'border-blue-900 shadow-toy-blue-900 bg-blue-500',
    dot: 'bg-blue-900',
  },
  green: {
    dice: 'border-green-900 shadow-toy-green-900 bg-green-500',
    dot: 'bg-green-900',
  },
  yellow: {
    dice: 'border-yellow-900 shadow-toy-yellow-800 bg-yellow-400',
    dot: 'bg-yellow-800',
  },
  purple: {
    dice: 'border-purple-900 shadow-toy-purple-900 bg-purple-500',
    dot: 'bg-purple-900',
  },
  default: {
    dice: 'border-slate-700 shadow-toy-slate-700 bg-white',
    dot: 'bg-slate-700',
  },
};

export const Dice: React.FC<DiceProps> = ({ dice: { value, color } }) => {
  const dotsClassName = clsx(
    'p-3 border-2 rounded-lg grid grid-cols-3 w-24 h-24 gap-1',
    colorToClassName[color || 'default'].dice
  );
  return (
    <div className={dotsClassName}>
      {diceFaces[value - 1].map((face, index) => (
        <div
          key={index}
          className={clsx(
            'w-full h-full rounded-full',
            colorToClassName[color || 'default'].dot,
            face === 0 && 'opacity-0'
          )}
        />
      ))}
    </div>
  );
};
