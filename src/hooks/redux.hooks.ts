import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`

// CUSTOM HOOK FOR TYPE SAFETY
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
