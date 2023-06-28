import LoadingIndicator from "@/app/components/LoadingIndicator";

export default function BeerPageLoading() {
  return (
    <LoadingIndicator placeholder={"🍺"}>
      Loading... please wait
    </LoadingIndicator>
  );
}
