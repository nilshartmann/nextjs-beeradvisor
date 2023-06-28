"use client";
import { useRouter, useSearchParams } from "next/navigation";

export type OrderBy = "name_desc" | "name_asc";

export default function useBeerAdvisorSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentOrderBy = (searchParams?.get("order_by") ||
    "name_desc") as OrderBy;

  const updateOrderBy = (newOrderBy: OrderBy) => {
    const params = new URLSearchParams({ order_by: newOrderBy });
    router.push(`?${params.toString()}`);
  };

  return { currentOrderBy, updateOrderBy } as const;
}
