import Text from "./Text";

interface Props {
    date: string;
    title: string;
    read?: boolean;
}

const Notifications: React.FC<Props> = ({date, title, read="false"}) => {

    return (
        <div className="w-full sm:p-5 p-3 rounded-2xl text-left bg-white shadow-lg">
            <Text customSize="11px" className="text-[#979797]">{date}</Text>
            <Text size="xs" variant={!read ? "h3" : undefined}>{title}</Text>
        </div>
    )
}

export default Notifications;