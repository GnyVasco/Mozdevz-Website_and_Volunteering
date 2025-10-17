import { Team } from "@/types/models/team";
import Image from "next/image";

export const TeamCard = ({
    teamMember: { asset, role },
}: {
    teamMember: Team;
}) => {
    return (
        <div className="p-3 sm:p-4 pb-0 rounded-[18px] bg-background-dark border border-gray-border w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px]">
            <Image
                src={asset.url}
                alt={asset.alt}
                width={asset!.metadata!.width}
                height={asset!.metadata!.height}
                className="rounded-[5px] w-full h-auto"
            />
            <div className="flex flex-col pt-[10px] sm:pt-[13px] p-[14px] sm:p-[18px] pl-[8px] sm:pl-[9px] text-left">
                <span className="text-secondary font-medium text-xl sm:text-2xl">
                    {asset.name}
                </span>
                <span className="text-gray-80 font-mono text-sm sm:text-base">{role}</span>
            </div>
        </div>
    );
};
