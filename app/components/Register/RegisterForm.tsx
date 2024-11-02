'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/app/components/Icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';

interface FormData {
  uni: string;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  role: string;
}

// 定义 zod 验证模式，包含字段长度限制
const schema = z.object({
  uni: z
    .string()
    .min(1, 'UNI is required')
    .max(255, 'UNI cannot exceed 255 characters'),
  lastname: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name cannot exceed 50 characters'),
  firstname: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name cannot exceed 50 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .max(100, 'Email cannot exceed 100 characters'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(255, 'Password cannot exceed 255 characters'),
  role: z.enum(['1', '2'], {
    message: 'Role is required',
  }),
});

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      uni: '',
      lastname: '',
      firstname: '',
      email: '',
      password: '',
      role: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data: ', data);
  };

  return (
    <Card className="max-w-lg w-full p-6 bg-white text-gray-900 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">
            Create an Account
          </CardTitle>
          <CardDescription className="text-gray-600">
            Enter your details below to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="uni">UNI</Label>
            <Input
              id="uni"
              type="text"
              {...register('uni')}
              placeholder="Enter your UNI"
              disabled={isLoading}
              className="bg-gray-100"
            />
            {errors.uni?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.uni.message)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              type="text"
              {...register('lastname')}
              placeholder="Enter your Last Name"
              disabled={isLoading}
              className="bg-gray-100"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">
                {String(errors.lastname.message)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              type="text"
              {...register('firstname')}
              placeholder="Enter your First Name"
              disabled={isLoading}
              className="bg-gray-100"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">
                {String(errors.firstname.message)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="name@example.com"
              disabled={isLoading}
              className="bg-gray-100"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {String(errors.email.message)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="Create a password"
              disabled={isLoading}
              className="bg-gray-100"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {String(errors.password.message)}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label>Role</Label>
            <Select
              onValueChange={(value) =>
                setValue('role', value, { shouldValidate: true })
              }
              disabled={isLoading}
            >
              <SelectTrigger className="w-full bg-gray-100">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Roles</SelectLabel>
                  <SelectItem value="1">Teacher</SelectItem>
                  <SelectItem value="2">Student</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-red-500 text-sm">
                {String(errors.role.message)}
              </p>
            )}
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-100"
            >
              <Icons.google className="h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
            disabled={isLoading}
          >
            Create Account
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
