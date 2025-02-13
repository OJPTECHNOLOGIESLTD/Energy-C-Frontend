interface Props {
    title: string;
    icon: any;
    stat: string;
    bg?: string;
    measurement?: string;
    onClick?: () => void
}

const StatsCard: React.FC<Props> = ({title, icon, stat, bg="bg-white", measurement, onClick}) => {
    return (
        <div className={`p-3 flex flex-col shadow-md justify-center items-center text-center rounded-[10px] min-w-[142.59px] ${bg} text-black cursor-pointer`} onClick={onClick}>
            <p className="font-semibold text-[10px]">{title}</p>
            {icon}
            <p className="font-bold text-xl">{stat} <span>{measurement}</span></p>
        </div>
    )
};

export default StatsCard