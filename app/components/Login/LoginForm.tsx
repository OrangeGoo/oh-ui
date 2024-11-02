'use client'; // Add this at the top to mark this component as a Client Component

import * as React from 'react';

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

export default function LoginForm() {
  return (
    <Card className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-bold text-gray-800">
          Login
        </CardTitle>
        <CardDescription className="text-gray-600">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 pt-4">
        <div className="grid gap-2">
          <Label htmlFor="uni" className="text-gray-700">
            UNI
          </Label>
          <Input
            id="uni"
            type="text"
            placeholder="Enter your UNI"
            className="bg-gray-100"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="text-gray-700">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-gray-100"
          />
        </div>
        <div className="flex justify-center text-sm text-gray-700">
          Do not have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline ml-1">
            Sign up
          </a>
        </div>
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Continue
        </Button>
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
    </Card>
  );
}
