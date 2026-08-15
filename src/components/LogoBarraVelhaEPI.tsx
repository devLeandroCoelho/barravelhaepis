import Image from 'next/image';

export default function LogoBarraVelhaEPI() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-[#E85D04] rounded-lg flex items-center justify-center text-white font-bold text-xl">
        BV
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">Barra Velha EPIs</span>
        <span className="text-xs text-gray-300 leading-tight">Distribuidora de EPI</span>
      </div>
    </div>
  );
}
