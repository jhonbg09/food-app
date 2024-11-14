import OrderSiderbar from "@/components/order/OrderSiderbar";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <OrderSiderbar />

        <main className="md:flex-1 md:h-screen md:overflow-scroll p-5">{children}</main>

        <OrderSummary />
      </div>
    </>
  );
}
