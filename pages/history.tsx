import { useState } from "react";
import AppHeader from "../components/AppHeader";
import MsgCard from "../components/MsgCard";
import TransactionCard from "../components/Transactions";
import RootLayout from "./layout";
import OtherLayout from "./layout2";

export default function History() {
  const [data, setData] = useState<number>(1);
  let message = 1;
  let trans = 2;
  const messages = [
    {
      status: "sent",
      message: "What is happening here",
      recipient: { name: "charles", phone: "96545" },
      username: "adam",
      sent_date: "May 5",
    },
    {
      status: "scheduled",
      message: "To be sent",
      recipient: { name: "joy", phone: "40645" },
      username: "seth",
      sent_date: "May 7",
    },
    {
      status: "failed",
      message: "Not sent",
      recipient: { name: "lizzy", phone: "0000" },
      username: "snake",
      sent_date: "May 25",
    },
    {
      status: "draft",
      message: "To be continued",
      recipient: { name: "vik", phone: "8578905" },
      username: "adam",
      sent_date: "May 5",
    },
  ];
  const transactions = [
    {
      status: "points top up",
      message: "Your top up was successful",
      subject: "Credit Notification",
      username: "adam",
      date_initialized: "May 3rd",
    },
    {
      status: "points top up",
      message: "Your account was debited 4 points for this message",
      subject: "Debit Notification",
      username: "adam",
      date_initialized: "May 3rd",
    },
    {
      status: "points top up",
      message: "Your referals have been confirmed",
      subject: "Referal Bonus",
      username: "adam",
      date_initialized: "May 3rd",
    },
    {
      status: "points top up",
      message: "Your account was debited 20 points for 2 message",
      subject: "Debit Notification",
      username: "adam",
      date_initialized: "May 3rd",
    },
  ];
  const changeView = (view: number) => {
    switch (view) {
      case 1:
        setData(message);
        break;
      case 2:
        setData(trans);
        break;
      default:
        setData(message);
    }
  };
  return (
    <RootLayout>
      <div className="w-full flex flex-col py-16 px-10 md:px-12">
        <AppHeader name="History" />

        <section className="mt-10">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => changeView(1)}
              className={`${
                data === 1 ? "bg-yellow-500 text-white" : "bg-white"
              } py-3 shadow rounded-lg w-32`}
            >
              <span className="text-xs">Message log</span>
            </button>
            <button
              onClick={() => changeView(2)}
              className={`${
                data === 2 ? "bg-yellow-500 text-white" : "bg-white"
              }  py-3 border shadow rounded-lg w-32`}
            >
              <span className="text-xs">Transaction</span>
            </button>
          </div>
          <div className="mt-16">
            {data}
            {data === 1
              ? messages.map((msg, i) => <MsgCard key={i} message={msg} />)
              : transactions.map((trans, i) => (
                  <TransactionCard key={i} transactions={trans} />
                ))}
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
