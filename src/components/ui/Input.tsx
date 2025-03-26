import PropTypes from "prop-types"

interface InputProps {
  id?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}

export default function Input({ id, type, placeholder, autoComplete, className, onChange }: InputProps) {
  return (
      <input
        id={id}
        className={`text-body p-3 outline-none border-[1px] rounded-[3px] ${className} `}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete} />
  )
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  addClassName: PropTypes.string,
  onchange: PropTypes.func,
}