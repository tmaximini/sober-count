import React, { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button
} from "@chakra-ui/core";

interface Props {
  onSubmit: (vals: any) => void;
}

export default function LoginForm({ onSubmit }: Props): ReactElement {
  const { register, handleSubmit, setValue, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className="border-gray-400 rounded my-4">
        <FormLabel htmlFor="username">Your username</FormLabel>
        <Input
          name="username"
          type="username"
          placeholder="username"
          aria-describedby="username-helper-text"
          ref={register({ required: true })}
        />
        <FormHelperText id="username-helper-text">
          We never share your username.
        </FormHelperText>
      </FormControl>
      <FormControl className="border-gray-400 rounded my-4">
        <FormLabel htmlFor="password">Your password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="password"
          aria-describedby="password-helper-text"
          ref={register({ required: true })}
        />
        <FormHelperText id="password-helper-text">
          Your password.
        </FormHelperText>
      </FormControl>

      {/* errors will return when field validation fails  */}
      {errors.usernameRequired && (
        <FormErrorMessage>This field is required</FormErrorMessage>
      )}

      <Button size="lg" type="submit" variantColor="green">
        Login
      </Button>
    </form>
  );
}
