import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRefreshTokenMutation } from "../feature/auth/authApiSlice";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(true);
  const [authToken, setAuthToken] = useState("");
  const { access_token } = useSelector((state) => state.auth);
  const [refreshToken] = useRefreshTokenMutation();
  const dispatch = useDispatch();

  return authChecked;
}
