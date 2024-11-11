import Image from "next/image";

function Partner() {
  return (
    <div className="md:-mt-[300px]">
      <h5 className="font-bold">As featured in</h5>
      <div className="mt-8 max-w-xl flex flex-wrap gap-8 items-center">
        <span>
          <Image src="/forbes.svg" alt="포브스" width={82} height={32} />
        </span>
        <span>
          <Image src="/techcrunch.svg" alt="techcrunch" width={181} height={32} />
        </span>
        <span>
          <Image src="/wired.svg" alt="wired" width={121} height={32} />
        </span>
        <span>
          <Image src="/cnn.svg" alt="cnn" width={68} height={32} />
        </span>
        <span>
          <Image src="/bbc.svg" alt="bbc" width={83} height={32} />
        </span>
        <span>
          <Image src="/cbs.svg" alt="cbs" width={101} height={32} />
        </span>
        <span>
          <Image src="/fastcompany.svg" alt="fastcompany" width={124} height={32} />
        </span>
        <span>
          <Image src="/huffpost.svg" alt="huffpost" width={142} height={32} />
        </span>
      </div>
    </div>
  );
}

export default Partner;
