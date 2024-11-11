import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return <div className="container max-w-[1280px] mx-auto px-6">{children}</div>;
}

export default Container;
