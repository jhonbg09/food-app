
import Link from "next/link"

type AdminRoutesProps= {
    link: {
        url: string;
        text: string;
        blank: boolean;
    }
}

export default function AdminRoute({link}: AdminRoutesProps) {
  return (
    <Link className={`font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b`} href={link.url}>
        {link.text}
    </Link>
  )
}
