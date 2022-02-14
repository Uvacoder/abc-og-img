/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { withOGImage } from "next-api-og-image";

export enum GeneralQueryEnum {
  "logo",
  "description",
  "siteName",
  "theme",
  "templateTitle",
  "logoWidth",
  "logoHeight",
}

export default withOGImage<"query", keyof typeof GeneralQueryEnum>({
  strategy: "query",
  template: {
    react: ({
      logo,
      description,
      siteName,
      theme,
      templateTitle,
      logoWidth,
      logoHeight,
    }: any) => {
      const query = {
        logo:
          logo ??
          "https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg",
        description: description ?? "description",
        siteName: siteName ?? "siteName",
        theme: theme ?? "dark",
        templateTitle: templateTitle ?? "Template Title",
        logoWidth: logoWidth ?? 100,
        logoHeight,
      };
      return (
        <>
          <head>
            <link
              href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
              rel="stylesheet"
            />
          </head>
          <body>
            <div
              className="flex w-screen h-screen flex-col items-center justify-center text-center px-2 gap-3"
              style={{
                background: query.theme === "dark" ? "#222" : "#fff",
                color: query.theme === "dark" ? "white" : "black",
              }}
            >
              <img
                src={query.logo}
                alt="logo-image"
                style={{
                  width: `${query.logoWidth}px`,
                  height: `${
                    query.logoHeight ? `${query.logoHeight}px` : "auto"
                  }`,
                }}
              />
              <h1 className="mt-2 text-5xl font-semibold">
                {query.templateTitle}
              </h1>
              <p className="description text-2xl">
                {query.description}
              </p>
              <h3 className="mt-1 text-xl">{query.siteName}</h3>
            </div>
          </body>
        </>
      );
    },
  },
});
