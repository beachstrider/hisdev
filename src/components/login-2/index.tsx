/* eslint-disable max-len */
import React from 'react';
import { useRouter, NextRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const socialMediaColors = {
  facebook: '#365397',
  linkedin: '#006db3',
  google: '#e0452c',
  github: '#2f2f2f',
};

const Login1: React.FunctionComponent<any> = () => {
  const { register, handleSubmit, errors } = useForm();
  const router: NextRouter = useRouter();
  const onSubmit = async (data: any): Promise<void> => {
    console.log(data);
    await router.push('/dashboard');
  };

  // const [checked, setChecked] = useState(true);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm mb-4 w-full"
      >
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Email</span>

            <input
              name="email"
              type="email"
              ref={register({ required: true })}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Enter your email"
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">Email is required</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Password</span>

            <input
              name="password"
              type="password"
              ref={register({ required: true })}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Enter your password"
            />
          </label>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">Password is required</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="submit"
            className="px-4 py-3 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none"
            value="Login"
          />
        </div>
      </form>

      <div className="w-full mb-4 text-center">
        <p className="text-secondary mb-2">Or login with</p>

        <div className="flex w-full flex-row justify-center items-center children-x-2">
          <i
            className={'icon-social-facebook text-xl'}
            style={{ color: socialMediaColors.facebook }}
          ></i>

          <i
            className={'icon-social-google text-xl'}
            style={{ color: socialMediaColors.google }}
          ></i>

          <i
            className={'icon-social-linkedin text-xl'}
            style={{ color: socialMediaColors.linkedin }}
          ></i>

          <i
            className={'icon-social-github text-xl'}
            style={{ color: socialMediaColors.github }}
          ></i>
        </div>
      </div>

      <div className="w-full children-x-1">
        <span className="text-secondary">New user?</span>

        <span>
          <Link href="/signup">
            <a className="link">Create account here</a>
          </Link>
        </span>
      </div>

      <div className="w-full">
        <span>
          <Link href="/forgot-password">
            <a className="link">Forgot password?</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login1;
