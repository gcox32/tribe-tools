import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src="/assets/images/itf-header.png"
      padding={tokens.space.medium}
    />
  );
}
