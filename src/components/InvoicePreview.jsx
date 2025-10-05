import { forwardRef } from "react";
import { templateComponents } from "../utils/invoiceTemplates.js";
import { formatInvoiceData } from "../utils/formatInvoiceData.js";
const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
  const formattedData = formatInvoiceData(invoiceData);

  const SelectedTemplate =
    templateComponents[template] || templateComponents["template1"];

  return (
    <div
      ref={ref}
      className="invoice-preview container px-2 py-3 overflow-x-auto"
    >
      <SelectedTemplate data={formattedData} />
    </div>
  );
});

export default InvoicePreview;
