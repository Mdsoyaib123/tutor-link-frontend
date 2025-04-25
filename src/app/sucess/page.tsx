// pages/success.js

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { useCreateOrderMutation } from "../redux/features/orders/Order.api"; // Adjust path as needed

const Success = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  //   const [createOrder, { data, error }] = useCreateOrderMutation();
  const { session_id: sessionId } = router.query;

  const orderPlacedRef = useRef(false);

  //   useEffect(() => {
  //     if (sessionId && !orderPlacedRef.current) {
  //       orderPlacedRef.current = true;

  //       fetch(`http://localhost:5000/checkout-session/${sessionId}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("Checkout session data:", data);
  //           createOrder({
  //             user: data.userId,
  //             products: [
  //               {
  //                 productId: data.productId,
  //                 quantity: parseInt(data.productQuantity),
  //                 title: "test",
  //                 author: "tesd",
  //               },
  //             ],
  //             totalPrice: parseFloat(data.productPrice),
  //             status: "Paid",
  //             transaction: {
  //               id: sessionId,
  //               transactionStatus: data.paymentStatus,
  //               method: "card",
  //               date_time: new Date().toISOString(),
  //             },
  //             userEmail: data.userEmail,
  //           });
  //         })
  //         .catch((err) => console.error("Error fetching payment details:", err));
  //     }
  //   }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful! 🎉
        </h1>
        <p className="mt-2 text-gray-700">Thank you for your purchase.</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
