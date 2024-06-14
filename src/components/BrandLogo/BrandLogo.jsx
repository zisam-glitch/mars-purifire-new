import { hasClassProps } from "@utils/helpers";

function BrandLogoLight({ className }) {
  return (
    <>
      <img
        className={`my-0 logo-dark${hasClassProps(className)}`}
        src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718185947/download_jglamv.png"
        alt="brand logo"
      />
    </>
  );
}
function BrandLogoDark({ className, logoUrl = "https://res.cloudinary.com/db1i46uiv/image/upload/v1718185947/download_jglamv.png" }) {
  return (
    <>
      <img
        className={`my-0 logo-light${hasClassProps(className)}`}
        src={logoUrl}
        alt="brand logo"
      />
    </>
  );
}
export default function BrandLogo({ className, type, logoUrl }) {
  let logoSettings = {
    className,
    type,
    logoUrl,
  };
  if (type === "white") {
    return <BrandLogoLight {...logoSettings} />;
  } else {
    return <BrandLogoDark {...logoSettings} />;
  }
}
