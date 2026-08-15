import Image from 'next/image';

export default function LogoBarraVelhaEPI() {
  return (
    <a href="/" className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md overflow-hidden">
        <Image
          src="/logo-barravelhaepis.png"
          alt="Barra Velha EPIs"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">Barra Velha EPIs</span>
        <span className="text-xs text-gray-300 leading-tight">Distribuidora de EPI</span>
      </div>
    </a>
  );
}
