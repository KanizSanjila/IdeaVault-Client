'use client';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { GrGoogle } from "react-icons/gr";

export default function Register() {
     const handleRegister = async(e)=>{
         e.preventDefault();

          const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());
    // console.log(registerData)
    const { data, error } = await authClient.signUp.email({
    ...registerData,
    callbackURL:'/'
});
if(data){
    redirect('/login')
}
if(error){
    toast.error(error.message);
}
     }

       const handleGoogleSignin = async() => {
    await authClient.signIn.social({
        provider: "google"
    })

  }

    return (
        <Card className="shadow-2xl mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={handleRegister}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" type="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center">Or</p>
      <Button onClick={handleGoogleSignIn} className={'w-full'}><GrGoogle></GrGoogle> Sign In With Google</Button>
    </Card>
    );
}