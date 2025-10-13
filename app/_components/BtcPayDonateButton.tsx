export default function BtcPayDonateButton() {
  return (
    <form
      method="POST"
      action="https://btcpay-ivar.xyz/api/v1/invoices"
      className="inline-flex flex-col items-center justify-center"
    >
      <input
        type="hidden"
        name="storeId"
        value="D47D11fNXXxHMWb7DjsRCgdktMBHPnPcjpQ3FS2ZN7eF"
      />
      <input
        type="hidden"
        name="checkoutDesc"
        value="Support the Bitcoin Mini Conference Developer"
      />
      <input type="hidden" name="currency" value="SATS" />
      <button
        type="submit"
        name="submit"
        className="inline-flex items-center justify-center gap-2 min-w-[168px] min-h-[46px] rounded-md border-0 bg-[#0f3b21] hover:bg-[#0d2d1a] text-white text-sm font-medium cursor-pointer transition-colors duration-200"
        title="Support the Bitcoin Mini Conference Developer with Bitcoin"
      >
        <span>Donate with</span>
        <img
          src="https://btcpay-ivar.xyz/img/paybutton/logo.svg"
          className="h-8 w-auto"
          alt="BTCPay Server"
        />
      </button>
    </form>
  );
}
