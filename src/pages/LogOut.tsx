import { redirect } from "react-router";

export const loader = () => {
    sessionStorage.removeItem('auth');
    return redirect('/');
}