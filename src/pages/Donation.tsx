import { useState } from "react";
import { Smartphone, CheckCircle } from "lucide-react";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const upiId = "DARUL5859@SBI";
  const name = "Darul Uloom Jamia Razvia";

  const presetAmounts: number[] = [500, 1000, 2500, 5000, 10000];

  const finalAmount: number | null =
    selectedAmount ?? (customAmount ? Number(customAmount) : null);

  const upiLink: string | null =
    finalAmount !== null
      ? `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
          name
        )}&am=${finalAmount}&cu=INR&tn=Donation%20to%20Jamia%20Razvia`
      : null;

  const qrCode: string | null =
    upiLink !== null
      ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
          upiLink
        )}`
      : null;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-emerald-deep py-16 text-center text-white">
        <p className="font-urdu text-gold-light text-xl mb-2">عطیہ و خیرات</p>
        <h1 className="font-serif text-4xl font-bold mb-4">Make a Donation</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Your contribution supports education and institutional development.
        </p>
      </div>

      {/* Donation Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-emerald-deep mb-6">
              Select Donation Amount
            </h2>

            {/* Preset Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-lg border-2 font-semibold transition ${
                    selectedAmount === amt
                      ? "bg-emerald-deep text-white border-emerald-deep"
                      : "border-gray-300 hover:border-emerald-deep"
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full border p-3 rounded-lg mb-6 focus:ring-2 focus:ring-emerald-deep outline-none"
            />

            {/* QR + Payment */}
            {finalAmount !== null && qrCode !== null && upiLink !== null && (
              <div className="text-center mt-8">
                <div className="bg-emerald-light/20 p-6 rounded-xl mb-6">
                  <h3 className="text-lg font-semibold text-emerald-deep mb-2">
                    Scan & Pay ₹{finalAmount}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    Use any UPI app to scan the QR code below.
                  </p>

                  <img
                    src={qrCode}
                    alt="UPI QR Code"
                    className="mx-auto w-56 h-56"
                  />

                  <p className="mt-4 text-sm text-gray-500">
                    UPI ID: <span className="font-semibold">{upiId}</span>
                  </p>
                </div>

                <a
                  href={upiLink}
                  className="inline-flex items-center gap-2 bg-emerald-deep text-white px-6 py-3 rounded-full hover:bg-gold-primary transition"
                >
                  <Smartphone className="w-5 h-5" />
                  Pay ₹{finalAmount} via UPI App
                </a>

                <p className="text-xs text-gray-500 mt-4">
                  After payment, please share the transaction screenshot for confirmation.
                </p>
              </div>
            )}
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
            <h3 className="text-xl font-bold text-emerald-deep mb-4">
              Bank Transfer Details
            </h3>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Account Name</span>
                <span className="font-semibold">
                  Darul Uloom Jamia Razvia
                </span>
              </div>

              <div className="flex justify-between">
                <span>Account Number</span>
                <span className="font-semibold">36048635859</span>
              </div>

              <div className="flex justify-between">
                <span>IFSC Code</span>
                <span className="font-semibold">SBIN0011168</span>
              </div>

              <div className="flex justify-between">
                <span>Bank Name</span>
                <span className="font-semibold">
                  State Bank of India
                </span>
              </div>
            </div>
          </div>

          {/* Tax Notice */}
          <div className="bg-emerald-deep text-white rounded-xl p-6 mt-8 flex gap-4 items-center">
            <CheckCircle className="w-8 h-8 text-gold-light" />
            <p className="text-sm">
              Donations are eligible for tax exemption under Section 80G.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;