import { locales } from "nextra/locales";
import { parse, stringifyUrl } from "query-string";

export const middleware = (request) => {
  const { nextUrl } = request;
  const pathName = request.nextUrl.pathname;

  // if (pathName.startsWith("/api")) {
  //   const redirect = stringifyUrl({
  //     url: `${process.env.API_ENDPOINT}${pathName.replace(/^\/api/, "")}`,
  //     query: parse(req.nextUrl.search?.replace("?", "")),
  //   });

  //   return res.rewrite(redirect);
  // }

  return locales(request);
};
