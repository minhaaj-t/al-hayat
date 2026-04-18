import { ScrollAnimateScope } from "@/components/ScrollAnimateScope";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ScrollAnimateScope className="page-transition">{children}</ScrollAnimateScope>
  );
}
