interface InputProps {
    className: string,
    type: string,
    placeholder: string,
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ className, type, placeholder, value, onChange }: InputProps) => {
    return (
        <input
            value={value}
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}