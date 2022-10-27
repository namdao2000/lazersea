import {
  AuctionListing,
  DirectListing,
} from "@thirdweb-dev/sdk/dist/declarations/src/evm/types/marketplace";
import Image from "next/image";

export default function NFTCard({
  nft,
}: {
  nft: AuctionListing | DirectListing;
}) {
  return (
    <div
      className={`relative flex cursor-pointer 
      flex-col overflow-hidden rounded-lg bg-white shadow-lg 
      transition-all duration-300 hover:shadow-2xl dark:bg-[#333333]`}
    >
      <Image
        className={
          "h-3/4 rounded-lg transition duration-300 ease-in-out hover:scale-105"
        }
        src={nft.asset.image as string}
        width={244}
        height={244}
        objectFit={"cover"}
      />
      <div className={`flex h-1/4 flex-col gap-y-3 p-3`}>
        <div className={`text-sm font-semibold`}>{nft.asset.name}</div>

        <div className={``}>
          <div className={`text-xs font-semibold`}>Price</div>
          <div className={`flex items-center space-x-1`}>
            <Image src={`/matic-logo.png`} height={16} width={16} />
            <p className={`text-base font-semibold`}>
              {nft.buyoutCurrencyValuePerToken?.displayValue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}