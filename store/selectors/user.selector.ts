"use client";

import { useAppSelector } from "../hooks";

export function userSelector() {
  const user = useAppSelector((state) => state.user);

  return user;
}
