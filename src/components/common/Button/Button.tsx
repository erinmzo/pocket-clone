interface ButtonProps {
  content: string;
  bgColor?: string;
  textColor: string;
  outlineColor?: string;
}

function Button({ content, bgColor, textColor, outlineColor, ...props }: ButtonProps) {
  const outline = `border bg-white ${outlineColor}`;
  return (
    <button className={`rounded-lg py-2 px-3 text-[14px] ${bgColor} ${textColor} ${outline}`} {...props}>
      {content}
    </button>
  );
}

export default Button;
