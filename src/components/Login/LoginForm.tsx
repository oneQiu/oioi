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
import ShimmerButton from '@/components/ui/shimmer-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Divider } from '@/components/ui/divider';
import { Space } from '@/components/ui/space';

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

  const onSubmit = (values: Values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className={'flex w-[28rem] flex-col gap-8 rounded-3xl bg-white px-10 py-12'}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className={'text-center text-2xl font-semibold'}>登陆</div>
        <p className={'text-center'}>
          Enter your details to get sign
          <br /> in to your account
        </p>
        <div className={'flex flex-col gap-3'}>
          <FormField
            rules={{ required: '邮箱/用户名必填' }}
            render={({ field, fieldState: { error } }) => (
              <FormItem>
                <FormControl>
                  <Input size="medium" placeholder={'请输入邮箱/用户名'} {...field} autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name={'name'}
            control={form.control}
          />
          <FormField
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input size={'medium'} placeholder={'请输入密码'} {...field} type={'password'} />
                </FormControl>
              </FormItem>
            )}
            name={'password'}
            control={form.control}
          />

          <Link href={'/forget-password'}>
            <Button variant={'link'} className={'self-start p-0'}>
              忘记密码？
            </Button>
          </Link>
        </div>
        <ShimmerButton>登陆</ShimmerButton>
        <Divider>三方登陆</Divider>
        <Space>
          <Button>Google</Button>
          <Button>Github</Button>
          <Button>Wechat</Button>
        </Space>
      </form>
    </Form>
  );
};
