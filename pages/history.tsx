import AppHeader from "../components/AppHeader";
import MsgCard from "../components/MsgCard";
import RootLayout from "./layout";
import OtherLayout from "./layout2";

export default function History() {
  return (
    <RootLayout>
      <div className="w-full flex flex-col py-16 px-10 md:px-12">
        <AppHeader name="History" />

        <section className="mt-10">
          <div className="flex items-center justify-center gap-8">
            <button className="bg-yellow-500 py-3 shadow rounded-lg w-32">
              <span className="text-xs">Message log</span>
            </button>
            <button className="bg-white py-3 border shadow rounded-lg w-32">
              <span className="text-xs">Transaction</span>
            </button>
          </div>
          <div className="mt-16">
            {[1, 2, 3, 4, 5].map((msg) => (
              <MsgCard key={msg} message={""} />
            ))}
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
