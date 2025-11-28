import GrowthBreakdown from "./StatModalDetails/GrowthBreakdown";
import OrderBreakdown from "./StatModalDetails/OrderBreakdown";
import ProductBreakdown from "./StatModalDetails/ProductBreakdown";
import RevenueBreakdown from "./StatModalDetails/RevenueBreakdown";
import Modal from "./UI/Modal";

type StatModalProps = {
    selectedStat: string | null,
    handleSelectedStat: (selectedStat: string | null) => void
}

const StatModal = ({ selectedStat, handleSelectedStat }: StatModalProps) => {


  return (
    <Modal
      open={selectedStat !== null}
      onClose={() => handleSelectedStat(null)}
    >
      <div className="sm:max-w-[500px]">
        <header>
          <h4 className="font-medium pb-2">{selectedStat}</h4>
          <p>Detailed information about your {selectedStat?.toLowerCase()}</p>
        </header>
        <div className="mt-4">
          {selectedStat === 'Total Products' && <ProductBreakdown />}
          {selectedStat === 'Total Revenue' && <RevenueBreakdown />}
          {selectedStat === 'Orders Today' && <OrderBreakdown />}
          {selectedStat === 'Growth' && <GrowthBreakdown />}
        </div>
      </div>
    </Modal>
  );
};

export default StatModal;
