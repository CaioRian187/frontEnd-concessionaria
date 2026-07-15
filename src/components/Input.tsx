interface InputProps {
    className: string,
    type: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ className, type, placeholder, onChange }: InputProps) => {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}