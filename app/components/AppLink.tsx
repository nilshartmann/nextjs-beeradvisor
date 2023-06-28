import Link from "next/link";

type Args = Parameters<typeof Link>[0];

// By default 'prefetch' is for demo purposes disabled.
//
export default function AppLink(p: Args) {
  return <Link prefetch={false} {...p} />;
}
