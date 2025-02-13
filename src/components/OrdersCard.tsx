import formatDate from "@/services/utils/formatDate";
import Button from "./Button";
import ContentContainer from "./Container";
import Text from "./Text";

interface Props {
  name: string;
  orderId: string;
  price: number;
  weight: string;
  date: string;
  address: string;
  status?: string;
  point?: number;
  btnTitle: string;
  onClick: () => void
}

const OrderCard: React.FC<Props> = ({
  name,
  orderId,
  price,
  weight,
  date,
  address,
  status = "",
  btnTitle,
  point,
  onClick
}) => {
  const Status = (status: string | number) => {
    let color;
    if (status === "Pending") {
      color = "text-[#FF6F00]";
      status = "Pending Approved";
    } else if (status === "Completed") {
      color = "text-[#217C70]";
      status = `+ ${point} Points Earned!`
    } else if (status === "Cancelled") {
      color = "text-red-600";
    } else {
      color = "text-[#217C70]";
    }

    return (
      <Text size="xs" variant="h4" className={`${color}`}>
        {status}
      </Text>
    );
  };

  return (
    <ContentContainer>
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-[#E7E3C6] px-4 py-2 text-center">
          {name}
        </div>
        <div className="flex flex-col">
          <Text size="xs" className="text-[#979797]">
            Order ID: {orderId}
          </Text>
          {Status(status)}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Text size="xs" variant="h3">
            Est. Weight
          </Text>
          <Text size="xs" variant="h3" className="text-[#424141]">
            {weight}
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <Text size="xs" variant="h3">
            Est. Income
          </Text>
          <Text size="xs" variant="h3" className="text-[#424141]">
            NGN {Number(price).toLocaleString()}
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <Text size="xs" variant="h3">
            Pick Up date
          </Text>
          <Text size="xs" variant="h3" className="text-[#424141]">
            {formatDate(date)}
          </Text>
        </div>
        <div className="flex items-center justify-between">
          <Text size="xs" variant="h3">
            Pick up Address
          </Text>
          <Text size="xs" variant="h3" className="text-[#424141]">
            {address}
          </Text>
        </div>
      </div>

      <Button title={btnTitle} variant="tertiary" className="rounded-[5px] mt-5" fullWidth onClick={onClick} />
    </ContentContainer>
  );
};

export default OrderCard;
