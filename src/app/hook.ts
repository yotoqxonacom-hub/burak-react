import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Dars davomida komponentlar ichida ma'lumot jo'natish (dispatch) uchun:
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Store ichidagi ma'lumotlarni oson va xavfsiz o'qib olish (select) uchun:
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;