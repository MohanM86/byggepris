export function formatNumber(n: number): string {
  return new Intl.NumberFormat("nb-NO").format(n);
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("nb-NO", { style: "decimal" }).format(n) + " kr";
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
