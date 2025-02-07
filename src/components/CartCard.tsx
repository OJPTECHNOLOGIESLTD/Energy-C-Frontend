import Button from "@/components/Button"
import ContentContainer from "@/components/Container"
import Text from "@/components/Text";
import formatDate from "@/utils/formatDate/formatDate";

interface Props {
    itemTitle: string;
    key?: any;
    onEdit?: () => void;
    onRemove?: () => void;
    weight: string;
    income: string | number;
    date: string | Date;
}

const CartCard: React.FC<Props> = ({
    key,
    itemTitle,
    onEdit,
    onRemove,
    weight,
    income,
    date,
}) => {

    return (
        <ContentContainer key={key} className="shadow-lg" bgColor="bg-[#217C70]" textColor="text-white">
            <div className="flex justify-between mb-4">
                <Button title={itemTitle} variant="secondary" size="xs" className="normal-case" />
                <div className="flex gap-3">
                    <div onClick={onEdit}><Text variant='h2' size='xs' className="text-[#F5F5F5]">Edit</Text></div>
                    <div onClick={onRemove}><Text variant='h2' size='xs' className="text-[#F5F5F5]">Remove</Text></div>
                </div>
            </div>
            <div className="flex justify-between">
                <div><Text variant='h2' size='xs'>Weight</Text></div>
                <div><Text variant='h2' size='xs' className="text-[#D9D9D9]">{weight}kg</Text></div>
            </div>
            <div className="flex justify-between">
                <div><Text variant='h2' size='xs'>Est. Income</Text></div>
                <div><Text variant='h2' size='xs' className="text-[#D9D9D9]">NGN {income}</Text></div>
            </div>
            <div className="flex justify-between">
                <div><Text variant='h2' size='xs'>Pick Up Date</Text></div>
                <div><Text variant='h2' size='xs' className="text-[#D9D9D9]">{formatDate(date)}</Text></div>
            </div>

        </ContentContainer>
    )
}

export default CartCard