import {InputHTMLAttributes, LabelHTMLAttributes, memo, useState} from 'react';
import {twMerge} from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  description?: string;
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = memo(function ({children, className}: LabelProps) {
  return (
    <label
      className={twMerge(
        'text-xs lg:text-sm font-semibold text-slate-700',
        className
      )}
    >
      {children}
    </label>
  );
});

const Input = memo(function ({
  value,
  className,
  type = 'text',
  placeholder,
  description,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      <div className='relative'>
        <input
          type={showPassword ? 'text' : type}
          className={twMerge(
            'p-2 pt-3 px-3 rounded-md inline-block border border-s-slate-300 outline-border text-xs lg:text-sm text-slate-600 w-full',
            className
          )}
          value={value}
          placeholder={placeholder}
          {...rest}
        />

        {type === 'password' && (
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-2 p-1 px-2 border bg-gradient-to-t hover:from-slate-200 hover:to-slate-100 text-slate-600 from-slate-100 to-slate-50 border-slate-300 rounded-md top-1/2 -translate-y-1/2 text-xs '
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        )}
      </div>

      {description?.length && (
        <span className='inline-block text-justify mt-2 text-xs text-slate-500'>
          {description}
        </span>
      )}
    </div>
  );
});

export {Input, Label};
