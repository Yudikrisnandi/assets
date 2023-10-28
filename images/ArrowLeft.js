export default function ArrowLeft({
  size = 'inherit',
  color = 'currentColor',
  style = {},
  ...rest
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="none" 
      viewBox="0 0 20 20"
      style={{
        ...style,
        width: '1em',
        height: '1em',
        fill: color,
        fontSize: size,
      }}
      {...rest}
    >
      <path 
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
        clip-rule="evenodd" 
        fill-rule="evenodd"
      />
    </svg>
  );
}
