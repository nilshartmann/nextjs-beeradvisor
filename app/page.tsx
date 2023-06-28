import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome!</h1>

      <p>
        Before you enter, please confirm that you are old enough to drink beer?
      </p>

      <Link href={"/beers"}>Yes, i am</Link>
    </div>
  );
}
