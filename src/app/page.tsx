import QRCode from "@/components/qrcode";

export default function Home() {
  return (
    <main className="text-lg">
      <QRCode url="https://yahoo.co.jp/" />
    </main>
  )
}