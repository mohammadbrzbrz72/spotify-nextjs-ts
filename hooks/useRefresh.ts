"use client";

import { useState, useCallback } from "react";

export function useRefresh(initialState = false) {
  const [bool, setBool] = useState(initialState);

  const refresh = useCallback(() => {
    setBool((data) => !data);
  }, []);

  return [refresh, bool, setBool];
}
