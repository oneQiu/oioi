'use client';
import { FC } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';

interface Values {
  name: string;
  password: string;
}

export const LoginForm: FC = () => {
  const form = useForm<Values>({
    defaultValues: {
      name: '',
      password: '',
    },
  });

  return (
    <Form {...form}>
      <form className={'flex flex-col space-y-8 rounded-3xl bg-white px-8 py-12'}>
        <div className={'text-center text-2xl font-semibold'}>登陆</div>
        <p className={'text-center'}>
          Enter your details to get sign
          <br /> in to your account
        </p>
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={'请输入邮箱/用户名'} {...field} autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={'name'}
          control={form.control}
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder={'请输入密码'} {...field} type={'password'} />
              </FormControl>
            </FormItem>
          )}
          name={'password'}
          control={form.control}
        />
      </form>
    </Form>
  );
};
