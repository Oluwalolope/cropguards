import { useContext, useRef, useState } from "react";
import currencyFormatter from "../util/formatter";
import CartContext from "../store/cart-context";
import MOCK_PRODUCTS from "../lib/product-data";
import CheckOutItem from "./CheckOut/CheckOutItem";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [accountNumber, setAccountNumberChange] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const cartCtx = useContext(CartContext);

  const bankTransferAccountNumberRef = useRef<HTMLParagraphElement | null>(
    null
  );

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Remove all non-digit characters
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 10 digits
    value = value.slice(0, 10);

    setAccountNumberChange(value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digit characters
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 16 digits
    value = value.slice(0, 16);

    // Add a space after every 4 digits
    value = value.replace(/(.{4})/g, "$1 ").trim();

    setCardNumber(value);
  };

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-digits

    // Limit to 4 digits total (MMYY)
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    // Add slash after 2 digits (MM/YY)
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpirationDate(value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digit characters
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 3 digits
    value = value.slice(0, 3);

    setCvv(value);
  };

  const subTotalPrice = cartCtx.cartItems.reduce(
    (calculatedSubTotalPrice, item) => {
      const cartItemPrice = MOCK_PRODUCTS.filter(
        (product) => product.id === item.id
      )[0].price;

      return calculatedSubTotalPrice + item.quantity * cartItemPrice;
    },
    0
  );

  const valueAddedTax = subTotalPrice * 0.0025; // fixed shipping cost

  const totalPrice = subTotalPrice + valueAddedTax;

  const copyToClipBoard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-background-main">
      <main className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-[138px]">
        <section className="flex flex-col-reverse gap-y-5 w-full h-full">
          <div className="flex-1 mx-auto md:mx-0 pt-[75px] md:pe-[18px]">
            <div className="md:p-12 ps-0 flex flex-col gap-9 justify-between">
              <h2 className="font-inter font-medium text-[#000000] text-[28px] leading-8 border-b border-[#DEE2E6] pb-3">
                Payment
              </h2>
              <div>
                <h2 className="font-inter font-medium text-[#000000] text-[20px] leading-8 pb-3">
                  Pay with:
                </h2>
                <div className="flex gap-3 flex-wrap">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="paymentMethod"
                      value="card"
                      defaultChecked={paymentMethod === "card"}
                      onClick={() => setPaymentMethod("card")}
                      className="me-2"
                    />
                    Card
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="paymentMethod"
                      value="bank"
                      defaultChecked={paymentMethod === "bank"}
                      onClick={() => setPaymentMethod("bank")}
                      className="me-2"
                    />
                    Bank
                  </label>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="paymentMethod"
                      value="transfer"
                      defaultChecked={paymentMethod === "transfer"}
                      onClick={() => setPaymentMethod("transfer")}
                      className="me-2"
                    />
                    Transfer
                  </label>
                </div>
              </div>

              {paymentMethod === "card" && (
                <div>
                  <form>
                    <div className="flex flex-col flex-1 my-8">
                      <label
                        htmlFor="cardNumber"
                        className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        inputMode="numeric"
                        id="cardNumber"
                        name="cardNumber"
                        className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white"
                        placeholder="1234 5678 9101 1121"
                        required
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                      <div className="flex flex-col flex-1">
                        <label
                          htmlFor="expirationDate"
                          className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3"
                        >
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          value={expirationDate}
                          onChange={handleExpirationDateChange}
                          inputMode="numeric"
                          id="expirationDate"
                          name="expirationDate"
                          className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <label
                          htmlFor="cvv"
                          className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3"
                        >
                          CVV
                        </label>
                        <input
                          type="number"
                          value={cvv}
                          onChange={handleCvvChange}
                          minLength={3}
                          maxLength={3}
                          id="cvv"
                          name="cvv"
                          className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bg-black hover:bg-black/70 transition-all duration-300 cursor-pointer w-full rounded-md py-5 font-inter font-bold text-white text-lg text-center mt-[97px] mb-9"
                    >
                      Pay {currencyFormatter.format(totalPrice)}
                    </button>
                    <p className="font-inter font-normal text-[#ACACAC] text-[14px]  leading-[22px]">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </form>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div>
                  <select
                    name="bank"
                    id="bank"
                    className="cursor-pointer px-3 py-2 flex-1 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary w-full bg-white"
                  >
                    <option defaultValue="" disabled hidden>
                      Choose your bank
                    </option>
                    <option value="access_bank">Access Bank</option>
                    <option value="united_bank_for_africa">
                      United Bank for Africa (UBA)
                    </option>
                    <option value="keystone_bank">Keystone Bank</option>
                    <option value="sterling_bank">Sterling Bank</option>
                    <option value="zenith_bank">Zenith Bank</option>
                    <option value="union_bank">Union Bank</option>
                    <option value="kuda_microfinance_bank">
                      Kuda Microfinamce Bank
                    </option>
                    <option value="first_bank">First Bank</option>
                  </select>
                  <div className="flex flex-col flex-1 mt-8">
                    <label
                      htmlFor="bankAccountNumber"
                      className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3"
                    >
                      Enter Your Bank Account Number
                    </label>
                    <input
                      type="number"
                      minLength={10}
                      maxLength={10}
                      value={accountNumber}
                      onChange={handleAccountNumberChange}
                      inputMode="numeric"
                      placeholder="0123456789"
                      id="bankAccountNumber"
                      name="bankAccountNumber"
                      className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white"
                      required
                    />
                  </div>

                  <button className="bg-black hover:bg-black/70 transition-all duration-300 cursor-pointer w-full rounded-md py-5 font-inter font-bold text-white text-lg text-center mt-[97px] mb-9">
                    Pay {currencyFormatter.format(totalPrice)}
                  </button>
                  <p className="font-inter font-normal text-[#ACACAC] text-[14px]  leading-[22px]">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
              )}

              {paymentMethod === "transfer" && (
                <div className="flex flex-col items-center justify-around gap-y-6">
                  <p className="font-inter font-normal text-[#ACACAC] text-[14px] text-center leading-8">
                    Transfer {currencyFormatter.format(totalPrice)} to:
                  </p>

                  <div>
                    <p className="font-inter font-bold text-[#000000] text-lg text-center leading-8">
                      Fake Bank
                    </p>
                    <div className="flex flex-row items-center gap-1">
                      <p
                        className="font-inter font-bold text-[#000000] text-xl text-center leading-8"
                        ref={bankTransferAccountNumberRef}
                      >
                        0123456781
                      </p>

                      <button
                        onClick={() =>
                          copyToClipBoard(
                            bankTransferAccountNumberRef.current!.innerText
                          )
                        }
                        className="cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button className="bg-black hover:bg-black/70 transition-all duration-300 cursor-pointer w-full rounded-md py-5 font-inter font-bold text-white text-lg text-center mt-[97px]">
                    Confirm Payment
                  </button>
                  <p className="font-inter font-normal text-[#ACACAC] text-[14px]  leading-[22px]">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 md:ps-[18px] md:pt-[75px]">
            <div className="md:p-12 pe-0 flex flex-col gap-9 justify-between">
              <h2 className="font-inter font-medium text-[#000000] text-[28px] leading-8 border-b border-[#DEE2E6] pb-3">
                Order Summary
              </h2>

              <div className="space-y-2 max-h-[250px] overflow-y-auto">
                {cartCtx.cartItems.map((cartItem) => (
                  <CheckOutItem key={cartItem.id} {...cartItem} />
                ))}
              </div>

              <div className="mt-8 pt-4 border-y border-[#DEE2E6] w-full space-y-3">
                <div className="flex flex-row items-center justify-between gap-4">
                  <p className="font-inter font-medium text-[#000000] text-[16px] leading-8">
                    Subtotal
                  </p>
                  <p className="font-inter font-medium text-[#000000] text-[16px] leading-8">
                    {currencyFormatter.format(subTotalPrice)}
                  </p>
                </div>

              </div>

              <div className="flex flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-inter font-medium text-[#000000] text-[16px] leading-8">
                    Total
                  </p>
                  <p className="font-inter font-normal text-[#ACACAC] text-[12px] leading-8">
                    Including {currencyFormatter.format(valueAddedTax)} in taxes
                  </p>
                </div>
                <p className="font-inter font-medium text-[#000000] text-2xl leading-8">
                  {currencyFormatter.format(totalPrice)}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckOut;