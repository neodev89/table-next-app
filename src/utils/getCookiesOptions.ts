import { CookieOptions } from "@/@types/cookieOptions";

export const getCookiesOptions = ({
    maxAge,
    secure,
    sameSite,
    httpOnly,
}: CookieOptions) => ({
    path: "/",
    maxAge: maxAge ?? 2 * 24 * 60 * 60,
    secure: secure ?? process.env.NODE_ENV === 'production',
    sameSite: sameSite ?? 'lax',
    httpOnly: httpOnly ?? true,
});