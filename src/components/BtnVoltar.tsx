import { Link } from "react-router-dom";

interface BtnVoltarProps {
    className: string,
    to: string
}

export const BtnVoltar = ({ className, to }: BtnVoltarProps) => {
    return (
        <Link
            className={className}
            to={to}
        >
            {"<"}
        </Link>
    );
}