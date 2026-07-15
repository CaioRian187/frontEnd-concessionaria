interface ButtonProps {
    className: string,
    type: string,
    text: string,
    onClick: () => void;
}

export const Button = ({ className, text, onClick }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}